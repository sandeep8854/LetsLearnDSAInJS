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
*/

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
