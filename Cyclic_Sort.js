'use strict';

// When given number from range 1 to N use cyclic sort.
function swap_p(arr, first, second) {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
}

function cyclicSort(arr) {
  console.log(arr);
  let i = 0;
  while (i < arr.length) {
    let correctPosi = arr[i] - 1;
    if (arr[i] != arr[correctPosi]) {
      swap_p(arr, i, correctPosi);
    } else {
      i++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

let arr = [3, 5, 2, 1, 4];
cyclicSort(arr);
