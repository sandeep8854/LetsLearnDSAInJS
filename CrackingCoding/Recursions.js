'use strict';

// print number 1 to n using recursion.
/*
function usingRecursion(n) {
  if (n == 1) {
    console.log(n);  //10
    return;
  }
  usingRecursion(n - 1);  //print 1 to n-1 // 1,2,3,4,5,6,7,8,9.
  console.log(n);
}

let n = 10;
console.log(usingRecursion(n));

//==============================================================================

// print n to 1 number using recursion.

function usingRecurion(n) {
  if (n == 1) {
    console.log(n); // 1.
    return;
  }
  console.log(n);
  usingRecurion(n - 1);
}
let n = 10;
console.log(usingRecurion(n));

//===============================================================================

// sort the array using recursion.

function sortArray(arr, i = arr.length - 1) {
  if (i == 0) {
    return arr;
  }
  for (let j = i; j >= 0; j--) {
    if (arr[j - 1] > arr[i]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[i];
      arr[i] = temp;
    }
  }
  return sortArray(arr, i - 1);
}
let arr = [2, 5, 100, 6, 85, 12, 45];
console.log(sortArray(arr));

//==========================================================================

function kthGrammer(n, k) {
  if (n == 1 && k == 1) {
    return 0;
  }

  let mid = ~~(2 ** (n - 1) / 2);
  if (k <= mid) {
    return kthGrammer(n - 1, k);
  } else {
    return !kthGrammer(n - 1, k - mid);
  }
}

let n = 4;
let k = 5;
console.log(kthGrammer(n, k));

//==================================================================================

function findFibonacii(n) {
  if (n < 2) {
    return n;
  }
  return findFibonacii(n - 1) + findFibonacii(n - 2);
}

let n = 3;
console.log(findFibonacii(n));

//===================================================================================

function findFactorial(n) {
  if (n == 1) {
    return n;
  }
  return n * findFactorial(n - 1);
}
let n = 5;
console.log(findFactorial(n));

//=================================================================

function binarySearchRec(arr, target, start, end) {
  if (start > end) {
    return -1;
  }
  let mid = start + Math.floor((end - start) / 2);
  if (arr[mid] == target) {
    return mid;
  }

  if (target < arr[mid]) {
    return binarySearchRec(arr, target, start, mid - 1);
  }

  return binarySearchRec(arr, target, mid + 1, end);
}

let arr = [10, 11, 15, 17, 18, 22, 25];
let target = 11;
let start = 0;
let end = arr.length - 1;
console.log(binarySearchRec(arr, target, start, end));

//======================================================================

// Sum of all digits.
//Ex:- n=1342 , 1+3+4+2=10.

function sumOfDigit(n) {
  if (n == 0) {
    return 0;
  }
  return (n % 10) + sumOfDigit(~~(n / 10));
}
let n = 1342;
console.log(sumOfDigit(n));

//===========================================================================

function oneToNNum(n) {
  if (n == 1) {
    console.log(n);
    return;
  }
  oneToNNum(n - 1);
  console.log(n);
}

let n = 10;
console.log(oneToNNum(n));

//==============================================================================

// count number of zero in given number.

function helper(n) {
  return help(n, 0);
}
function help(n, c) {
  if (n == 0) {
    return c;
  }
  let reminder = n % 10;
  if (reminder == 0) {
    return help(~~(n / 10), c + 1);
  }
  return help(~~(n / 10), c);
}
let n = 300001245;
console.log(helper(n));

//============================================================================

// Q:- Given an array check its sorted or not.
function checkingArraySort(arr, index) {
  if (index == arr.length - 1) {
    return true;
  }

  return arr[index] < arr[index + 1] && checkingArraySort(arr, index + 1);
}

let arr = [1, 2, 4, 8, 12, 15, 19];
let index = 0;
console.log(checkingArraySort(arr, index));

//================================================================================

// Question:- Given an array , check target element present or not.
//            if present return true otherwise false.

function chekingEle(arr, target, index) {
  if (index == arr.length) {
    return false;
  }

  return arr[index] == target || chekingEle(arr, target, index + 1);
}

let arr = [1, 6, 7, 9, 3, 2, 12, 15, 16, 11];
let target = 2;
let index = 0;
console.log(chekingEle(arr, target, index));

//=====================================================================================

// Question:-  Given an array , check target element present or not.
//            if present return index otherwise -1.

function chekingEle(arr, target, index) {
  if (index == arr.length) {
    return -1;
  }
  if (target == arr[index]) {
    return index;
  } else {
    return chekingEle(arr, target, index + 1);
  }
}

let arr = [1, 6, 7, 9, 3, 2, 12, 15, 16, 11];
let target = 2;
let index = 0;
console.log(chekingEle(arr, target, index));

//================================================================================

// Question:- Given an array find the target element and return new array.
//          arr = [1, 6, 7, 9, 3, 12, 12, 15, 16, 11];
//          target=12
// Output=  [5,6]  5 and 6 are index value.

function chekingEle(arr, target, index, newArr) {
  if (index == arr.length) {
    return newArr;
  }
  if (arr[index] == target) {
    newArr.push(index);
  }
  return chekingEle(arr, target, index + 1, newArr);
}
let arr = [1, 6, 7, 9, 3, 12, 12, 15, 16, 11];
let target = 12;
let index = 0;
let newArr = [];
console.log(chekingEle(arr, target, index, newArr));


//===============================================================================
// Q:- Given an string remove given chaeracter.

function removeCharacter(str) {
  if (str.length == 0) {
    return str;
  }
  let ch = str[0];
  if (ch == 'a') {
    return removeCharacter(str.substring(1));
  } else {
    return ch + removeCharacter(str.substring(1));
  }
}
let str = 'baccad';
console.log(removeCharacter(str));

//============================================================================
// Q:- Given an string find all substring.

function findAllSubstring(opt, str) {
  if (str.length == 0) {
    console.log(opt);
    return;
  }

  let ch = str[0];

  findAllSubstring(opt + ch, str.substring(1));
  findAllSubstring(opt, str.substring(1));
}
let opt = '';
let str = 'abc';
findAllSubstring(opt, str);

//========================================================================
// function findAllSubstring(opt, str) {
//   if (str.length == 0) {
//     let listArr = [];
//     listArr.push(opt);
//     return listArr;
//   }

//   let ch = str[0];

//   let left = findAllSubstring(opt + ch, str.substring(1));
//   let right = findAllSubstring(opt, str.substring(1));

//   left.push(right);
//   return left;
// }

// let opt = '';
// let str = 'abc';
// console.log(findAllSubstring(opt, str));

//==========================================================================

//We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number
//of ears across all the bunnies recursively (without loops or multiplication).

//bunnyEars(0) → 0
//bunnyEars(1) → 2
//bunnyEars(2) → 4

function bunnyEars(n) {
  if (n == 0) {
    return 0;
  }
  return 2 + bunnyEars(n - 1);
}
let n = 4;
console.log(bunnyEars(n));

//=============================================================================

function bunnyEars2(n) {
  if (n == 0) {
    return 0;
  }
  if (n % 2 == 0) {
    return 3 + bunnyEars2(n - 1);
  } else {
    return 2 + bunnyEars2(n - 1);
  }
}
let n = 3;
console.log(bunnyEars2(n));

//============================================================================

function triangle(rows) {
  if (rows == 0) {
    return 0;
  }
  return rows + triangle(rows - 1);
}
let rows = 2;
console.log(triangle(rows));

//==========================================================================

function sumDigits(n) {
  if (n == 0) {
    return 0;
  }
  let reminder = n % 10;
  n = ~~(n / 10);
  return reminder + sumDigits(n);
}
let n = 49;
console.log(sumDigits(n));

//=====================================================================

function count7(n) {
  if (n == 0) {
    return 0;
  }

  let reminder = n % 10;
  n = ~~(n / 10);
  if (reminder == 7) {
    return 1 + count7(n);
  } else {
    return count7(n);
  }
}

let n = 717;
console.log(count7(n));

//========================================================================

function power(base, n) {
  if (n == 0) {
    return 1;
  }
  return base * power(base, n - 1);
}

let base = 3;
let n = 2;
console.log(power(base, n));

//===============================================================================

function countX(str) {
  if (str.length == 0) {
    return 0;
  }

  if (str[0] == 'x') {
    return 1 + countX(str.substring(1));
  } else {
    return countX(str.substring(1));
  }
}

let str = 'xxhixx';
console.log(countX(str));

//=============================================================================4

function countHi(str) {
  if (str.length < 2) {
    return 0;
  }

  if (str.substring(0, 2) == 'hi') {
    return 1 + countHi(str.substring(1));
  } else {
    return countHi(str.substring(1));
  }
}
let str = 'xxhixxhi';
console.log(countHi(str));

//=================================================================================

function replaceXY(str) {
  if (str.length == 0) {
    return str;
  }
  let ch = str[0];
  if (ch == 'x') {
    return 'y' + replaceXY(str.substring(1));
  } else {
    return str[0] + replaceXY(str.substring(1));
  }
}

let str = 'xxhixx';
console.log(replaceXY(str));

//=====================================================================================

function groupSum(index, arr, target) {

  //-----------------------------------------------

  if(index==arr.length){
    if(target==0){
      return true;
    }else{
      return false;
    }
  }
else{

}

//-----------------------------------------------------------
  //-----------------------------------------------------
  if (target === 0) return true;
  if (index >= arr.length || target < 0) return false;
  return (
    groupSum(index + 1, arr, target - arr[index]) ||
    groupSum(index + 1, arr, target)
  );
}

let index = 0;
let arr = [2, 4, 8];
let target = 10;
console.log(groupSum(index, arr, target));


//=================================================================================

function groupSum6(index, arr, target) {
  if (index == arr.length) {
    if (target == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (arr[index] == 6) {
      return groupSum6(index + 1, arr, target - arr[index]);
    } else {
      return (
        groupSum6(index + 1, arr, target - arr[index]) ||
        groupSum6(index + 1, arr, target)
      );
    }
  }
}

let index = 0;
let arr = [5, 6, 2];
let target = 8;

console.log(groupSum6(index, arr, target));

//===================================================================================

function findingTrueFalse(index, sum_1, sum_2, arr) {
  if (index >= arr.length) {
    if (sum_1 == sum_2) {
      return true;
    } else {
      return false;
    }
  } else {
    return (
      findingTrueFalse(index + 1, sum_1 + arr[index], sum_2, arr) ||
      findingTrueFalse(index + 1, sum_1, sum_2 + arr[index], arr)
    );
  }
}

function splitArray(arr) {
  return findingTrueFalse(0, 0, 0, arr);
}
let arr = [5, 2, 3];
console.log(splitArray(arr));

//===============================================================================

function checkingMultiple10AOdd(index, sum_1, sum_2, arr) {
  if (index >= arr.length) {
    if (sum_1 % 10 == 0 && sum_2 % 2 == 1) {
      return true;
    } else {
      return false;
    }
  } else {
    return (
      checkingMultiple10AOdd(index + 1, sum_1 + arr[index], sum_2, arr) ||
      checkingMultiple10AOdd(index + 1, sum_1, sum_2 + arr[index], arr)
    );
  }
}
function splitOdd10(arr) {
  return checkingMultiple10AOdd(0, 0, 0, arr);
}
let arr = [5, 5, 6, 1];
console.log(splitOdd10(arr));

//=========================================================================================
// 0 1 1 2 3 5 8 13 21

function convertingDynamic(n, dp) {
  if (n <= 1) return n;

  if (dp[n] != -1) return dp[n];

  return (dp[n] = convertingDynamic(n - 1, dp) + convertingDynamic(n - 2, dp));
}

let n = 6;
let dp = new Array(n + 1).fill(-1);
console.log(convertingDynamic(n, dp));

//============================================================================================

