'use strict';

// let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// // console.log(animals.slice(0, 1)); //ant
// // console.log(animals.slice(0, 2)); //ant bison
// // console.log(animals.slice(0, 3)); //ant bisen camel
// console.log(animals.slice(0, -1));
// console.log(animals.slice(-1)); //elephant
// console.log(animals.slice(-2)); // elephant
//==============================================================
// rearrange an array such that
// arr[j] become i if arr[i] is j
//   arr=[1,4,0,3,2];
//index   0 1 2 3 4-----------------
//arr[0] is 1 == arr[1] become 0;
//arr[1] is 4 == arr[4] become 1;
//    ..
//    ..
//    ..
//    ..

// temp=[2,0,4,3,1];  // to store intermediate result.
//       0 1 2 3 4

//arr=[2,0,4,3,1];   final result.
/*
function rearrangeArr(arr) {
  // we can say like as index --  element
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    //    index
    //      |
    temp[arr[i]] = i;
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = temp[i];
  }
  return arr;
}

let arr = [1, 4, 0, 3, 2];
let re = rearrangeArr(arr);
console.log(re);

//==============================================================


  
console.log(newSt);
result.join(' ');
console.log(result);
console.log(typeof result);
console.log(JSON.stringify(result));
return result.join(' ');
}
console.log(result.join(' '));
console.log(typeof result); //object
return result.join(' ');

let s = 'is2 sentence4 This1 a3';
sortSentence(s);
console.log(res);
console.log(res.toString());

function arrangeWord_1(s) {
  let spliting = s.split(' ');
  let newArr = [];
  let anotherArray = [];
  // console.log(spliting);  // ['is2', 'sentence4', 'This1', 'a3']
  // for (let i = 0; i < spliting.length; i++) {
  newArr.push(
    spliting.sort(
      (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
    )
  );
  console.log(newArr);

anotherArray.push(newArr.slice(0, -1));
console.log(anotherArray);
newarray.join(' ');
console.log(newarray);
//}
console.log(newArr);
}
let s = 'is2 sentence4 This1 a3';
arrangeWord_1(s);

function arrangeWord(s) {
  return (
    s
      .split(' ') //First, split the string into each word
      .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
      //sort the words based on the last character
      .map(str => str.slice(0, -1)) //get rid of last characters of each word
      .join(' ')
  ); //join the words into one piece!
}
let str = 'is2 sentence4 This1 a3';
let re = arrangeWord(str);
console.log(re);

str = ' ' + str;
console.log(str);
let stNew = '';
let arrr = [];
let spliting = str.split(' '); //split is a method to convert in to array.4
console.log(spliting);

console.log(spliting.length);

let usingSpread = [...str]; // using spread opeartor to create convert string to array.
let usingArrayForm = Array.from(str);
for (let i = 0; i < usingArrayForm.length; i++) {
  console.log(usingArrayForm[i]);
}
console.log(usingArrayForm.length);
// console.log(typeof spliting);
console.log(spliting);
console.log(spliting[0]);
console.log(spliting[1]);
console.log(spliting[2]);
console.log(spliting[3]);

console.log(newArr[0]);
console.log(typeof newArr);
for (let i = 0; i < newArr.length; i++) {
  console.log(newArr[i]);
}

console.log(spliting);

let str = 'is2 sentence4 This1 a3';
arrangeWord(str);

function rightAngleNumber(num) {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {}
  }
}
let num = 5;
//rightAngleNumber(num)
*/

function sortSentence(s) {
  let arr = s.split(' ');
  let minValue = 1;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (minValue === Number(arr[i][arr[i].length - 1])) {
      let removeArr = arr[i].split('');
      removeArr.splice(removeArr.length - 1, 1);
      result.push(removeArr.join(''));
      minValue++;
      arr.splice(i, 1);
      i = -1;
    }
  }
  // console.log(result);
  let newSt = '';
  for (let i = 0; i < result.length; i++) {
    newSt = newSt + result[i] + ' ';
  }
  console.log(newSt);
}

let s = 'is2 sentence4 This1 a3';
sortSentence(s);
