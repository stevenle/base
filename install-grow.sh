#!/bin/sh

set -ex

git clone -b develop --single-branch \
  https://github.com/grow/pygrow.git \
  $HOME/pygrow
pip install $HOME/pygrow
