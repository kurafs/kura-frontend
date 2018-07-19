import {grpc} from 'grpc-web-client'
import {MetadataService} from './proto/metadata_pb_service'
import {PutFileRequest, GetDirectoryKeysRequest, DeleteFileRequest} from './proto/metadata_pb'

const host = "http://localhost:10671";
export async function uploadFile(file, root, callback) {
  let reader = new FileReader();
  let array;
  reader.readAsArrayBuffer(file);
  reader.onloadend = function (evt) {
    if (evt.target.readyState === FileReader.DONE) {
      let arrayBuffer = evt.target.result;
      array = new Uint8Array(arrayBuffer);
      const putRequest = new PutFileRequest();
      let fileName = root === '' ? file.name : root + file.name;
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
  const directoryKeys = new GetDirectoryKeysRequest();
  grpc.unary(MetadataService.GetDirectoryKeys, {
    request: directoryKeys,
    host,
    onEnd: res => {
      const { status, message} = res;

      if (status === grpc.Code.OK && message) {
        callback(message.toObject().keysList);
      }
    }
  });
}

export async function deleteFile(filepath, callback) {
  console.log(filepath);
  const deleteFileRequest = new DeleteFileRequest();
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