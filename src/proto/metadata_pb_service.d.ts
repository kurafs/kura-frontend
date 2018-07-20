// package: metadata
// file: src/proto/metadata.proto

import * as src_proto_metadata_pb from "../../src/proto/metadata_pb";
import {grpc} from "grpc-web-client";

type MetadataServiceGetFile = {
  readonly methodName: string;
  readonly service: typeof MetadataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_proto_metadata_pb.GetFileRequest;
  readonly responseType: typeof src_proto_metadata_pb.GetFileResponse;
};

type MetadataServicePutFile = {
  readonly methodName: string;
  readonly service: typeof MetadataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_proto_metadata_pb.PutFileRequest;
  readonly responseType: typeof src_proto_metadata_pb.PutFileResponse;
};

type MetadataServiceDeleteFile = {
  readonly methodName: string;
  readonly service: typeof MetadataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_proto_metadata_pb.DeleteFileRequest;
  readonly responseType: typeof src_proto_metadata_pb.DeleteFileResponse;
};

type MetadataServiceGetMetadata = {
  readonly methodName: string;
  readonly service: typeof MetadataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_proto_metadata_pb.GetMetadataRequest;
  readonly responseType: typeof src_proto_metadata_pb.GetMetadataResponse;
};

type MetadataServiceSetMetadata = {
  readonly methodName: string;
  readonly service: typeof MetadataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_proto_metadata_pb.SetMetadataRequest;
  readonly responseType: typeof src_proto_metadata_pb.SetMetadataResponse;
};

type MetadataServiceGetDirectoryKeys = {
  readonly methodName: string;
  readonly service: typeof MetadataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_proto_metadata_pb.GetDirectoryKeysRequest;
  readonly responseType: typeof src_proto_metadata_pb.GetDirectoryKeysResponse;
};

export class MetadataService {
  static readonly serviceName: string;
  static readonly GetFile: MetadataServiceGetFile;
  static readonly PutFile: MetadataServicePutFile;
  static readonly DeleteFile: MetadataServiceDeleteFile;
  static readonly GetMetadata: MetadataServiceGetMetadata;
  static readonly SetMetadata: MetadataServiceSetMetadata;
  static readonly GetDirectoryKeys: MetadataServiceGetDirectoryKeys;
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

export class MetadataServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: ServiceClientOptions);
  getFile(
    requestMessage: src_proto_metadata_pb.GetFileRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: src_proto_metadata_pb.GetFileResponse|null) => void
  ): void;
  getFile(
    requestMessage: src_proto_metadata_pb.GetFileRequest,
    callback: (error: ServiceError, responseMessage: src_proto_metadata_pb.GetFileResponse|null) => void
  ): void;
  putFile(
    requestMessage: src_proto_metadata_pb.PutFileRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: src_proto_metadata_pb.PutFileResponse|null) => void
  ): void;
  putFile(
    requestMessage: src_proto_metadata_pb.PutFileRequest,
    callback: (error: ServiceError, responseMessage: src_proto_metadata_pb.PutFileResponse|null) => void
  ): void;
  deleteFile(
    requestMessage: src_proto_metadata_pb.DeleteFileRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: src_proto_metadata_pb.DeleteFileResponse|null) => void
  ): void;
  deleteFile(
    requestMessage: src_proto_metadata_pb.DeleteFileRequest,
    callback: (error: ServiceError, responseMessage: src_proto_metadata_pb.DeleteFileResponse|null) => void
  ): void;
  getMetadata(
    requestMessage: src_proto_metadata_pb.GetMetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: src_proto_metadata_pb.GetMetadataResponse|null) => void
  ): void;
  getMetadata(
    requestMessage: src_proto_metadata_pb.GetMetadataRequest,
    callback: (error: ServiceError, responseMessage: src_proto_metadata_pb.GetMetadataResponse|null) => void
  ): void;
  setMetadata(
    requestMessage: src_proto_metadata_pb.SetMetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: src_proto_metadata_pb.SetMetadataResponse|null) => void
  ): void;
  setMetadata(
    requestMessage: src_proto_metadata_pb.SetMetadataRequest,
    callback: (error: ServiceError, responseMessage: src_proto_metadata_pb.SetMetadataResponse|null) => void
  ): void;
  getDirectoryKeys(
    requestMessage: src_proto_metadata_pb.GetDirectoryKeysRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: src_proto_metadata_pb.GetDirectoryKeysResponse|null) => void
  ): void;
  getDirectoryKeys(
    requestMessage: src_proto_metadata_pb.GetDirectoryKeysRequest,
    callback: (error: ServiceError, responseMessage: src_proto_metadata_pb.GetDirectoryKeysResponse|null) => void
  ): void;
}

