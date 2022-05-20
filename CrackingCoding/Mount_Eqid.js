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

// console.log(Math.trunc(5 - 4) / 2);

//======================================================================


//======================================================================
// let str = 'UDDDUDDUDDDUUDUDD';
// let len = str.length;
// console.log(len);
// for (let i = 0; i < len; i++) {
//   console.log(str[i] + ' ');
// }

//======================================================================================

let max = Number.MAX_VALUE;
console.log(max);


console.log('Sandeep');
let n = 5;
let p = 4;
let pagesCountfromFront = Math.floor(n / 2);
let totalTargetPagefromFront = Math.floor(p / 2);
let exactPagefromback = pagesCountfromFront - totalTargetPagefromFront;
console.log(Math.min(totalTargetPagefromFront, exactPagefromback));

//

//========================================================================================

function contingValue(howmanyStep, str) {
  let altitude = 0;
  let vallyCount = 0;

  for (let i = 0; i < howmanyStep; i++) {
    let ch = str.charAt(i);
    // console.log(ch);
    if (ch == 'U') {
      altitude++;
      if (altitude == 0) {
        vallyCount++;
      }
    } else {
      // D  downword value..
      altitude--;
    }
  }
  return vallyCount;
}

let howmanyStep = 8;
let str = 'UDDDUDUU';
let res = contingValue(howmanyStep, str);
console.log(res);


//========================================================================================

function elcetonicsShoping(keyboard, drive, budget) {
  let sum = 0;
  let maximum = 0;
  for (let i = 0; i < keyboard.length; i++) {
    for (let j = 0; j < drive.length; j++) {
      sum = keyboard[i] + drive[j];
      if (sum >= maximum && sum <= budget) {
        maximum = sum;
      }
    }
  }
  if (maximum == 0) {
    return -1;
  }
  return maximum;
}

let keyboard = [40, 50, 60];
let drive = [5, 8, 12];
let budget = 60;
console.log(elcetonicsShoping(keyboard, drive, budget));



//==============================================================================

function catAcatBmouseC(x, y, z) {
  let catA = Math.abs(z - x); //4-2==2
  let catB = Math.abs(z - y); // 4-5==-1
  if (catA > catB) {
    console.log('Cat B');
  } else if (catA < catB) {
    console.log('CatA');
  } else {
    console.log('Mouse C');
  }
}
let x = 2;
let y = 5;
let z = 4;
catAcatBmouseC(x, y, z);

//===========================================================================

function pickingNumber(arr) {
  let conditionNumber = 1;
  let sum = 0;
  let arr1 = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sum = Math.abs(arr[i] - arr[j]);
      if (sum <= 1) {
        arr1[i] = arr[j];
      }
    }
  }
  console.log(arr1);
  console.log(arr1.length);
}
let arr = [4, 6, 5, 3, 3, 1];
pickingNumber(arr);

//================================================================
function pickArr(arr) {
  let frequency = [101]; // he is a empty array but length has 101 only..
  let result = Number.MIN_VALUE; // taking minimum value througth javascript engine. when has already have min
  // number ..
  for (let i = 0; i < arr.length; i++) {
    let index = arr[i];
    frequency[index] = frequency[index] + 1;
    ////frequency[index]=frequency[index]+1;
  }
  for (let i = 1; i <= 100; i++) {
    result = Math.max(result, frequency[i] + frequency[i - 1]);
  }
  console.log(result);
}
let arr = [4, 6, 5, 3, 3, 1];
pickArr(arr);

//=====================================================================

function pickArr(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let position = 0;
  let count = 1;
  let max = 0;

  //==============================================
  for (let i = 1; i < arr.length; i++) {
    let difference = arr[i] - arr[position];
    if (difference <= 1) {
      count++;
    }
    //================================
    else {
      if (count > max) {
        max = count;
      }
      position = i;
      count = 1;
    }
  }
  //============================================

  if (count > max) {
    max = count;
  }
  //======================================
  return max;
}

let arr = [4, 6, 5, 3, 3, 1];
let res = pickArr(arr);
console.log(res);



//==============================================================================
function harder(arr, k) {
  arr.sort(function (a, b) {
    return a - b;
  });
  // console.log(arr);
  let max = arr[arr.length - 1];
  // console.log(max);

  console.log(Math.max(0, max - k));
}

let arr = [1, 6, 3, 5, 2];
let k = 4;
harder(arr, k);


//====================================================================

function desinePDF(h, word) {
  let arr = [];
  let len = word.length;

  for (let i = 0; i < h.length; i++) {
    let charVal = word.charCodeAt(i);
    let vl = charVal - 96;
    if (Number.isInteger(vl)) {
      let store = h[vl];

      arr.push(store);
    }
  }
  arr.sort(function (a, b) {
    return a - b;
  });
  let bigger = arr[arr.length - 1];
  console.log(bigger * len);
}

let h = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
];
let word = 'abc';
desinePDF(h, word);

//=========================================================================================

let word = 'torn';
//let i = 0;
let asci = word.charCodeAt(0) - 96;

//let ch = word.charAt(i);
//console.log(ch); // t


//=================================================================================
function utopian(n) {
  let countCy = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
    }
  }
}

let n = 5;
utopian(n);

//=================================================================================

//
// let  n =5;
// let newArr=[n];
// for(int jj=0; jj< n; jj++){
//     arr[jj] = in.nextInt();
//     let sum = 1;
//     for (let i = 0; i < arr[jj]; i++) {
//         sum = i % 2 == 0 ? sum * 2 : sum + 1;
//     }
//    console.log(sum);

//=============================================================================

let n = 8;
// let newArray = [n];
// console.log(newArray.length);

let h = 1;
for (let i = 1; i <= n; i++) {
  if (i % 2 != 0) {
    h = h * 2;
  } else {
    h++;
  }
}
console.log(h);

let count=0;
		let countless=0;
		for(let i=0;i<arr.length;i++)
		{
			if(arr[i]<=0)
			{
				countless++;
			}
			else
			{
				count++;
			}
		}
		if(countless==k)  //class is canceled
		console.log("NO");
	else{
    console.log("YES");
  }	
//=============================================================================

function angreeProfessor(attendance, k) {
  let arriveOnTime = 0;
  let arriveOnLate = 0;
  for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] <= 0) {
      arriveOnTime++;
    } else {
      arriveOnLate++;
    }
  }
  // console.log(arriveOnTime);
  // console.log(arriveOnLate);
  if (k == arriveOnTime) {
    console.log('YES');
  } 
  if(arriveOnLate<k){
    console.log("NO");
  }
}
let attendance = [-2, -1, 0, 1, 2];
let k = 3;
angreeProfessor(attendance, k);



function angree(a, k) {
  let present = 0;
  let n = a.length;
  if (k > n) {
    return 'YES';
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] <= 0) {
        present++;
      }
    }
    if (present < k) {
      return 'YES';
    } else {
      return 'NO';
    }
  }
}
let a = [-2, -1, 0, 1, 2];
let k = 3;
let res = angree(a, k);
console.log(res);


//=================================================================================

function beautifulDay(starting, ending, divisor) {
  let reverse = 0;
  let lastDigit = 0;
  let beautiful = 0;
  for (let i = starting; i <= ending; i++) {
    reverse = Number(String(i).split('').reverse().join(''));
    // while (i != 0) {
    //   lastDigit = i % 10;
    //   reverse = reverse * 10 + lastDigit;
    //   i = Math.floor(i / 10);
    // }
    // lastDigit = 0;
    //  rev = Number(String(num).split('').reverse().join(''));
    let task = Math.abs(i - reverse);
    if (task % divisor == 0) {
      beautiful++;
    }
    reverse = 0;
  }
  console.log(beautiful);
}
let starting = 20;
let ending = 23;
let divisor = 6;
beautifulDay(starting, ending, divisor);

//==================================================================
// function reverseNum(num) {
//   let rev = 0;
//   while (num != 0) {
//     let lastDigit = num % 10;
//     rev = rev * 10 + lastDigit;
//     num = Math.floor(num / 10);
//   }
//   console.log(rev);
// }
// let num = 27;
// reverseNum(num);

//==================================================================
// let n = 142;
// console.log(n % 10); // 2
//=============================================



let i = 427;
let reverse = 0;
reverse = Number(String(i).split('').reverse().join(''));
console.log(reverse);
*/
//=============================================================

//
//
