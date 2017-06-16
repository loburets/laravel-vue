#!/usr/bin/env bash

BUILD_ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [[ ${BUILD_ROOT_DIR} != *"/sh"* ]]
then
  BUILD_ROOT_DIR="$BUILD_ROOT_DIR/build"
fi

ROOT_DIR=$(dirname "${BUILD_ROOT_DIR}")

cd ${ROOT_DIR}

php artisan ide-helper:generate
php artisan ide-helper:meta
php artisan ide-helper:models --write

echo "Ide data is updated..."