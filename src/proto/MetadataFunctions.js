import {grpc} from 'grpc-web-client'
import {MetadataService} from './generated/metadata/metadata_pb_service'
import Metadata from './generated/metadata/metadata_pb'
import {encryptFile, decryptFile} from './CryptFunctions'

const host = "http://localhost:10670";
export async function uploadFile(data, path, callback, progress) {
  let reader = new FileReader();
  let array;
  if (data.size > 4000000) {
    window.alert('File too big! (4MB max)');
    return;
  }
  reader.readAsArrayBuffer(data);
  reader.onprogress = (data) => { progress(data) };
  reader.onloadend = function (evt) {
    if (evt.target.readyState === FileReader.DONE) {
      let arrayBuffer = evt.target.result;
      array = new Uint8Array(arrayBuffer);
      encryptFile(array, (ciphertext) => {
        const putRequest = new Metadata.PutFileRequest();
        const metadata = new Metadata.Metadata();
        const lastModified = new Metadata.Metadata.UnixTimestamp();
        lastModified.setSeconds(Math.floor(data.lastModified/1000));
        metadata.setLastModified(lastModified);
        metadata.setSize(data.size);
        putRequest.setFile(ciphertext);
        putRequest.setPath(path);
        putRequest.setMetadata(metadata);
        grpc.unary(MetadataService.PutFile, {
          request: putRequest,
          host,
          onEnd: res => {
            const { status, message} = res;
            if (status === grpc.Code.OK && message) {
              callback(path);
            }
          }});
      });
    }
  };
}

export async function getDirectoryKeys(callback) {
  const directoryKeys = new Metadata.GetDirectoryEntriesRequest();
  directoryKeys.setPath('kura-root');
  grpc.unary(MetadataService.GetDirectoryEntries, {
    request: directoryKeys,
    host,
    onEnd: (res) => {
      const { status, message} = res;

      if (status === grpc.Code.OK && message) {
        callback(message.toObject().entriesList);
      }
    }
  });
}

export async function getMetadata(key, callback) {
  const metadata = new Metadata.GetMetadataRequest();
  metadata.setPath(key);
  grpc.unary(MetadataService.GetMetadata, {
    request: metadata,
    host,
    onEnd: res => {
      const { status, message} = res;

      if (status === grpc.Code.OK && message) {
        let obj = message.toObject();
        callback(obj);
      }
    }
  });
}

export async function deleteFile(filepath, callback) {
  const deleteFileRequest = new Metadata.DeleteFileRequest();
  deleteFileRequest.setPath(filepath);
  grpc.unary(MetadataService.DeleteFile, {
    request: deleteFileRequest,
    host,
    onEnd: res => {
      const { status, message} = res;
      if (status === grpc.Code.OK && message) {
        callback(filepath);
      }
    }
  });
}

export async function getFile(filepath, callback) {
  const getFileRequest = new Metadata.GetFileRequest();
  getFileRequest.setPath(filepath);
  grpc.unary(MetadataService.GetFile, {
    request: getFileRequest,
    host,
    onEnd: res => {
      const { status, message} = res;
      if (status === grpc.Code.OK && message) {
        let ciphertext = message.getFile_asU8();
        decryptFile(ciphertext, (plaintext) => {
          callback(plaintext);
        });
      }
    }
  });
}

export async function createFolder(path, callback) {
  const createDirectoryRequest = new Metadata.CreateDirectoryRequest();
  const metadata = new Metadata.Metadata();
  const creation = new Metadata.Metadata.UnixTimestamp();
  creation.setSeconds(Math.floor(Date.now()/1000));

  metadata.setIsDirectory(true);
  metadata.setCreated(creation);
  createDirectoryRequest.setPath(path);
  createDirectoryRequest.setMetadata(metadata);
  grpc.unary(MetadataService.CreateDirectory, {
    request: createDirectoryRequest,
    host,
    onEnd: res => {
      const { status, message} = res;
      if (status === grpc.Code.OK && message) {
        callback(message.toObject());
      }
    }
  });
}