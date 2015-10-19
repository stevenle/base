#!/bin/sh

set -ex

if [ ! -d "$HOME/pygrow" ]; then
  git -b develop --single-branch clone \
    https://github.com/grow/pygrow.git \
    $HOME/pygrow
else
  cd $HOME/pygrow
  git pull
fi

pip install $HOME/pygrow
