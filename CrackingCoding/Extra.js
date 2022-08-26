'use strict';
/*
console.log(`Sandeep`);

let space = ' ';
console.log(space);
console.log(space.length); // 1

let st = 'luffy is still joyboy';
let st1 = 'Hello World';
let st2 = '   fly me   to   the moon  ';
let res = st2.trim();
// console.log(res);

// console.log(st.length); // 21

// console.log(st.charAt(1)); // u
// console.log(st.charAt(0)); // l
let count = -1;
for (let i = res.length; i > 0; i--) {
  if (space == res.charAt(i)) {
    break;
  }
  count++;
}
console.log(count);


function adding(nums) {
  let sum = 0;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums.length == 0) {
      return arr;
    } else {
      sum = sum + nums[i];
      arr.push(sum);
    }
  }
  return arr;
}
let nums = [1, 2, 3, 4, 5];
let res = adding(nums);
console.log(res);

//=================================================================

//console.log('San');

// let po = Math.pow(2); // base , exponential
// console.log(po);

// function task_(n) {
//  console.log(n>>);
//   // console.log(1 << nere_By_Power);
// }
// let n = 16;
// task_(n);

//=========================================================
// function making_anna(a1, a2) {
//   if (a1.join() == a2.join()) {
//     console.log('equal');
//   } else {
//     console.log('Not equal');
//   }
// }
// let a1 = [4, 5, 3];
// let a2 = [4, 5, 3];
// making_anna(a1, a2);

// let delivery = [];
// for (let i = 0; i < orders.length; i++) {
//   delivery.push([orders[i][0] + orders[i][1], i + 1]);
// }

// delivery.sort((a, b) => a[0] - b[0]);
// return delivery.map(value => value[1]);

// let s1 = 'xaxb';
// let split = s1.split('');

// console.log(split);

// let sor = split.sort();
// console.log(sor);
// let resss = sor.join('');

// let s2 = 'sandeep';
// console.log(s2.split('').sort().join(''));

//=============================================================================

// let n = 2025;
// console.log(typeof n);

// let nu = String(n);
// console.log(typeof nu);
// console.log(nu.length);

// console.log(Math.pow(297, 2));
//========================================




function unknown(s, k) {
  let b = 66;
  console.log(String.fromCharCode(b));
}
//   let newArr = [];
//   let code = 0;
//   for (let i = 0; i < s.length; i++) {
//     code = s.charCodeAt(i) + k;
//     newArr.push(code);
//   }
//   console.log(String.fromCharCode(code));
// }

let s = 'midd';
let k = 2;
unknown(s, k);
//===========================================================================

// let t = '1';
// console.log(t.charCodeAt(0));

function sherlockAndBeast(n) {
  let result = -1;
  let i = n;
  while (i >= 0) {
    if (i % 3 == 0) {
      result = '5'.repeat(i) + '3'.repeat(n - i);
      break;
    }
    i = i - 5;
  }
  console.log(result);
}
let n = 11;

sherlockAndBeast(n);
//=============================================
function conting_(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push(i);
    }
  }
  console.log(arr);
  console.log(33333 - 6666);
}
let num = 100000;
conting_(num);
//========================================================
function decentNumber(n) {
  let result = -1;
  let i = n;
  while (i >= 0) {
    if (i % 3 === 0) {
      result = '5'.repeat(i) + '3'.repeat(n - i);
      break;
    }
    i -= 5;
  }
  console.log(result);
}

let n = 11;
decentNumber(n);

//=======================================================================================
// The repeat() method constructs and returns a new string which contains the specified
    // number of copies of the string on which it was called, concatenated together.
   //  console.log("abc".repeat(2));
  //  console.log("abc".repeat(0)); // empty.
  //  console.log("abc".repeat(3.5)); // count will be converted as a integer.
    
   // console.log("abc".repeat(-1)); //invalid count value.
  // console.log("abc".repeat(2/0));  //invalid count value.
 //   console.log(4.repeat(2));  //SyntaxError: Invalid or unexpected token.

const chorus = "Because I'm happy. ";

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(2)}`);

console.log('abc'.repeat(2)); //abcabc
console.log('abc'.repeat(0)); //nothing
*/
//========================================================================
function fixTeen(n) {
  //=========================================================
  // if ((n >= 13 && n < 15) || (n > 16 && n <= 19)) {
  //   return 0;
  // } else {
  //   return n;
  // }
  //============================================================
  if (n == 15) {
    return n;
  } else if (n == 16) {
    return n;
  } else if (n >= 13 && n <= 19) {
    return 0;
  } else {
    return n;
  }
  //==============================================================
}
function noTeenSum(a, b, c) {
  let res = fixTeen(a) + fixTeen(b) + fixTeen(c);
  console.log(res);
}

let a = 13;
let b = 13;
let c = 2;
noTeenSum(a, b, c);
