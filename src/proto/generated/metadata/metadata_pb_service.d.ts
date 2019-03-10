// package: metadata
// file: src/proto/generated/metadata/metadata.proto

import * as src_proto_generated_metadata_metadata_pb from "../../../../src/proto/generated/metadata/metadata_pb";
import {grpc} from "grpc-web-client";

type MetadataServiceGetFile = {
  readonly methodName: string;
  readonly service: typeof MetadataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_proto_generated_metadata_metadata_pb.GetFileRequest;
  readonly responseType: typeof src_proto_generated_metadata_metadata_pb.GetFileResponse;
};

type MetadataServicePutFile = {
  readonly methodName: string;
  readonly service: typeof MetadataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_proto_generated_metadata_metadata_pb.PutFileRequest;
  readonly responseType: typeof src_proto_generated_metadata_metadata_pb.PutFileResponse;
};

type MetadataServiceDeleteFile = {
  readonly methodName: string;
  readonly service: typeof MetadataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_proto_generated_metadata_metadata_pb.DeleteFileRequest;
  readonly responseType: typeof src_proto_generated_metadata_metadata_pb.DeleteFileResponse;
};

type MetadataServiceCreateDirectory = {
  readonly methodName: string;
  readonly service: typeof MetadataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_proto_generated_metadata_metadata_pb.CreateDirectoryRequest;
  readonly responseType: typeof src_proto_generated_metadata_metadata_pb.CreateDirectoryResponse;
};

type MetadataServiceDeleteDirectory = {
  readonly methodName: string;
  readonly service: typeof MetadataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_proto_generated_metadata_metadata_pb.DeleteDirectoryRequest;
  readonly responseType: typeof src_proto_generated_metadata_metadata_pb.DeleteDirectoryResponse;
};

type MetadataServiceGetDirectoryEntries = {
  readonly methodName: string;
  readonly service: typeof MetadataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_proto_generated_metadata_metadata_pb.GetDirectoryEntriesRequest;
  readonly responseType: typeof src_proto_generated_metadata_metadata_pb.GetDirectoryEntriesResponse;
};

type MetadataServiceGetMetadata = {
  readonly methodName: string;
  readonly service: typeof MetadataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_proto_generated_metadata_metadata_pb.GetMetadataRequest;
  readonly responseType: typeof src_proto_generated_metadata_metadata_pb.GetMetadataResponse;
};

type MetadataServiceSetMetadata = {
  readonly methodName: string;
  readonly service: typeof MetadataService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_proto_generated_metadata_metadata_pb.SetMetadataRequest;
  readonly responseType: typeof src_proto_generated_metadata_metadata_pb.SetMetadataResponse;
};

export class MetadataService {
  static readonly serviceName: string;
  static readonly GetFile: MetadataServiceGetFile;
  static readonly PutFile: MetadataServicePutFile;
  static readonly DeleteFile: MetadataServiceDeleteFile;
  static readonly CreateDirectory: MetadataServiceCreateDirectory;
  static readonly DeleteDirectory: MetadataServiceDeleteDirectory;
  static readonly GetDirectoryEntries: MetadataServiceGetDirectoryEntries;
  static readonly GetMetadata: MetadataServiceGetMetadata;
  static readonly SetMetadata: MetadataServiceSetMetadata;
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
    requestMessage: src_proto_generated_metadata_metadata_pb.GetFileRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: src_proto_generated_metadata_metadata_pb.GetFileResponse|null) => void
  ): void;
  getFile(
    requestMessage: src_proto_generated_metadata_metadata_pb.GetFileRequest,
    callback: (error: ServiceError, responseMessage: src_proto_generated_metadata_metadata_pb.GetFileResponse|null) => void
  ): void;
  putFile(
    requestMessage: src_proto_generated_metadata_metadata_pb.PutFileRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: src_proto_generated_metadata_metadata_pb.PutFileResponse|null) => void
  ): void;
  putFile(
    requestMessage: src_proto_generated_metadata_metadata_pb.PutFileRequest,
    callback: (error: ServiceError, responseMessage: src_proto_generated_metadata_metadata_pb.PutFileResponse|null) => void
  ): void;
  deleteFile(
    requestMessage: src_proto_generated_metadata_metadata_pb.DeleteFileRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: src_proto_generated_metadata_metadata_pb.DeleteFileResponse|null) => void
  ): void;
  deleteFile(
    requestMessage: src_proto_generated_metadata_metadata_pb.DeleteFileRequest,
    callback: (error: ServiceError, responseMessage: src_proto_generated_metadata_metadata_pb.DeleteFileResponse|null) => void
  ): void;
  createDirectory(
    requestMessage: src_proto_generated_metadata_metadata_pb.CreateDirectoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: src_proto_generated_metadata_metadata_pb.CreateDirectoryResponse|null) => void
  ): void;
  createDirectory(
    requestMessage: src_proto_generated_metadata_metadata_pb.CreateDirectoryRequest,
    callback: (error: ServiceError, responseMessage: src_proto_generated_metadata_metadata_pb.CreateDirectoryResponse|null) => void
  ): void;
  deleteDirectory(
    requestMessage: src_proto_generated_metadata_metadata_pb.DeleteDirectoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: src_proto_generated_metadata_metadata_pb.DeleteDirectoryResponse|null) => void
  ): void;
  deleteDirectory(
    requestMessage: src_proto_generated_metadata_metadata_pb.DeleteDirectoryRequest,
    callback: (error: ServiceError, responseMessage: src_proto_generated_metadata_metadata_pb.DeleteDirectoryResponse|null) => void
  ): void;
  getDirectoryEntries(
    requestMessage: src_proto_generated_metadata_metadata_pb.GetDirectoryEntriesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: src_proto_generated_metadata_metadata_pb.GetDirectoryEntriesResponse|null) => void
  ): void;
  getDirectoryEntries(
    requestMessage: src_proto_generated_metadata_metadata_pb.GetDirectoryEntriesRequest,
    callback: (error: ServiceError, responseMessage: src_proto_generated_metadata_metadata_pb.GetDirectoryEntriesResponse|null) => void
  ): void;
  getMetadata(
    requestMessage: src_proto_generated_metadata_metadata_pb.GetMetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: src_proto_generated_metadata_metadata_pb.GetMetadataResponse|null) => void
  ): void;
  getMetadata(
    requestMessage: src_proto_generated_metadata_metadata_pb.GetMetadataRequest,
    callback: (error: ServiceError, responseMessage: src_proto_generated_metadata_metadata_pb.GetMetadataResponse|null) => void
  ): void;
  setMetadata(
    requestMessage: src_proto_generated_metadata_metadata_pb.SetMetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError, responseMessage: src_proto_generated_metadata_metadata_pb.SetMetadataResponse|null) => void
  ): void;
  setMetadata(
    requestMessage: src_proto_generated_metadata_metadata_pb.SetMetadataRequest,
    callback: (error: ServiceError, responseMessage: src_proto_generated_metadata_metadata_pb.SetMetadataResponse|null) => void
  ): void;
}

