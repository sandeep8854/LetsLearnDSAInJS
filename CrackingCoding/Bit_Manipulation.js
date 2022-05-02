'use strict';
// function adding(nums) {
//   let sum = 0;
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     sum = sum + nums[i];
//     arr.push(sum);
//   }
//   return arr;
// }
// let nums = [1, 2, 3, 4, 5];
// let res = adding(nums);
// console.log(res);
//=========================================================
//console.log(`Welcome to Bit Manipulation`);
//==========================================================

function remob(s) {
  s = s.split(' ');
  let ans = [];
  for (let i = 0; i < s.length; i++) {
    let k = s[i][s[i].length - 1];
    ans[k - 1] = s[i];
  }
  let sum = '';
  for (let i = 0; i < ans.length; i++) {
    if (i == ans.length - 1) {
      sum = sum + ans[i].slice(0, ans[i].length - 1);
    } else {
      sum = sum + ans[i].slice(0, ans[i].length - 1) + ' ';
    }
  }
  return sum;
}
let s = 'is2 sentence4 This1 a3';

let res = remob(s);
console.log(res);

//==========================================================================

// Bitwise Manipulation
//------------------------

//  AND -
//-----------------------------------
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
         110010100       // upper binary and lower binary both are same.
      ----------------- //in any binary if you add anythink (1) with and(&) they will give same binary.
//------------------------------------------------------------      
  //  OR -
  if any one is ture entire expression will be true.
     
      a  |   b   | a OR b
      0      0       0   false
      0      1       1   true
      1      0       1   true
      1      1       1   true
 
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
point 1-    a ^ 1= a     //if any number with xor 1 he give with number +1 value
   
point 2-    a ^ 0= a    // any number with a xor 0 he give same value.

point 3-    a ^ a= 0   // any number with a xor with same number he give zero(0).

let a = 100;
console.log(a ^ 1); //101

console.log(a ^ 2); //102

console.log(a ^ 9); //109

console.log(a ^ 0); //100

console.log(a ^ a); // 0

let a = 1000;
console.log(~a); // -1001  // with complement any number he will give oppsite number with one more negative.
// complement give the value with -negative value and one(-1) one more negative.
//-----------------------------------------------------------------
let b = 101;
console.log(~b); // given value 101 and complement he give exact -101 with -1 = -102


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

//======================================================
console.log('Sandep');


// given a number n--
//           1- print the number produced on setting its i-th bit. (ON)
//           2- print the number produced on unsetting its j-th bit (OFF)
//           3- print the number produced on taggling its k-th bit.
//           4- print also check if m-th bit is ON or OFF , print "true" if it is ON
//               other wise print false.

function bitManipulation(n) {
  console.log('Number ' + n);
  let onMask = 1 << 3; //i
  console.log('ON Mask ' + onMask);

  let offMask = ~(1 << 3); //j
  console.log('OFF MAsk ' + offMask);

  let tMask = 1 << 3;
  console.log('Taggle Mask ' + tMask);

  let cMask = 1 << 3;
  console.log('Check Mask ' + cMask);

  console.log(n | onMask);
  console.log(n & offMask);
  console.log(n ^ tMask);
  if (n & (cMask == 0)) {
    console.log('It is OFF :- false');
  } else {
    console.log('It is ON :- true');
  }
}
let num = 57;
bitManipulation(num);
//============================================================

// RIGHT MOST SET BIT (RMSB):-
//-----------------------------

//  return the position of the first 1 from right to left,
// in the binary representation of an Integer.
// I/P    18,   Binary Representation 010010
// O/P   2
// I/P    19,   Binary Representation 010011
// O/P   1

// Question Print Value Of Rsb Mask
// I/p :-  58
// O/P :-  10  (in binary)
// the problem have deals with getting the right most set bit of given input number
// for example:--
// n=58==> [111010], the answer should be 2=> [000010] as the right most set bit.
// for N is 1st index.

//  58 = > N =  1 1 1 0 1 0
//   N'         0 0 0 1 0 1  ----  that is called 1st complement.
//                       +1 ---    adding +1 in 1st complement and get 2nd complement.
//           ----------------
//  N''         0 0 0 1 1 0      -- get 2nd complement.

// next perform N & N'' operation and get right most set bit.
//         N    =   1 1 1 0 1 0
//         N''  = & 0 0 0 1 1 0
//-------------------------------
//                  0 0 0 0 1 0     this value belong to right most set bit.
//-----------------------------------

// convert decimal to binary using toString().
// javascript build in method toString([radix]) return a string value in a spacified
// radix (base).
// here , toString(2) , convert the decimal number.

function rightMostSetBit(num) {
  console.log(num);
  let f_comple = ~num;
  let s_compl = f_comple + 1;
  let rmsb = num & s_compl;
  console.log(rmsb.toString(2)); //10  Right Most Set Bit.
}
let num = 58;
rightMostSetBit(num);

//===================================================================
//   Kernighan–Lin algorithm
//----------------------------
// Question :- Count set bit in an integer using kernighan algorithms.
//  Kernighan–Lin algorithm
// given an integer count set bit in this integer.

// like as example:- 58 => 111010
//  how many set bit are there.
// total set bit are 4
// so return 4.

//   1 1 1 0 1 0
//          -1            count=1
//--------------------------------------
//   1 1 1 0 0 0
//      -1                count=2
//--------------------------------------
//   1 1 0 0 0 0
//  -  1                  count=3
//--------------------------------------
//   1 0 0 0 0 0
//  -1                    count=4
//--------------------------------------
//   0 0 0 0 0 0
//--------------------------------------
// while() condition become false.

// 1. You are given a number n.
// 2. You have to count the number of set bits in the given number.

function countSetBit(n) {
  let count = 0;
  while (n != 0) {
    let rmsb = n & -n;
    n = n - rmsb;
    count++;
  }
  return count;
}
let num = 55;
let result = countSetBit(num);
console.log('Find the Right most set bit:- ' + result);

// Find the Right most set bit:- 5

//=======================================================================

// JOSEPHUS SPECIALS

//  given a circle number kill every after the survivals
//          Answer            2^x+l                2l+1

//  1 ==>   1           <--   2^0 +0               2*0+1 = 1  => Answer
//  2 ==>   1           <--   2^1 +0               2*0+1 = 1  => Answer
//  3 ==>   3           <--   2^1 +1               2*1+1 = 3  => Answer
//  4 ==>   1           <--   2^2 +0               2*0+1 = 1  => Answer
//  5 ==>   3           <--   2^2 +1               2*1+1 = 3  => Answer
//  6 ==>   5           <--   2^2 +2               2*2+1 = 5  => Answer
//  7 ==>   7           <--   2^2 +3               2*3+1 = 7  => Answer
//  8 ==>   1           <--   2^3 +0               2*0+1 = 1  => Answer

function powerOf2(num) {
  let i = 1;
  while (i * 2 <= num) {
    i = i * 2;
  }
  return i;
}

function josephusCircleAlgo(num) {
  let heighestPowOf2 = powerOf2(num);
  let l = num - heighestPowOf2;
  return 2 * l + 1;
}
let num1 = 8;
let res2 = josephusCircleAlgo(num);
console.log(res2);

//==============================================================================
// find the unique element of given array.
//condition , no need required extra space, no need extra running time
// i means O(1) time complexity required. it mandatroty.

// Rule Number:- 1 xor is associative property
// x^y^z= x^(y^Z)
//        (x^Y)^z  that is called  associative property

// X^y=y^x  that is called commudative property.
//               2 xor is commudative property.
//   A ^ 1 = A
//   A ^ 0 = A  Very Important properties...
//   A ^ A=  0  is also

// given an array find unique element.


function uniXOR(arr) {
  let unique = 0;
  for (let i = 0; i < arr.length; i++) {
    unique = unique ^ arr[i];
  }
  return unique;
}
let arr1 = [2, 7, 8, 3, 8, 3, 2];
let res1 = uniXOR(arr1);
console.log(res1);
// 7

//=======================================================================
