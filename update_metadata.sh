#!/usr/bin/env bash
export GOPATH=~/Go
cd /Users/ankitbahl/Go/src/github.com/kurafs/kura
git pull
go install
cp /Users/ankitbahl/Go/src/github.com/kurafs/kura/pkg/pb/metadata/metadata.proto /Users/ankitbahl/Workspace/kura-frontend/src/proto/generated/metadata/metadata.proto
cp /Users/ankitbahl/Go/src/github.com/kurafs/kura/pkg/pb/crypt/crypt.proto /Users/ankitbahl/Workspace/kura-frontend/src/proto/generated/crypt/crypt.proto
cd /Users/ankitbahl/Workspace/kura-frontend
protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --js_out=import_style=commonjs,binary:. --ts_out=service=true:. -I ./ src/proto/generated/crypt/*.proto
protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --js_out=import_style=commonjs,binary:. --ts_out=service=true:. -I ./ src/proto/generated/metadata/*.proto
sed -i.old '1s;^;/* eslint-disable */;' src/proto/generated/metadata/metadata_pb.js
sed -i.old '1s;^;/* eslint-disable */;' src/proto/generated/crypt/crypt_pb.js
rm src/proto/generated/metadata/metadata_pb.js.old
rm src/proto/generated/crypt/crypt_pb.js.old