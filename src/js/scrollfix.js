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
 * @fileoverview Scrollfix.
 * @author stevenle08@gmail.com (Steven Le)
 */

goog.provide('base.scrollfix');

/** @private {Element} */
base.scrollfix.scrollEl_ = null;

/** @private {Element} */
base.scrollfix.fixedEl_ = null;

/**
 * Initializes a scrollfix element.
 * @param {!Element} scrollEl Element to monitor for scroll.
 * @param {!Element} fixedEl Element to attach an "active" class to when the
 *     user scrolls past the {@code scrollEl} element.
 */
base.scrollfix.init = function(scrollEl, fixedEl) {
  base.scrollfix.scrollEl_ = scrollEl;
  base.scrollfix.fixedEl_ = fixedEl;

  document.body.onscroll = base.scrollfix.onScroll_;
  base.scrollfix.onScroll_();
};

/**
 * On scroll callback function.
 * @private
 */
base.scrollfix.onScroll_ = function() {
  var scrollTop = window.pageYOffset || document.body.scrollTop;
  var clientTop = document.body.clientTop || 0;
  var top = scrollTop - clientTop;
  base.scrollfix.fixedEl_.classList.toggle(
      'active', top > base.scrollfix.scrollEl_.offsetTop);
};
