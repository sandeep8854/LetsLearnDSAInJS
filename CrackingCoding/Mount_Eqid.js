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

//=============================================================

//
//
let n = 5;
let like = 0;
let share = 5;
let likeCount = 0;
for (let i = n; i >= 1; i--) {
  like = Math.floor(share / 2);
  likeCount = likeCount + like;
  share = like * 3;
}
console.log(likeCount);


function advert(n) {
  let like = 0;
  let share = 5;
  let likeCount = 0;
  for (let i = n; i >= 1; i--) {
    like = Math.floor(share / 2);
    likeCount = likeCount + like;
    share = like * 3;
  }
  console.log(likeCount);
}
let n = 5;
advert(n);



//==============================================================
let reminder = m % n;
if ((reminder + s - 1) % n == 0) {
  console.log(s);
} else console.log((reminder + s - 1) % n);



//=================================================================
let arr=[0,0,1,0,0,1,1,0];
let k=2;
let energy = 100;
let currentCloud = 0;
do {
  currentCloud = (currentCloud + k) % arr.length;
  energy--;
  if (arr[currentCloud] == 1) {
    energy -= 2;
  }
} while (currentCloud != 0);
console.log(energy);

//=====================================================


function digit(n) {
  let count = 0;
  while (n != 0) {
    n = Math.floor(n / 10);
    count++;
  }
  console.log(count);
}
let num = 145236;
digit(num);


int count=0;
int num=n;
while(n>0)
{
    int reminder=n%10;
    if(reminder!=0 && num % reminder==0)
    count++;
    n/=10;
}
return count;

//===========================================================
//console.log(Math.floor(105 / 10));
function facttt(n) {
  var bigInt = BigInt(n);
  var factorial = 1n;
  for (let i = 0n; i < bigInt; i++) {
    factorial *= bigInt - i;
  }
  console.log(String(factorial));
}

let n = 10;
facttt(n);

//===========================================================
// function cloud(arr) {
//   let count = -1;
//   for (let i = 0; i < arr.length; ) {
//     if (i + 2 < arr.length && arr[i] == 0) {
//       i = i + 2;
//     } else {
//       i = i + 1;
//     }
//     count++;
//   }
//   console.log(count);
// }
// let arr = [0, 1, 0, 0, 0, 1, 0];
// cloud(arr);



// let  len=p.length;
//         let  inum=0;
//         let result=new Array(len);
//         for(let i=1;i<=len;i++)
//         {
//             for(let j=0;j<len;j++)
//             {
//                 if(p[j]==i)
//                 {
//                 inum=j+1;
//                 break;
//                 }
//             }
//             for(let j=0;j<len;j++)
//             {
//                 if(p[j]==inum)
//                 {
//                     inum=j+1;
//                     break;
//                 }
//             }
//             result[i-1]=inum;
//         }
//         console.log(result);

function equation(arr) {
  let res = [];
  let x = 1;
  let y = 0;
  while (x <= arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == x) {
        y = i + 1;
        break;
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == y) {
        y = i + 1;
        break;
      }
    }
    res[x - 1] = y;
    x++;
  }
  return res;
}
let arr = [5, 2, 1, 3, 4];
let ress = equation(arr);
console.log(ress);


//=========================================================================
function appendAndDEle(s, t, k) {
  let del = 0;
  let dell;
  let add_ = 0;
  if (k % 2 != 0) {
    del = Math.floor(k / 2);
    dell = del + 1;
  }
  console.log(dell);
  let noOfAdd = k - dell;
  console.log(noOfAdd);
  let newStr = '';
  // let act = s.length - dell;
  // console.log(act);
  for (let i = 0; i < s.length - dell; i++) {
    newStr = newStr + s.charAt(i);
  }
  for (let i = t.length - noOfAdd; i < t.length; i++) {
    newStr = newStr + t.charAt(i);
  }
  if (newStr == t) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}
let s = 'hackerhappy';
let t = 'hackerrank';
let k = 9;
appendAndDEle(s, t, k);



// let str = 'AppDividend';
// console.log('Original String: ', str);

// let removeFirstChar = str.slice(1);
// console.log('Removing the first character', removeFirstChar);

// let removeLastChar = str.slice(0, str.length - 1);
// console.log('Removing the last character: ', removeLastChar);

// function togther(a, b) {
//   let count = 0;

//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (a[i] == b[j]) {
//         count++;
//       }
//     }
//   }

//   console.log(count);
// }
// let a = [3, 5, 5, 7, 8, 11];
// let b = [5, 5, 7, 8, 10, 11];
// togther(a, b);

function deliver(prep, order) {
  let calTime = [];
  let map1 = new Map();

  let j = 0;
  for (let i = 0; i < prep.length; i++) {
    let temp = prep[i] + order[j];
    calTime.push(temp);
    j++;
  }
  console.log(calTime);
}
//

//

let prep = [3, 6, 2, 3, 3];
let order = [8, 5, 6, 2, 4];
deliver(prep, order);



// function xorSum(n) {
//   let count = 0;
//   // let simpleSum = 0;
//   // let xorSum = 0;
//   for (let i = 0; i <= n; i++) {
//     let simpleSum = n + i;
//     let xorSum = n ^ i;
//     if (simpleSum == xorSum) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// let n = 10;
// xorSum(n);

// let n = 100;
// let i = 7;
// console.log(' Task ' + (n ^ i));

// function xorSum(n) {
//   let ans = 0;
//   while (n > 0) {
//     if (n % 2 == 0) ans++;

//     n = Math.floor(n / 2);
//   }
//   let res = Math.pow(2, ans);
//   console.log(res);
// }
// let n = 10;
// xorSum(n);




function greatXor(n) {
  let count = 0;
  let xorRES = 0;
  for (let i = 1; i < n; i++) {
    xorRES = i ^ n;
    if (xorRES > n) count++;
  }
  console.log(count);
}

let n = 2;
greatXor(n);



// function counterGame(n) {
//   let str_1="Richard";
//   let str_2="Louise";
//   let subtrctForCounting=0;

//   for(let i=n;i>=1;i--){
//     if()

//   }
// }

// let n = 32;
// counterGame(n);

function findPowerOfTwo(n) {
  let k = n;
  let differenceCount = 0;
  if ((n & (n - 1)) != 0) {
    // console.log('It is Not Power of 2');
    n--;
    differenceCount++;
  } else {
    // console.log('It is Power of 2');
    let diff = n - k;
    n = diff;
    if (n == 1) {
      console.log('Richard');
    } else {
      console.log('Louise');
    }
  }
}

let n = 14;
findPowerOfTwo(n);




function sansaXOR(arr) {
  let xor = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    xor = arr[i];
    newArr.push(xor);
  }
  //console.log(newArr);
  // let j = 1;
  for (let i = 0, j = 1; i < arr.length && j < arr.length; i++) {
    let xor1 = arr[i] ^ arr[j];
    newArr.push(xor1);
    j++;
  }
  // console.log(newArr);
  let suumm = 0;
  for (let i = 0; i < arr.length; i++) {
    suumm = suumm ^ arr[i];
  }
  newArr.push(suumm);
  // console.log(newArr);
  let res = 0;
  for (let i = 0; i < newArr.length; i++) {
    res = res ^ newArr[i];
  }
  console.log(res);
}
let arr = [3, 4, 5];
sansaXOR(arr);


//=====================================================================
//=====================================================================
//=====================================================================

//console.log('Samde');
let a = 10;
let b = 14;

if (a == 0) {
  console.log('0');
}
let moveFactor = 0;
while (a != b) {
  // a = Math.floor(a / 2);
  a >>= 1; // he give half of the number like as 10>>1 he give 5
  // like as 50>>1 he will give 25.
  b >>= 1;
  //b = Math.floor(b / 2);
  moveFactor++;
}
console.log(a << moveFactor); // he give double of the number ,like as 10<<1
//he give 20
// like as  4<<2 he will give 8,
console.log(a);
console.log(4 << 1); // 2
console.log(1 << 2); //

console.log(50 >> 1);

console.log(1 << 3);

//console.log(12 >> 1);

//================================================================================
//================================================================================
//================================================================================


function sansaXOR(arr) {
  let newArray = [];
  let len = arr.length;
  let x = 0;
  if (len % 2 == 0) {
    return 0;
  } else {
    for (let i = 0; i < len; i += 2) {
      x ^= arr[i];
    }
  }
  return x;
}

let arr = [3, 4, 5];
let re = sansaXOR(arr);
console.log(re);

//console.log(98 ^ 12); // 110
function sansaXOR_(arr1) {
  let len = arr1.length;
  let x = 0;
  if (len % 2 == 0) {
    return 0;
  } else {
    for (let i = 0; i < len; i += 2) {
      x = x ^ arr1[i];
    }
  }
  return x;
}

let arr1 = [98, 74, 12];
let reas = sansaXOR_(arr1);
console.log('Sansa XOR:- ' + reas);

//==========================================================================
//==========================================================================


// find the AND Product.

function andProduct(a, b) {
  let x = 0;
  for (let i = a; i <= b; i++) {
    x = x & b;
  }
  console.log(x);
}
let a = 10;
let b = 14;
andProduct(a, b);

console.log(40 & 23);

//============================================================================

// Javascript program to find bit-wise
// & of all numbers from x to y.

// Find position of MSB in n. For example
// if n = 17, then position of MSB is 4.
// If n = 7, value of MSB is 3
function msbPos(n) {
  let msb_p = -1;
  while (n > 0) {
    n = n >> 1;
    msb_p++;
  }

  return msb_p;
}

// Function to find Bit-wise & of all
// numbers from x to y.
function andOperator(x, y) {
  let res = 0; // Initialize result

  while (x > 0 && y > 0) {
    // Find positions of MSB in x and y
    let msb_p1 = msbPos(x);
    let msb_p2 = msbPos(y);

    // If positions are not same, return
    if (msb_p1 != msb_p2) break;

    // Add 2^msb_p1 to result
    let msb_val = 1 << msb_p1;
    res = res + msb_val;

    // subtract 2^msb_p1 from x and y.
    x = x - msb_val;
    y = y - msb_val;
  }

  return res;
}

// Driver Code
let x = 11,
  y = 15;

console.log(andOperator(x, y));

//============================================================================

// function countPosi(a) {
//   let msb_pos = -1;
//   while (a > 0) {
//     a = a >> 1;
//     msb_pos++;
//   }
//   console.log('count the position ' + msb_pos);
// }

// let a = 60;
// countPosi(a);

//============================================================================

// function findMostSignificantBit(n) {
//   if (n == 0) return 0;

//   let msb = 0;
//   n = Math.floor(n / 2);
//   while (n != 0) {
//     n = Math.floor(n / 2);
//     msb++;
//   }
//   console.log(1 << msb);
// }
// let n = 60;
// findMostSignificantBit(n);

// //=============================================================
// // count the position of most signigificant bit.

// function countMSBPosition(num) {
//   let count = -1;
//   num = Math.floor(num / 2);
//   while (n != 0) {
//     n = Math.floor(n / 2);
//     count++;
//   }
//   console.log(count);
// }
// let num = 60;
// countMSBPosition(num);  // 5

//===================================================

function candy(arr) {
  let one = arr[0];
  let newArray = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > one) {
      newArray.push(i + 1);
    } else {
      one++;
    }
  }
}

let arr = [4, 6, 4, 5, 6, 2];
candy(arr);



//==================================================

function sherlockANDCoast(B) {
  let maxVar = Math.abs(B[1] - 1);
  let maxOne = Math.abs(B[0] - 1);

  console.log(maxVar + ' == ' + maxOne);
}

let arr = [10, 1, 10, 1, 10];
sherlockANDCoast(arr);

let gfg = new Array(26);

for (let i = 0; i < gfg.length; i++) {
  gfg[i] = new Array(26);
}
//initializing array
let h = 0;
for (let i = 0; i < gfg.length; i++) {
  for (let j = 0; j < gfg.length; j++) {
    gfg[i][j] = h++;
  }
}

// for printing the element

for (let i = 0; i < gfg.length; i++) {
  for (let j = 0; j < gfg.length; j++) {
    console.log(gfg[i][j] + '  ');
  }
}


function greadFunction(grid) {
  let newArr = [];
  //console.log(grid.length); // 3
  for (let i = 0; i < grid.length; i++) {
    let text = grid[i].split('').sort();
    newArr.push(text);
  }

  let col = newArr[0].length;
  // console.log(col);  // 3
  for (let i = 0; i < newArr.length - 1; i++) {
    for (let j = 0; j < col; j++) {
      if (newArr[i][j] > newArr[i + 1][j]) {
        console.log('NO');
      }
    }
  }
  console.log('YES');
}
//let newArr = [];
let grid = ['abc', 'ade', 'efg'];
greadFunction(grid);

// let g = ['adb'];
// let arr = [];
// let text = g[0].split('').sort();
// arr.push(text);
// console.log(arr);

//
//========================================================================

function canies(ratings) {
  let sum = 0;
  let left2right = new Array(ratings.length);
  let right2left = new Array(ratings.length);
 
  for (let i = 0; i < left2right.length; i++) {
    left2right[i] = 1;
  }
  for (let i = 0; i < right2left.length; i++) {
    right2left[i] = 1;
  }
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      left2right[i] = left2right[i - 1] + 1;
    }
  }
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      right2left[i] = right2left[i + 1] + 1;
    }
  }
  for (let i = 0; i < ratings.length; i++) {
    sum += Math.max(left2right[i], right2left[i]);
  }
  return sum;
}

let arr = [2, 4, 3, 5, 2, 6, 4, 5];
console.log(canies(arr));

//===============================================================================


function jim_AND_Order(orders, prep) {
  let deliverTime = [];
  let map1 = new Map();
  for (let i = 0; i < order.length; i++) {
    let temp = order[i] + prep[i];
  }
}
let order = [8, 4, 5, 3, 4];
let prep = [1, 2, 6, 1, 3];
console.log(jim_AND_Order(order, prep));

//============================================================


// let strrr = 'aaab';
// let remoingLastString = strrr.slice(0, strrr.length - 1);
// console.log('remoingLast Charcter ' + remoingLastString);
// let strrr = 'aaab';
// let L = strrr.length;
// console.log(L);
// for (let i = 0; i < strrr.length; i++) {
//   let temp = strrr.slice(1, i);
//   console.log(temp);
//   console.log('REmovb ' + i);
//   break;
// }
// let stt = 'aaab';
// for (let i = 0; i < stt.length; i++) {
//   let remvinf = stt.substring(i + 1);
//   console.log('After Remving ' + remvinf);
//   console.log(i);
//   console.log('===========================');
// }

//console.log(' after Remving String  ' + remvinf);

function reverseeee(remo) {
  let st = '';
  for (let i = remo.length - 1; i >= 0; i--) {
    st = st + remo.charAt(i);
  }
  return st;
}

// let str1 = 'Appdivided';
// let removefirst = str1.slice(0);
// console.log('Removeing Character ' + removefirst);

function find_index(str) {
  let rev = '';
  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str.charAt(i);
  }
  //console.log(rev);
  if (rev == str) {
    console.log('-1');
  } else {
    //   let remov = '';
    for (let i = 0; i < str.length; i++) {
      let remo = str.substring(i + 1);
      let tempVari = reverseeee(remo);
      if (tempVari == remo) {
        console.log(i);
        break;
      }
    }
  }
}
let str = 'aaab';
find_index(str);

//=============================================================
function tackung(s) {
  let L = s.length;
  let i, j, a, b;
  for (i = 0, j = L - 1; i < L; i++, j--) {
    if (s.charAt(i) != s.charAt(j)) break;
  }
  if (i > j) return -1;

  for (a = i + 1, b = j; a < j && b > i + 1; a++, b--) {
    if (s.charAt(a) != s.charAt(b)) {
      // console.log(' tack ' + j);
      return j;
    }
  }
  // console.log(' tuck ' + i);
  return i;
}

let s = 'aaab';
let res = tackung(s);
console.log(res);


//======================================================================

var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function counter(x) {
  var count = 0,
    temp = [];
  x = x.split('');
  console.log(x);
  for (var i = 0, len = x.length; i < len; i++) {
    if (x[i] == "a") {
      count++;
    }
  }
  return count;
}
var a = "aabbddd";
console.log(counter(a));

//=========================================================================

function freq(str) {
  // there are three condition will be happends, like as
  //1- all frequency is same print YES.
  //2- all are same but one frequency is one print YES
  //3-  all frequency are same only one is higher by one. print YES

  let arr = [];
  let newArr = [];
  str.split('').forEach(function (val) {
    arr[val] ? arr[val]++ : (arr[val] = 1);
  });
  // console.log(arr);
  for (let key in arr) {
    // console.log(arr[key] + ' ');
    newArr.push(arr[key]);
  }
  // console.log(newArr);
  newArr.sort(function (a, b) {
    return a - b;
  });
  //console.log(newArr); //  1,1,2,2,3
  let L = newArr.length;
  if (L == 1) return 'YES';
  let first = newArr[0];
  let second = newArr[1];
  let secondLast = newArr[newArr.length - 2];
  let last = newArr[newArr.length - 1];

  //1- all frequency is same print YES.

  if (first == last) return 'YES';

  //2- all are same but one frequency is one print YES

  if (first == 1 && second == last) return 'YES';

  //3-  all frequency are same only one is higher by one. print YES
  if (first == second && second == secondLast && secondLast == last - 1)
    return 'YES';

  //other wise
  return 'NO';
}

//=== task operation value.
let str = 'aaabbdcee';
freq(str);

//==========================================================================
let arr = [14, 25, 46, 78, 94, 65, 32, 78, 14, 25, 34];
arr.forEach(function (val, i) {
  console.log(i + ' : ' + val);
});

function arr_(arr) {
  let newArr = [];
  arr.forEach(function (val) {
    newArr[val] ? newArr[val]++ : (newArr[val] = 1);
  });
  console.log(newArr);
}
let arr = [
  12, 24, 6, 5, 35, 35, 44, 16, 24, 24, 24, 35, 35, 5, 5, 5, 6, 6, 6, 24, 24,
  24, 24, 16, 16, 16,
];
arr_(arr);

//====================================================================================

function sherlockAndValidString(str) {
  let newArr = [];
  let arr = [];
  str.split('').forEach(function (val) {
    arr[val] ? arr[val]++ : (arr[val] = 1);
  });
  console.log(arr);
  //============================================================================
  for (let Tension in arr) {
    // use of in loop only work with key not values
    // that means in loop work with only key, but of loop wor with key and values i measn
    // of loop work with object.
    // console.log(arr[key] + ' ');
    newArr.push(arr[Tension]);
  }
  console.log(newArr);

  //==========================================================================
  for (let key of Object.keys(arr)) {
    // that is of loop in javascript program
    // console.log(arr[key] + ' ');
    newArr.push(arr[key]);
  }
  console.log(newArr);
  //================================================================
}
let str = 'abcdeedcbae';
sherlockAndValidString(str);

//=======================================================================

function modified(t1, t2, n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = t1 + Math.pow(t2, 2);
    t2 = result;
    t1 = result;
  }
  console.log(result);
}
let t1 = 0;
let t2 = 1;
let n = 6;
modified(t1, t2, n);

// console.log(Math.pow(2, 5));

// console.log(0 + Math.pow(2, 1));
// console.log('Power of 7:-  ' + Math.pow(2, 7));

//=======================================================================================


function climbingLeaderboard(scores, alice) {
  let result = [];
  let uniqueScores = [...new Set(scores)];
  for (const score of alice) {
    if (score >= uniqueScores[0]) {
      result.push(1);
    } else if (score < uniqueScores[uniqueScores.length - 1]) {
      result.push(uniqueScores.length + 1);
    } else {
      result.push(rankBinarySearch(score, uniqueScores));
    }
  }
  console.log(result);
}
function rankBinarySearch(score, uniqueScores) {
  let start = 0;
  let end = uniqueScores.length - 1;
  while (true) {
    let mid = Math.floor((start + end) / 2);
    // base cases
    if (uniqueScores[mid] === score) {
      return mid + 1;
    } else if (uniqueScores[mid] > score && uniqueScores[mid + 1] < score) {
      return mid + 2;
    } else if (uniqueScores[mid] < score && uniqueScores[mid - 1 > score]) {
      return mid - 1;
    }
    // recursion
    if (score < uniqueScores[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}
let score = [100, 100, 50, 40, 40, 20, 10];
let alice = [5, 25, 50, 120];
climbingLeaderboard(score, alice);

*/

function rotateArray(arr, d) {
  while (d) {
    arr.push(arr.shift());
    d--;
  }
  console.log(arr);
}
let arr = [1, 2, 3, 4, 5];
let d = 3;
rotateArray(arr, d);
