#!/bin/bash

touch ./env.json

if [ -z "${ENV_DEV}" ]; then
  ENV_DEV='{"isProd": false}'
else
  ENV_DEV=$ENV_DEV
fi

if [ -z "${ENV_PROD}" ]; then
  ENV_PROD='{"isProd": true}'
else
  ENV_PROD=$ENV_PROD
fi

if [ "${CI_COMMIT_BRANCH}" = 'master' ]; then
  echo "$ENV_PROD" > ./env.json
else
  echo "$ENV_DEV" > ./env.json
fi


