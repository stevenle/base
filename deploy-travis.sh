#!/bin/sh

set -ex

git config user.name "Travis CI"
git config user.email "stevenle08@gmail.com"

grow deploy -f travis
cd stevenle.github.io

if [[ -z $(git status -s) ]]; then
  echo "No changes to commit"
else
  git add .
  git commit -m "Auto deploy at rev=$TRAVIS_COMMIT"
  git push -u origin master
fi
