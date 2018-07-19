// package: metadata
// file: src/metadata.proto

var src_metadata_pb = require("./metadata_pb");
var grpc = require("grpc-web-client").grpc;

var MetadataService = (function () {
  function MetadataService() {}
  MetadataService.serviceName = "metadata.MetadataService";
  return MetadataService;
}());

MetadataService.GetDirectoryKeys = {
  methodName: "GetDirectoryKeys",
  service: MetadataService,
  requestStream: false,
  responseStream: false,
  requestType: src_metadata_pb.GetDirectoryKeysRequest,
  responseType: src_metadata_pb.GetDirectoryKeysResponse
};

MetadataService.GetMetadata = {
  methodName: "GetMetadata",
  service: MetadataService,
  requestStream: false,
  responseStream: false,
  requestType: src_metadata_pb.GetMetadataRequest,
  responseType: src_metadata_pb.GetMetadataResponse
};

MetadataService.SetMetadata = {
  methodName: "SetMetadata",
  service: MetadataService,
  requestStream: false,
  responseStream: false,
  requestType: src_metadata_pb.SetMetadataRequest,
  responseType: src_metadata_pb.SetMetadataResponse
};

MetadataService.GetFile = {
  methodName: "GetFile",
  service: MetadataService,
  requestStream: false,
  responseStream: false,
  requestType: src_metadata_pb.GetFileRequest,
  responseType: src_metadata_pb.GetFileResponse
};

MetadataService.PutFile = {
  methodName: "PutFile",
  service: MetadataService,
  requestStream: false,
  responseStream: false,
  requestType: src_metadata_pb.PutFileRequest,
  responseType: src_metadata_pb.PutFileResponse
};

MetadataService.DeleteFile = {
  methodName: "DeleteFile",
  service: MetadataService,
  requestStream: false,
  responseStream: false,
  requestType: src_metadata_pb.DeleteFileRequest,
  responseType: src_metadata_pb.DeleteFileResponse
};

exports.MetadataService = MetadataService;

function MetadataServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MetadataServiceClient.prototype.getDirectoryKeys = function getDirectoryKeys(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(MetadataService.GetDirectoryKeys, {
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

exports.MetadataServiceClient = MetadataServiceClient;

