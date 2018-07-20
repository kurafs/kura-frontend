#!/usr/bin/env bash
export GOPATH=~/Go
cd /Users/ankitbahl/Go/src/github.com/kurafs/kura
git pull
dep ensure
go install
cp /Users/ankitbahl/Go/src/github.com/kurafs/kura/pkg/pb/metadata/metadata.proto /Users/ankitbahl/Workspace/kura-frontend/src/proto/metadata.proto
cd /Users/ankitbahl/Workspace/kura-frontend
protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --js_out=import_style=commonjs,binary:. --ts_out=service=true:. -I ./ src/proto/*.proto
sed -i.old '1s;^;/* eslint-disable */;' src/proto/metadata_pb.js
rm src/proto/metadata_pb.js.old