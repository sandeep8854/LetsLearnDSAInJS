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
//   console.log(set.dele_mentte(2));
// }
// let arr = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
// pairSocks(arr);

//=================================================================
function pairSocks(arr) {
  let pairCount = 0;
  let searchele_ment = new Set();
  for (let sock of arr) {
    if (searchele_ment.has(sock)) {
      pairCount++;
      searchele_ment.dele_mentte(sock);
    } else {
      searchele_ment.add(sock);
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
		if(countless==k)  //class is cancele_mentd
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
function appendAndDele_ment(s, t, k) {
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
appendAndDele_ment(s, t, k);



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

// for printing the ele_mentment

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


//===============================================================
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

//===============================================================

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
  return result;
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
let res = climbingLeaderboard(score, alice);
console.log(res);

//=======================================================================


function fibonacii(n) {
  let n1 = 0;
  let n2 = 1;
  let nextItem;

  for (let i = 1; i <= n; i++) {
    console.log(n1);
    nextItem = n1 + n2;
    n1 = n2;
    n2 = nextItem;
  }
}
let n = 5;
fibonacii(n);

//==================================
function fibo(n) {
  if (n < 2) {
    return n;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
}
let n = 5;
if (n <= 0) {
  console.log('Enter positive Number ? ');
} else {
  for (let i = 0; i <= n; i++) {
    console.log(fibo(i));
  }
}

//=========================================================

function facto(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * facto(num - 1);
  }
}
let num = 5;
console.log(facto(num));

//======================================================

// Window Sliding Technique:----
//---------------------------------------
// Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’
//consecutive ele_mentments in the array. means continous ele_mentment .
//----------------------------------------------------
// example :- arr=[100, 200, 300, 400];
// let k=2;
// O/p  700.
//-------------------------------------------------
// example :- arr=[1, 4, 2, 10, 23, 3, 1, 0, 20];
// let k=4;
// O/p =39;
//---------------------------------------------------

function max_Sum(arr, k) {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
    max = sum;
  }

  for (let i = k; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - k];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
let arr = [100, 200, 300, 400];
//[1, 4, 2, 10, 2, 3, 1, 0, 20];
let k = 2;
console.log(max_Sum(arr, k));

//========================================================================
// count longest non-repeting string ..
function longest(str) {
  let n = str.length;
  let longNonReptingString = '';
  let result = 0;
  for (let i = 0; i < n; i++) {
    let visited = new Array(256);
    for (let j = i; j < n; j++) {
      if (visited[str.charCodeAt(j)] == true) break;
      else {
        //   longNonReptingString += str[i];
        result = Math.max(result, j - i + 1);
        visited[str.charCodeAt(j)] = true;
      }
    }
  }
  return result;
  // return longNonReptingString;
}

let str = 'abcabcbb';
console.log(longest(str));
//====================================================

// let publi = 'freecodeCamp';
// let res = publi[0].toUpperCase() + publi.substring(1);

// console.log(res);

//===========================================================


//==================================================
let str = 'abccbc';
let myArr = new Array(str.length);

for (let i = 0; i < str.length; i++) {
  myArr[i] = new Array(str.length);
}
//console.log(myArr);

myArr[0][0] = 'a';
myArr[0][1] = 'b';
myArr[0][2] = 'c';
myArr[0][3] = 'd';
myArr[0][4] = 'e';
myArr[0][5] = 'f';
myArr[1][0] = 'g';
myArr[1][1] = 'h';

for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < str.length; j++) {
    console.log(myArr[i][j] + ' ');
  }
}
//=================================================

let str = 'abccbc';
let myArr = new Array(str.length);
for (let i = 0; i < str.length; i++) {
  myArr[i] = new Array(str.length);
}

//let num = 1;
for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < str.length; j++) {
    myArr[i][j] = true;
    // num += 1;
  }
}
console.log(myArr);

// for (let i = 0; i < str.length; i++) {
//   for (let j = 0; j < str.length; j++) {
//     console.log(myArr[i][j] + ' ');
//   }
// }

//====================================================================
// count number of palindrome in subsrting---
function countPalindrome(str) {
  let dp = new Array(str.length);
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    dp[i] = new Array(str.length);
  }
  for (let gap = 0; gap < str.length; gap++) {
    for (let i = 0, j = gap; i < dp.length; i++, j++) {
      if (gap == 0) {
        dp[i][j] = true;
      } else if (gap == 1) {
        if (str.charAt(i) == str.charAt(j)) {
          dp[i][j] = true;
        } else {
          dp[i][j] = false;
        }
      } else {
        if (str.charAt(i) == str.charAt(j) && dp[i + 1][j - 1] == true) {
          dp[i][j] = true;
        } else {
          dp[i][j] = false;
        }
      }
      if (dp[i][j] == true) {
        count++;
      }
    }
  } // gap loop end.
  // console.log(dp);
  console.log(count);
}

let str = 'abccbc';
countPalindrome(str);

//=====================================================================================
// explanations:--- str "abccbc"
//        j=0    j=1     j=2 |  j=3  | j=4   |=5
//       |-----|------|------|-------|-------|--------|
// i=0   |  a  | ab   | abc  | abcc  |abccb  |abccbc  |
//       |-----|------|------|-------|-------|--------|
//i=1    |     | b    |  bc  | bcc   |bccb   |bccbc   |
//       |-----|------|------|-------|-------|--------|
//i=2    |     |      | c    | cc    |ccb    |ccbc    |
//-      |-----|------|------|-------|-------|--------|
//i=3    |     |      |      | c     |cb     |cbc     |
//       |-----|------|------|-------|-------|--------|
//i=4    |     |      |      |       | b     | bc     |
//       |-----|------|------|-------|-------|--------|
//i=5    |     |      |      |       |       | c      |
//- -----|-----|------|------|-------|-------|--------|

//=====================================================================================
// longest palindrome substring count.

function longestPalindrome(str) {
  let dp = new Array(str.length);
  for (let i = 0; i < str.length; i++) {
    dp[i] = new Array(str.length);
  }
  let len = 0;
  for (let gap = 0; gap < str.length; gap++) {
    for (let i = 0, j = gap; j < str.length; i++, j++) {
      if (gap == 0) {
        dp[i][j] = true;
      } else if (gap == 1) {
        if (str.charAt(i) == str.charAt(j)) {
          dp[i][j] = true;
        } else {
          dp[i][j] = false;
        }
      } else {
        if (str.charAt(i) == str.charAt(j) && dp[i + 1][j - 1] == true) {
          dp[i][j] = true;
        } else {
          dp[i][j] = false;
        }
      }
      if (dp[i][j] == true) {
        len = gap + 1;
      }
    }
  }
  console.log(len);
}

let str = 'abdcbcdbdcbbc';
longestPalindrome(str);

//==========================================================================

// count longest palindrome substring in given string.

function count_longest_palindrome_substring(str) {
  let dp = new Array(str.length);
  for (let i = 0; i < str.length; i++) {
    dp[i] = new Array(str.length);
  }
  for (let gap = 0; gap < str.length; gap++) {
    for (let i = 0, j = gap; j < dp.length; i++, j++) {
      if (gap == 0) {
        dp[i][j] = 1;
      } else if (gap == 1) {
        dp[i][j] = str.charAt(i) == str.charAt(j) ? 2 : 1;
      } else {
        if (str.charAt(i) == str.charAt(j)) {
          dp[i][j] = 2 + dp[i + 1][j - 1];
        } else {
          dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
        }
      }
    }
  }
  console.log('Longest Palindrome Substring will be:- ' + dp[0][dp.length - 1]);
}

let str = 'abkccbc';
count_longest_palindrome_substring(str);

//====================================================================================
//====================================================================================
//   Time and space complexcity.
//------------------------------------
// Question :- 1
// given a proble find out time complexcity and space complexcity.

function sumArr(arr, n) {
  let sum = 0; //-------------------------------- 1
  for (let i = 0; i < arr.length; i++) {
    //     1       n+1            n          //-- n+1
    sum = sum + arr[i]; //----------------------- n
  }
  return sum; //--------------------------------- 1
}
//  1+n+1+n+1 = 2n+3 => f(n)=2n+3
// if we write what is degree og polynomial
// o(n)   --time complexcity.
//-----------------------------------------------------
//What is space complexcity
// arr-----  n
//sum-----   1
// i---------1
//  total of n+1+1 ==> n+2
//  s(n)==> O(n)-- space complexcity...

//==============================================================================


// Question:- 02
// given a problem find out time complexcity and space complexcity.

// given a 3*3 matrix

function matrix_Sum(a, b, n) {
  for (let i = 0; i < n; i++) {
    //----------------- n+1
    for (let j = 0; j < n; j++) {
      //--------------- n*(n+1)
      c[i][j] = a[i][j] + b[i][j]; //-------------- n*n
    }
  }
}
// n+1+(n^2+n)+n^2
// 2n^2+2n+1
// degree of polynomials
// O(n^2)   time complexity....

// space complpexcity..
//--a-----------n^2
//--b-----------n^2
//--c-----------n^2
//--n-----------1
//--i-----------1
//--j-----------1
//   n^2+n^2+n^2+1+1+1
//  3n^2+3
//  O(n^2)  in degree of polynomials..
// then we can say time and space complexcity both are O(n^2)
//time complexcity ----- O(n^2)
//space complexcity------O(n^2)

//===========================================================================

function multiplication(max1, max2) {
  let res = new Array(max1.length);
  for (let i = 0; i < res.length; i++) {
    res[i] = new Array(max1.length);
  }
  for (let i = 0; i < max1.length; i++) {
    //------------n+1
    for (let j = 0; j < max1.length; j++) {
      //----------n*(n+1)
      res[i][j] = 0; //---------------------------------n*n
      for (let k = 0; k < max1.length; k++) {
        //-------n*n*(n+1)
        res[i][j] += max1[i][k] * max2[k][j]; //--------n*n*n
      }
    }
  }
  console.log(res);
}
let max1 = [
  [1, 2],
  [3, 4],
];
let max2 = [
  [1, 1],
  [1, 1],
];
multiplication(max1, max2);

// n+1 + n*(n+1) + n*n + n*n(n+1)+ n*n*n
//n + 1 + n^2 + 1 + n^2 + n(n^2 + n) + n^3 +n^3 + n^2
//n+1 + n^2 +1 + n^2 + n^3 + n^2 + n^3
//2n^3 + 3n^2 + n+1
//f(n) = O(n^3)   based of polinomial degree
//time complexcity will be order of O(n^3)
//
//space complexcity
// matrix1 = n^2
//matrix2 = n^2
// i = j = k =1
//space complexcity will be 2n^2+3
//degree of polinomial f(n) = O(n^2)

//======================================================================

for (let i = 0; i < n; i++) {
  //--- n+1
  statement; // n
}

// time complexcity will be :- n+1+n==> 2n+1
// talking about degree of polynomial will be f(n)=O(n)

//=======================================================================

for(let i=n;i>0;i--){ // n+1
  statement; // n
}

// n+(n+1)==>2n+1
// f(n)=O(n) will be time complexcity...

//=========================================================================

for (let i = 1; i < n; i = i + 2) {
  statement; // n/2
}

// f(n) = (n/2)
// if we talking abont degree of palinnomial will be O(n) time complexcity.

//==========================================================================

for (let i = 1; i < n; i = i + 20) {
  statement; // n/20
}
//f(n)=(n/20)
// O(n)

//=======================================================================


for (let i = 1; i < n; i++) {
  //  n+1
  for (let j = 0; j < n; j++) {
    // n(n+1)
    statement; //n*n
  }
}
// n+1+n^2+n+n^2
// 2n^2+2n+1

// f(n)=2n^2+2n+1
//f(n)=O(n^2)

//========================================================================

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    statement;
  }
}
//   i     j     no.OfTimes
//   0     0
//        statement will not execute.
// ---------------------------------------------
//   1     0
//       statement 1
//        not execute.
//------------------------------------------------
//   2     0
//      statement
//       statement
//      not execute.
//-------------------------------------------------
//  3      0
//       statement
//       statement
//       statement
//      not execute
//-------------------------------------------------
//  4       0
//        statement
//        statement
//        statement
//        statement
//       Not execute

//
// total number of executin time will be 1+2+3+4+5+6==>n(n+1)/2
//  n(n+1)/2
// f(n)=n^2+n/2
// what is degree of palinnomial besed on degree
// then f(n)=O(n^2)  time complexcity...

//==========================================================================

let p = 0;
for (let i = 1; p <= n; i++) {
  p = p + i;
}
//  i         p
//  1        0+1=1
//  2        1+2=3
//  3        1+2+3
//  4        1+2+3+4
//  5        1+2+3+4+5
//  '
//  '
//  '
//  '
//  '
//  '
//  k       1+2+3+4+5+6+7+8+k
// when loop will be stoped
// assume that p>n the lop will be stop
//         p > n
//         p=k(k+1)/2
//        k(k+1)/2 > n
//       k^2 > n
//        k> root(n)
//    O(root(n) ==> time complexcity.
//==========================================================================


for (let i = 1; i < n; i = i * 2) {
  Statement;
}

//        i
//      -----------------------
//       1
//       1*2=2
//       2*2=4
//       2^2*2=8
//       2^3*2=16
//       2^4*2=32
//       .
//       .
//       .
//       2^k

// assume that  i >= n
//              i = 2^k
//              2^k>=n
//              2^k=n
//   k=(log Base2 n)
//f(n)=O(log Base2 n) == time complexcity.

//=========================================================================

// some other method how to calculate time complexcity and space complexcity.
//
//  for(let i=1;i<n;i++){
//     statement
//    }
//  i== 1+1+1+1+1+1+1+1+==n
//   k=n
// degree of palinomial  O(n).
//==========================================================================
for (let i = 1; i < n; i = i * 2) {
  statement;
}

// i=1*2*2*2*2*2*2*2===n
//   2^k=n
// k=(logBase2 n)

// f(n) = (logBase2 n)

//============================================================================

for (let i = n; i >= 1; i--) {
  statement;
}

//   i
//--------
//   n
//
//   n/2
//
//   n/2^2
//
//  n/2^3
//
//   n/2^k

//  assume that  i < 1
//              n/2^k < 1
//              n/2^k =1
//              n=2^k
//             k=(logBase2 n) time complexcity



//=========================================================

for (let i = 0; i * i < n; i++) {
  statement;
}

//   i * i < n 
//   i * i >= n
//   i^2 = n
//   i= root n;

// time complexcity  f(n)=O(root n)

//=============================================================


for (let i = 0; i < n; i++) {   // n
  console.log('Sandeep');
}
for (let j = 0; j < n; j++) {  // n
  console.log('Prajapati');
}

// n + n = 2n
//  f(n) = O(n)  time complexcity.

//==============================================================


let p = 0;
for (let i = 1; i > n; i = i * 2) {
  //log n
  p++;
}

for (let j = 1; j < p; j = j * 2) {
  // log p
  console.log('I am good');
}

// time complexcity = O(log log n)

//==================================================================


for (let i = 0; i < n; i++) {
  // n
  for (let j = 1; j < n; j = j * 2) {
    // n*logn
    console.log('Hello India...'); ///n*logn
  }
}

//  n + nlogn + nlogn
// 2n logn + n
// f(n)= O(n logn)  time complexcity.
//============================================================


// Analysis of if and while loop
//---------------------------------------
let i = 0;      // 1
while (i < n) {  // n+1
  console.log('Sandeep'); //n
  i++;  //n
}

// f(n) = 3n+1
// f(n) = O(n) time complexcity

//============================================================


//======================================================
//        Leetcode :- -----
//-------------------------------
// Question :-1 Two Sum

function two_sum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let find = target - arr[i];
    let index = arr.indexOf(find);
    if (index != -1 && index !== i) {
      return [i, index];
    }
  }
}
let arr = [3, 2, 4];
let target = 6;
console.log(two_sum(arr, target));

//==================================================================


function happy_Number(n) {
  let newSet = new Set();
  while (true) {
    let sum = 0;
    while (n != 0) {
      let reminder = n % 10;
      sum = sum + reminder * reminder;
      n = Math.floor(n / 10);
    }
    if (sum == 1) {
      return true;
    } else {
      n = sum;
      sum = 0;
      if (newSet.has(n)) {
        return false;
      } else {
        newSet.add(n);
      }
    }
  }
}

let n = 13;
let res = happy_Number(n);
if (res == true) {
  console.log('true');
} else {
  console.log('false');
}

//====================================================================

// let n = '0012345-';
// console.log(parseFloat(n)); // 12345

// let x = -5432100;
// let res = Math.sign(x);
// console.log(res); // -1
// let nu = 12345;
// let ress = nu * res;
// console.log(ress);

//=================================

function reverse_Number(n) {
  let tostr = n.toString();
  let spli = tostr.split('');
  let res = spli.reverse();
  let joi = res.join('');
  let parsefloat = parseFloat(joi);
  // console.log(parsefloat);
  let math = parsefloat * Math.sign(n); // original values of number.
  return math;
}
let n = 1534236469;
console.log(reverse_Number(n));

//=======================================================================

function primeNumber(num) {
  let isPrime = true;

  if (num == 1 || num < 1) {
    console.log(num + ' is not prime number ..');
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log('number is prime number.');
    } else {
      console.log('number is not prime number.');
    }
  }
}
let num = 12;
primeNumber(num);

//==============================================================================
function primeNumber(starting, ending) {
  let arr = [];

  for (let i = starting; i <= ending; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) {
      arr.push(i);
    }
  }
  console.log(arr + '');
}
let starting = 2;
let ending = 50;
primeNumber(starting, ending);

// function wayToLongWord(str) {
//   let l = str.length;
//   let temp = str.charAt(0);
//   let temp2 = str.charAt(l - 1);
//   let result = 0;
//   if (l <= 10) {
//     console.log(str);
//   } else {
//     result = l - 2;
//     let t = temp + result;
//     let re = t + temp2;
//     console.log(re);
//   }
// }
// let str = 'sandep';
// wayToLongWord(str);

//========================================================================

function birthdayCakeCandies(arr) {
  let xor = 0;
  arr.sort(function (a, b) {
    return a - b;
  });
  let maxiM = arr[arr.length - 1];
  for (let i = 0; i < arr.length; i++) {
    if ((maxiM ^ arr[i]) == 0) {
      xor++;
    }
  }
  console.log('count ' + xor);
}

let arr = [3, 2, 1, 3, 3];
birthdayCakeCandies(arr);

//
// let x = 5;
// let y = 5;
// console.log('xor value :-' + (x ^ y));

//==========================================================================


function timeFormat(s) {
  let time = s.split(':');

  let hour = time[0];
  console.log(hour);
  // console.log(typeof hour);  // string.

  let minutes = time[1];
  console.log(minutes);

  let second = time[2].substring(0, 2);
  console.log(second);

  let ampm = time[2].substring(2, 4);
  console.log(ampm);

  if (ampm == 'AM') {
    if (hour == '12') {
      return '00' + ':' + minutes + ':' + second;
    } else {
      return hour + ':' + minutes + ':' + second;
    }
  } else {
    if (hour == '12') {
      return hour + ':' + minutes + ':' + second;
    } else {
      return parseInt(hour) + 12 + ':' + minutes + ':' + second;
    }
  }
}
//
let s = '12:00:11PM';
let res = timeFormat(s);
console.log(res);
// console.log('hour ' + time[0]);

// console.log('minutes ' + time[1]);

// console.log('second ' + time[2].substring(0, 2));

// console.log('AMPM ' + time[2].substring(2, 4));

//=============================================================================


function sherlockArray(arr) {
  let sum = 0;
  for (let x of arr) {
    sum += x;
  }
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (2 * x == sum - arr[i]) {
      return 'YES';
    }
    x = x + arr[i];
  }
  return 'NO';
}
let arr = [1, 2, 3];
console.log(sherlockArray(arr));


//=================================================================

// let  fine=0;
// 		if(ExpectedYear<returnedYear)
// 		{
// 			fine=10000;
// 		}
// 		else if(ExpectedYear==returnedYear)
// 		{
// 			if(ExpectedMonth<returnedMonth)
// 			{
// 				fine=(returnedMonth-ExpectedMonth)*500;
// 			}
// 			else if(ExpectedMonth==returnedMonth)
// 			{
// 				if(ExpectedDay<returnedDay)
// 				{
// 					fine=(returnedDay-ExpectedDay)*15;
// 				}
// 	}
// }
// System.out.println(fine);
function libraryFine(
  yourDate,
  YourMonth,
  yourYear,
  issueDate,
  issueMonth,
  issueYear
) {}

let yourDate = 6;
let YourMonth = 6;
let yourYear = 2015;
let issueDate = 9;
let issueMonth = 6;
let issueYear = 2015;
console.log(
  libraryFine(yourDate, YourMonth, yourYear, issueDate, issueMonth, issueYear)
);

//=================================================================================

function extraLongFactorial(n) {
  let bigint = BigInt(n);
  let facto = 1n;
  for (let i = 0n; i < bigint; i++) {
    facto *= bigint - i;
  }
  console.log(String(facto));
}
let n = 10;
extraLongFactorial(n);

//===================================================================================

function appendAndDele_ment(s, t, k) {
  console.log(s.length);
  console.log(t.length);
  let dele_ment = 0;
  let add = 0;
  if (k % 2 == 0) {
    dele_ment = k / 2;
    add = k / 2;
  } else {
    dele_ment = Math.floor(k / 2) + 1;
    add = Math.floor(k / 2);
  }

  let result = '';
  for (let i = 0; i <= dele_ment; i++) {
    result = result + s.charAt(i);
  }
  // console.log(result);
  for (let i = dele_ment + 1; i < s.length; i++) {
    result = result + t.charAt(i);
  }
  console.log(result);
  if (result == t) {
    return 'Yes';
  } else {
    return 'No';
  }
}
let s = 'hackerhappy';
let t = 'hackerrank';
let k = 9;
console.log(appendAndDele_ment(s, t, k));

//===================================================================
// function countSquareRoot(a, b) {
//   let count = 0;
//   // for (let i = a; i <= b; i++) {
//   //   if (Number.isInteger(Math.sqrt(i))) {
//   //     count++;
//   //   }
//   // }
//   // console.log(count);

//   let rs = Number.isInteger(Math.sqrt(a)); // he give time out..
//   console.log(rs);  // think different opproach may he will give the true value .
//   console.log(Math.floor(Math.sqrt(b)));// then test casees will be passeses.
// }
// let a = 24;
// let b = 49;
// countSquareRoot(a, b);

function countSquareRoot(a, b) {
  let squareOf_A = Math.floor(Math.sqrt(a));
  console.log('Square of A value : - ' + squareOf_A);
  //
  let squareOf_B = Math.floor(Math.sqrt(b));
  console.log('square of B value : - ' + squareOf_B);
  //
  let result = squareOf_B - squareOf_A;
  //
  if (squareOf_A * squareOf_A >= a) {
    result++;
  }
  return result;
}
let a = 24;
let b = 49;
console.log('Number of square within the  number : - ' + countSquareRoot(a, b));

//=====================================================================================

function cut_The_Sticks(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  // console.log(arr);
  let minNum = Number.MAX_VALUE;
  let newArr = [];
  let result = [];
  let minVal = minFunction(arr);
  for (let i = 0; i < arr.length; i++) {
    let tempLen = arr.length;
    result.push(tempLen);
    let res = arr[i] - minVal;
    newArr.push(res);
  }
  // for (let i = 0; i < arr.length; i++) {
  //   // if (arr[i] < minNum) {
  //   //   minNum = arr[i];
  //   // }
  // }
  // console.log(minNum);
}
let arr = [5, 4, 4, 2, 2, 8];
cut_The_Sticks(arr);

function minFunction(arr) {
  let min = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

int tempSum=-1;
		while(tempSum!=0)
		{
			int min=Integer.MAX_VALUE;
			for(int i=0;i<arr.length;i++)
			{
				if(min>=arr[i]&&arr[i]!=0)
				{
					min=arr[i];
				}
			}
			int count=0;
			tempSum=0;
			for(int i=0;i<arr.length;i++)
			{
				if(arr[i]>=min)
				{
					arr[i]=arr[i]-min;
					count++;
				}
				tempSum=tempSum+arr[i];
			}
			System.out.println(count);
		}	
//==========================================================================


function cut_And_Strick(arr) {
  let newArraySa = [];
  let tempSum = -1;
  while (tempSum != 0) {
    let min = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++) {
      if (min >= arr[i] && arr[i] != 0) {
        min = arr[i];
      }
    }
    let count = 0;
    tempSum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= min) {
        arr[i] = arr[i] - min;
        count++;
      }
      tempSum = tempSum + arr[i];
    }
    // console.log(count);
    newArraySa.push(count);
  }
  // console.log(newArraySa);
  for (let i = 0; i < newArraySa.length; i++) {
    console.log(newArraySa[i] + ' ');
  }
}

let arr = [1, 2, 3, 4, 3, 3, 2, 1];
cut_And_Strick(arr);

//==================================================================
//console.log(Number.MAX_VALUE); //1.7976931348623157e+308
//console.log(Number.MIN_VALUE); //5e-324

// function findMin(a) {
//   let min1 = Number.MAX_VALUE;
//   for (let i = 0; i < a.length; i++) {
//     if (min1 > a[i]) {
//       min1 = a[i];
//     }
//   }
//   console.log('Min Number :- ' + min1);
// }
// let a = [12, 45, 16, 21, 14, 8];
// findMin(a);


//=============================================================================

function cutting_Eadge(arr) {
  let resultArr = [];
  let min = Number.MAX_VALUE;
  let tempSum = -1;
  while (tempSum != 0) {
    for (let i = 0; i < arr.length; i++) {
      if (min >= arr[i] && arr[i] != 0) {
        min = arr[i];
      }
    }
    let count = 0;
    tempSum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= min) {
        arr[i] = arr[i] - min;
        count++;
      }
      tempSum += arr[i];
    }
    resultArr.push(count);
  }
  return resultArr;
}
let arr = [1, 2, 3, 4, 3, 3, 2, 1];
console.log(cutting_Eadge(arr));

//===============================================================================

function rotatele_mentft(arr, d) {
  while (d > 0) {
    let shi = arr.shift();
    arr.push(shi);
    d--;
  }
  console.log(arr);
}
let arr = [1, 2, 3, 4, 5];
let d = 4;
rotatele_mentft(arr, d);


//===============================================================================

function funnyString(str) {
  let originalStingArr = [];
  let reverseStringArr = [];

  for (let i = 0; i < str.length; i++) {
    let utfVal = str.charCodeAt(i);
    originalStingArr.push(utfVal);
  }

  for (let i = str.length - 1; i >= 0; i--) {
    let revUtf = str.charCodeAt(i);
    reverseStringArr.push(revUtf);
  }
  // console.log(originalStingArr);
  // console.log(reverseStringArr);

  let asciiCode = [];
  let revAsciiCode = [];
  for (let i = 0; i < originalStingArr.length - 1; i++) {
    let dif = Math.abs(originalStingArr[i] - originalStingArr[i + 1]);
    let diff2 = Math.abs(reverseStringArr[i] - reverseStringArr[i + 1]);
    asciiCode.push(dif);
    revAsciiCode.push(diff2);
  }

  // console.log(asciiCode);
  // console.log(revAsciiCode);

  if (asciiCode.join() == revAsciiCode.join()) {
    console.log('Funny');
  } else {
    console.log('Not Funny');
  }
}
let str = 'ivvkx';
funnyString(str);

// function temp(arr) {
//   let asciiCode = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     let diff = Math.abs(arr[i] - arr[i + 1]);
//     asciiCode.push(diff);
//   }
//   console.log(asciiCode);
// }
// let arr = [108, 109, 110, 111, 112];
// temp(arr);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [1, 2, 4, 5, 6];
// let arr3 = [1, 2, 3, 4, 5];
// let arrStr = arr1.join();
// console.log(arrStr);

// let arrstr2 = arr3.join();
// console.log(arrstr2);

// if (arrStr == arrstr2) {
//   console.log('It is equal');
// } else {
//   console.log('Not equal');
// }


//========================================================================

function median(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  // console.log(arr);
  if (arr.length % 2 == 0) {
    let div = Math.floor(arr.length / 2);
    console.log((arr[div - 1] + arr[div]) / 2);
  } else {
    let res = Math.floor(arr.length / 2);
    console.log(arr[res]);
  }
}
let arr = [5, 3, 1, 2, 4];
median(arr);


//============================================================================
function lonelyInteger(arr) {
  let xor = 0;
  for (let x of arr) {
    xor ^= x;
  }
  console.log('Lonely Integer will be :-' + xor);
}
let arr = [1, 1, 4, 4, 5, 6, 6, 7, 7, 8, 8];
lonelyInteger(arr);

//=============================================================================

function camalCase(s) {
  let word_count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      word_count++;
    }
  }
  console.log(word_count);
}
let s = 'oneTwoThree';
camalCase(s);

//============================================================================

function markAndToys(arr, k) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let sum = 0;
  let count = -1;
  for (let i = 0; i < arr.length; i++) {
    if (sum <= k) {
      sum = sum + arr[i];
      count++;
    } else {
      break;
    }
  }
  console.log(count);
}
let arr = [1, 2, 3, 4];
let k = 7;
markAndToys(arr, k);

//====================================================================================

function ceaserCypher(str) {
  let newStr = '';
  for (let i = 1; i < str.length; i++) {
    let ch = str.charAt(i);
    newStr += ch;
  }
  console.log(newStr);
}

//let str = `There's-a-starman-waiting-in-the-sky`;
let str = 'middle-Outz';
let k = 2;
ceaserCypher(str, k);

//=================================================================================
function maximam_Xor(low, high) {
  // let xor = 0;
  let max_Value_ = 0;
  let res = 0;
  let max = -Infinity;
  for (let i = low; i <= high; i++) {
    for (let j = low; j <= high; j++) {
      let xor = i ^ j;
      res = Math.max(xor, max_Value_);
      if (res > max) {
        max = res;
      }
    }
  }
  console.log(max);
}

let lowerBound = 10;
let uperBound = 15;

maximam_Xor(lowerBound, uperBound);

//===================================================================================

function findMax_And_Min_Value(arr) {
  let len = arr.length;
  let max = -Infinity;

  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }

  //============================================================

  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  console.log('Max Value will be :- ' + max);
  console.log('Min Value Will be :- ' + min);
}

let arr = [10, 14, 15, 35, 98, 17, 3, 45, 86, 12, 14, 15];
findMax_And_Min_Value(arr);

//==================================================================

function min_abs_Diff(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let min = Infinity;
  for (let i = 1; i < arr.length; i++) {
    let prev = arr[i - 1];
    let curr = arr[i];
    let diff = Math.abs(prev - curr);
    min = Math.min(diff, min);
  }

  console.log('Min diff will be :- ' + min);
}
let arr = [1, -3, 71, 68, 17];
min_abs_Diff(arr);


//==================================================================

function beautifulDay_(sta_Day, end_Day, diviser_) {
  let reves = 0;
  let last_Digit = 0;
  let beautiful = 0;
  // let j = 0;
  for (let i = sta_Day; i <= end_Day; i++) {
    // while (i != 0) {
    //   last_Digit = i % 10;
    //   reves = reves * 10 + last_Digit;
    //   i = Math.floor(i / 10);
    // }
    reves =
      parseFloat(i.toString().split('').reverse().join('')) * Math.sign(i);
    //   last_Digit = 0;
    let diff = Math.abs(i - reves);
    if (reves % diviser_ == 0) {
      beautiful++;
    }
    reves = 0;
  }
  console.log(beautiful);
}
let sta_Day = 20;
let end_Day = 23;
let diviser_ = 6;
beautifulDay_(sta_Day, end_Day, diviser_);

// function revvvvv(num) {
//   let rev = 0;
//   let last_Digit = 0;
//   while (num != 0) {
//     last_Digit = num % 10;
//     rev = rev * 10 + last_Digit;
//     num = Math.floor(num / 10);
//   }
//   console.log(rev);
// }
// let num = 21;
// revvvvv(num);

//==============================================================

function priyanka_And_Toys(weight) {
  weight.sort(function (a, b) {
    return a - b;
  });

  let sum = 0;
  let container = 0;
  for (let i = 0; i < weight.length; i++) {
    let compare = weight[i] + 4;
    if (compare < sum) {
      sum = sum + arr[i];
    } else {
      container++;
    }
  }
  console.log(container);
}
let weight = [1, 2, 3, 21, 7, 12, 14, 21];
priyanka_And_Toys(weight);
// Wrong Answer---

//====================================================================

function sansa_XOR(arr, current_Index) {
  let len = arr.length;
  let newArr = [];
  let xor = 0;
  // let current_Index = 0;
  if (current_Index == len) {
    return;
  }

  for (let i = current_Index; i < len; i++) {
    let result = arr[i];
    // console.log(result);
    xor = xor ^ result;
  }

  sansa_XOR(arr, current_Index + 1);
  //  console.log(newArr);
  //  console.log(newArr);
  console.log(xor);
}
let arr = [1, 2, 3];
let current_Index = 0;
sansa_XOR(arr, current_Index);

// wrong answer---

//======================================================================

function sansa_(arr) {
  let n = arr.length;
  let newArr = [];
  let xor = 0;
  for (let i = 0; i < n; i++) {
    //This loop will sele_mentct start ele_mentment

    for (
      let j = i;
      j < n;
      j++ //This loop will sele_mentct end ele_mentment
    ) {
      for (
        let k = i;
        k <= j;
        k++ ///////////////// //This loop will print ele_mentment from start to end
      ) {
        //  console.log(arr[k]);
        newArr.push(arr[k]);
      }
      console.log('\n');
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    xor = xor ^ newArr[i];
  }
  console.log(xor);
  // console.log(newArr);
}
let arr = [1, 2, 3];
sansa_(arr);
//wrorng answer------

//=========================================================================

function sum_vs_Xor(n) {
  let count = 0;
  for (let i = 0; i <= n - 1; i++) {
    if ((n + i == n) ^ i) {
      count++;
    }
  }
  console.log(count);
}
let n = 4;
sum_vs_Xor(n);

//=========================================================================

function sumXor(n) {
  let count = 0;
  let bin = n.toString(2);
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] == 0) {
      count++;
    }
  }
  if (n == 0) {
    count = 0;
  }
  // let ress = Math.pow(2, count);
  console.log(2 ** count);
}
let n = 4;
sumXor(n);

//=======================================================
// Day-4-----
//-----------
//=======================================================
function pangram_Sandeep(str) {
  let len = str.length;
  let for_Comparing = 'abcdefghijklmnopqrstuvwxyz';
  // console.log(len);
  let without_space = '';
  if (len < 26) {
    return 'not pangram';
  }
  let small_Letter = str.toLowerCase();
  for (let i = 0; i < small_Letter.length; i++) {
    if (small_Letter[i] != ' ') {
      without_space = without_space + small_Letter[i];
    }
  }
  let count = 0;
  for (let i = 0; i < without_space.length; i++) {
    for (let j = 0; j < without_space.length; j++) {
      if (for_Comparing.charAt(i) == without_space.charAt(j)) {
        count++;
        break;
      }
      // break;
    }
  }
  console.log(count);
  // console.log(without_space);
  // console.log(for_Comparing);

  // console.log(small_Letter);
  // console.log(without_space);
  //-----------------------------------------------------

  // let doing_split = small_Letter.split(' ').join();
  // console.log(doing_split);
  // console.log(typeof doing_split); // string
  // console.log(doing_split.length); //
}

let str = 'The quick brown fox jumps over the lasy dogs';
pangram_Sandeep(str);

//============================================
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     if (j == 2) {
//       break;
//     }
//   }
// }

//========================================================================

function find_Digit(n) {
  let count = 0;
  let temp_Num = n;
  while (n != 0) {
    let last_Digit = n % 10;
    if (temp_Num % last_Digit == 0) {
      count++;
    }
    n = Math.floor(n / 10);
  }
  console.log(count);
}

let n = 124;
find_Digit(n);

//============================================================================

// Day-5 , Friday
//----------------------
//----------------------

function fair_Rotations(arr) {
  let bread_Count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] % 2 != 0) {
      arr[i] = arr[i] + 1;
      arr[i + 1] = arr[i + 1] + 1;
      bread_Count = bread_Count + 2;
    }
  }
  if (arr[arr.length - 1] % 2 != 0) {
    console.log('NO');
  } else {
    console.log(bread_Count);
  }
}

let arr = [2, 3, 4, 5, 6];
fair_Rotations(arr);

//===================================================================

// function big_Sorting(unsorted) {
//   return unsorted.sort((val_A, val_B) => {
//     if (val_A.length == val_B.length) {
//       return val_A > val_B ? 1 : -1;
//     }

//     return val_A.length - val_B.length;
//   });
// }
// let arr = [31415926535897932384626433832795, 1, 3, 10, 3, 5];
// big_Sorting(arr);
//========================================================================

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
// question :- find the missing ele_mentment in given array.

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


//==========================================================================
// Day-6 . Saturday--
//-----------------------------------------
// sansa xor --
// given an array to find subarray of every ele_mentment of xor, and determine the values
// of every ele_mentment xor..

// given an array
// let arr=[1,2,3];
// what is subarray of the array.
// like as [1],[2],[3],[1,2],[2,3],[1,2,3];

// we write one more type with wothout array.
//--------------------------------------------------
//     1 /
//     2 /
//     3 /
//    / 1, 2 /
//   /  2, 3 /
//     1, 2 /, 3
// then you find the only 1 and 3 ele_mentment in given all subarray.
// 1 and 3 ele_mentment will be remainig.
// arr=[1,2,3];
//      |   |
// we can say index of ele_mentment 0 and 2 will be remaining.
// so we can say if index%2==0 then take the xor , other wise take don't
//---------------------------------------------------------------------
// supose we take an array with even length of array.
// let arr=[1,2,3,4]; then we can write all subarray of the array ele_mentment.
// like as --
//     1 /
//     2 /
//     3/
//     4/
//  /  1,  2/
//     2/,  3/
//     3,  4/
//     1/,  2/,  3/
//     2/,  3,  4/
//     1/,  2/,  3/,  4/
//
// we can say if array length of even then every ele_mentment will be cancel out.
// no ele_mentment will be remaining.
//
//-----------------------------------------------------------------------------------

function sandeep_Birthdays(
  black_Ball,
  white_Ball,
  black_Ball_Cost,
  white_Ball_Cost,
  convertor_
) {
  let min_cost = 0;
  if (black_Ball_Cost == white_Ball_Cost && black_Ball == white_Ball) {
    min_cost = black_Ball * black_Ball_Cost + white_Ball * white_Ball_Cost;
    console.log(min_cost);
  }
  // console.log(min_cost); // 20 testcase 1
  else if (black_Ball_Cost < convertor_ && white_Ball_Cost < convertor_) {
    min_cost = black_Ball * black_Ball_Cost + white_Ball * white_Ball_Cost;
    console.log(min_cost);
  }
  // console.log(min_cost); // 37 testcase 2
  else if (black_Ball_Cost > white_Ball_Cost + convertor_) {
    black_Ball_Cost = white_Ball_Cost + convertor_;
    min_cost = black_Ball * black_Ball_Cost + white_Ball * white_Ball_Cost;
    console.log(min_cost);
  } else if (white_Ball_Cost > black_Ball_Cost + convertor_) {
    white_Ball_Cost = black_Ball_Cost + convertor_;
    min_cost = black_Ball * black_Ball_Cost + white_Ball * white_Ball_Cost;
    console.log(min_cost);
  } else {
    min_cost = black_Ball * black_Ball_Cost + white_Ball * white_Ball_Cost;
    console.log(min_cost);
  }
}
let black_Ball = 3;
let white_Ball = 3;
let black_Ball_Cost = 1;
let white_Ball_Cost = 9;
let convertor_ = 2;
sandeep_Birthdays(
  black_Ball,
  white_Ball,
  black_Ball_Cost,
  white_Ball_Cost,
  convertor_
);

//=====================================================================================

function string_Constrction(str) {
  let p = '';
  let cost = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != p[i]) {
      p = p + str.charAt(i);
      cost++;
    }
  }
  console.log(cost);
  // console.log('String will be ' + p);
}
let str = 'abab';
string_Constrction(str);

//==========================================================================

function palindrome_index(str) {
  // let resv = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   resv += str.charAt(i);
  // }
  // if (str == resv) {
  //   console.log('-1');
  // } else {
  //   while(i)
  // }

  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str.charAt(i) != str.charAt(j)) {
      if (palindromeindexBySandeep(str, i, j - 1)) {
        console.log(j);
      } else {
        console.log(i);
      }
      break;
    }
    i++;
    j--;
  } // while closing
  if (i >= j) {
    console.log('-1');
  }
}

let str = 'aaab';
palindrome_index(str);

function palindromeindexBySandeep(str, i, j) {
  while (i < j) {
    if (str.charAt(i++) != str.charAt(j--)) {
      return false;
    }
  }
  return true;
}

//====================================================================


function palindrome_index(str) {
  for (let i = 0; i < str.length; i++) {
    let new_String = str.slice(0, i) + str.slice(i + 1);
    if (is_Palindrome(new_String)) {
      console.log(i);
      break;
    }
  }
  console.log('-1');
}
let str = 'aaa';
palindrome_index(str);

function is_Palindrome(str) {
  let reves = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reves = reves + str.charAt(i);
  }
  if (reves == str) {
    return true;
  } else {
    return false;
  }
}

//========================================================================

// let str = 'abcdef';
// let new_String = str.slice(0, 2) + str.slice(2 + 1);
// console.log(new_String);

// console.log(str.slice(-1)); //f
// console.log(str.slice(-2)); //ef

// console.log(str.slice(0)); // abcdef
// console.log(str.slice(1)); // bcdef

// console.log(str.slice(0, 0)); // nothing will happend.

// console.log(str.slice(0, 1)); // a

// console.log(str.slice(0, 2)); //ab

// console.log(str.slice(0, 3)); //abc

// let str = 'peednas';
// let res = str.split('').reverse().join('');
// console.log(res);
// let str = 'abcd';
// console.log(str.slice(0 + 1)); // bcd
// console.log(str.slice(0, 0)); // noting
//===========================================================================
function palindrome_Index(str) {
  // let count = -1;
  let re = str.split('').reverse().join('');
  if (re == str) {
    console.log('-1');
  } else {
    let i = 0;
    for (i = 0; i < str.length; i++) {
      let new_string = str.slice(0, i) + str.slice(i + 1);
      if (palindrome_(new_string)) {
        console.log(i);
        break;
      }
    }
    //console.log('-1');
    if (i > str.length - 1) {
      console.log('-1');
    }
  }
}
let str = 'bcbc';
palindrome_Index(str);

function palindrome_(new_string) {
  return new_string == new_string.split('').reverse().join('') ? true : false;
}


//=================================================================================

function palindrome_Index(s) {
  let index = -1;
  let len = s.length;

  if (len >= 1 && len <= 100005 && s !== s.split('').reverse().join('')) {
    for (let i = 0; i < len; i++) {
      if (s.charAt(i) != s.charAt(len - 1 - i)) {
        let s1 = s.slice(0, i) + s.slice(i + 1);
        let s2 = s.slice(0, len - 1 - i) + s.slice(len - 1 - i + 1);

        if (s1 === s1.split('').reverse().join('')) {
          index = i;
        } else if (s2 === s2.split('').reverse().join('')) {
          index = len - 1 - i;
        }
        break;
      }
    }
  }
  console.log(index);
}
let s = 'abcda';
palindrome_Index(s);

//=================================================================
// Day- 8 , Monday.
//---------------------------

function string_Constrctions(str) {
  let newArr = [];
  let set = new Set(str);
  for (let set_ele_mentment of set) {
    newArr.push(set_ele_mentment);
  }

  console.log(newArr);
  console.log(newArr.length);
}

let str = 'abcd';
string_Constrctions(str);
for(int i=0;i<chapter;i++)
		{
			System.out.println("Enter Number of problem in chapter ?  ? ");
			int chapterProblem=sc.nextInt();
			int pgnumber=numberOFPages+1;
			for(int j=1;j<=chapterProblem;j++)
			{
				if(j==pgnumber)
					spacialProblem++;
				if(j%problem==0 && j<chapterProblem)
				{
					pgnumber++;
				}
			}
			numberOFPages=pgnumber;	
		}
		System.out.println(spacialProblem);

//=======================================================================


function sandeep_WorkBook(chapter, k, arr) {
  let page = 1;
  let chapter_in_Running = 1;
  let spacial_Problem = 0;
  let starting_page = 1;

  for (let i = 0; i < arr.length; i++) {
    if (k == chapter_in_Running) {
      spacial_Problem++;
    } else {
      page++;
      chapter_in_Running += k;
    }
  }
  console.log(spacial_Problem);
}

let chapter = 5;
let no_of_Problem_Can_hold_Each_Page = 3;
let no_of_Problem_inEach_Chapter = [4, 2, 6, 1, 10];
sandeep_WorkBook(
  chapter,
  no_of_Problem_Can_hold_Each_Page,
  no_of_Problem_inEach_Chapter
);

//===================================================================

function sandeep_Book(arr, n_of_chapter, k) {
  let spacial_page = 0;
  let boundary_check = 0;
  let page_Number = 1;
  for (let i = 1; i <= n_of_chapter; i++) {
    //for chapter
    for (let j = 1; j <= arr[i]; j++) {
      // for question.
      if (j <= k * boundary_check) {
        if (j == page_Number) spacial_page++;
      } else {
        page_Number++;
        if (j == page_Number) spacial_page++;
        boundary_check++;
      }
    }
    page_Number++;
    boundary_check = 1;
  }
  console.log(spacial_page);
}
let arr = [4, 2, 6, 1, 10];
let n_of_chapter = 5;
let k = 3;
sandeep_Book(arr, n_of_chapter, k);

//=============================================================================
function flipping_Bits(number) {
  let binary = number.toString(2);
  let len = binary.length;
  console.log(binary);
  let flipting = '';
  let bit_32_ = '00000000000000000000000000000000';
  console.log('Bit:- ' + bit_32_.length);
  //  console.log(~binary.toString(2));
  // for(let i=0;i<binary.length;i++){
  //     if(binary[i]==0){

  //     }
  // let len = 32 - binary.length;
  // console.log(len);
  for (let i = 0; i < bit_32_.length - len; i++) {
    flipting = flipting + bit_32_[i];
  }
  // console.log(flipting);
  for (let i = 0; i < binary.length; i++) {
    flipting = flipting + binary[i];
  }
  console.log(flipting);
  console.log(typeof flipting);
  let flip = '';
  for (let i = 0; i < flipting.length; i++) {
    if (flipting[i] === '0') {
      flip = flip + '1';
    } else {
      flip = flip + '0';
    }
  }
  console.log(flip); // 11111111111111111111111111110110
  // console.log(parseInt(toString(flip, 2)));
  let decimal = parseInt(flip, 2);
  // parseInt(binary,radix); // may be radix will be any think may be decimal hexa,ocatal anything
  // will be there he will change as your requirement.
  console.log(decimal);
}
let n = 9;
flipping_Bits(n);

//========================================================
// let bin = '1001';
// let decimal = parseInt(bin, 2);
// console.log(decimal);
//====================================================
// let n = 9;
// let binary = n.toString(2);
// console.log(binary); // 1001
// let newStr = '';
// for (let i = 0; i < binary.length; i++) {
//   if (binary[i] === '0') {
//     newStr = newStr + '1';
//   } else {
//     newStr = newStr + '0';
//   }
// }
// console.log(newStr); // 0110

//==========================================================
// let n = 9;
// let va = n.toString(2);
// for (let i = 0; i < va.length; i++) {
//   if (va[i] === '0') {
//     va[i] = '1';
//   } else {
//     va[i] = 0;
//   }
// }
// console.log('0'.repeat(2 - va.length) + va);

//=========================================================

// let n = 9;
// let binary = n.toString(2);
// console.log(binary);
// //let newString = '';
// // let i = 0;
// // console.log(i ^ 1);
// for (let i = 0; i < binary.length; i++) {
//   binary[i] = binary[i] ^ 1;
// }
// console.log(binary);

// for (let i = 0; i < binary.length; i++) {
//   if (binary[i] === '0') {
//     newString[i] = '1';
//   } else {
//     newString[i] = '0';
//   }
// }
// console.log(newString);

//===============================================================
// Day -9, Monday // 12/07/2022
//---------------------------------------------------------------
// let bin = '1001';
// let flip = '';
// for (let i = 0; i < bin.length; i++) {
//   if (bin[i] ^ (0 == 0)) {
//     flip = flip + 1;
//   } else {
//     flip = flip + 0;
//   }
//   // console.log(flip);
// }
// console.log(flip);

//=========================================================================


function missing_Number(arr, actal_Arr) {
  let result = [];
  for (let i = 0; i < arr.length; ) {
    for (let j = 0; j < actal_Arr.length; ) {
      if (arr[i] == actal_Arr[j]) {
        j++;
      } else {
        // result.push(actal_Arr[j]);
        j++;
        i++;
      }
    }
  }
  result.sort(function (a, b) {
    return a - b;
  });
  console.log(result);
}
let arr = [7, 2, 5, 3, 5, 3];
let actal_Arr = [7, 2, 5, 4, 6, 3, 5, 3];
missing_Number(arr, actal_Arr);

//============================================================
// function missing_Number(arr, actal_Arr) {
//   // arr.sort(function (a, b) {
//   //   return a - b;
//   // });
//   // actal_Arr.sort(function (a, b) {
//   //   return a - b;
//   // });
//   // console.log(arr);
//   // console.log(actal_Arr);
//   let set1 = new Set(arr);
//   let set2 = new Set(actal_Arr);
//   console.log(set1);
//   console.log(set2);
// }
// let arr = [7, 2, 5, 3, 5, 3];
// let actal_Arr = [7, 2, 5, 4, 6, 3, 5, 3];
// missing_Number(arr, actal_Arr);



//===================================================================
function missing_Number(arr, actal_Arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  actal_Arr.sort(function (a, b) {
    return a - b;
  });

  let set_1 = new Set(arr);
  let set_2 = new Set(actal_Arr);
  console.log(set_1);
  console.log(set_2);

  let _difference = new Set(set_1);
  console.log(_difference);

  for (let ele_ment of set_2) {
    if (_difference.has(ele_ment)) {
      _difference.delete(ele_ment);
    } else {
      _difference.add(ele_ment);
    }
  }
  console.log('Set' + _difference);
}
let arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
let actal_Arr = [
  203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204,
];
missing_Number(arr, actal_Arr);

//========================================================
// let arr_1 = [2, 3, 5, 7];
// let new_Set = new Set();
// let arr_2 = [2, 3, 4, 5, 6, 7];
// let set_1 = new Set(arr_1);
// let set_2 = new Set(arr_2);
// for (let ele_ment_1 of set_1) {
//   console.log(ele_ment_1);
// }

// console.log('===========================');
// for (let ele_ment_2 of set_2) {
//   console.log(ele_ment_2);
//}
// important Concept-------:-------
//====================================================
//====================================================
//=====================================================
//====================================================
//===================================================
//====================================================

// const _difference = new Set(set_1);
// for (const ele_mentm of set_2) {
//   if (_difference.has(ele_mentm)) {
//     _difference.delete(ele_mentm);
//   } else {
//     _difference.add(ele_mentm);
//   }
// }
// // return _difference;
// console.log(_difference);

//========================================================
//========================================================
//===========================================================
//=============================================================


function missing_Number(arr, brr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  brr.sort(function (a, b) {
    return a - b;
  });
  let diff_1 = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (diff_1.has(arr[i])) {
      diff_1.delete(arr[i]);
    } else {
      diff_1.add(arr[i]);
    }
  }
  //  console.log(diff_1);
  let diff_2 = new Set();
  for (let i = 0; i < brr.length; i++) {
    if (diff_2.has(brr[i])) {
      diff_2.delete(brr[i]);
    } else {
      diff_2.add(brr[i]);
    }
  }
  // console.log(diff_2)

  let diff_3 = new Set(diff_1);
  for (let ele_ment of diff_2) {
    if (diff_3.has(ele_ment)) {
      diff_3.delete(ele_ment);
    } else {
      diff_3.add(ele_ment);
    }
  }

  console.log(diff_3);
}

let arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
let brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];
missing_Number(arr, brr);

//===================================================================================
// DAY-10, 14-07-2022
// THRUSDAY
//==================================================================================
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
function frequencyFind(arr) {
  // let visited = Array.from({ length: arr.length }, (_, i) => false);
  // let again_visited = Array.from({ length: arr.length }, i => false);

  let count = []; // it is object type.
  arr.forEach(element => {
    count[element] ? count[element]++ : (count[element] = 1);
  });
  console.log(count);
  //---------------------------------------------------------------
  //Object.values(count).forEach(val => console.log(val));
  for (let e of Object.values(count)) {
    console.log(e);
  }
  // 1 2 2 1
  //----------------------------------------------------------------

  for (let ee of Object.keys(count)) {
    console.log(ee);
  }
  // 2 3 5 7
  //----------------------------------------------------------------

  //==============================================================================
  //==============================================================================
  //==============================================================================
  //==============================================================================
  //console.log(typeof count);
  // for (let i = 0; i < count.length; i++) {
  //   if (count[i] == undefined) {
  //     continue;
  //   }
  //   console.log(count[i] + ' ');
  // }

  // for (let el of count) {
  //   // console.log(el);
  //   if (count[el] == undefined) {
  //     continue;
  //   } else {
  //     console.log(el);
  //   }
  // }
}
let arr = [7, 2, 5, 3, 5, 3];
frequencyFind(arr);
//===============================================================================

function missing_Number(arr, brr) {
  let count_1 = []; // object
  brr.forEach(ele => {
    count_1[ele] ? count_1[ele]++ : (count_1[ele] = 1);
  });
  console.log(count_1);
  let count_2 = [];
  arr.forEach(elem => {
    count_2[elem] ? count_2[elem]++ : (count_2[elem] = 1);
  });
  console.log(count_2);
  let res = [];
}

let arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
let brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];
missing_Number(arr, brr);

//===============================================================================
function unknown_Array(arr, brr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  brr.sort(function (a, b) {
    return a - b;
  });

  for (let ele of arr) {
    if (brr.includes(ele)) {
      brr.splice(brr.indexOf(ele), 1);
      //brr.splice(brr.indexOf(ele),1);
    }
  }
  let sorttedOrder = brr.sort(function (a, b) {
    return a - b;
  });
  let set = new Set(sorttedOrder);
  let res = Array.from(set); // nice properties.
  console.log(res);
}
let arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
let brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];
unknown_Array(arr, brr);

//=======================================================================================
//sherlock valid string:---
//----------------------------
// test Case:-1
// s="aabbcc";
//  a---2
//  b---2
//  c---2
// we can say. condition:- 1
// all frequency are same so it is valid string.
//-----------------------------------------------------
// test case :-2
// s="aabccdd"
//  a----2
//  b----1
//  c----2
//  d----2
// all frequency are same but only one frequency are 1
// so will say it is valid string.
//-----------------------------------------------------
// test case :-3
// s="aabbccddd";
//   a---2
//   b---2
//   c---2
//   d---3
// all frequency are same but only one frequency are higher by 1
//   so it will valid string.
//---------------------------------------------------------------
// s="abcdeedcbae";
//  a---2
//  b---2
//  c---2
//  e---3
//  d---2
// frequency=[2,2,2,3,2];
// after sorting
// freqency = [2,2,2,2,3];
*/
function sandeepValidString(str) {
  let frequency_ = [];
  let newArr = [];
  str.split('').forEach(element => {
    frequency_[element] ? frequency_[element]++ : (frequency_[element] = 1);
  });
  //  console.log(frequency_);
  for (let ele in frequency_) {
    newArr.push(frequency_[ele]);
  }
  // console.log(newArr);

  newArr.sort(function (a, b) {
    return a - b;
  });

  let len = newArr.length;
  let first = newArr[0];
  let second = newArr[1];
  let secondLast = newArr[newArr.length - 2];
  let last = newArr[newArr.length - 1];

  if (len == 1) {
    console.log('YES');
  }
  if (first == last) {
    // all frequency are same{
    console.log('YES');
  }
  if (first == 1 && second == last) {
    // all are same but only one is 1
    console.log('YES');
  }
  if (first == second && second == secondLast && secondLast == last - 1) {
    // all freuency are same but only one is higher by 1
    console.log('YES');
  } else {
    console.log('NO');
  }
  // console.log('NO');
}
let str = 'abcdefghhgfedecba';
sandeepValidString(str);

//==========================================================================
function twoStrings(s1, s2) {
  let set1 = new Set(s1);
  let set2 = new Set(s2);
  // console.log(set1);
  // console.log(set2);
  let result = [];
  for (let i of set2) {
    if (set1.has(i)) {
      result.push(i);
    }
  }
  // console.log(result);
  if (result.length === 0) {
    console.log('NO');
  } else {
    console.log('YES');
  }
}
let s1 = 'be';
let s2 = 'cat';
twoStrings(s1, s2);

//===========================================================================
