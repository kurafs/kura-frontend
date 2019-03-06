// package: crypt
// file: src/proto/crypt.proto

import * as jspb from "google-protobuf";

export class EncryptionRequest extends jspb.Message {
  getPlaintext(): Uint8Array | string;
  getPlaintext_asU8(): Uint8Array;
  getPlaintext_asB64(): string;
  setPlaintext(value: Uint8Array | string): void;

  getAesKey(): Uint8Array | string;
  getAesKey_asU8(): Uint8Array;
  getAesKey_asB64(): string;
  setAesKey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncryptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EncryptionRequest): EncryptionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncryptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncryptionRequest;
  static deserializeBinaryFromReader(message: EncryptionRequest, reader: jspb.BinaryReader): EncryptionRequest;
}

export namespace EncryptionRequest {
  export type AsObject = {
    plaintext: Uint8Array | string,
    aesKey: Uint8Array | string,
  }
}

export class EncryptionResponse extends jspb.Message {
  getCiphertext(): Uint8Array | string;
  getCiphertext_asU8(): Uint8Array;
  getCiphertext_asB64(): string;
  setCiphertext(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncryptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EncryptionResponse): EncryptionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncryptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncryptionResponse;
  static deserializeBinaryFromReader(message: EncryptionResponse, reader: jspb.BinaryReader): EncryptionResponse;
}

export namespace EncryptionResponse {
  export type AsObject = {
    ciphertext: Uint8Array | string,
  }
}

export class DecryptionRequest extends jspb.Message {
  getCiphertext(): Uint8Array | string;
  getCiphertext_asU8(): Uint8Array;
  getCiphertext_asB64(): string;
  setCiphertext(value: Uint8Array | string): void;

  getAesKey(): Uint8Array | string;
  getAesKey_asU8(): Uint8Array;
  getAesKey_asB64(): string;
  setAesKey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptionRequest): DecryptionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecryptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptionRequest;
  static deserializeBinaryFromReader(message: DecryptionRequest, reader: jspb.BinaryReader): DecryptionRequest;
}

export namespace DecryptionRequest {
  export type AsObject = {
    ciphertext: Uint8Array | string,
    aesKey: Uint8Array | string,
  }
}

export class DecryptionResponse extends jspb.Message {
  getPlaintext(): Uint8Array | string;
  getPlaintext_asU8(): Uint8Array;
  getPlaintext_asB64(): string;
  setPlaintext(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecryptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DecryptionResponse): DecryptionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecryptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecryptionResponse;
  static deserializeBinaryFromReader(message: DecryptionResponse, reader: jspb.BinaryReader): DecryptionResponse;
}

export namespace DecryptionResponse {
  export type AsObject = {
    plaintext: Uint8Array | string,
  }
}

export class PublicKeyRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PublicKeyRequest): PublicKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublicKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicKeyRequest;
  static deserializeBinaryFromReader(message: PublicKeyRequest, reader: jspb.BinaryReader): PublicKeyRequest;
}

export namespace PublicKeyRequest {
  export type AsObject = {
  }
}

export class PublicKeyResponse extends jspb.Message {
  getX(): Uint8Array | string;
  getX_asU8(): Uint8Array;
  getX_asB64(): string;
  setX(value: Uint8Array | string): void;

  getY(): Uint8Array | string;
  getY_asU8(): Uint8Array;
  getY_asB64(): string;
  setY(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublicKeyResponse): PublicKeyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublicKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicKeyResponse;
  static deserializeBinaryFromReader(message: PublicKeyResponse, reader: jspb.BinaryReader): PublicKeyResponse;
}

export namespace PublicKeyResponse {
  export type AsObject = {
    x: Uint8Array | string,
    y: Uint8Array | string,
  }
}

