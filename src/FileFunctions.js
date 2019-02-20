import {grpc} from 'grpc-web-client'
import {MetadataService} from './proto/metadata_pb_service'
import Metadata from './proto/metadata_pb'

const host = "http://localhost:10670";
export async function uploadFile(file, root, callback) {
  let reader = new FileReader();
  let array;
  reader.readAsArrayBuffer(file);
  reader.onloadend = function (evt) {
    if (evt.target.readyState === FileReader.DONE) {
      let arrayBuffer = evt.target.result;
      array = new Uint8Array(arrayBuffer);
      const putRequest = new Metadata.PutFileRequest();
      let fileName = root + file.name;
      putRequest.setFile(array);
      putRequest.setKey(fileName);
      grpc.unary(MetadataService.PutFile, {
        request: putRequest,
        host,
        onEnd: res => {
          const { status, message} = res;

          if (status === grpc.Code.OK && message) {
            callback(fileName);
          }
        }});
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

export async function getTopLevelMetadata() {
  // let directory = {};
  // const promises = keysList.map(
  //   (key) =>
  //     getMetadata(key,
  //       (obj) => {directory[key] = {}})
  // );
  // await Promise.all(promises);
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
        console.log(message.toObject());
        callback(message.toObject());
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
        callback(message.getFile_asU8());
      }
    }
  });
}