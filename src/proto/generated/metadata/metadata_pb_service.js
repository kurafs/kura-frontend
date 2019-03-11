// package: metadata
// file: src/proto/generated/metadata/metadata.proto

var src_proto_generated_metadata_metadata_pb = require("../../../../src/proto/generated/metadata/metadata_pb");
var grpc = require("grpc-web-client").grpc;

var MetadataService = (function () {
  function MetadataService() {}
  MetadataService.serviceName = "metadata.MetadataService";
  return MetadataService;
}());

MetadataService.GetFile = {
  methodName: "GetFile",
  service: MetadataService,
  requestStream: false,
  responseStream: false,
  requestType: src_proto_generated_metadata_metadata_pb.GetFileRequest,
  responseType: src_proto_generated_metadata_metadata_pb.GetFileResponse
};

MetadataService.GetFileStream = {
  methodName: "GetFileStream",
  service: MetadataService,
  requestStream: false,
  responseStream: true,
  requestType: src_proto_generated_metadata_metadata_pb.GetFileStreamRequest,
  responseType: src_proto_generated_metadata_metadata_pb.GetFileStreamResponse
};

MetadataService.PutFile = {
  methodName: "PutFile",
  service: MetadataService,
  requestStream: false,
  responseStream: false,
  requestType: src_proto_generated_metadata_metadata_pb.PutFileRequest,
  responseType: src_proto_generated_metadata_metadata_pb.PutFileResponse
};

MetadataService.PutFileStream = {
  methodName: "PutFileStream",
  service: MetadataService,
  requestStream: true,
  responseStream: false,
  requestType: src_proto_generated_metadata_metadata_pb.PutFileStreamRequest,
  responseType: src_proto_generated_metadata_metadata_pb.PutFileStreamResponse
};

MetadataService.DeleteFile = {
  methodName: "DeleteFile",
  service: MetadataService,
  requestStream: false,
  responseStream: false,
  requestType: src_proto_generated_metadata_metadata_pb.DeleteFileRequest,
  responseType: src_proto_generated_metadata_metadata_pb.DeleteFileResponse
};

MetadataService.CreateDirectory = {
  methodName: "CreateDirectory",
  service: MetadataService,
  requestStream: false,
  responseStream: false,
  requestType: src_proto_generated_metadata_metadata_pb.CreateDirectoryRequest,
  responseType: src_proto_generated_metadata_metadata_pb.CreateDirectoryResponse
};

MetadataService.DeleteDirectory = {
  methodName: "DeleteDirectory",
  service: MetadataService,
  requestStream: false,
  responseStream: false,
  requestType: src_proto_generated_metadata_metadata_pb.DeleteDirectoryRequest,
  responseType: src_proto_generated_metadata_metadata_pb.DeleteDirectoryResponse
};

MetadataService.GetDirectoryEntries = {
  methodName: "GetDirectoryEntries",
  service: MetadataService,
  requestStream: false,
  responseStream: false,
  requestType: src_proto_generated_metadata_metadata_pb.GetDirectoryEntriesRequest,
  responseType: src_proto_generated_metadata_metadata_pb.GetDirectoryEntriesResponse
};

MetadataService.Rename = {
  methodName: "Rename",
  service: MetadataService,
  requestStream: false,
  responseStream: false,
  requestType: src_proto_generated_metadata_metadata_pb.RenameRequest,
  responseType: src_proto_generated_metadata_metadata_pb.RenameResponse
};

MetadataService.GetMetadata = {
  methodName: "GetMetadata",
  service: MetadataService,
  requestStream: false,
  responseStream: false,
  requestType: src_proto_generated_metadata_metadata_pb.GetMetadataRequest,
  responseType: src_proto_generated_metadata_metadata_pb.GetMetadataResponse
};

MetadataService.SetMetadata = {
  methodName: "SetMetadata",
  service: MetadataService,
  requestStream: false,
  responseStream: false,
  requestType: src_proto_generated_metadata_metadata_pb.SetMetadataRequest,
  responseType: src_proto_generated_metadata_metadata_pb.SetMetadataResponse
};

exports.MetadataService = MetadataService;

function MetadataServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MetadataServiceClient.prototype.getFile = function getFile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(MetadataService.GetFile, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

MetadataServiceClient.prototype.getFileStream = function getFileStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(MetadataService.GetFileStream, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.end.forEach(function (handler) {
        handler();
      });
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MetadataServiceClient.prototype.putFile = function putFile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(MetadataService.PutFile, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

MetadataService.prototype.putFileStream = function putFileStream() {
  throw new Error("Bi-directional streaming is not currently supported");
}

MetadataServiceClient.prototype.deleteFile = function deleteFile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(MetadataService.DeleteFile, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

MetadataServiceClient.prototype.createDirectory = function createDirectory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(MetadataService.CreateDirectory, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

MetadataServiceClient.prototype.deleteDirectory = function deleteDirectory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(MetadataService.DeleteDirectory, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

MetadataServiceClient.prototype.getDirectoryEntries = function getDirectoryEntries(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(MetadataService.GetDirectoryEntries, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

MetadataServiceClient.prototype.rename = function rename(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(MetadataService.Rename, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

MetadataServiceClient.prototype.getMetadata = function getMetadata(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(MetadataService.GetMetadata, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

MetadataServiceClient.prototype.setMetadata = function setMetadata(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(MetadataService.SetMetadata, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          callback(Object.assign(new Error(response.statusMessage), { code: response.status, metadata: response.trailers }), null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
};

exports.MetadataServiceClient = MetadataServiceClient;

