import {grpc} from 'grpc-web-client'
import {MetadataService} from './generated/metadata/metadata_pb_service'
import Metadata from './generated/metadata/metadata_pb'
import {encryptFile, decryptFile} from './CryptFunctions'

const host = window.localStorage.getItem("metadata") || "http://localhost:10670";
// const host = "http://10.33.143.179:10670"; // FRANZ
// const host = "http://10.35.135.225:10670"; // ARHAM
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
      encryptFile(array, (ciphertext, hashedPubKey, encryptedAesKey) => {
        const putRequest = new Metadata.PutFileRequest();
        const metadata = new Metadata.Metadata();
        const lastModified = new Metadata.Metadata.UnixTimestamp();
        const created = new Metadata.Metadata.UnixTimestamp();
        const accessor = new Metadata.Metadata.Accessor();
        accessor.setEncryptedKey(encryptedAesKey);
        accessor.setIdentityHash(hashedPubKey);
        lastModified.setSeconds(Math.floor(data.lastModified/1000));
        created.setSeconds(Math.floor(data.lastModified/1000));
        metadata.setLastModified(lastModified);
        metadata.setCreated(created);
        metadata.setSize(data.size);
        metadata.setPermissions(420);
        metadata.setAccessListList([accessor]);
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

export async function getDirectoryKeys(root, callback) {
  const directoryKeys = new Metadata.GetDirectoryEntriesRequest();
  directoryKeys.setPath(root);
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

export async function deleteFolder(filepath, callback) {
  const deleteFolderRequest = new Metadata.DeleteDirectoryRequest();
  deleteFolderRequest.setPath(filepath);
  grpc.unary(MetadataService.DeleteDirectory, {
    request: deleteFolderRequest,
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
      if (status === 8) {
        alert('File too big! (4MB max)')
      }
      if (status === grpc.Code.OK && message) {
        let ciphertext = message.getFile_asU8();
        if (ciphertext.length === 0) {
          alert('Cannot download empty files!');
        }
        decryptFile(ciphertext, message.getMetadata(), (plaintext) => {
          callback(plaintext);
        });
      }
    }
  });
}

export async function stream(filepath, callback) {
  const getFileRequest = new Metadata.GetFileRequest();
  getFileRequest.setPath(filepath);
  grpc.unary(MetadataService.GetFile, {
    request: getFileRequest,
    host,
    onEnd: res => {
      const { status, message} = res;
      if (status === grpc.Code.OK && message) {
        let ciphertext = message.getFile_asU8();
        decryptFile(ciphertext, message.getMetadata(), (plaintext) => {
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
  const lastModified = new Metadata.Metadata.UnixTimestamp();
  creation.setSeconds(Math.floor(Date.now()/1000));
  lastModified.setSeconds(Math.floor(Date.now()/1000));
  metadata.setIsDirectory(true);
  metadata.setCreated(creation);
  metadata.setLastModified(lastModified);
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

export async function renameFile(oldPath, newPath, callback) {
  const renameRequest = new Metadata.RenameRequest();
  renameRequest.setOldPath(oldPath);
  renameRequest.setNewPath(newPath);
  grpc.unary(MetadataService.Rename, {
    request: renameRequest,
    host,
    onEnd: res => {
      const { status, message} = res;
      if (status === grpc.Code.OK && message) {
        callback(message.toObject());
      }
    }
  });
}

