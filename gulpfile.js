// Copyright 2015 Steven Le (stevenle08@gmail.com)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Gulp build file.
 * @author stevenle08@gmail.com (Steven Le)
 */

var autoprefixer = require('gulp-autoprefixer');
var closureCompiler = require('gulp-closure-compiler');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');

var AUTOPREFIXER_OPTIONS = {
  'browsers': [
    '> 1%',
    'last 2 versions',
    'Firefox ESR',
    'iOS 7'
  ]
};

var SASS_OPTIONS = {
  'outputStyle': 'compressed'
};

gulp.task('basecss', function() {
  return gulp.src('./src/sass/base.scss')
      .pipe(plumber())
      .pipe(sass(SASS_OPTIONS))
      .pipe(autoprefixer(AUTOPREFIXER_OPTIONS))
      .pipe(rename('base.min.css'))
      .pipe(gulp.dest('./dist/css/'));
});

gulp.task('basejs', function() {
  return gulp.src('./src/js/**.js')
      .pipe(closureCompiler({
        compilerPath: './bower_components/closure-compiler/compiler.jar',
        compilerFlags: {
          compilation_level: 'SIMPLE_OPTIMIZATIONS',
          warning_level: 'VERBOSE'
        },
        fileName: 'base.min.js',
        js: [
            './src/js/**.js',
            '!**_test.js'
        ],
        tieredCompilation: true
      }))
      .pipe(gulp.dest('./dist/js/'));
});

gulp.task('sitecss', function() {
  return gulp.src('./src/sass/site.scss')
      .pipe(plumber())
      .pipe(sass(SASS_OPTIONS))
      .pipe(autoprefixer(AUTOPREFIXER_OPTIONS))
      .pipe(rename('site.min.css'))
      .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/js/*.js'], ['basejs']);
  gulp.watch(['./src/sass/*.scss'], ['basecss', 'sitecss']);
});

gulp.task('build', ['basecss', 'basejs', 'sitecss']);
gulp.task('default', ['basecss', 'basejs', 'sitecss', 'watch']);
