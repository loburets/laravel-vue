#!/usr/bin/env bash

BUILD_ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [[ ${BUILD_ROOT_DIR} != *"/sh"* ]]
then
  BUILD_ROOT_DIR="$BUILD_ROOT_DIR/sh"
fi

ROOT_DIR=$(dirname "${BUILD_ROOT_DIR}")

cd ${ROOT_DIR}

php artisan view:clear
php artisan cache:clear
php artisan clear-compiled
php artisan optimize

php artisan migrate:refresh --seed

echo "Done..."