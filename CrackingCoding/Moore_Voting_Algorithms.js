'use strict';
/*
function maxFreq(arr, n) {
  // voting algorithms
  let result = 0;
  let count = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i] == arr[result]) {
      count++;
    } else {
      count--;
    }
    if (count == 0) {
      result = i;
      count = 1;
    }
  }
  return arr[result];
}

let arr = [1, 3, 4, 4, 4, 5];
let n = arr.length;

let freq = maxFreq(arr, n);
let count = 0;
for (let i = 0; i < n; i++) {
  if (arr[i] == freq) {
    count++;
  }
}

console.log(arr[count]);

function migratoryBird(arr) {
  let max = 0;
  let max_id = 6;
  let store = new Array(6).fill(0);
  for (let num of arr) {
    store[num]++;
    if (store[num] > max) {
      max = store[num];
      max_id = num;
    } else if (store[num] == max && num < max_id) {
      max_id = num;
    }
  }
  return max_id;
}

let arr = [2, 2, 1, 3, 2];
let res = migratoryBird(arr);
console.log(`max number frequency:- ${res}`);
*/
// let arr = [2, 2, 1, 3, 2];
// let ar = Array.from(arr);
// console.log(ar);
var twoSum = function (nums, target) {
  let ar = Array.from(nums);
  let ans = [];
  for (let i = 0; i < ar.length; i++) {
    let fnd = target - ar[i];
    let ind = ar.indexOf(fnd);
    if (ind != -1 && ind !== i) return [i, ind];
  }
};
let arr = [2, 7, 11, 15];
let target = 9;
let rea = twoSum(arr, target);
console.log(rea);
