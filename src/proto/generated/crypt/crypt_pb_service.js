// package: crypt
// file: src/proto/generated/crypt/crypt.proto

var src_proto_generated_crypt_crypt_pb = require("../../../../src/proto/generated/crypt/crypt_pb");
var grpc = require("grpc-web-client").grpc;

var CryptService = (function () {
  function CryptService() {}
  CryptService.serviceName = "crypt.CryptService";
  return CryptService;
}());

CryptService.Encrypt = {
  methodName: "Encrypt",
  service: CryptService,
  requestStream: false,
  responseStream: false,
  requestType: src_proto_generated_crypt_crypt_pb.EncryptionRequest,
  responseType: src_proto_generated_crypt_crypt_pb.EncryptionResponse
};

CryptService.Decrypt = {
  methodName: "Decrypt",
  service: CryptService,
  requestStream: false,
  responseStream: false,
  requestType: src_proto_generated_crypt_crypt_pb.DecryptionRequest,
  responseType: src_proto_generated_crypt_crypt_pb.DecryptionResponse
};

CryptService.PublicKey = {
  methodName: "PublicKey",
  service: CryptService,
  requestStream: false,
  responseStream: false,
  requestType: src_proto_generated_crypt_crypt_pb.PublicKeyRequest,
  responseType: src_proto_generated_crypt_crypt_pb.PublicKeyResponse
};

exports.CryptService = CryptService;

function CryptServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CryptServiceClient.prototype.encrypt = function encrypt(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(CryptService.Encrypt, {
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

CryptServiceClient.prototype.decrypt = function decrypt(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(CryptService.Decrypt, {
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

CryptServiceClient.prototype.publicKey = function publicKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  grpc.unary(CryptService.PublicKey, {
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

exports.CryptServiceClient = CryptServiceClient;

