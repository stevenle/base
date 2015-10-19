#!/bin/sh

set -e

grow build
gulp build
percy snapshot build/
