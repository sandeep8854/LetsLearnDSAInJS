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

//=============================================================================
// trick-1: - divisible by 400   --divisible by 4 AND not divisible by 100
//            divisible by 4     -- OR divisible by 400
//       NOT  divisible by 100.
function leapYear(yaer) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(year + ' It is Leap Year ');
  } else {
    console.log(yaer + ' It is not Leap Year ');
  }
}

let year = 1800;
leapYear(year);




function billSplit(bill, k, Bcharge) {
  let actualBill = 0;
  for (let i = 0; i < bill.length; i++) {
    if (bill[i] != bill[k]) {
      actualBill += bill[i];
    }
  }
  //console.log(actualBill);
  let splitBill = actualBill / 2;
  //console.log(splitBill);
  // let annaDidNotEat = bill[k];
  if (splitBill == Bcharge) {
    console.log('Bon Appetit');
  } else {
    console.log(Bcharge - splitBill);
  }
}

let bill = [3, 10, 2, 9];

let k = 1;
let Bcharge = 7;
billSplit(bill, k, Bcharge);




//===========================================================================

function sett(arr) {
  let myset = new Set(arr);
  console.log(myset.size - 1);

  // console.log(myset);
}
let arr = [1, 2, 1, 2, 1, 3, 2];
sett(arr);


//=========================================================
// function countPair(arr) {
//   let set = new Set();

//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(arr);
//   let ij = 0;
//   let j = 0;
//   var count = 1;
//   while (arr.length < 0) {
//     if (arr[i] == arr[ij + 1]) {
//       count++;
//       i++;
//       ij++;
//     }
//     set.add(count);
//     console.log(count);
//   }

//   count = 1;
//   console.log(set);
// }

// let arr = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
// //let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// countPair(arr);

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] == arr[j]) {
//       count++;
//     }
//   }
//   set.add(count);
//   count = 1;
//   //}
//   console.log(set);
//   let val = 0;
//   let i = 2;
//   for (let x of set) {
//     if (x > 2) {
//       val = val + Math.floor(x / i);
//     }
//   }
//   console.log(val);
// }

//====
// let xy = 4;
// let i = 2;
// console.log(Math.floor(xy / i) + ' : count '); //3
// function pairCount(arr) {
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   let len = arr.length;
//   let set = new Set();

//   let count = 1;
//   var i = 0;
//   let j = 0;

//   while (len > 0) {
//     if (arr[i] == arr[j + 1]) {
//       count++;
//       i++;
//       j++;
//     }
//     set.add(count);
//     count = 1;
//     len--;
//   }

//   console.log(set);
// }

// let arr = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
// pairCount(arr);

//=========================================================

// function pairSocks(arr) {
//   let count = 0;
//   let set = new Set();
//   set.add(1);
//   set.add(2);
//   console.log(set.has(1));
//   console.log(set);
//   console.log(set.delete(2));
// }
// let arr = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
// pairSocks(arr);

//=================================================================
function pairSocks(arr) {
  let pairCount = 0;
  let searchEle = new Set();
  for (let sock of arr) {
    if (searchEle.has(sock)) {
      pairCount++;
      searchEle.delete(sock);
    } else {
      searchEle.add(sock);
    }
  }
  return pairCount;
}

let arr = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
let res = pairSocks(arr);
console.log(res);

//===========================================================================

let n = 6;
let p = 2;
let pagesCountfromFront = n / 2;
let totalTargetPagefromFront = p / 2;
let exactPagefromback = pagesCountfromFront - totalTargetPagefromFront;
let ress = Math.min(totalTargetPagefromFront, exactPagefromback);
console.log(ress);

//========================================================================

// let n = 5;
// console.log(Math.floor(n / 2));

//===================================================
function drawing(n, p) {
  let front = Math.floor(p / 2);
  // console.log(front);
  let back;

  if (n % 2 == 1) {
    back = Math.round(n - p) / 2;
    console.log(back);
  } else {
    back = Math.round(n - p + 1) / 2;
  }
  return Math.min(front, back);
}

let n = 5;
let p = 4;
let re = drawing(n, p);
console.log(re);
*/
console.log(Math.trunc(5 - 4) / 2);
