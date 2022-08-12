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

// Question:- Given an array find the unique element. find ele
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
// All Repeating Except Two
//=====================================
// Mast question.
//  You are given an array of number.
// you have to find 2 non repeating number in an array.
// all repeating numbers number are repeating even numbers of time.

// arr=[23,27,23,17,17,37]
// o/p = 27,37

function uniXOR(arr) {
  let unique = 0;
  for (let i = 0; i < arr.length; i++) {
    unique = unique ^ arr[i];
  }
  return unique;
}
let arr = [36, 50, 24, 56, 36, 24, 42, 50];
let res1 = uniXOR(arr);
console.log(res1);

// every repeating number will be cancel out exept non repeating number.
// then take non repeating number find like as
//  56 -  1  1  1  0  0  0
//  42-   1  0  1  0  1  0
//-----------------------------
//xor     0  1  0  0  1  0 -----value will be in decimal 18.
//------------------------------
//
// 36 -  1 0 0 1 0 0       bit of second is off
// 50 -  1 1 0 0 1* 0       bit of second is on
// 24 -  0 1 1 0 0 0       bit of second is off
// 56 -  1 1 1 0 0 0       bit of second is off
// 36 -  1 0 0 1 0 0       bit of second is off
// 24 -  0 1 1 0 0 0       bit of second is off
// 42 -  1 0 1 0 1* 0       bit of second is on
// 50 -  1 1 0 0 1* 0       bit of second is on
//----------------------------
//       0 1 0 0 1 0 -----18
//------------------------------
//  56-  1 1 1 0 0 0
//  42-  1 0 1 0 1 0
// -----------------------
//       0 1 0 0 1  0
//       0 0 0 0 1* 0  -- right most set bit  (find the rmsb)
// ------------------------
//
//       0 1 0 0 1 0 --18     it is all number of xor and 56 and 42 of also xor.
//----------------------------
//       0 0 0 0 1 0  -- right set bit mask*

function allrepeatingExecptTwo(arr) {
  // find x and b value which are not cancelled
  let xxorY = 0;
  for (let i = 0; i < arr.length; i++) {
    xxorY = xxorY ^ arr[i];
  }

  // find the right most set bit;
  let rmsb = xxorY & -xxorY;

  let x = 0;
  let y = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] & rmsb) == 0) {
      x = x ^ arr[i];
    } else {
      y = y ^ arr[i];
    }
  }
  if (x < y) {
    console.log(x);
    console.log(y);
  } else {
    console.log(y);
    console.log(x);
  }
}
let arr = [36, 50, 24, 56, 36, 24, 42, 50];
allrepeatingExecptTwo(arr);

//=============================================================================

// Question :--- One Repeating and One Missing.
//-----------------------------------------------------
// 1- You are given an array of length n containing number from 1 to n.
// 2- One number is present twice in array and one is missing.
// 3- You have find these two number.
//   (i) - one, which are repeating.
//   (ii)- one , which are missing.

// Example :-  |*    |*---------these number are repeating.
//    arr=[3,6,2,5,1,2,7];
//   temp=[1,2,3,4,5,6,7];
// arr[i]  = 1
// temp[i] = 1
// they will cancel out each to other.

// arr[i]  = 2
// arr[i] = 2
// they will cancel out each to other.

// arr[i]  = 3
// temp[i] = 3
// they will cancel out each to other.

// arr[i]  = 5
// temp[i] = 5
// they will cancel out each to other.

// arr[i]  = 6
// temp[i] = 6
// they will cancel out each to other.

// arr[i]  = 7
// temp[i] = 7
// they will cancel out each to other.
//------------------------------------------------------------
// remaining element will be there like as :- 2 and 4
//---------------------------------------------------------------

function oneRepeatingOneMissing(arr) {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }
  // console.log(xor);
  // console.log('Xor All Array:- ' + xor.toString(2));
  // let xor_1;
  // for (let i = 1; i <= arr.length; i++) {
  //   xor_1 = xor_1 ^ i;
  // }
  // console.log(xor_1);
  for (let i = 1; i <= arr.length; i++) {
    xor ^= i;
  }
  let rmsb = xor & -xor;
  // console.log(rmsb);
  // console.log(rmsb.toString(2));

  let x = 0;
  let y = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] & rmsb) == 0) {
      x = x ^ arr[i];
    } else {
      y = y ^ arr[i];
    }
  }

  for (let i = 1; i <= arr.length; i++) {
    if (i & (rmsb == 0)) {
      x = x ^ i;
    } else {
      y = y ^ i;
    }
  }
  console.log(x); //4
  console.log(y); //2

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      console.log(`Missing Number:-  ${y}`);
      console.log(`Repeating Number:- ${x}`);
      break;
    } else if (arr[i] == y) {
      console.log(`Missing Number:-  ${x}`);
      console.log(`Repeating Number:- ${y}`);
      break;
    }
  }
}

let arr = [3, 6, 2, 5, 1, 2, 7];
oneRepeatingOneMissing(arr);

//================================================================
// All repeating Three times Execpt one.
// 1- all number occures three times except one.
// 2- You have to find the eleemnt that occuures onces.
//Example:- arr=[51,57,51,57,63,38,57,63,63,51];
// O/P- 38.

function allReetingThreeTimesExceptOne(arr) {
  let threeN = Number.MAX_VALUE;
  // console.log(threeN);
  let threeN_Plus1 = 0;
  let threeN_Plus2 = 0;
  for (let i = 0; i < arr.length; i++) {
    let commonBetWeen_ThreeN = arr[i] & threeN;
    let commonBetWeen_ThreeN_Plus1 = arr[i] & threeN_Plus1;
    let commonBetWeen_ThreeN_Plus2 = arr[i] & threeN_Plus2;

    threeN = threeN & ~commonBetWeen_ThreeN;
    threeN_Plus1 = threeN_Plus1 | commonBetWeen_ThreeN;

    threeN_Plus1 = threeN_Plus1 & ~commonBetWeen_ThreeN_Plus1;
    threeN_Plus2 = threeN_Plus2 | commonBetWeen_ThreeN_Plus1;

    threeN_Plus2 = threeN_Plus2 & ~commonBetWeen_ThreeN_Plus2;
    threeN = threeN | commonBetWeen_ThreeN_Plus2;
  }
  console.log(threeN_Plus1);
}
let arr = [10, 20, 30, 40, , 10, 20, 20, 10, 30, 30];
allReetingThreeTimesExceptOne(arr);
//console.log(`Common Number Among are :- ${result}`);

//=========================================================================

function sum_VS_XOR(n) {
  let binNum = n.toString(2);
  //  console.log(typeof binNum); // it is string. so we can iterate the througth the loop.
  let len = binNum.length;
  // console.log(len); // 3 [number of bit].
  let unsetbit_Zero = 0;
  let setbit_One = 0;
  for (let i = 0; i < len; i++) {
    if (binNum[i] % 2 == 0) {
      unsetbit_Zero++;
    } else {
      setbit_One++;
    }
  }
  if (n == 0) {
    unsetbit_Zero = 0;
  }

  console.log(2 ** unsetbit_Zero);

  // console.log(unsetbit_Zero); // 2
  // console.log(setbit_One);  // 1
}
let n = 4;
sum_VS_XOR(n);

// Explanation:- 1 // formula is :-- A+B=A^B+A&B
//  n=5
// binary of 5 number
//  1   0   1   // logic is here how many type you can make a zero
//  0  0/1  0
// --------------
//  0   0    0
// --------------
// we can say if you hava 1 then you can make a zero only one ways
// result will be  1*
// next - in case of 0 the we can make a zero two ways
//  1*2=2
//
// Explanation 02:--
//  n=4
//  binary of 4 number
//  1   0    0   //  logic is here how many type you can make a zero
//  0  0/1  0/1
//---------------
//  0   0    0
//----------------
//  1*2*2==4
//  ----------------
//
// 1   0   0
// 0--> called as unsetbit ==2 unsetbit are there
// 1--> callled as setbit =  1 setbit are there.

//================================================================
// question :- find the missing element in given array.

function missing_Number(arr) {
  let len = arr.length + 1;
  let xor_Temp = 0;
  for (let i = 1; i <= len; i++) {
    xor_Temp ^= i;
  }
  //   console.log(xor_Temp); // 1

  for (let i = 0; i < arr.length; i++) {
    xor_Temp = xor_Temp ^ arr[i];
  }
  console.log(xor_Temp); // answer missing number is 3
}
let arr = [1, 2, 3, 4, 5, 6, 7, 9];
missing_Number(arr);

//=========================================================================

// Get Bit:----
//  get the third bit (position = 2) of the number.(n=0101) == (5)10 decimal number.
//
//step- 1 find the bit mask.   1<<2(position)
//step- 2 perform the operation AND.
//   1-
//       1<<2
//      0001<<2
//     ----------------
//       0100
//------------------------
// 2-       0 1 0 0
//        & 0 1 0 1
//-------------------------------
//         0  1 0 0  |it is non zero number.
//---------------------------------

function getBit(n, pos) {
  let bit_mask = 1 << pos;

  if ((bit_mask & n) == 0) {
    console.log('bit was zero');
  } else {
    console.log('Bit was one');
  }
}

let n = 5;
let pos = 3;
getBit(n, pos);

//===========================================================================

// Set Bit:----
//  get the first bit (position = 1) of the number.(n=0101) == (5)10 decimal number.
//
//step- 1 find the bit mask.   1<<1(position)
//step- 2 perform the operation OR.
//   1-
//       1<<1
//      0001<<1
//     ----------------
//       0010
//------------------------
// 2-       0 0 1 0
//        | 0 1 0 1
//-------------------------------
//          0 1 1 1  | 7
//---------------------------------

function setBit(n, pos) {
  let bit_mask = 1 << pos;

  let newNum = bit_mask | n;
  console.log(newNum);
}

let n = 5;
let pos = 1;
setBit(n, pos);
//===========================================================

function findtwoNuBit(arr) {
  let xorOff = 0;
  let xorOn = 0;
  let bitMask = 1 << 1;
  console.log(bitMask);
  for (let i = 0; i < arr.length; i++) {
    if ((bitMask & arr[i]) == 0) {
      xorOff = xorOff ^ arr[i];
    } else {
      xorOn = xorOn ^ arr[i];
    }
  }
  console.log(xorOff, xorOn);
}
let arr = [4, 3, 4, 3, 6, 7, 5, 6];
findtwoNuBit(arr);
