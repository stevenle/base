#!/bin/sh

set -ex

grow deploy -f travis
cd stevenle.github.io
git config user.name "Travis CI"
git config user.email "stevenle08@gmail.com"

if [[ -z $(git status -s) ]]; then
  echo "No changes to commit"
else
  git add .
  git commit -m "Auto deploy at rev=$TRAVIS_COMMIT"
  git push -u origin master
fi
