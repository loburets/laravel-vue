#!/usr/bin/env bash

BUILD_ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [[ ${BUILD_ROOT_DIR} != *"/sh"* ]]
then
  BUILD_ROOT_DIR="$BUILD_ROOT_DIR/build"
fi

ROOT_DIR=$(dirname "${BUILD_ROOT_DIR}")

cd ${ROOT_DIR}

echo ${ROOT_DIR}
vendor/bin/phpunit
