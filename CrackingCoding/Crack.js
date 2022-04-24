'use strict';

//===============================================================
/*
function sum(num) {
  if (num <= 0) {
    return 0;
  }
  return num + sum(num - 1);
}
let res = sum(5);
console.log(res); // 15

// code like would take o(n) time and O(n) space.

//==========================================================

function pairSumSequence(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + pairSum(i, i + 1);
  }
  return sum;
}

function pairSum(a, b) {
  return a + b;
}

let res = pairSumSequence(5);
console.log(res); // 25
// O(n) call for pair sum and O(1)space complexcity.
//=================================================================

// find the min and max
// Step 1st

function minMax(arr) {
  let minn = Number.MAX_VALUE;
  let maxx = Number.MIN_VALUE;
  // console.log(minn + '===' + maxx);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minn) minn = arr[i];
    if (arr[i] > maxx) maxx = arr[i];
  }
  console.log('Minimum number in Array:-  ' + minn); // 2
  console.log('Maximum Number in Array:-  ' + maxx); // 99
}

let arr = [21, 45, 63, 14, 2, 47, 99];
minMax(arr);

// space complexity O(1)
// time comlexcity O(n)
//===============================================================
function foo(arr) {
  let sum = 0;
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  console.log(sum + '===' + product);  // 15     120
}

let arr = [1, 2, 3, 4, 5];
foo(arr);
// This will take O(N) time .

//=================================================================
function printPair(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i] + ' , ' + arr[j]);
    }
  }
}

let arr = [12, 14, 15, 46, 78, 95];
printPair(arr);

// the inner loop has O(N) iterations and its called N times therefore,
//  the runtime is  O(n^2).
// ===================================================================

function printUnorderPair(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ' ' + arr[j]);
    }
  }
}

let arr = [12, 14, 15, 46, 78, 95];
printUnorderPair(arr);
//====================================================================

function reverseArr(arr) {
  for (let i = 0; i < parseInt(arr.length / 2); i++) {
    let other = arr.length - i - 1;
    let temp = arr[i];
    arr[i] = arr[other];
    arr[other] = temp;
  }
  return arr;
}

let arr = [12, 14, 15, 46, 78, 95];
let res = reverseArr(arr);
console.log(res);

// Run in O(N) time complexcity.

//===================================================================
 function isPrime(num) {
  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

let res = isPrime(97);
console.log(res);

//=================================================================
function isPrime(num) {
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

let res = isPrime(47);
console.log(res);
// This runs is O(rootN) time.

//=================================================================

function fib(num) {
  if (num <= 1) return 0;
  else if (num == 1) return 1;
  return fib(num - 1) + fib(num - 2);
}

let res = fib(8);
console.log(res);  // 13

// we have established for recursive call: 0
// time comlexcity will be like as O(2^n) will be happend.
//=============
//print all fiboancci series......like as 0 to N.
// what is time complexcity of the below program.

function fib(num) {
  if (num <= 0) return 0;
  else if (num == 1) return 1;
  else return fib(num - 1) + fib(num - 2);
}

function allFib(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i + ' : ' + fib(i));
  }
}

allFib(15);

// Its still O(2^n) time complexcity.

//=================================================================

// ..
//-------------------------
//

function birthdayCake(arr) {
  let count = 0;
  let N = arr.length;
  arr.sort(function (a, b) {
    return a - b;
  });
  let maximu = arr[N - 1];
  for (let i = 0; i < arr.length; i++) {
    if (maximu == arr[i]) {
      count++;
    }
  }
  console.log('Count the Candles ' + count);
  // console.log(maxi);
  // console.log(arr);
  // console.log(N);
}

let arr = [4, 4, 1, 3];
//[3, 2, 1, 3];
birthdayCake(arr);


function countAppleAndOrange(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;
  let appleArray = [];
  let orangeArray = [];
  for (let i = 0; i < apples.length; i++) {
    appleArray.push(a + apples[i]);
  }

  for (let i = 0; i < oranges.length; i++) {
    orangeArray.push(b + oranges[i]);
  }

  // console.log(appleArray.length);
  // console.log(orangeArray.length);
  // console.log(appleArray);
  // console.log(orangeArray);

  for (let i = 0; i < appleArray.length; i++) {
    if (appleArray[i] >= s && appleArray <= t) {
      appleCount++;
    }
  }
  for (let i = 0; i < orangeArray.length; i++) {
    if (orangeArray[i] >= s && appleArray <= t) {
      orangeCount++;
    }
  }
  console.log(appleCount);
  console.log(orangeCount);
}

let apples = [-2, 2, 1];
let oranges = [5, -6];
let s = 7;
let t = 11;
let a = 5;
let b = 15;
countAppleAndOrange(s, t, a, b, apples, oranges);

// let a = 5;
// let b = 5;
// if (5 < 5) {
//   console.log('yes');
// } else {
//   console.log('no');
// }

// let str = '07:05:45PM';
// let time = str.split(':');
// console.log(time);
// // 0--"07"
// // 1--"05"
// // 2--"45PM"

// let num = 12;
// let num1 = '12';
// if (num == num1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let hour = time[0];
// console.log(hour); // 07

// let minute = time[1];
// console.log(minute); // 05

// let second = time[2].substring(0, 2);
// console.log(second); // 45

// let ampm = time[2].substring(2, 4);
// console.log(ampm); // PM

// console.log(second); //45PM
// let str1 = 'sandeep';
// console.log('Sandeep ' + str1.substring(0, 2) + '--' + str1.substring(2, 4)); // sa--nd

// let ampm = time[2].substring(2, 4);

//==========================================================================================

// let result = Math.pow(2, 3);
// console.log(result);
//==========================================
// let arr = [7, 4, 9, 6];
// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr);

// let ar = [1, 3, 2];
// ar.sort(function (a, b) {
//   return b - a;
// });
// console.log(ar);
//============================================
// let arr = [7, 4, 9, 6];
// arr.sort(function (b, a) {
//   return b - a;
// });
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
//=====================================
// let arrr = [1, 3, 2];
// arrr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arrr);
//
//==============================================
// let sum = 0,
//   number;

// while (true) {
//   // take input again if the number is positive
//   number = parseInt(prompt('Enter a number: '));

//   // break condition
//   if (number < 0) {
//     break;
//   }

//   // add all positive numbers
//   sum += number;
// }

// // display the sum
// console.log(`The sum is ${sum}.`);

//=========================================================
let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
let max = scores[0];
let min = scores[0];
console.log(`max value are ${max} and min value are ${min}`);
for (let i = 0; i < 2; i++) {
  if (scores[i] > max) {
    console.log('You are max!');
  }

  if (scores[i] < min) {
    console.log(`You are min!`);
  }
}
console.log(`I am outer loop.`);

//================================================================
// let arr = new Array(2);
// console.log(arr.length);

//================================================================
// Bitwise Manipulation
//------------------------

//  AND -
-----------------------------------
//     a  |  b   | a & b
       0     0      0  false  
       0     1      0  false  
       1     0      0  false
       1     1      1  true
   ------------------------------    

   point no.1 when you add & 1 with any number , digit remain the same.
         110010100
      &  111111111
      -----------------
         110010100
      -----------------
//------------------------------------------------------------      
  //  OR -
  if any one is ture entire expression will be true.
     
      a  |   b   | a OR b
      0      0       0   false
      0      1       1   true
      1      0       1   true
      1      1       0   false
 
----------------------------------------------------------
XOR-  (^)    (if and only if)
            (exclusive OR)
[only one should be true ]       
        a   |  b   | a ^ b
        0      0       0  flase
        0      1       1  true
        1      0       1  true
        1      1       0  false
    
   Observations-
                if xor any number with  1  complement with this number
                means (opposite)
                
   Observations-
                   _
point 1-    a ^ 1= a
   
point 2-    a ^ 0= a

point 3-    a ^ a= 0

let a = 100;
console.log(a ^ 1); //101

console.log(a ^ 2); //102

console.log(a ^ 9); //109

console.log(a ^ 0); //100

console.log(a ^ a); // 0

// let a = 1000;
// console.log(~a); // -1001
//-----------------------------------------------------------------

// Left Shift Operator:--- <<
--------------------------
Left side the Number given like a double of this number.
if  a << b
then value will be like as 
    a*2^b        a*2powerb
    example
    a=10;
    10<<1       a*2power1 
                10*2power1
                10*2 = 20



let a = 10;
console.log(10 << 1); // 20
//============================================================

Right shift operator--
--------------------
dividing number by 2 that it.

0011001 >> 1 =  001100= and removing leading zeroes = 1100 final anwser.
      | 
      ignore this last number. 

let a = 10;
console.log(a >> 1); // 5
like as-  a >> b  = a/2powerb

let a = 10;
console.log(a >> 2);  // 2
//=======================================================================

//Questions-
//----------

// Given a number n find if it is odd or even.
//  100101  & 1 he will return like as  000001 
    1 0 0 1 0 1
 &  0 0 0 0 0 1
 ----------------
    0 0 0 0 0 1  if you find 1 that is odd number. 
    // last 1 number also called as lSB (least significant bit);  


function OddOrEven(n) {
  if (n & (1 == 1)) {
    console.log('Odd Number.');
  } else {
    console.log('Even Number.');
  }
}
OddOrEven(11);
//=======================================================================

// Question:- Given an array find the unique element.
//           _
//   A ^ 1 = A
//   A ^ 0 = A
//   A ^ A=  0
//----------------------------------------------------
//   A |  B  | A ^ B   only one should be true
//   0    0      0
//   0    1      1
//   1    0      1
//   1    1      0

//------------------------------------------------------

function findUnique(arr) {
  let uniquee = 0;
  for (let i = 0; i < arr.length; i++) {
    uniquee = uniquee ^ arr[i];
  }
  return uniquee;
}

let arr = [2, 3, 4, 1, 2, 1, 3, 6, 4];
let result = findUnique(arr);
console.log(result);

let a = 0;
let i0 = 2;
console.log(a ^ i0); // 2

let a1 = 2;
let i1 = 3;
console.log(a1 ^ i1); // 1
let a2 = 1;
let i2 = 4;
console.log(a2 ^ i2); //5
let a3 = 5,
  i3 = 1;
console.log(a3 ^ i3); //4
let a4 = 4,
  i4 = 2;
console.log(a4 ^ i4); // 6

let a5 = 6,
  i5 = 1;
console.log(a5 ^ i5); //7

let a6 = 7;
let i6 = 3;
console.log(a6 ^ i6); //4

let a7 = 4;
let i7 = 6;
console.log(a7 ^ i7); //2

let a8 = 2;
let i8 = 4;
console.log(a8 ^ i8); //6
//================================================


function findUnique(arr) {
  let uniquee = 0;
  for (let i = 0; i < arr.length; i++) {
    uniquee = uniquee + arr[i];
  }
  return uniquee;
}

let arr = [-2, 3, 4, 2, -4, 5, 6, -5, -6];
let res = findUnique(arr);
console.log(res); // 3
*/
//======================================================
