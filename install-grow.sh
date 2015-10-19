#!/bin/sh

set -ex

if which grow >/dev/null; then
  echo "Using cached grow binary"
else
  git clone -b develop --single-branch \
    https://github.com/grow/pygrow.git \
    $HOME/pygrow
  pip install $HOME/pygrow
fi
