#!/bin/sh

set -ex

if [ ! -d "$HOME/pygrow" ]; then
  git clone https://github.com/grow/pygrow.git $HOME/pygrow
else
  git pull
fi

pip install $HOME/pygrow
