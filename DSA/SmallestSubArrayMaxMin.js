'use strict';

function minSubArrayy(arr, n) {
  // find the max and min value
  let minVal = Number.MAX_VALUE;
  let maxVal = Number.MIN_VALUE;

  for (let i = 0; i < n; i++) {
    minVal = Math.min(minVal, arr[i]);
    maxVal = Math.max(maxVal, arr[i]);
  }
  //   console.log(minVal + '  = ' + maxVal);
  let positionMin = -1;
  let positionMax = -1;
  let anser = Number.MAX_VALUE; // 1.7976931348623157e+308

  for (let i = 0; i < n; i++) {
    if (arr[i] == minVal) positionMin = i;
    if (arr[i] == maxVal) positionMax = i;
  }
  //   console.log(positionMin + ' = ' + positionMax);
  if (positionMax != -1 && positionMin != -1) {
    anser = Math.min(anser, Math.abs(positionMin - positionMax) + 1);
  }
  return anser;
}

let arr = [1, 5, 10, 7, 1, 9, 4];
let n = arr.length;
let res = minSubArrayy(arr, n);
console.log(res);
console.log((7 * (7 + 1)) / 2);
