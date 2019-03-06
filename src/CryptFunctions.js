import {grpc} from 'grpc-web-client'
import {CryptService} from './proto/crypt_pb_service'
import Crypt from './proto/crypt_pb'

const host = "http://localhost:10870";
export async function encryptFile(array, callback) {
    const encryptionRequest = new Crypt.EncryptionRequest();
    encryptionRequest.setPlaintext(array);
    grpc.unary(CryptService.Encrypt, {
      request: encryptionRequest,
      host,
      onEnd: res => {
        const {status, message} = res;
        if (status === grpc.Code.OK && message) {
          callback(message.getCiphertext_asU8());
        }
      }
    });
}

export async function decryptFile(array, callback) {
  const decryptionRequest = new Crypt.DecryptionRequest();
  decryptionRequest.setCiphertext(array);
  grpc.unary(CryptService.Decrypt, {
    request: decryptionRequest,
    host,
    onEnd: res => {
      const {status, message} = res;
      if (status === grpc.Code.OK && message) {
        callback(message.getPlaintext_asU8());
      }
    }
  });
}