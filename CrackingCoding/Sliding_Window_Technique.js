'use strict';
/*
function slidingWindowTech(arr, k) {
    let sum = 0;
    let max = 0;
    for (let i = 0; i < k; i++) {
      sum += arr[i];
      max = sum;
    }
    for (let i = k; i < arr.length; i++) {
      sum += arr[i] - arr[i - k];
      if (sum > max) {
        max = sum;
      }
    }
    return max;
  }
  
  let arr = [2, 3, 5, 2, 9, 7, 1];
  let k = 3;
  console.log(slidingWindowTech(arr, k));
  
//=============================================================================================
//First negative integer in every window of size k
// Method :-1 brute force method.
function firstNegativeNumber(arr, k) {
  let result = [];
  let n = arr.length;
  let flag;

  for (let i = 0; i < n - k + 1; i++) {
    flag = false;
    for (let j = 0; j < k; j++) {
      if (arr[i + j] < 0) {
        result.push(arr[i + j]);
        flag = true;
        break;
      }
    }
    if (flag == false) {
      result.push(0);
    }
  }
  return result;
}

let arr = [12, -1, -7, 8, -15, 30, 16, 28];
let k = 3;
console.log(firstNegativeNumber(arr, k));

//=============================================================================
// count occurencess of anagram.
// Problem Statement
//Given a word and a text, return the count of occurrences of the anagrams of the word in the text.
//An anagram of a word is a word that’s formed by rearranging the letters of the original word.
//For example: the anagrams of the word for are
//let text="Problem Statement
//Given a word and a text, return the count of occurrences of the anagrams of the word in the text.
//An anagram of a word is a word that’s formed by rearranging the letters of the original word.
//For example: the anagrams of the word for are"

function isAnagram(substringMap, wordMap) {
  let substringkeyArr = [];
  let substringValu = [];
  let wordKeyArr = [];
  let wordValArr = [];
  for (let i in wordMap) {
    wordKeyArr.push(i);
    wordValArr.push(wordMap[i]);
  }
  for (let j in substringMap) {
    substringkeyArr.push(j);
    substringValu.push(substringMap[j]);
  }
  substringkeyArr.sort(function (a, b) {
    return a.localeCompare(b);
  });
  wordKeyArr.sort(function (a, b) {
    return a.localeCompare(b);
  });
  substringValu.sort(function (a, b) {
    return a - b;
  });
  wordValArr.sort(function (a, b) {
    return a - b;
  });
  let count_1 = 0;
  let count_2 = 0;
  if (substringkeyArr.join('') == wordKeyArr.join('')) {
    count_1++;
  }

  if (substringValu.join('') == wordValArr.join('')) {
    count_2++;
  }
  if (count_1 == count_2) {
    return true;
  } else {
    return false;
  }
}

function countOccurencess(text, word) {
  let count = 0;
  let wordMap = new Map();
  for (let el of word) {
    if (wordMap[el]) {
      wordMap[el]++;
    } else {
      wordMap[el] = 1;
    }
  }
  for (let i = 0; i <= text.length - word.length; i++) {
    let substringMap = new Map();
    for (let j = i; j < word.length + i; j++) {
      let el = text[j];
      if (substringMap[el]) {
        substringMap[el]++;
      } else {
        substringMap[el] = 1;
      }
    }
    if (isAnagram(substringMap, wordMap)) {
      count++;
    }
  }
  return count;
}
let text = 'aabaabaa';
let word = 'aaba';
console.log(countOccurencess(text, word));

//======================================================================================
// maximum of all subarray of size k.
// arr =[1,3,-1,-3,5,3,6,7]
// let k=3;

// subarray like as:--
// [1,3,-1]==  3
// [3,-1,-3]=  3
// [-1,-3,5]=  5
// [-3,5,3]=   5
// [5,3,6]=    6
// [3,6,7]=    7

// Output:-  [3,3,5,5,6,7];
//  Using Brute force.
function maximumOfAllSubarray(arr, k) {
  let resultArr = [];
  for (let i = 0; i <= arr.length - k; i++) {
    let min = Number.MIN_VALUE;
    for (let j = i; j < i + k; j++) {
      if (arr[j] > min) {
        min = arr[j];
      }
    }
    resultArr.push(min);
  }
  return resultArr;
}

let arr = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;
console.log(maximumOfAllSubarray(arr, k));

//=====================================================================================
// now its time to optimize the code using sliding window technique.

// Wrong Code.

function maximumOfAllSubarray(arr, k) {
  let resultArr = [];
  let ans=[];
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    resultArr.push(arr[j]);
    if(j-i+1==k){
      let max=Math.max(...resultArr);
      ans.push(max);
    }
  }
}

let arr = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;
console.log(maximumOfAllSubarray(arr, k));
*/
//==================================================================================
