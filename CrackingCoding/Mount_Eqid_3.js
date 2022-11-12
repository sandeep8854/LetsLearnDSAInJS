'use strict';
//leetcode Question:-
// 2259. Remove Digit From Number to Maximize Result
/*
 let res = '';
  let flag = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == digit && flag == false) {
      res += str[i];
      flag = true;
    } else {
      res += str[i];
    }
  }
  //  console.log(res);
  let res_2 = '';
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] == digit) {
    } else {
      res_2 += str[i];
    }
  }

function removeDigit(str, digit) {
  let arr = str.split('');
  let tempArr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == digit) {
      let re = arr.splice(i, 1);
      break;
    }
  }
  console.log(arr);
  for (let i = tempArr.length - 1; i >= 0; i--) {
    if (tempArr[i] == digit) {
      let remov = tempArr.splice(i, 1);
      break;
    }
  }
  let res_1 = '';
  let res_2 = '';

  for (let i = 0; i < arr.length; i++) {
    res_1 += arr[i];
  }

  for (let i = 0; i < tempArr.length; i++) {
    res_2 += tempArr[i];
  }
  res_1 = Number(res_1);
  res_2 = Number(res_2);

  if (res_1 > res_2) {
    return res_1;
  } else if (res_1 == res_2) {
    return res_1;
  } else {
    return res_2;
  }
}

function removeDigit(number, digit) {
  let result = [];
  for (let i = 0; i < number.length; i++) {
    if (number[i] == digit) {
      let multiple_Value = number.substring(0, i) + number.substring(i + 1);
      result.push(multiple_Value);
    }
  }
  result.sort();
  return result[result.length - 1];
}
let str = '135676125';
let digit = '5';
console.log(removeDigit(str, digit));

//=============================================================================

function sumScores(str) {
  let substringArr = [];
  let total_Sum = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    substringArr.push(str.substring(str.length, i));
  }
  console.log(substringArr);

  for (let i = 0; i < substringArr.length; i++) {
    let subset_Sum = 0;
    let index = 0;
    let substr_ = substringArr[i];
    for (let j = 0; j < substr_.length; j++) {
      if (str[index++] == substr_[j]) {
        subset_Sum++;
      } else {
        break;
      }
    }
    total_Sum += subset_Sum;
  }
  return total_Sum;
}

let str = 'babab';
console.log(sumScores(str));

//==================================================================================
// Z-Algorithms.
function sumScores(str) {
  let z = new Array(str.length).fill(0);
  let left = 0;
  let right = 0;
  let sum = str.length;
  for (let i = 1; i < str.length; i++) {
    z[i] = Math.max(0, Math.min(z[i - left], right - i + 1));
    while (i + z[i] < str.length && str[z[i]] == str[i + z[i]]) {
      left = i;
      right = i + z[i];
      z[i]++;
    }
    sum += z[i];
  }
  return sum;
}
let str = 'babab';
console.log(sumScores(str));

//=====================================================================================

function customSortString(order, s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let el = s[i];
    if (map[el]) {
      map[el]++;
    } else {
      map[el] = 1;
    }
  }
  console.log(map);
  let result = '';
  let deleteCount = 0;
  for (let i = 0; i < order.length; i++) {
    let ord = order[i];
    if (map.hasOwnProperty(ord)) {
      let e = ord;
      let val = map[ord];
      let st = e.repeat(val);
      result += st;
      //  delete map.ord;
      //   deleteCount++;
    }
  }
  console.log(map);
  console.log(deleteCount);
  let remi = 0;
  for (let el in map) {
    if (remi < deleteCount) {
      remi++;
    } else {
      let vall = map[el];
      let re = el.repeat(vall);
      result += re;
    }
  }
  return result;
}

let order = 'exv';
let s = 'xwvee';
console.log(customSortString(order, s));
*/
//================================================================================
function customSortString(order, s) {}

let order = 'exv';
let s = 'xwvee';
console.log(customSortString(order, s));
