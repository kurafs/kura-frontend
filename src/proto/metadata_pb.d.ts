// package: metadata
// file: src/metadata.proto

import * as jspb from "google-protobuf";

export class FileMetadata extends jspb.Message {
  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): FileMetadata.UnixTimestamp | undefined;
  setCreated(value?: FileMetadata.UnixTimestamp): void;

  hasLastModified(): boolean;
  clearLastModified(): void;
  getLastModified(): FileMetadata.UnixTimestamp | undefined;
  setLastModified(value?: FileMetadata.UnixTimestamp): void;

  getPermissions(): string;
  setPermissions(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: FileMetadata): FileMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileMetadata;
  static deserializeBinaryFromReader(message: FileMetadata, reader: jspb.BinaryReader): FileMetadata;
}

export namespace FileMetadata {
  export type AsObject = {
    created?: FileMetadata.UnixTimestamp.AsObject,
    lastModified?: FileMetadata.UnixTimestamp.AsObject,
    permissions: string,
    size: number,
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

export class GetDirectoryKeysRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDirectoryKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDirectoryKeysRequest): GetDirectoryKeysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDirectoryKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDirectoryKeysRequest;
  static deserializeBinaryFromReader(message: GetDirectoryKeysRequest, reader: jspb.BinaryReader): GetDirectoryKeysRequest;
}

export namespace GetDirectoryKeysRequest {
  export type AsObject = {
  }
}

export class GetDirectoryKeysResponse extends jspb.Message {
  clearKeysList(): void;
  getKeysList(): Array<string>;
  setKeysList(value: Array<string>): void;
  addKeys(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDirectoryKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDirectoryKeysResponse): GetDirectoryKeysResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDirectoryKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDirectoryKeysResponse;
  static deserializeBinaryFromReader(message: GetDirectoryKeysResponse, reader: jspb.BinaryReader): GetDirectoryKeysResponse;
}

export namespace GetDirectoryKeysResponse {
  export type AsObject = {
    keysList: Array<string>,
  }
}

export class GetMetadataRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

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
    key: string,
  }
}

export class GetMetadataResponse extends jspb.Message {
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): FileMetadata | undefined;
  setMetadata(value?: FileMetadata): void;

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
    metadata?: FileMetadata.AsObject,
  }
}

export class SetMetadataRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): FileMetadata | undefined;
  setMetadata(value?: FileMetadata): void;

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
    key: string,
    metadata?: FileMetadata.AsObject,
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

export class GetFileRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

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
    key: string,
  }
}

export class GetFileResponse extends jspb.Message {
  getFile(): Uint8Array | string;
  getFile_asU8(): Uint8Array;
  getFile_asB64(): string;
  setFile(value: Uint8Array | string): void;

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
  }
}

export class PutFileRequest extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getFile(): Uint8Array | string;
  getFile_asU8(): Uint8Array;
  getFile_asB64(): string;
  setFile(value: Uint8Array | string): void;

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
    key: string,
    file: Uint8Array | string,
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
  getKey(): string;
  setKey(value: string): void;

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
    key: string,
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

