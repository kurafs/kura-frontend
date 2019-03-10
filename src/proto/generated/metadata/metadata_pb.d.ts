// package: metadata
// file: src/proto/generated/metadata/metadata.proto

import * as jspb from "google-protobuf";

export class Metadata extends jspb.Message {
  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): Metadata.UnixTimestamp | undefined;
  setCreated(value?: Metadata.UnixTimestamp): void;

  hasLastModified(): boolean;
  clearLastModified(): void;
  getLastModified(): Metadata.UnixTimestamp | undefined;
  setLastModified(value?: Metadata.UnixTimestamp): void;

  getPermissions(): number;
  setPermissions(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  getIsDirectory(): boolean;
  setIsDirectory(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
  export type AsObject = {
    created?: Metadata.UnixTimestamp.AsObject,
    lastModified?: Metadata.UnixTimestamp.AsObject,
    permissions: number,
    size: number,
    isDirectory: boolean,
  }

  export class UnixTimestamp extends jspb.Message {
    getSeconds(): number;
    setSeconds(value: number): void;

    getNanoseconds(): number;
    setNanoseconds(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnixTimestamp.AsObject;
    static toObject(includeInstance: boolean, msg: UnixTimestamp): UnixTimestamp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnixTimestamp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnixTimestamp;
    static deserializeBinaryFromReader(message: UnixTimestamp, reader: jspb.BinaryReader): UnixTimestamp;
  }

  export namespace UnixTimestamp {
    export type AsObject = {
      seconds: number,
      nanoseconds: number,
    }
  }
}

export class GetFileRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileRequest): GetFileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileRequest;
  static deserializeBinaryFromReader(message: GetFileRequest, reader: jspb.BinaryReader): GetFileRequest;
}

export namespace GetFileRequest {
  export type AsObject = {
    path: string,
  }
}

export class GetFileResponse extends jspb.Message {
  getFile(): Uint8Array | string;
  getFile_asU8(): Uint8Array;
  getFile_asB64(): string;
  setFile(value: Uint8Array | string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFileResponse): GetFileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFileResponse;
  static deserializeBinaryFromReader(message: GetFileResponse, reader: jspb.BinaryReader): GetFileResponse;
}

export namespace GetFileResponse {
  export type AsObject = {
    file: Uint8Array | string,
    metadata?: Metadata.AsObject,
  }
}

export class PutFileRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getFile(): Uint8Array | string;
  getFile_asU8(): Uint8Array;
  getFile_asB64(): string;
  setFile(value: Uint8Array | string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutFileRequest): PutFileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutFileRequest;
  static deserializeBinaryFromReader(message: PutFileRequest, reader: jspb.BinaryReader): PutFileRequest;
}

export namespace PutFileRequest {
  export type AsObject = {
    path: string,
    file: Uint8Array | string,
    metadata?: Metadata.AsObject,
  }
}

export class PutFileResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutFileResponse): PutFileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutFileResponse;
  static deserializeBinaryFromReader(message: PutFileResponse, reader: jspb.BinaryReader): PutFileResponse;
}

export namespace PutFileResponse {
  export type AsObject = {
  }
}

export class DeleteFileRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFileRequest): DeleteFileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFileRequest;
  static deserializeBinaryFromReader(message: DeleteFileRequest, reader: jspb.BinaryReader): DeleteFileRequest;
}

export namespace DeleteFileRequest {
  export type AsObject = {
    path: string,
  }
}

export class DeleteFileResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFileResponse): DeleteFileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFileResponse;
  static deserializeBinaryFromReader(message: DeleteFileResponse, reader: jspb.BinaryReader): DeleteFileResponse;
}

export namespace DeleteFileResponse {
  export type AsObject = {
  }
}

export class GetDirectoryEntriesRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDirectoryEntriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDirectoryEntriesRequest): GetDirectoryEntriesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDirectoryEntriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDirectoryEntriesRequest;
  static deserializeBinaryFromReader(message: GetDirectoryEntriesRequest, reader: jspb.BinaryReader): GetDirectoryEntriesRequest;
}

export namespace GetDirectoryEntriesRequest {
  export type AsObject = {
    path: string,
  }
}

export class GetDirectoryEntriesResponse extends jspb.Message {
  clearEntriesList(): void;
  getEntriesList(): Array<GetDirectoryEntriesResponse.DirectoryEntry>;
  setEntriesList(value: Array<GetDirectoryEntriesResponse.DirectoryEntry>): void;
  addEntries(value?: GetDirectoryEntriesResponse.DirectoryEntry, index?: number): GetDirectoryEntriesResponse.DirectoryEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDirectoryEntriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDirectoryEntriesResponse): GetDirectoryEntriesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDirectoryEntriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDirectoryEntriesResponse;
  static deserializeBinaryFromReader(message: GetDirectoryEntriesResponse, reader: jspb.BinaryReader): GetDirectoryEntriesResponse;
}

export namespace GetDirectoryEntriesResponse {
  export type AsObject = {
    entriesList: Array<GetDirectoryEntriesResponse.DirectoryEntry.AsObject>,
  }

  export class DirectoryEntry extends jspb.Message {
    getPath(): string;
    setPath(value: string): void;

    getIsDirectory(): boolean;
    setIsDirectory(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DirectoryEntry.AsObject;
    static toObject(includeInstance: boolean, msg: DirectoryEntry): DirectoryEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DirectoryEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DirectoryEntry;
    static deserializeBinaryFromReader(message: DirectoryEntry, reader: jspb.BinaryReader): DirectoryEntry;
  }

  export namespace DirectoryEntry {
    export type AsObject = {
      path: string,
      isDirectory: boolean,
    }
  }
}

export class CreateDirectoryRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDirectoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDirectoryRequest): CreateDirectoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDirectoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDirectoryRequest;
  static deserializeBinaryFromReader(message: CreateDirectoryRequest, reader: jspb.BinaryReader): CreateDirectoryRequest;
}

export namespace CreateDirectoryRequest {
  export type AsObject = {
    path: string,
    metadata?: Metadata.AsObject,
  }
}

export class CreateDirectoryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDirectoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDirectoryResponse): CreateDirectoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDirectoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDirectoryResponse;
  static deserializeBinaryFromReader(message: CreateDirectoryResponse, reader: jspb.BinaryReader): CreateDirectoryResponse;
}

export namespace CreateDirectoryResponse {
  export type AsObject = {
  }
}

export class DeleteDirectoryRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDirectoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDirectoryRequest): DeleteDirectoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDirectoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDirectoryRequest;
  static deserializeBinaryFromReader(message: DeleteDirectoryRequest, reader: jspb.BinaryReader): DeleteDirectoryRequest;
}

export namespace DeleteDirectoryRequest {
  export type AsObject = {
    path: string,
  }
}

export class DeleteDirectoryResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDirectoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDirectoryResponse): DeleteDirectoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDirectoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDirectoryResponse;
  static deserializeBinaryFromReader(message: DeleteDirectoryResponse, reader: jspb.BinaryReader): DeleteDirectoryResponse;
}

export namespace DeleteDirectoryResponse {
  export type AsObject = {
  }
}

export class GetMetadataRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMetadataRequest): GetMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMetadataRequest;
  static deserializeBinaryFromReader(message: GetMetadataRequest, reader: jspb.BinaryReader): GetMetadataRequest;
}

export namespace GetMetadataRequest {
  export type AsObject = {
    path: string,
  }
}

export class GetMetadataResponse extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMetadataResponse): GetMetadataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMetadataResponse;
  static deserializeBinaryFromReader(message: GetMetadataResponse, reader: jspb.BinaryReader): GetMetadataResponse;
}

export namespace GetMetadataResponse {
  export type AsObject = {
    metadata?: Metadata.AsObject,
  }
}

export class SetMetadataRequest extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetMetadataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetMetadataRequest): SetMetadataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetMetadataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetMetadataRequest;
  static deserializeBinaryFromReader(message: SetMetadataRequest, reader: jspb.BinaryReader): SetMetadataRequest;
}

export namespace SetMetadataRequest {
  export type AsObject = {
    path: string,
    metadata?: Metadata.AsObject,
  }
}

export class SetMetadataResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetMetadataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetMetadataResponse): SetMetadataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetMetadataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetMetadataResponse;
  static deserializeBinaryFromReader(message: SetMetadataResponse, reader: jspb.BinaryReader): SetMetadataResponse;
}

export namespace SetMetadataResponse {
  export type AsObject = {
  }
}

