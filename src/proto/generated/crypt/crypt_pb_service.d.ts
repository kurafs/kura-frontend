// package: crypt
// file: src/proto/generated/crypt/crypt.proto

import * as src_proto_generated_crypt_crypt_pb from "../../../../src/proto/generated/crypt/crypt_pb";
import {grpc} from "grpc-web-client";

type CryptServiceEncrypt = {
  readonly methodName: string;
  readonly service: typeof CryptService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_proto_generated_crypt_crypt_pb.EncryptionRequest;
  readonly responseType: typeof src_proto_generated_crypt_crypt_pb.EncryptionResponse;
};

type CryptServiceDecrypt = {
  readonly methodName: string;
  readonly service: typeof CryptService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_proto_generated_crypt_crypt_pb.DecryptionRequest;
  readonly responseType: typeof src_proto_generated_crypt_crypt_pb.DecryptionResponse;
};

type CryptServicePublicKey = {
  readonly methodName: string;
  readonly service: typeof CryptService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_proto_generated_crypt_crypt_pb.PublicKeyRequest;
  readonly responseType: typeof src_proto_generated_crypt_crypt_pb.PublicKeyResponse;
};

export class CryptService {
  static readonly serviceName: string;
  static readonly Encrypt: CryptServiceEncrypt;
  static readonly Decrypt: CryptServiceDecrypt;
  static readonly PublicKey: CryptServicePublicKey;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }
export type ServiceClientOptions = { transport: grpc.TransportConstructor; debug?: boolean }

interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}

export class CryptServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  encrypt(
    requestMessage: src_proto_generated_crypt_crypt_pb.EncryptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: src_proto_generated_crypt_crypt_pb.EncryptionResponse|null) => void
  ): void;
  encrypt(
    requestMessage: src_proto_generated_crypt_crypt_pb.EncryptionRequest,
    callback: (error: ServiceError, responseMessage: src_proto_generated_crypt_crypt_pb.EncryptionResponse|null) => void
  ): void;
  decrypt(
    requestMessage: src_proto_generated_crypt_crypt_pb.DecryptionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: src_proto_generated_crypt_crypt_pb.DecryptionResponse|null) => void
  ): void;
  decrypt(
    requestMessage: src_proto_generated_crypt_crypt_pb.DecryptionRequest,
    callback: (error: ServiceError, responseMessage: src_proto_generated_crypt_crypt_pb.DecryptionResponse|null) => void
  ): void;
  publicKey(
    requestMessage: src_proto_generated_crypt_crypt_pb.PublicKeyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: src_proto_generated_crypt_crypt_pb.PublicKeyResponse|null) => void
  ): void;
  publicKey(
    requestMessage: src_proto_generated_crypt_crypt_pb.PublicKeyRequest,
    callback: (error: ServiceError, responseMessage: src_proto_generated_crypt_crypt_pb.PublicKeyResponse|null) => void
  ): void;
}

