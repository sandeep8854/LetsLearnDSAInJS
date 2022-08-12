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
*/
if (-1 >= -0) {
  console.log('YES');
} else {
  console.log('No');
}
console.log(3 - Math.abs(-2));
