'use strict';

timing_test(function() {
  var firstPolyfillRect = document.getElementById('firstPolyfillRect');
  var firstNativeRect = document.getElementById('firstNativeRect');
  var secondPolyfillRect = document.getElementById('secondPolyfillRect');
  var secondNativeRect = document.getElementById('secondNativeRect');
  var thirdPolyfillRect = document.getElementById('thirdPolyfillRect');
  var thirdNativeRect = document.getElementById('thirdNativeRect');

  at(0, 'width', 100, firstPolyfillRect, firstNativeRect);
  at(1000, 'width', 150, secondPolyfillRect, secondNativeRect);
  at(2000, 'width', 200, firstPolyfillRect, firstNativeRect);
  at(4000, 'width', 300, thirdPolyfillRect, thirdNativeRect);
  at(5000, 'width', 350, firstPolyfillRect, firstNativeRect);
}, 'escape punctuation in element ids');
