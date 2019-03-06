import {grpc} from 'grpc-web-client'
import {CryptService} from './proto/crypt_pb_service'
import Crypt from './proto/crypt_pb'

const host = "http://localhost:10870";
export async function encryptFile(data, callback) {
  let reader = new FileReader();
  let array;
  if (data.size > 4000000) {
    window.alert('File too big! (4MB max)');
    return;
  }
  reader.readAsArrayBuffer(data);
  reader.onloadend = function (evt) {
    if (evt.target.readyState === FileReader.DONE) {
      let arrayBuffer = evt.target.result;
      array = new Uint8Array(arrayBuffer);
      const encryptionRequest = new Crypt.EncryptionRequest();
      encryptionRequest.setPlaintext(array);
      grpc.unary(CryptService.Encrypt, {
        request: encryptionRequest,
        host,
        onEnd: res => {
          const {status, message} = res;
          if (status === grpc.Code.OK && message) {
            debugger;
            callback(message.toObject());
          }
        }
      });
    }
  }
}