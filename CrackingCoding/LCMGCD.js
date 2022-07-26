'use strict';
/*
function lcm(num1, num2) {
  // higher number amoung num1 and num2 is stored in min variable.
  let min = num1 > num2 ? num1 : num2;
  while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
      console.log(min);
      break;
    }
    min++;
  }
}
let a = 24;
let b = 15;
lcm(a, b);
//======================================================

// GCD
// 36= 2*2*3*3
// 60=2*2*3*5
//Answer :- 12

function gcdFind(num1, num2) {
  let gcd;
  for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      gcd = i;
    }
  }
  return gcd;
}
let a = 36,
  b = 60;
let res = gcdFind(a, b);
console.log(res);
// 12

//==========================================================
// Find the LCM in given array..
function gcdd(a, b) {
  if (b == 0) return a;
  return gcdd(b, a % b);
}
function findLCM(arr, N) {
  let ans = arr[0];
  for (let i = 1; i < N; i++) {
    ans = (arr[i] * ans) / gcdd(arr[i], ans);
  }
  return ans;
}

let arr = [2, 7, 3, 9, 4];
let n = arr.length;
let res = findLCM(arr, n);
console.log('LCM:- ' + res); //252
*/
//============================================================
// find gcd in given array.

function gcdd(a, b) {
  if (a == 0) return b;
  return gcdd(b % a, a);
}

function lcmArray(arr) {
  let ans = arr[0];
  for (let i = 1; i < arr.length; i++) {
    ans = gcdd(arr[i], ans);
    if (ans == 1) return 1;
  }
  return ans;
}

let arr = [16, 32, 96];
let res = lcmArray(arr);
console.log('GCD :- ' + res); // 2
//=============================================================

// let arr = [12, 2, 1, 3, 2];
// for (let i = 0; i < arr.length; i++) {
//   let sub_arr = arr.slice(i, i + 1);
//   console.log(i);
//   console.log(i + 1);
//   console.log(sub_arr);
//   break;
// }

//=============================================
// find the index valuue.
// function twoSum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     let find = target - arr[i];
//     let index = arr.indexOf(find);
//     if (index != -1 && index != i) {
//       return [i, index];
//     }
//   }
// }
// let arr2 = [7, 9, 6, 11, 10];
// let target2 = 20;
// let arr = [2, 7, 11, 15];
// let target = 9;
// let arr1 = [3, 2, 4];
// let target1 = 6;
// let res = twoSum(arr2, target2);
// console.log(`find the index ${res}`);
