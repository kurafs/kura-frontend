import {grpc} from 'grpc-web-client'
import {CryptService} from './generated/crypt/crypt_pb_service'
import Crypt from './generated/crypt/crypt_pb'
import { sha256 } from 'js-sha256';


const host = "http://localhost:10870";
export async function encryptFile(array, callback) {
  const publicKeyRequest = new Crypt.PublicKeyRequest();

  //request to get public Key
  grpc.unary(CryptService.PublicKey, {
    request: publicKeyRequest,
    host,
    onEnd: res => {
      const {status, message} = res;
      if (status === grpc.Code.OK && message) {
        const messageObj = message.toObject();
        const aesKey = generateAesKey();
        const aesKeyEncryption = new Crypt.EncryptionRequest();
        aesKeyEncryption.setPlaintext(aesKey);
        let pubKey = new Uint8Array(message.getX().length + message.getY().length);
        pubKey.set(message.getX(), 0);
        pubKey.set(message.getY(), message.getX().length);
        const hashedPubKey = new Uint8Array(sha256.array(pubKey));

        // request to encrypt aes key
        grpc.unary(CryptService.Encrypt, {
          request: aesKeyEncryption,
          host,
          onEnd: res => {
            const {status, message} = res;
            if (status === grpc.Code.OK && message) {
              const encryptedAesKey = message.getCiphertext();
              const encryptionRequest = new Crypt.EncryptionRequest();
              encryptionRequest.setAesKey(aesKey);
              encryptionRequest.setPlaintext(array);
              grpc.unary(CryptService.Encrypt, {
                request: encryptionRequest,
                host,
                onEnd: res => {
                  const {status, message} = res;
                  if (status === grpc.Code.OK && message) {
                    callback(message.getCiphertext_asU8(), hashedPubKey, encryptedAesKey);
                  }
                }
              });
            }
          }
        });
      }
    }
  });
}

function generateAesKey() {
  let arr = new Uint8Array(16);
  window.crypto.getRandomValues(arr);
  return arr;
}

function arraysEqual(uintArr, arr) {
  if(uintArr.length !== arr.length) {
    return false;
  }
  for(let i = 0;i < arr.length; i++) {
    if (uintArr[i] !== arr[i]) {
      return false;
    }
  }
  return true;
}

export async function decryptFile(array, metadata, callback) {
  const publicKeyRequest = new Crypt.PublicKeyRequest();
  grpc.unary(CryptService.PublicKey, {
    request: publicKeyRequest,
    host,
    onEnd: res => {
      const {status, message} = res;
      if (status === grpc.Code.OK && message) {
        let pubKey = new Uint8Array(message.getX().length + message.getY().length);
        pubKey.set(message.getX(), 0);
        pubKey.set(message.getY(), message.getX().length);
        const hashedPubKey = sha256.array(pubKey);
        let encryptedAesKey;
        const accessorList = metadata.getAccessListList();
        accessorList.forEach((accessor) => {
          if (arraysEqual(accessor.getIdentityHash_asU8(), hashedPubKey)) {
            encryptedAesKey = accessor.getEncryptedKey();
          }
        });
        if (!encryptedAesKey) {
          alert('bad pub key');
          return;
        }
        const aesKeyDecryptionRequest = new Crypt.DecryptionRequest();
        aesKeyDecryptionRequest.setCiphertext(encryptedAesKey);
        grpc.unary(CryptService.Decrypt, {
          request: aesKeyDecryptionRequest,
          host,
          onEnd: res => {
            const {status, message} = res;
            if (status === grpc.Code.OK && message) {
              const aesKey = message.getPlaintext_asU8();
              const decryptionRequest = new Crypt.DecryptionRequest();
              decryptionRequest.setCiphertext(array);
              decryptionRequest.setAesKey(aesKey);
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
          }
        });
      }
    }
  });
}