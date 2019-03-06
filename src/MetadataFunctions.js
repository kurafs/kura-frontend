import {grpc} from 'grpc-web-client'
import {MetadataService} from './proto/metadata_pb_service'
import Metadata from './proto/metadata_pb'
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
        const metadata = new Metadata.FileMetadata();
        putRequest.setFile(ciphertext);
        putRequest.setKey(path);
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
  const directoryKeys = new Metadata.GetDirectoryKeysRequest();
  grpc.unary(MetadataService.GetDirectoryKeys, {
    request: directoryKeys,
    host,
    onEnd: (res) => {
      const { status, message} = res;

      if (status === grpc.Code.OK && message) {
        callback(message.toObject().keysList);
      }
    }
  });
}

export async function getMetadata(key, callback) {
  const metadata = new Metadata.GetMetadataRequest();
  metadata.setKey(key);
  grpc.unary(MetadataService.GetMetadata, {
    request: metadata,
    host,
    onEnd: res => {
      const { status, message} = res;

      if (status === grpc.Code.OK && message) {
        let obj = message.toObject();
        if (!obj.metadata.lastModified) {
          obj.metadata.lastModified = {seconds: 0};
        }
        callback(obj);
      }
    }
  });
}

export async function deleteFile(filepath, callback) {
  const deleteFileRequest = new Metadata.DeleteFileRequest();
  deleteFileRequest.setKey(filepath);
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
  getFileRequest.setKey(filepath);
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

export async function renameFile(oldPath, newPath, callback) {
  // const setMetadataRequest = new Metadata.SetMetadataRequest();
  // const newMetadata = new Metadata.FileMetadata();
  // newMetadata.set
  // setMetadataRequest.setKey(oldPath);
}