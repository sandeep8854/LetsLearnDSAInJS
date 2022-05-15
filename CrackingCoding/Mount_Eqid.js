'use strict';
//count triplet given array...
/*
function triplet(arr) {
  let count = 0;
  let N = arr.length;
  // console.log(N);
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr, target);
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        if (arr[i] + arr[j] + arr[k] == target) {
          count++;
        }
      }
    }
  }
  return count;
}
let arr = [1, 0, 2, 6, 3, 9];
let target = 11;
let res = triplet(arr);
console.log(res);


//===========================================================================================

let lefthand = 0;
let rightHand = 0;
// let str = 'zips';
// let str = 'bray';
let str = 'arise';
//console.log(str.length);

// let spllting = str.split('');
// console.log(spllting);
//==============================
// let code = str.charCodeAt(3); // 26
// console.log(code - 96); // 19

//============================================================
for (let i = 0; i < parseInt(str.length / 2); i++) {
  let left = str.charCodeAt(i);
  lefthand = lefthand + (left - 96);
}
//console.log(lefthand);
//===============================================================
for (let i = parseInt(str.length / 2); i < str.length; i++) {
  let right = str.charCodeAt(i);
  rightHand = rightHand + (right - 96);
}
// console.log(rightHand);
//====================================================================

if (str.length % 2 == 1) {
  console.log('-1');
} else if (lefthand == rightHand) {
  console.log('1');
} else {
  console.log('0');
}
//================================================================
// for (let i = 'a'; i <= 'z'; i++) {
//   console.log(String.charCodeAt(97 + i));
// }

// let len = spllting.length;
// console.log(len);
// lefthand = parseInt(len / 2);
// console.log(lefthand);

//for (let i = 0; i < parseInt(len / 2); i++) {}

*/

function balancedString(str) {
  let lefthand = 0;
  let rightHand = 0;

  for (let i = 0; i < parseInt(str.length / 2); i++) {
    let left = str.charCodeAt(i);
    lefthand = lefthand + (left - 96);
  }

  for (let i = parseInt(str.length / 2); i < str.length; i++) {
    let right = str.charCodeAt(i);
    rightHand = rightHand + (right - 96);
  }
  // console.log(rightHand);
  //====================================================================

  if (str.length % 2 == 1) {
    console.log('-1');
  } else if (lefthand == rightHand) {
    console.log('1');
  } else {
    console.log('0');
  }
}
let str = 'positionnn';
balancedString(str);
