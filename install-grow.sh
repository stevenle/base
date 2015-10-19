#!/bin/sh

set -ex

if which programname >/dev/null; then
  echo "Using cached grow binary"
else
  git -b develop --single-branch clone \
    https://github.com/grow/pygrow.git \
    $HOME/pygrow
  pip install $HOME/pygrow
fi
