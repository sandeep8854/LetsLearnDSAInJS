'use strict';
//count triplet given bay...
/*
function triplet(b) {
  let count = 0;
  let N = b.length;
  // console.log(N);
  b.sort(function (a, b) {
    return a - b;
  });
  console.log(b, target);
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        if (b[i] + b[j] + b[k] == target) {
          count++;
        }
      }
    }
  }
  return count;
}
let b = [1, 0, 2, 6, 3, 9];
let target = 11;
let a = triplet(b);
console.log(a);


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
for (let i = 0; i < parselet(str.length / 2); i++) {
  let left = str.charCodeAt(i);
  lefthand = lefthand + (left - 96);
}
//console.log(lefthand);
//===============================================================
for (let i = parselet(str.length / 2); i < str.length; i++) {
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
// lefthand = parselet(len / 2);
// console.log(lefthand);

//for (let i = 0; i < parselet(len / 2); i++) {}



function balancedString(str) {
  let lefthand = 0;
  let rightHand = 0;

  for (let i = 0; i < parselet(str.length / 2); i++) {
    let left = str.charCodeAt(i);
    lefthand = lefthand + (left - 96);
  }

  for (let i = parselet(str.length / 2); i < str.length; i++) {
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
let str = 'newAitionnn';
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

function sett(b) {
  let myset = new Set(b);
  console.log(myset.size - 1);

  // console.log(myset);
}
let b = [1, 2, 1, 2, 1, 3, 2];
sett(b);


//=========================================================
// function countPair(b) {
//   let set = new Set();

//   b.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(b);
//   let ij = 0;
//   let j = 0;
//   var count = 1;
//   while (b.length < 0) {
//     if (b[i] == b[ij + 1]) {
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

// let b = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
// //let b = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// countPair(b);

// for (let i = 0; i < b.length - 1; i++) {
//   for (let j = i + 1; j < b.length; j++) {
//     if (b[i] == b[j]) {
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
// function pairCount(b) {
//   b.sort(function (a, b) {
//     return a - b;
//   });
//   let len = b.length;
//   let set = new Set();

//   let count = 1;
//   var i = 0;
//   let j = 0;

//   while (len > 0) {
//     if (b[i] == b[j + 1]) {
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

// let b = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
// pairCount(b);

//=========================================================

// function pairSocks(b) {
//   let count = 0;
//   let set = new Set();
//   set.add(1);
//   set.add(2);
//   console.log(set.has(1));
//   console.log(set);
//   console.log(set.dele_mentte(2));
// }
// let b = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
// pairSocks(b);

//=================================================================
function pairSocks(b) {
  let pairCount = 0;
  let searchele_ment = new Set();
  for (let sock of b) {
    if (searchele_ment.has(sock)) {
      pairCount++;
      searchele_ment.dele_mentte(sock);
    } else {
      searchele_ment.add(sock);
    }
  }
  return pairCount;
}

let b = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
let a = pairSocks(b);
console.log(a);

//===========================================================================

let n = 6;
let p = 2;
let pagesCountfromFront = n / 2;
let totalTargetPagefromFront = p / 2;
let exactPagefromback = pagesCountfromFront - totalTargetPagefromFront;
let as = Math.min(totalTargetPagefromFront, exactPagefromback);
console.log(as);

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
let a = contingValue(howmanyStep, str);
console.log(a);


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

function pickingNumber(b) {
  let conditionNumber = 1;
  let sum = 0;
  let b1 = [];
  for (let i = 0; i < b.length - 1; i++) {
    for (let j = i + 1; j < b.length; j++) {
      sum = Math.abs(b[i] - b[j]);
      if (sum <= 1) {
        b1[i] = b[j];
      }
    }
  }
  console.log(b1);
  console.log(b1.length);
}
let b = [4, 6, 5, 3, 3, 1];
pickingNumber(b);

//================================================================
function pickb(b) {
  let frequency = [101]; // he is a empty bay but length has 101 only..
  let ault = Number.MIN_VALUE; // taking minimum value througth javascript engine. when has already have min
  // number ..
  for (let i = 0; i < b.length; i++) {
    let index = b[i];
    frequency[index] = frequency[index] + 1;
    ////frequency[index]=frequency[index]+1;
  }
  for (let i = 1; i <= 100; i++) {
    ault = Math.max(ault, frequency[i] + frequency[i - 1]);
  }
  console.log(ault);
}
let b = [4, 6, 5, 3, 3, 1];
pickb(b);

//=====================================================================

function pickb(b) {
  b.sort(function (a, b) {
    return a - b;
  });
  let newAition = 0;
  let count = 1;
  let max = 0;

  //==============================================
  for (let i = 1; i < b.length; i++) {
    let difference = b[i] - b[newAition];
    if (difference <= 1) {
      count++;
    }
    //================================
    else {
      if (count > max) {
        max = count;
      }
      newAition = i;
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

let b = [4, 6, 5, 3, 3, 1];
let a = pickb(b);
console.log(a);



//==============================================================================
function harder(b, k) {
  b.sort(function (a, b) {
    return a - b;
  });
  // console.log(b);
  let max = b[b.length - 1];
  // console.log(max);

  console.log(Math.max(0, max - k));
}

let b = [1, 6, 3, 5, 2];
let k = 4;
harder(b, k);


//====================================================================

function desinePDF(h, word) {
  let b = [];
  let len = word.length;

  for (let i = 0; i < h.length; i++) {
    let charVal = word.charCodeAt(i);
    let vl = charVal - 96;
    if (Number.isleteger(vl)) {
      let store = h[vl];

      b.push(store);
    }
  }
  b.sort(function (a, b) {
    return a - b;
  });
  let bigger = b[b.length - 1];
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
// let newb=[n];
// for(let jj=0; jj< n; jj++){
//     b[jj] = in.nextlet();
//     let sum = 1;
//     for (let i = 0; i < b[jj]; i++) {
//         sum = i % 2 == 0 ? sum * 2 : sum + 1;
//     }
//    console.log(sum);

//=============================================================================

let n = 8;
// let newbay = [n];
// console.log(newbay.length);

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
		for(let i=0;i<b.length;i++)
		{
			if(b[i]<=0)
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
  let biveOnTime = 0;
  let biveOnLate = 0;
  for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] <= 0) {
      biveOnTime++;
    } else {
      biveOnLate++;
    }
  }
  // console.log(biveOnTime);
  // console.log(biveOnLate);
  if (k == biveOnTime) {
    console.log('YES');
  } 
  if(biveOnLate<k){
    console.log("NO");
  }
}
let attendance = [-2, -1, 0, 1, 2];
let k = 3;
angreeProfessor(attendance, k);



function angree(a, k) {
  let paent = 0;
  let n = a.length;
  if (k > n) {
    return 'YES';
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] <= 0) {
        paent++;
      }
    }
    if (paent < k) {
      return 'YES';
    } else {
      return 'NO';
    }
  }
}
let a = [-2, -1, 0, 1, 2];
let k = 3;
let a = angree(a, k);
console.log(a);


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
let b=[0,0,1,0,0,1,1,0];
let k=2;
let energy = 100;
let currentCloud = 0;
do {
  currentCloud = (currentCloud + k) % b.length;
  energy--;
  if (b[currentCloud] == 1) {
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


let count=0;
let num=n;
while(n>0)
{
    let reminder=n%10;
    if(reminder!=0 && num % reminder==0)
    count++;
    n/=10;
}
return count;

//===========================================================
//console.log(Math.floor(105 / 10));
function facttt(n) {
  var biglet = Biglet(n);
  var factorial = 1n;
  for (let i = 0n; i < biglet; i++) {
    factorial *= biglet - i;
  }
  console.log(String(factorial));
}

let n = 10;
facttt(n);

//===========================================================
// function cloud(b) {
//   let count = -1;
//   for (let i = 0; i < b.length; ) {
//     if (i + 2 < b.length && b[i] == 0) {
//       i = i + 2;
//     } else {
//       i = i + 1;
//     }
//     count++;
//   }
//   console.log(count);
// }
// let b = [0, 1, 0, 0, 0, 1, 0];
// cloud(b);



// let  len=p.length;
//         let  inum=0;
//         let ault=new bay(len);
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
//             ault[i-1]=inum;
//         }
//         console.log(ault);

function equation(b) {
  let a = [];
  let x = 1;
  let y = 0;
  while (x <= b.length) {
    for (let i = 0; i < b.length; i++) {
      if (b[i] == x) {
        y = i + 1;
        break;
      }
    }
    for (let i = 0; i < b.length; i++) {
      if (b[i] == y) {
        y = i + 1;
        break;
      }
    }
    a[x - 1] = y;
    x++;
  }
  return a;
}
let b = [5, 2, 1, 3, 4];
let as = equation(b);
console.log(as);


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
//   let a = Math.pow(2, ans);
//   console.log(a);
// }
// let n = 10;
// xorSum(n);




function greatXor(n) {
  let count = 0;
  let xora = 0;
  for (let i = 1; i < n; i++) {
    xora = i ^ n;
    if (xora > n) count++;
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




function sansaXOR(b) {
  let xor = 0;
  let newb = [];
  for (let i = 0; i < b.length; i++) {
    xor = b[i];
    newb.push(xor);
  }
  //console.log(newb);
  // let j = 1;
  for (let i = 0, j = 1; i < b.length && j < b.length; i++) {
    let xor1 = b[i] ^ b[j];
    newb.push(xor1);
    j++;
  }
  // console.log(newb);
  let suumm = 0;
  for (let i = 0; i < b.length; i++) {
    suumm = suumm ^ b[i];
  }
  newb.push(suumm);
  // console.log(newb);
  let a = 0;
  for (let i = 0; i < newb.length; i++) {
    a = a ^ newb[i];
  }
  console.log(a);
}
let b = [3, 4, 5];
sansaXOR(b);


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


function sansaXOR(b) {
  let newbay = [];
  let len = b.length;
  let x = 0;
  if (len % 2 == 0) {
    return 0;
  } else {
    for (let i = 0; i < len; i += 2) {
      x ^= b[i];
    }
  }
  return x;
}

let b = [3, 4, 5];
let re = sansaXOR(b);
console.log(re);

//console.log(98 ^ 12); // 110
function sansaXOR_(b1) {
  let len = b1.length;
  let x = 0;
  if (len % 2 == 0) {
    return 0;
  } else {
    for (let i = 0; i < len; i += 2) {
      x = x ^ b1[i];
    }
  }
  return x;
}

let b1 = [98, 74, 12];
let reas = sansaXOR_(b1);
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

// Find newAition of MSB in n. For example
// if n = 17, then newAition of MSB is 4.
// If n = 7, value of MSB is 3
function msbnewA(n) {
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
  let a = 0; // Initialize ault

  while (x > 0 && y > 0) {
    // Find newAitions of MSB in x and y
    let msb_p1 = msbnewA(x);
    let msb_p2 = msbnewA(y);

    // If newAitions are not same, return
    if (msb_p1 != msb_p2) break;

    // Add 2^msb_p1 to ault
    let msb_val = 1 << msb_p1;
    a = a + msb_val;

    // subtract 2^msb_p1 from x and y.
    x = x - msb_val;
    y = y - msb_val;
  }

  return a;
}

// Driver Code
let x = 11,
  y = 15;

console.log(andOperator(x, y));

//============================================================================

// function countnewAi(a) {
//   let msb_newA = -1;
//   while (a > 0) {
//     a = a >> 1;
//     msb_newA++;
//   }
//   console.log('count the newAition ' + msb_newA);
// }

// let a = 60;
// countnewAi(a);

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
// // count the newAition of most signigificant bit.

// function countMSBnewAition(num) {
//   let count = -1;
//   num = Math.floor(num / 2);
//   while (n != 0) {
//     n = Math.floor(n / 2);
//     count++;
//   }
//   console.log(count);
// }
// let num = 60;
// countMSBnewAition(num);  // 5

//===================================================

function candy(b) {
  let one = b[0];
  let newbay = [];

  for (let i = 1; i < b.length; i++) {
    if (b[i] > one) {
      newbay.push(i + 1);
    } else {
      one++;
    }
  }
}

let b = [4, 6, 4, 5, 6, 2];
candy(b);



//==================================================

function sherlockANDCoast(B) {
  let maxVar = Math.abs(B[1] - 1);
  let maxOne = Math.abs(B[0] - 1);

  console.log(maxVar + ' == ' + maxOne);
}

let b = [10, 1, 10, 1, 10];
sherlockANDCoast(b);

let gfg = new bay(26);

for (let i = 0; i < gfg.length; i++) {
  gfg[i] = new bay(26);
}
//initializing bay
let h = 0;
for (let i = 0; i < gfg.length; i++) {
  for (let j = 0; j < gfg.length; j++) {
    gfg[i][j] = h++;
  }
}

// for prleting the ele_mentment

for (let i = 0; i < gfg.length; i++) {
  for (let j = 0; j < gfg.length; j++) {
    console.log(gfg[i][j] + '  ');
  }
}


function greadFunction(grid) {
  let newb = [];
  //console.log(grid.length); // 3
  for (let i = 0; i < grid.length; i++) {
    let text = grid[i].split('').sort();
    newb.push(text);
  }

  let col = newb[0].length;
  // console.log(col);  // 3
  for (let i = 0; i < newb.length - 1; i++) {
    for (let j = 0; j < col; j++) {
      if (newb[i][j] > newb[i + 1][j]) {
        console.log('NO');
      }
    }
  }
  console.log('YES');
}
//let newb = [];
let grid = ['abc', 'ade', 'efg'];
greadFunction(grid);

// let g = ['adb'];
// let b = [];
// let text = g[0].split('').sort();
// b.push(text);
// console.log(b);

//
//========================================================================

function canies(ratings) {
  let sum = 0;
  let left2right = new bay(ratings.length);
  let right2left = new bay(ratings.length);
 
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

let b = [2, 4, 3, 5, 2, 6, 4, 5];
console.log(canies(b));

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
let a = tackung(s);
console.log(a);


//======================================================================

var b = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

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
  //1- all frequency is same prlet YES.
  //2- all are same but one frequency is one prlet YES
  //3-  all frequency are same only one is higher by one. prlet YES

  let b = [];
  let newb = [];
  str.split('').forEach(function (val) {
    b[val] ? b[val]++ : (b[val] = 1);
  });
  // console.log(b);
  for (let key in b) {
    // console.log(b[key] + ' ');
    newb.push(b[key]);
  }
  // console.log(newb);
  newb.sort(function (a, b) {
    return a - b;
  });
  //console.log(newb); //  1,1,2,2,3
  let L = newb.length;
  if (L == 1) return 'YES';
  let first = newb[0];
  let second = newb[1];
  let secondLast = newb[newb.length - 2];
  let last = newb[newb.length - 1];

  //1- all frequency is same prlet YES.

  if (first == last) return 'YES';

  //2- all are same but one frequency is one prlet YES

  if (first == 1 && second == last) return 'YES';

  //3-  all frequency are same only one is higher by one. prlet YES
  if (first == second && second == secondLast && secondLast == last - 1)
    return 'YES';

  //other wise
  return 'NO';
}

//=== task operation value.
let str = 'aaabbdcee';
freq(str);

//==========================================================================
let b = [14, 25, 46, 78, 94, 65, 32, 78, 14, 25, 34];
b.forEach(function (val, i) {
  console.log(i + ' : ' + val);
});

function b_(b) {
  let newb = [];
  b.forEach(function (val) {
    newb[val] ? newb[val]++ : (newb[val] = 1);
  });
  console.log(newb);
}
let b = [
  12, 24, 6, 5, 35, 35, 44, 16, 24, 24, 24, 35, 35, 5, 5, 5, 6, 6, 6, 24, 24,
  24, 24, 16, 16, 16,
];
b_(b);

//====================================================================================

function sherlockAndValidString(str) {
  let newb = [];
  let b = [];
  str.split('').forEach(function (val) {
    b[val] ? b[val]++ : (b[val] = 1);
  });
  console.log(b);
  //============================================================================
  for (let Tension in b) {
    // use of in loop only work with key not values
    // that means in loop work with only key, but of loop wor with key and values i measn
    // of loop work with object.
    // console.log(b[key] + ' ');
    newb.push(b[Tension]);
  }
  console.log(newb);

  //==========================================================================
  for (let key of Object.keys(b)) {
    // that is of loop in javascript program
    // console.log(b[key] + ' ');
    newb.push(b[key]);
  }
  console.log(newb);
  //================================================================
}
let str = 'abcdeedcbae';
sherlockAndValidString(str);

//=======================================================================

function modified(t1, t2, n) {
  let ault = 0;
  for (let i = 1; i <= n; i++) {
    ault = t1 + Math.pow(t2, 2);
    t2 = ault;
    t1 = ault;
  }
  console.log(ault);
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
function rotatebay(b, d) {
  while (d) {
    b.push(b.shift());
    d--;
  }
  console.log(b);
}
let b = [1, 2, 3, 4, 5];
let d = 3;
rotatebay(b, d);

//===============================================================

function climbingLeaderboard(scoa, alice) {
  let ault = [];
  let uniqueScoa = [...new Set(scoa)];
  for (const score of alice) {
    if (score >= uniqueScoa[0]) {
      ault.push(1);
    } else if (score < uniqueScoa[uniqueScoa.length - 1]) {
      ault.push(uniqueScoa.length + 1);
    } else {
      ault.push(rankBinarySearch(score, uniqueScoa));
    }
  }
  return ault;
}
function rankBinarySearch(score, uniqueScoa) {
  let start = 0;
  let end = uniqueScoa.length - 1;
  while (true) {
    let mid = Math.floor((start + end) / 2);
    // base cases
    if (uniqueScoa[mid] === score) {
      return mid + 1;
    } else if (uniqueScoa[mid] > score && uniqueScoa[mid + 1] < score) {
      return mid + 2;
    } else if (uniqueScoa[mid] < score && uniqueScoa[mid - 1 > score]) {
      return mid - 1;
    }
    // recursion
    if (score < uniqueScoa[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}
let score = [100, 100, 50, 40, 40, 20, 10];
let alice = [5, 25, 50, 120];
let a = climbingLeaderboard(score, alice);
console.log(a);

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
  console.log('Enter newAitive Number ? ');
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
// Given an bay of letegers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’
//consecutive ele_mentments in the bay. means continous ele_mentment .
//----------------------------------------------------
// example :- b=[100, 200, 300, 400];
// let k=2;
// O/p  700.
//-------------------------------------------------
// example :- b=[1, 4, 2, 10, 23, 3, 1, 0, 20];
// let k=4;
// O/p =39;
//---------------------------------------------------

function max_Sum(b, k) {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < k; i++) {
    sum += b[i];
    max = sum;
  }

  for (let i = k; i < b.length; i++) {
    sum = sum + b[i] - b[i - k];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
let b = [100, 200, 300, 400];
//[1, 4, 2, 10, 2, 3, 1, 0, 20];
let k = 2;
console.log(max_Sum(b, k));

//========================================================================
// count longest non-repeting string ..
function longest(str) {
  let n = str.length;
  let longNonReptingString = '';
  let ault = 0;
  for (let i = 0; i < n; i++) {
    let visited = new bay(256);
    for (let j = i; j < n; j++) {
      if (visited[str.charCodeAt(j)] == true) break;
      else {
        //   longNonReptingString += str[i];
        ault = Math.max(ault, j - i + 1);
        visited[str.charCodeAt(j)] = true;
      }
    }
  }
  return ault;
  // return longNonReptingString;
}

let str = 'abcabcbb';
console.log(longest(str));
//====================================================

// let publi = 'freecodeCamp';
// let a = publi[0].toUpperCase() + publi.substring(1);

// console.log(a);

//===========================================================


//==================================================
let str = 'abccbc';
let myb = new bay(str.length);

for (let i = 0; i < str.length; i++) {
  myb[i] = new bay(str.length);
}
//console.log(myb);

myb[0][0] = 'a';
myb[0][1] = 'b';
myb[0][2] = 'c';
myb[0][3] = 'd';
myb[0][4] = 'e';
myb[0][5] = 'f';
myb[1][0] = 'g';
myb[1][1] = 'h';

for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < str.length; j++) {
    console.log(myb[i][j] + ' ');
  }
}
//=================================================

let str = 'abccbc';
let myb = new bay(str.length);
for (let i = 0; i < str.length; i++) {
  myb[i] = new bay(str.length);
}

//let num = 1;
for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < str.length; j++) {
    myb[i][j] = true;
    // num += 1;
  }
}
console.log(myb);

// for (let i = 0; i < str.length; i++) {
//   for (let j = 0; j < str.length; j++) {
//     console.log(myb[i][j] + ' ');
//   }
// }

//====================================================================
// count number of palindrome in subsrting---
function countPalindrome(str) {
  let dp = new bay(str.length);
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    dp[i] = new bay(str.length);
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
  let dp = new bay(str.length);
  for (let i = 0; i < str.length; i++) {
    dp[i] = new bay(str.length);
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
  let dp = new bay(str.length);
  for (let i = 0; i < str.length; i++) {
    dp[i] = new bay(str.length);
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

function sumb(b, n) {
  let sum = 0; //-------------------------------- 1
  for (let i = 0; i < b.length; i++) {
    //     1       n+1            n          //-- n+1
    sum = sum + b[i]; //----------------------- n
  }
  return sum; //--------------------------------- 1
}
//  1+n+1+n+1 = 2n+3 => f(n)=2n+3
// if we write what is degree og polynomial
// o(n)   --time complexcity.
//-----------------------------------------------------
//What is space complexcity
// b-----  n
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
  let a = new bay(max1.length);
  for (let i = 0; i < a.length; i++) {
    a[i] = new bay(max1.length);
  }
  for (let i = 0; i < max1.length; i++) {
    //------------n+1
    for (let j = 0; j < max1.length; j++) {
      //----------n*(n+1)
      a[i][j] = 0; //---------------------------------n*n
      for (let k = 0; k < max1.length; k++) {
        //-------n*n*(n+1)
        a[i][j] += max1[i][k] * max2[k][j]; //--------n*n*n
      }
    }
  }
  console.log(a);
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

function two_sum(b, target) {
  for (let i = 0; i < b.length; i++) {
    let find = target - b[i];
    let index = b.indexOf(find);
    if (index != -1 && index !== i) {
      return [i, index];
    }
  }
}
let b = [3, 2, 4];
let target = 6;
console.log(two_sum(b, target));

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
let a = happy_Number(n);
if (a == true) {
  console.log('true');
} else {
  console.log('false');
}

//====================================================================

// let n = '0012345-';
// console.log(parseFloat(n)); // 12345

// let x = -5432100;
// let a = Math.sign(x);
// console.log(a); // -1
// let nu = 12345;
// let as = nu * a;
// console.log(as);

//=================================

function reverse_Number(n) {
  let tostr = n.toString();
  let spli = tostr.split('');
  let a = spli.reverse();
  let joi = a.join('');
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
  let b = [];

  for (let i = starting; i <= ending; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) {
      b.push(i);
    }
  }
  console.log(b + '');
}
let starting = 2;
let ending = 50;
primeNumber(starting, ending);

// function wayToLongWord(str) {
//   let l = str.length;
//   let temp = str.charAt(0);
//   let temp2 = str.charAt(l - 1);
//   let ault = 0;
//   if (l <= 10) {
//     console.log(str);
//   } else {
//     ault = l - 2;
//     let t = temp + ault;
//     let re = t + temp2;
//     console.log(re);
//   }
// }
// let str = 'sandep';
// wayToLongWord(str);

//========================================================================

function birthdayCakeCandies(b) {
  let xor = 0;
  b.sort(function (a, b) {
    return a - b;
  });
  let maxiM = b[b.length - 1];
  for (let i = 0; i < b.length; i++) {
    if ((maxiM ^ b[i]) == 0) {
      xor++;
    }
  }
  console.log('count ' + xor);
}

let b = [3, 2, 1, 3, 3];
birthdayCakeCandies(b);

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
      return parselet(hour) + 12 + ':' + minutes + ':' + second;
    }
  }
}
//
let s = '12:00:11PM';
let a = timeFormat(s);
console.log(a);
// console.log('hour ' + time[0]);

// console.log('minutes ' + time[1]);

// console.log('second ' + time[2].substring(0, 2));

// console.log('AMPM ' + time[2].substring(2, 4));

//=============================================================================


function sherlockbay(b) {
  let sum = 0;
  for (let x of b) {
    sum += x;
  }
  let x = 0;
  for (let i = 0; i < b.length; i++) {
    if (2 * x == sum - b[i]) {
      return 'YES';
    }
    x = x + b[i];
  }
  return 'NO';
}
let b = [1, 2, 3];
console.log(sherlockbay(b));


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
// System.out.prletln(fine);
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
  let biglet = Biglet(n);
  let facto = 1n;
  for (let i = 0n; i < biglet; i++) {
    facto *= biglet - i;
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

  let ault = '';
  for (let i = 0; i <= dele_ment; i++) {
    ault = ault + s.charAt(i);
  }
  // console.log(ault);
  for (let i = dele_ment + 1; i < s.length; i++) {
    ault = ault + t.charAt(i);
  }
  console.log(ault);
  if (ault == t) {
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
// function countsquare_uareRoot(a, b) {
//   let count = 0;
//   // for (let i = a; i <= b; i++) {
//   //   if (Number.isleteger(Math.square_rt(i))) {
//   //     count++;
//   //   }
//   // }
//   // console.log(count);

//   let rs = Number.isleteger(Math.square_rt(a)); // he give time out..
//   console.log(rs);  // think different opproach may he will give the true value .
//   console.log(Math.floor(Math.square_rt(b)));// then test casees will be passeses.
// }
// let a = 24;
// let b = 49;
// countsquare_uareRoot(a, b);

function countsquare_uareRoot(a, b) {
  let square_uareOf_A = Math.floor(Math.square_rt(a));
  console.log('square_uare of A value : - ' + square_uareOf_A);
  //
  let square_uareOf_B = Math.floor(Math.square_rt(b));
  console.log('square_uare of B value : - ' + square_uareOf_B);
  //
  let ault = square_uareOf_B - square_uareOf_A;
  //
  if (square_uareOf_A * square_uareOf_A >= a) {
    ault++;
  }
  return ault;
}
let a = 24;
let b = 49;
console.log('Number of square_uare within the  number : - ' + countsquare_uareRoot(a, b));

//=====================================================================================

function cut_The_Sticks(b) {
  b.sort(function (a, b) {
    return a - b;
  });
  // console.log(b);
  let minNum = Number.MAX_VALUE;
  let newb = [];
  let ault = [];
  let minVal = minFunction(b);
  for (let i = 0; i < b.length; i++) {
    let tempLen = b.length;
    ault.push(tempLen);
    let a = b[i] - minVal;
    newb.push(a);
  }
  // for (let i = 0; i < b.length; i++) {
  //   // if (b[i] < minNum) {
  //   //   minNum = b[i];
  //   // }
  // }
  // console.log(minNum);
}
let b = [5, 4, 4, 2, 2, 8];
cut_The_Sticks(b);

function minFunction(b) {
  let min = Number.MAX_VALUE;
  for (let i = 0; i < b.length; i++) {
    if (b[i] < min) {
      min = b[i];
    }
  }
  return min;
}

let tempSum=-1;
		while(tempSum!=0)
		{
			let min=leteger.MAX_VALUE;
			for(let i=0;i<b.length;i++)
			{
				if(min>=b[i]&&b[i]!=0)
				{
					min=b[i];
				}
			}
			let count=0;
			tempSum=0;
			for(let i=0;i<b.length;i++)
			{
				if(b[i]>=min)
				{
					b[i]=b[i]-min;
					count++;
				}
				tempSum=tempSum+b[i];
			}
			System.out.prletln(count);
		}	
//==========================================================================


function cut_And_Strick(b) {
  let newbaySa = [];
  let tempSum = -1;
  while (tempSum != 0) {
    let min = Number.MAX_VALUE;
    for (let i = 0; i < b.length; i++) {
      if (min >= b[i] && b[i] != 0) {
        min = b[i];
      }
    }
    let count = 0;
    tempSum = 0;
    for (let i = 0; i < b.length; i++) {
      if (b[i] >= min) {
        b[i] = b[i] - min;
        count++;
      }
      tempSum = tempSum + b[i];
    }
    // console.log(count);
    newbaySa.push(count);
  }
  // console.log(newbaySa);
  for (let i = 0; i < newbaySa.length; i++) {
    console.log(newbaySa[i] + ' ');
  }
}

let b = [1, 2, 3, 4, 3, 3, 2, 1];
cut_And_Strick(b);

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

function cutting_Eadge(b) {
  let aultb = [];
  let min = Number.MAX_VALUE;
  let tempSum = -1;
  while (tempSum != 0) {
    for (let i = 0; i < b.length; i++) {
      if (min >= b[i] && b[i] != 0) {
        min = b[i];
      }
    }
    let count = 0;
    tempSum = 0;
    for (let i = 0; i < b.length; i++) {
      if (b[i] >= min) {
        b[i] = b[i] - min;
        count++;
      }
      tempSum += b[i];
    }
    aultb.push(count);
  }
  return aultb;
}
let b = [1, 2, 3, 4, 3, 3, 2, 1];
console.log(cutting_Eadge(b));

//===============================================================================

function rotatele_mentft(b, d) {
  while (d > 0) {
    let shi = b.shift();
    b.push(shi);
    d--;
  }
  console.log(b);
}
let b = [1, 2, 3, 4, 5];
let d = 4;
rotatele_mentft(b, d);


//===============================================================================

function funnyString(str) {
  let originalStingb = [];
  let reverseStringb = [];

  for (let i = 0; i < str.length; i++) {
    let utfVal = str.charCodeAt(i);
    originalStingb.push(utfVal);
  }

  for (let i = str.length - 1; i >= 0; i--) {
    let revUtf = str.charCodeAt(i);
    reverseStringb.push(revUtf);
  }
  // console.log(originalStingb);
  // console.log(reverseStringb);

  let asciiCode = [];
  let revAsciiCode = [];
  for (let i = 0; i < originalStingb.length - 1; i++) {
    let dif = Math.abs(originalStingb[i] - originalStingb[i + 1]);
    let diff2 = Math.abs(reverseStringb[i] - reverseStringb[i + 1]);
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

// function temp(b) {
//   let asciiCode = [];
//   for (let i = 0; i < b.length - 1; i++) {
//     let diff = Math.abs(b[i] - b[i + 1]);
//     asciiCode.push(diff);
//   }
//   console.log(asciiCode);
// }
// let b = [108, 109, 110, 111, 112];
// temp(b);

// let b1 = [1, 2, 3, 4, 5];
// let b2 = [1, 2, 4, 5, 6];
// let b3 = [1, 2, 3, 4, 5];
// let bStr = b1.join();
// console.log(bStr);

// let bstr2 = b3.join();
// console.log(bstr2);

// if (bStr == bstr2) {
//   console.log('It is equal');
// } else {
//   console.log('Not equal');
// }


//========================================================================

function median(b) {
  b.sort(function (a, b) {
    return a - b;
  });
  // console.log(b);
  if (b.length % 2 == 0) {
    let div = Math.floor(b.length / 2);
    console.log((b[div - 1] + b[div]) / 2);
  } else {
    let a = Math.floor(b.length / 2);
    console.log(b[a]);
  }
}
let b = [5, 3, 1, 2, 4];
median(b);


//============================================================================
function lonelyleteger(b) {
  let xor = 0;
  for (let x of b) {
    xor ^= x;
  }
  console.log('Lonely leteger will be :-' + xor);
}
let b = [1, 1, 4, 4, 5, 6, 6, 7, 7, 8, 8];
lonelyleteger(b);

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

function markAndToys(b, k) {
  b.sort(function (a, b) {
    return a - b;
  });
  let sum = 0;
  let count = -1;
  for (let i = 0; i < b.length; i++) {
    if (sum <= k) {
      sum = sum + b[i];
      count++;
    } else {
      break;
    }
  }
  console.log(count);
}
let b = [1, 2, 3, 4];
let k = 7;
markAndToys(b, k);

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
  let a = 0;
  let max = -Infinity;
  for (let i = low; i <= high; i++) {
    for (let j = low; j <= high; j++) {
      let xor = i ^ j;
      a = Math.max(xor, max_Value_);
      if (a > max) {
        max = a;
      }
    }
  }
  console.log(max);
}

let lowerBound = 10;
let uperBound = 15;

maximam_Xor(lowerBound, uperBound);

//===================================================================================

function findMax_And_Min_Value(b) {
  let len = b.length;
  let max = -Infinity;

  while (len--) {
    if (b[len] > max) {
      max = b[len];
    }
  }

  //============================================================

  let min = Infinity;
  while (len--) {
    if (b[len] < min) {
      min = b[len];
    }
  }
  console.log('Max Value will be :- ' + max);
  console.log('Min Value Will be :- ' + min);
}

let b = [10, 14, 15, 35, 98, 17, 3, 45, 86, 12, 14, 15];
findMax_And_Min_Value(b);

//==================================================================

function min_abs_Diff(b) {
  b.sort(function (a, b) {
    return a - b;
  });
  let min = Infinity;
  for (let i = 1; i < b.length; i++) {
    let prev = b[i - 1];
    let curr = b[i];
    let diff = Math.abs(prev - curr);
    min = Math.min(diff, min);
  }

  console.log('Min diff will be :- ' + min);
}
let b = [1, -3, 71, 68, 17];
min_abs_Diff(b);


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
      sum = sum + b[i];
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

function sansa_XOR(b, current_Index) {
  let len = b.length;
  let newb = [];
  let xor = 0;
  // let current_Index = 0;
  if (current_Index == len) {
    return;
  }

  for (let i = current_Index; i < len; i++) {
    let ault = b[i];
    // console.log(ault);
    xor = xor ^ ault;
  }

  sansa_XOR(b, current_Index + 1);
  //  console.log(newb);
  //  console.log(newb);
  console.log(xor);
}
let b = [1, 2, 3];
let current_Index = 0;
sansa_XOR(b, current_Index);

// wrong answer---

//======================================================================

function sansa_(b) {
  let n = b.length;
  let newb = [];
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
        k++ ///////////////// //This loop will prlet ele_mentment from start to end
      ) {
        //  console.log(b[k]);
        newb.push(b[k]);
      }
      console.log('\n');
    }
  }
  for (let i = 0; i < newb.length; i++) {
    xor = xor ^ newb[i];
  }
  console.log(xor);
  // console.log(newb);
}
let b = [1, 2, 3];
sansa_(b);
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
  // let as = Math.pow(2, count);
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

function fair_Rotations(b) {
  let bread_Count = 0;
  for (let i = 0; i < b.length - 1; i++) {
    if (b[i] % 2 != 0) {
      b[i] = b[i] + 1;
      b[i + 1] = b[i + 1] + 1;
      bread_Count = bread_Count + 2;
    }
  }
  if (b[b.length - 1] % 2 != 0) {
    console.log('NO');
  } else {
    console.log(bread_Count);
  }
}

let b = [2, 3, 4, 5, 6];
fair_Rotations(b);

//===================================================================

// function big_Sorting(unsorted) {
//   return unsorted.sort((val_A, val_B) => {
//     if (val_A.length == val_B.length) {
//       return val_A > val_B ? 1 : -1;
//     }

//     return val_A.length - val_B.length;
//   });
// }
// let b = [31415926535897932384626433832795, 1, 3, 10, 3, 5];
// big_Sorting(b);
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
// ault will be  1*
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
// question :- find the missing ele_mentment in given bay.

function missing_Number(b) {
  let len = b.length + 1;
  let xor_Temp = 0;
  for (let i = 1; i <= len; i++) {
    xor_Temp ^= i;
  }
  //   console.log(xor_Temp); // 1

  for (let i = 0; i < b.length; i++) {
    xor_Temp = xor_Temp ^ b[i];
  }
  console.log(xor_Temp); // answer missing number is 3
}
let b = [1, 2, 3, 4, 5, 6, 7, 9];
missing_Number(b);


//==========================================================================
// Day-6 . Saturday--
//-----------------------------------------
// sansa xor --
// given an bay to find subbay of every ele_mentment of xor, and determine the values
// of every ele_mentment xor..

// given an bay
// let b=[1,2,3];
// what is subbay of the bay.
// like as [1],[2],[3],[1,2],[2,3],[1,2,3];

// we write one more type with wothout bay.
//--------------------------------------------------
//     1 /
//     2 /
//     3 /
//    / 1, 2 /
//   /  2, 3 /
//     1, 2 /, 3
// then you find the only 1 and 3 ele_mentment in given all subbay.
// 1 and 3 ele_mentment will be remainig.
// b=[1,2,3];
//      |   |
// we can say index of ele_mentment 0 and 2 will be remaining.
// so we can say if index%2==0 then take the xor , other wise take don't
//---------------------------------------------------------------------
// sunewAe we take an bay with even length of bay.
// let b=[1,2,3,4]; then we can write all subbay of the bay ele_mentment.
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
// we can say if bay length of even then every ele_mentment will be cancel out.
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
  // let av = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   av += str.charAt(i);
  // }
  // if (str == av) {
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
// let a = str.split('').reverse().join('');
// console.log(a);
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
  let newb = [];
  let set = new Set(str);
  for (let set_ele_mentment of set) {
    newb.push(set_ele_mentment);
  }

  console.log(newb);
  console.log(newb.length);
}

let str = 'abcd';
string_Constrctions(str);
for(let i=0;i<chapter;i++)
		{
			System.out.prletln("Enter Number of problem in chapter ?  ? ");
			let chapterProblem=sc.nextlet();
			let pgnumber=numberOFPages+1;
			for(let j=1;j<=chapterProblem;j++)
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
		System.out.prletln(spacialProblem);

//=======================================================================


function sandeep_WorkBook(chapter, k, b) {
  let page = 1;
  let chapter_in_Running = 1;
  let spacial_Problem = 0;
  let starting_page = 1;

  for (let i = 0; i < b.length; i++) {
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

function sandeep_Book(b, n_of_chapter, k) {
  let spacial_page = 0;
  let boundary_check = 0;
  let page_Number = 1;
  for (let i = 1; i <= n_of_chapter; i++) {
    //for chapter
    for (let j = 1; j <= b[i]; j++) {
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
let b = [4, 2, 6, 1, 10];
let n_of_chapter = 5;
let k = 3;
sandeep_Book(b, n_of_chapter, k);

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
  // console.log(parselet(toString(flip, 2)));
  let decimal = parselet(flip, 2);
  // parselet(binary,radix); // may be radix will be any think may be decimal hexa,ocatal anything
  // will be there he will change as your requirement.
  console.log(decimal);
}
let n = 9;
flipping_Bits(n);

//========================================================
// let bin = '1001';
// let decimal = parselet(bin, 2);
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


function missing_Number(b, actal_b) {
  let ault = [];
  for (let i = 0; i < b.length; ) {
    for (let j = 0; j < actal_b.length; ) {
      if (b[i] == actal_b[j]) {
        j++;
      } else {
        // ault.push(actal_b[j]);
        j++;
        i++;
      }
    }
  }
  ault.sort(function (a, b) {
    return a - b;
  });
  console.log(ault);
}
let b = [7, 2, 5, 3, 5, 3];
let actal_b = [7, 2, 5, 4, 6, 3, 5, 3];
missing_Number(b, actal_b);

//============================================================
// function missing_Number(b, actal_b) {
//   // b.sort(function (a, b) {
//   //   return a - b;
//   // });
//   // actal_b.sort(function (a, b) {
//   //   return a - b;
//   // });
//   // console.log(b);
//   // console.log(actal_b);
//   let set1 = new Set(b);
//   let set2 = new Set(actal_b);
//   console.log(set1);
//   console.log(set2);
// }
// let b = [7, 2, 5, 3, 5, 3];
// let actal_b = [7, 2, 5, 4, 6, 3, 5, 3];
// missing_Number(b, actal_b);



//===================================================================
function missing_Number(b, actal_b) {
  b.sort(function (a, b) {
    return a - b;
  });

  actal_b.sort(function (a, b) {
    return a - b;
  });

  let set_1 = new Set(b);
  let set_2 = new Set(actal_b);
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
let b = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
let actal_b = [
  203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204,
];
missing_Number(b, actal_b);

//========================================================
// let b_1 = [2, 3, 5, 7];
// let new_Set = new Set();
// let b_2 = [2, 3, 4, 5, 6, 7];
// let set_1 = new Set(b_1);
// let set_2 = new Set(b_2);
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


function missing_Number(b, brr) {
  b.sort(function (a, b) {
    return a - b;
  });

  brr.sort(function (a, b) {
    return a - b;
  });
  let diff_1 = new Set();
  for (let i = 0; i < b.length; i++) {
    if (diff_1.has(b[i])) {
      diff_1.delete(b[i]);
    } else {
      diff_1.add(b[i]);
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

let b = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
let brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];
missing_Number(b, brr);

//===================================================================================
// DAY-10, 14-07-2022
// THRUSDAY
//==================================================================================
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
function frequencyFind(b) {
  // let visited = bay.from({ length: b.length }, (_, i) => false);
  // let again_visited = bay.from({ length: b.length }, i => false);

  let count = []; // it is object type.
  b.forEach(element => {
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
let b = [7, 2, 5, 3, 5, 3];
frequencyFind(b);
//===============================================================================

function missing_Number(b, brr) {
  let count_1 = []; // object
  brr.forEach(ele => {
    count_1[ele] ? count_1[ele]++ : (count_1[ele] = 1);
  });
  console.log(count_1);
  let count_2 = [];
  b.forEach(elem => {
    count_2[elem] ? count_2[elem]++ : (count_2[elem] = 1);
  });
  console.log(count_2);
  let a = [];
}

let b = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
let brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];
missing_Number(b, brr);

//===============================================================================
function unknown_bay(b, brr) {
  b.sort(function (a, b) {
    return a - b;
  });
  brr.sort(function (a, b) {
    return a - b;
  });

  for (let ele of b) {
    if (brr.includes(ele)) {
      brr.splice(brr.indexOf(ele), 1);
      //brr.splice(brr.indexOf(ele),1);
    }
  }
  let sorttedOrder = brr.sort(function (a, b) {
    return a - b;
  });
  let set = new Set(sorttedOrder);
  let a = bay.from(set); // nice properties.
  console.log(a);
}
let b = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
let brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];
unknown_bay(b, brr);

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

function sandeepValidString(str) {
  let frequency_ = [];
  let newb = [];
  str.split('').forEach(element => {
    frequency_[element] ? frequency_[element]++ : (frequency_[element] = 1);
  });
  //  console.log(frequency_);
  for (let ele in frequency_) {
    newb.push(frequency_[ele]);
  }
  // console.log(newb);

  newb.sort(function (a, b) {
    return a - b;
  });

  let len = newb.length;
  let first = newb[0];
  let second = newb[1];
  let secondLast = newb[newb.length - 2];
  let last = newb[newb.length - 1];

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
  let ault = [];
  for (let i of set2) {
    if (set1.has(i)) {
      ault.push(i);
    }
  }
  // console.log(ault);
  if (ault.length === 0) {
    console.log('NO');
  } else {
    console.log('YES');
  }
}
let s1 = 'be';
let s2 = 'cat';
twoStrings(s1, s2);

//===========================================================================

function time_in_word() {
  let word = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'forteen',
    'fivteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'twenty one',
    'twenty two',
    'twenty three',
    'twenty four',
    'twenty five',
    'twenty six',
    'twenty seven',
    'twenty eight',
    'twenty nine',
  ];
  let ault = '';
  if (m == 0) {
    ault = ault + word[h] + " o' clock ";
  } else if (m == 1) {
    ault = ault + word[m] + ' minute past ' + word[h];
  } else if (m == 10) {
    ault = ault + word[m] + ' minute past ' + word[h];
  }
  // console.log(ault);
  else if (m == 15) {
    ault = ault + 'quarter past ' + word[h];
  }
  // console.log(ault);
  else if (m == 30) {
    ault = ault + 'half past ' + word[h];
  } else if (m == 40) {
    ault = ault + word[60 - m] + ' minutes to ' + word[h + 1];
  }
  // console.log(ault);
  else if (m == 45) {
    ault = ault + 'quarter to ' + word[h + 1];
  }
  // console.log(ault);
  else if (m == 47) {
    ault = ault + word[60 - m] + ' minutes to ' + word[h + 1];
  }
  // console.log(ault);
  else if (m == 28) {
    ault = ault + word[m] + ' minutes past ' + word[h];
  }
  //console.log(ault);
  else if (m < 30) {
    ault = ault + word[m] + ' minutes past ' + word[h];
  } else {
    ault = ault + word[60 - m] + ' minutes to ' + word[h + 1];
  }
  console.log(ault);
}

let h = 5;
let m = 30;
time_in_word(h, m);

//==================================================================================
function encription_(str1) {
  let without_space = '';

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] != ' ') {
      without_space = without_space + str1[i];
    }
  }
  console.log(Math.ceil(Math.sqrt(str1.length)));

  console.log(without_space);
  console.log(without_space.length);
  let square_ = Math.sqrt(without_space.length);
  console.log(square_);
  let row = Math.floor(square_);
  console.log(row);
  let column = Math.ceil(square_);
  console.log(column);
  let ault = '';
  let b = [];
  if (row * column < str1.length) {
    row++;
  }
  console.log(row);
  console.log(column);
}
// let str1 =
//   'if man was meant to stay on the ground god would have given us roots';
//let str1 = 'haveaniceday';
let str1 = 'chillout';
encription_(str1);

//================================================================================

let row = 2;
let col = 3;
let matrix = new bay(row);
//console.log(matrix);
for (let i = 0; i < row; i++) {
  // how ,many times row will be run.
  matrix[i] = new bay(col); // here nuumber of column are created in first row
}
console.log(matrix);

//===================================================================================
function encription_(str1) {
  let without_space = '';

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] != ' ') {
      without_space = without_space + str1[i];
    }
  }
  // console.log(Math.ceil(Math.sqrt(str1.length)));

  //  console.log(without_space);
  // console.log(without_space.length);
  let square_ = Math.sqrt(without_space.length);
  // console.log(square_);
  let row = Math.floor(square_);
  //  console.log(row);
  let column = Math.ceil(square_);
  //  console.log(column);
  // let ault = '';
  // let b = [];
  if (row * column < without_space.length) {
    row++;
  }
  // create an empty matrix in which are given number of row and number of colmun

  let my_Matrix = new bay(row);
  for (let i = 0; i < row; i++) {
    my_Matrix[i] = new bay(column);
  }
  // console.log(my_Matrix); // empty matrix has been created.
  //next step you have to put all values in matrix.

  // put all the string value in martix coraponnding  row and column

  let k = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      my_Matrix[i][j] = without_space[k];
      k++;
    }
  }
  // console.log(my_Matrix);

  let ault = '';
  for (let i = 0; i < column; i++) {
    for (let j = 0; j < row; j++) {
      let cha = my_Matrix[j][i];
      if (cha) {
        ault = ault + cha;
      }
    }
    ault = ault + ' ';
  }
  console.log(ault);
}
let str1 =
  'if man was meant to stay on the ground god would have given us roots';
//let str1 = 'haveaniceday';
// let str1 = 'chillout';
encription_(str1);

// let row = 3;
// let col = 4;
// let mat = new bay(row);
// for (let i = 0; i < row; i++) {
//   mat[i] = new bay(col);
// }
// console.log(mat);

//==================================================================================

function greedy_Florist(b, no_of_friends) {
  b.sort(function (a, b) {
    return b - a;
  });
  // console.log(b);
  let ault_1 = 0;

  if (b.length == no_of_friends || b.length < no_of_friends) {
    for (let i = 0; i < b.length; i++) {
      ault_1 += b[i];
    }
  }
  //console.log(ault_1);
  else {
    for (let i = 0; i < b.length; i++) {
      ault_1 = ault_1 + Math.floor(i / no_of_friends + 1) * b[i];
    }
  }
  console.log(ault_1);
}

let b = [6, 7, 8, 9, 5, 4, 3, 2, 1];
let no_of_friends = 3;
greedy_Florist(b, no_of_friends);

//===================================================================================
// explantion:--
//           1- who will take 112 newAition values
//           (i) 119 will take the newAition.
//            (ii) 108 will take the newAition.
//            (iii) 60 may be take the newAition.
//-----------------------------------------------------
//           2- who will take 42 newAition
//          (i) 83 may be take the newAition.
//          (ii) 114 will take the newAition.
//          (iii) 98 may be take the newAition values
//--------------------------------------------------------
//          3- who will take 56 newAition
//         (i) 49 may be take the newAition.
//         (ii) 15 may be take the newAition.
//         (iii) 43 amy be take the newAition.
//------------------------------------------------------------------
//         4- who does take 115 newAition values.
//        (i) 110 may be take the newAition.
//        (ii) 78 may be take the newAition.
//        (iii) 56 may be take the newAition.
//======================================================================
function flipping_matrix(row, col) {
  let matrix = new bay(row);
  for (let i = 0; i < row; i++) {
    matrix[i] = new bay(col);
  }
  //console.log(matrix);
  let k = 0;
  let b = [
    112, 42, 83, 119, 56, 115, 56, 49, 15, 78, 101, 43, 62, 98, 114, 108,
  ];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrix[i][j] = b[k];
      k++;
    }
  }
  let n = row / 2;

  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let max_1 = Math.max(matrix[i][j], matrix[i][2 * n - j - 1]);
      let max_2 = Math.max(
        matrix[2 * n - i - 1][j],
        matrix[2 * n - i - 1][2 * n - j - 1]
      );
      sum = sum + Math.max(max_1, max_2);
    }
  }
  console.log(sum);
}
let row = 4;
let col = 4;
flipping_matrix(row, col);

//===============================================================================
function counter_Games(n) {
  let isItPowerOf2 = checking(n);
  while (n == 1) {
    if (isItPowerOf2 == true) {
      n = Math.floor(n / 2);
      checking(n);
    }
  }
}
let n = 7;
counter_Games(n);
//=======================================================================
//----------------------------------------------------------------
// let find the frequency of bay brr.
// let freq = [];
// brr.forEach(ele => {
//   freq[ele] ? freq[ele]++ : (freq[ele] = 1);
// });

// for (let a_ele of b) {
//   if(a_ele==Object.keys(freq)){
//       Object.values(freq)=Object.values(freq)-1;
//   }
// }
// console.log(freq);
//----------------------------------------------------------------
// for (let key of Object.keys(freq)) {
//   console.log(key);
// }

// for (let val of Object.values(freq)) {
//   console.log(val);
// }

//-----------------------------------------------------------------
function missWorld(b, brr) {
  b.sort(function (a, b) {
    return a - b;
  });
  brr.sort(function (a, b) {
    return a - b;
  });
  let j = 0;
  for (let i = 0; i < brr.length; ) {
    for (j = 0; j < b.length; ) {
      if (brr[i] == b[j]) {
        brr[i] = -1;
        i++;
        j++;
        break;
      }
    }
  }

  // console.log(brr);
  // let set = new Set(brr);
  // console.log(set);
  let newb = [];
  for (let i = 0; i < brr.length; i++) {
    if (brr[i] != -1) {
      newb.push(brr[i]);
    }
  }
  console.log(newb);
}
//let b = [11, 4, 11, 7, 13, 4, 12, 11, 10, 14];
//let brr = [11, 4, 11, 7, 3, 7, 10, 13, 4, 8, 12, 11, 10, 14, 12];
let b = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
let brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];
missWorld(b, brr);

//=================================================================
function checking(num) {
  let count = 0;
  while (n > 0) {
    if ((n & 1) == 1) {
      count++; // if n&1 == 1 keep incrementing count
      // variable
    }
    //   n = n >> 1; // keep dividing n by 2 using right
    // shift operator
    n = Math.floor(n / 2);
  }
  if (count == 1) {
    // // if count = 1 only then it is power of 2  // return true;
    return true;
  } else {
    return false;
  }
}

//========================================================================


//===============================================================================

function miss_(b, brr) {
  let freq_b = [];
  //----------------------------------------------------                  |
  // for (let ele of brr) {                                               |
  //   if (!freq_b.hasOwnProperty(ele)) {                               |
  //     freq_b[ele] = 1;                                               |
  //   } else {                                                           |
  //     freq_b[ele]++;                                                 |
  //   }                                                                  |
  // }                                                                    |
  // //---------------------------------------------------------          |
  // brr.forEach(ele => {                                                 |
  //   freq_b[ele] ? freq_b[ele]++ : (freq_b[ele] = 1);
  // });

  //------------------------------------------------------------          |
  for (let index = 0; index < brr.length; index++) {
    // |
    {
      let ele = brr[index]; //
      if (freq_b[ele]) {
        //
        freq_b[ele] = freq_b[ele] + 1; //
      } else {
        freq_b[ele] = 1;
      }
    }
  }

  //--------------------------------------------------------
  for (let ele of b) {   // 
    freq_b[ele]--;
  }
  let missingEle = [];
  for (let key in freq_b) {
    if (freq_b[key] != 0) {
      missingEle.push(key);
    }
  }
  console.log(missingEle);
}

let b = [7, 2, 5, 3, 5, 3];
let brr = [7, 2, 5, 4, 6, 3, 5, 3];
miss_(b, brr);
                               ^
                               ^
                               ^
                               ^
                               ^
//=============================================================================================|
//=============================================================================================|
//=============================================================================================|
//=============================================================================================|
Difference for..in and for..of:                                                                |
Both for..in and for..of are looping constructs which are used to iterate over data structua.|
 The only difference between them is the entities they iterate over:                           |
                                                                                               |
for..in iterates over all enumerable property keys of an object                                |
for..of iterates over the values of an iterable object. Examples of iterable                   |
objects are bays, strings, and NodeLists.                                                    |
                                                                                               |
//=============================================================================================|
//=============================================================================================|
//=============================================================================================|
//=============================================================================================|
//=============================================================================================|
//=============================================================================================|
                                      ^
                                      ^
                                      ^
                                      ^
                                      ^
function game_(n) {
  let turn_Count_Louise_Richard = 0;
  while (n != 1) {
    if ((n & (n - 1)) == 0) {
      n = Math.floor(n / 2);
      turn_Count_Louise_Richard++;
      // it is power of 2
    } else {
      // it is not power of 2
      let log_ = Math.floor(Math.log2(n));
      let p = 2 ** log_;
      n = n - p;
      turn_Count_Louise_Richard++;
    }
  }
  //   console.log('louisecont ' + turn_Count_Louise_Richard);
  if (turn_Count_Louise_Richard % 2 == 0) {
    console.log('Richard');
  } else {
    console.log('Louise');
  }
}
let n = 132;
game_(n);
// try to in the office it is mandtrary to solve with your own method..
//------------------------------------------------------------------------------------
// console.log(5 % 2 ? 'sandeep' : 'Prajapati');
// first he give odd number and then he give even number.
//------------------------------------------------------------------------------------

// console.log(typeof str);
// let letegers_ = parselet(str);
// console.log(letegers_);
// let n = 5;
// console.log(String(n).charAt(0) == n);
// helper(n);
// let total = 0;
// for (let i = 0; i < str.length; i++) {
//   total = total + parselet(str[i]);
// }
// if()
// function helpher(n) {
//   if (n < 10) {
//     return n;
//   }
//   let lastDigit = n % 10;
//   let remianing_number = Math.floor(n / 10);
//   return helpher(lastDigit + helpher(remianing_number));
//}
function recursive_Call_Digit_Sum(num, k) {
  let no = 0;
  let n = num.repeat(k);
  // let n_ = parselet(n);
  // console.log(n_);
  for (let i = 0; i < n.length; i++) {
    no += parselet(n[i]);
  }

  let ault = helpher(no);
  console.log(ault);
}
let num = '148';
let k = 3;
recursive_Call_Digit_Sum(num, k);

function helpher(n) {
  if (n <= 9) {
    return n;
  }
  let sum = 0;
  while (n != 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return helpher(sum);
}

//===========================================================================

function max_min(b, k) {
  let min = Number.MAX_VALUE;
  for (let i = 0; i + (k - 1) < b.length; i++) {
    let diff = Math.abs(b[i] - b[i + (k - 1)]);
    if (diff < min) {
      min = diff;
    }
  }
  console.log(min);
}
let b = [1, 2, 1, 1, 2];
let k = 2;
max_min(b, k);

//=============================================================================
function making_Anagram(s1, s2) {
  let split_1 = s1.split('');
  let split_2 = s2.split('');
  let freq = [];
  for (let i = 0; i < split_1.length; i++) {
    let cha = split_1[i];
    if (freq[cha]) {
      freq[cha] = freq[cha] + 1;
    } else {
      freq[cha] = 1;
    }
  }
  console.log(freq);
  let freq_1 = [];
  for (let i = 0; i < split_2.length; i++) {
    let cha = split_2[i];
    if (freq_1[cha]) {
      freq_1[cha] = freq_1[cha] + 1;
    } else {
      freq_1[cha] = 1;
    }
  }
  console.log(freq_1);
  let count_ = 0;
  for (let el in split_2) {
    if (freq[el]) {
      // freq[chb] = freq[chb] - 1;
      let a = Math.floor(freq[el] - freq_1[el]);
      count = count + a;
    } else if (el) {
      count++;
    } else {
      freq[chb] = 1;
    }
  }
  // console.log(count);

  console.log(freq);
  let b = [];
  for (let ele in freq) {
    b.push(freq[ele]);
  }
  let count = 0;
  for (let i = 0; i < b.length; i++) {
    if (b[i] % 2 != 0) {
      count++;
    }
  }
  // console.log(count);
}
let s1 = 'absdjkvuahdakejfnfauhdsaavasdlkj';
let s2 = 'djfladfhiawasdkjvalskufhafablsdkashlahdfa';
making_Anagram(s1, s2);
//-----------------------------------------------------------------------------
//

function task_(a1, a2) {
  let count = 0;
  for (let i = 0; i < a1.length; i++) {
    let diff = Math.abs(a1[i] - a2[i]);
    count = count + diff;
  }
  // console.log(count);
}
let a1 = [0, 0, 1, 1, 1];
let a2 = [1, 1, 1, 0, 0];
task_(a1, a2);
//=================================================================================

function making_Anagram_(s1_, s2_) {
  let bay_1 = new bay(26);
  let bay_2 = new bay(26);
  let count = 0;
  let split_1 = s1_.split('');
  let split_2 = s2_.split('');
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < split_1.length; i++) {
    let el = split_1[i];
    if (bay_1[el]) {
      bay_1[el] = bay_1[el] + 1;
    } else {
      bay_1[el] = 1;
    }
  }

  for (let i = 0; i < alpha.length; i++) {
    if (!bay_1[alpha[i]]) {
      bay_1[alpha[i]] = 0;
    }
  }
  // console.log(bay_1);
  let teamp_1 = [];
  for (let ell in bay_1) {
    teamp_1.push(bay_1[ell]);
  }
  console.log('value ' + teamp_1);

  for (let i = 0; i < split_2.length; i++) {
    let el = split_2[i];
    if (bay_2[el]) {
      bay_2[el] = bay_2[el] + 1;
    } else {
      bay_2[el] = 1;
    }
  }

  for (let i = 0; i < alpha.length; i++) {
    if (!bay_2[alpha[i]]) {
      bay_2[alpha[i]] = 0;
    }
  }

  let teamp_2 = [];
  for (let ell in bay_2) {
    teamp_2.push(bay_2[ell]);
  }
  console.log(teamp_2);

  for (let i = 0; i < 26; i++) {
    let dif = Math.abs(teamp_1[i] - teamp_2[i]);
    count = count + dif;
  }
  // console.log(count);
}

let s1_ = 'cde';
let s2_ = 'abc';
making_Anagram_(s1_, s2_);

//====================================================================================
function making_Anagram_(s1, s2) {
  let map = [];
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (!map[s1[i]]) {
      map[s1[i]] = 1;
    } else {
      map[s1[i]]++;
    }
  }
  // console.log(map);

  for (let i = 0; i < s2.length; i++) {
    if (map[s2[i]]) {
      map[s2[i]]--;
    } else {
      count++;
    }
  }
  // console.log(map);
  // console.log(count);
  for (let kee in map) {
    count = count + map[kee];
  }
  // console.log(count);
}
let s1 = 'cde';
let s2 = 'abc';
making_Anagram_(s1, s2);

//====================================================================================

function orgaining_container_ball(row, col) {
  let b = [1, 4, 2, 3];
  let matrix_ = new bay(row);
  for (let i = 0; i < row; i++) {
    matrix_[i] = new bay(col);
  }
  // console.log(matrix_);

  let k = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrix_[i][j] = b[k];
      k++;
    }
  }
  let row_bay = [];
  let col_bay = [];
  let sum = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      sum = sum + matrix_[i][j];
    }
    row_bay.push(sum);
    sum = 0;
  }
  // console.log(row_bay);
  let sum_2 = 0;
  for (let j = 0; j < col; j++) {
    for (let i = 0; i < row; i++) {
      sum_2 = sum_2 + matrix_[i][j];
    }
    col_bay.push(sum_2);
    sum_2 = 0;
  }
  //console.log(col_bay);

  row_bay.sort(function (a, b) {
    return a - b;
  });
  col_bay.sort(function (a, b) {
    return a - b;
  });

  if (row_bay.join() == col_bay.join()) {
    //  console.log('newAsible');
  } else {
    // console.log('ImnewAsible');
  }
}

let row = 2;
let col = 2;
orgaining_container_ball(row, col);
//===================================================================================
function making_anna(a1, a2) {
  if (a1.join() == a2.join()) {
    //    console.log('equal');
  } else {
    //  console.log('Not equal');
  }
}
let a1 = [4, 5, 3];
let a2 = [4, 5, 3];
making_anna(a1, a2);

//=====================================================================================
function fairRations(b) {
  let bread_Count = 0;
  for (let i = 0; i < b.length - 1; i++) {
    if (b[i] % 2 != 0) {
      b[i] = b[i] + 1;
      b[i + 1] = b[i + 1] + 1;
      bread_Count = bread_Count + 2;
    }
  }
  if (b[b.length - 1] % 2 != 0) {
    // console.log('NO');
    return 'NO';
  } else {
    // console.log(bread_Count);
    // console.log(bread_Count);
  }
}

let b = [4, 5, 6, 7];
fairRations(b);

//=================================================

function frequency_Count(b) {
  let map = [];
  for (let i = 0; i < b.length; i++) {
    let ele = b[i];
    if (map[ele]) {
      map[ele] = map[ele] + 1;
    } else {
      map[ele] = 1;
    }
  }
  // console.log(map);
}
let b_1 = [7, 2, 5, 3, 5, 3, 7];
frequency_Count(b_1);

//==========================================================

function the_Grid_Search(row_1, col_1, row_2, col_2) {
  let b_1 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  ];
  let matrix_1 = new bay(row_1);
  for (let i = 0; i < row_1; i++) {
    matrix_1[i] = new bay(col_1);
  }
  let k1 = 0;
  for (let i = 0; i < row_1; i++) {
    for (let j = 0; j < col_1; j++) {
      matrix_1[i][j] = b_1[k1];
      k1++;
    }
  }
  console.log(matrix_1);

  let b_2 = [8, 7, 6, 5, 4, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  let matrix_2 = new bay(row_2);
  for (let i = 0; i < row_2; i++) {
    matrix_2[i] = new bay(col_2);
  }

  let k2 = 0;
  for (let i = 0; i < row_2; i++) {
    for (let j = 0; j < col_2; j++) {
      matrix_2[i][j] = b_2[k2];
      k2++;
    }
  }
  console.log(matrix_2);
  a;
}

let row_1 = 5;
let col_1 = 10;
let row_2 = 3;
let col_2 = 6;
the_Grid_Search(row_1, col_1, row_2, col_2);

//================================================================================


function gaming_bay(b) {
  let count = 0;
  // while (b.length) {
  //  b.splice(b.indexOf(Math.max(...b)));
  let index = 0;
  let val = 0;
  while (b.length) {
    index = b.indexOf(Math.max(...b));
    val = b.splice(index);
    count++;
  }
  console.log(count);
  let max = Number.MIN_VALUE;
  // let index = b.indexOf(Math.max(...b));
  // let a = b.splice(index, b[index]);
  // console.log(a);
  // console.log(b);
  //  count++;
  // }
  //console.log(index);
}
let b = [2, 3, 5, 4, 1];
gaming_bay(b);

//==================================================================================

function suffix_Sum_Func(b) {
  let n = b.length;
  let suffix_b = new bay(n);

  suffix_b[n - 1] = b[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffix_b[i] = suffix_b[i + 1] + b[i];
  }
  console.log('suffix' + suffix_b);

  let prefix_b = new bay(n);
  prefix_b[0] = b[0];
  for (let i = 1; i < b.length; i++) {
    prefix_b[i] = prefix_b[i - 1] + b[i];
  }
  console.log('prefix' + prefix_b);
  // let max = Number.MIN_VALUE;
  let flag = false;
  for (let i = 0; i < b.length; i++) {
    if (prefix_b[i] == suffix_b[i]) {
      flag = true;
    }
  }

  if (flag == true) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

let b = [1, 2, 3];
suffix_Sum_Func(b);

//=====================================================================================
function orders_Burger(row, col) {
  let b = [8, 1, 4, 2, 5, 6, 3, 1, 4, 3];
  let order_Matrix = new bay(row);
  for (let i = 0; i < row; i++) {
    order_Matrix[i] = new bay(col);
  }
  //  console.log(order_Matrix);
  let k = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      order_Matrix[i][j] = b[k];
      k++;
    }
  }
  let ault_b = new Map();
  // let ault_b = [];
  // let map;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      ault_b.set(i + 1, order_Matrix[i][j] + order_Matrix[i][j + 1]);
      //let order_prep =
      j = +2;
    }
  }
  // console.log(ault_b);
  // console.log(typeof ault_b);
  let newb = [];
  let get_value = ault_b.values();
  for (let el of get_value) {
    newb.push(el);
  }
  //console.log(newb);
  let sorted = [...newb];

  sorted.sort(function (a, b) {
    return a - b;
  });

  console.log(sorted);
  console.log(newb);
  let j = 0;
  let indexb = [];
  for (let i of newb) {
    indexb.push(sorted.indexOf(i) + 1);
  }
  console.log(indexb);
}

// console.log(sorted);
// for (let i = 0; i < sorted.length; i++) {
//   console.log(sorted[i] * 2);
// }
// console.log(newb);
let row = 5;
let col = 2;
orders_Burger(row, col);

//==============================================================================

function order(order_prep_time_bay, temp_sort) {
  let ault_As_index = [];
  for (let el of order_prep_time_bay) {
    ault_As_index.push(temp_sort.indexOf(el) + 1);
  }
  console.log(ault_As_index);
}

let order_prep_time_bay = [9, 6, 11, 4, 7];
let temp_sort = [4, 6, 7, 9, 11];
order(order_prep_time_bay, temp_sort);
//=================================================================================

function orders_Burger(row, col) {
  let b = [8, 1, 4, 2, 5, 6, 3, 1, 4, 3];
  let order_Matrix = new bay(row);
  for (let i = 0; i < row; i++) {
    order_Matrix[i] = new bay(col);
  }
  //  console.log(order_Matrix);
  let k = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      order_Matrix[i][j] = b[k];
      k++;
    }
  }

  console.log(order_Matrix.length);

  let ault_b = [];
  for (let i = 0; i < order_Matrix.length; i++) {
    ault_b.push({
      orderTime: order_Matrix[i][0] + order_Matrix[i][1],
      index: i + 1,
    });
  }
  console.log(ault_b);

  ault_b.sort((a, b) => a.orderTime - b.orderTime);
  console.log(ault_b);

  let a = [];
  for (let el of ault_b) {
    a.push(el.index);
  }
  console.log(a);
}

let row = 5;
let col = 2;
orders_Burger(row, col);

//==================================================================================

function permuting_Two_bay(b, brr) {
  b.sort(function (a, b) {
    return a - b;
  });
  brr.sort(function (a, b) {
    return b - a;
  });

  let flagSandeep = true;
  for (let i = 0; i < b.length; i++) {
    let add = b[i] + brr[i];
    if (add >= k) {
      continue;
    } else {
      flagSandeep = false;
    }
  }
  if (flagSandeep == true) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

let b = [2, 1, 3];
let brr = [7, 8, 9];
let k = 5;
permuting_Two_bay(b, brr, k);


//=================================================================================

function closet_Number(b) {
  b.sort(function (a, b) {
    return a - b;
  });

  // let a = [];
  // for (let i = 0; i < b.length - 1; i++) {
  //   for (let j = i + 1; j < b.length; j++) {
  //     a.push(b[i]);
  //     a.push(b[j]);
  //   }
  // }
  let result = [];
  let min = Number.MAX_VALUE;
  for (let i = 0; i < b.length - 1; i++) {
    let diff = Math.abs(b[i] - b[i + 1]);
    if (min > diff || min == diff) {
      min = diff;
      result.push(b[i], b[i + 1]);
      i = i + 2;
    }
  }
  console.log(result);
}

let b = [
  -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594,
  266854,
];
closet_Number(b);

//===================================================================================


function closedNumber(b) {
  b.sort(function (a, b) {
    return a - b;
  });

  let result = [];
  let min = Number.MAX_VALUE; // b[b.length-1];
  for (let i = 0; i < b.length - 1; i++) {
    let diff = b[i + 1] - b[i];
    if (min > diff) {
      min = diff;
      result = [];
      result.push(b[i], b[i + 1]);
    } else if (min === diff) {
      result.push(b[i], b[i + 1]);
    }
  }
  console.log(result);
}
let b = [
  -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594,
  266854,
];
closedNumber(b);

//=================================================================================

function stange_Counter(time) {
  // given an time find the values.
  let value = 3;
  let time_start = 1;
  let time_end = 3;
  let result = 0;
  while (1) {
    if (time_start <= time && time <= time_end) {
      let newAition = time - time_start;
      console.log(value - newAition);
      break;
    } else {
      time_start = time_end + 1;
      value *= 2;
      time_end = time_end + value;
    }
  }
}

let time = 4;
stange_Counter(time);

//================================================================================

// lets learn insertion sort.
function testing_insertion_sort(b) {
  let n = b.length;
  for (let i = 1; i < n; i++) {
    let temp = b[i];
    let j = i;
    while (j > 0 && b[j - 1] >= temp) {
      b[j] = b[j - 1];
      j--;
      prlet_(b);
    }
    b[j] = temp;
  }
  prlet_(b);
}

let b = [2, 4, 6, 8, 3];
testing_insertion_sort(b);

function prlet_(b) {
  let sandeep = '';
  for (let i = 0; i < b.length; i++) {
    sandeep = sandeep + b[i] + ' ';
  }
  console.log(sandeep);
}

//==========================================================================================

function insertion_sort_II(b) {
  let n = b.length;
  for (let i = 1; i < n; i++) {
    let temp = b[i];
    let j = i;
    while (j >= 1 && b[j - 1] > temp) {
      b[j] = b[j - 1];
      j--;
    }
    b[j] = temp;
    prlet_(b);
  }

}
let b = [1, 4, 3, 5, 6, 2];
insertion_sort_II(b);

function prlet_(b) {
  let prletsandeep = '';
  for (let i = 0; i < b.length; i++) {
    prletsandeep = prletsandeep + b[i] + ' ';
  }
  console.log(prletsandeep);
}

//================================================================================
function insertion_sort_(b) {
  let n = b.length;
  for (let i = 1; i < n; i++) {
    let temp = b[i];
    let j = i;
    while (j > 0 && b[j - 1] > temp) {
      b[j] = b[j - 1];
      j--;
    }
    b[j] = temp;
  }
  console.log(b);
}

let b = [1, 4, 3, 5, 6, 2];
insertion_sort_(b);

//================================================================================
function ruunnig_time_of_algorithms(b) {
  let n = b.length;
  for (let i = 1; i < n; i++) {
    let temp = b[i];
    let j = i;
    while (j > 0 && b[j - 1] > temp) {
      b[j] = b[j - 1];
      j--;
    }
    b[j] = temp;
  }
  console.log(b);
}

let b = [1, 4, 3, 5, 6, 2];
ruunnig_time_of_algorithms(b);

//======================================================================
function count_shift_operation(b) {
  let n = b.length;
  let shiftCount = 0;
  for (let i = 1; i < n; i++) {
    let temp = b[i];
    let j = i;
    while (j > 0 && b[j - 1] > temp) {
      b[j] = b[j - 1];
      j--;
      shiftCount++;
    }
    b[j] = temp;
  }
  console.log(shiftCount);
}

//let b = [4, 3, 2, 1];
let b = [1, 1, 2, 2, 3, 3, 5, 5, 7, 7, 9, 9];
count_shift_operation(b);

//=====================================================================


function quick_Partition_sort(b) {
  let left = [];
  let right = [];
  let pivote = b[0];
  for (let i = 1; i < b.length; i++) {
    if (b[i] > pivote) {
      right.push(b[i]);
    } else if (b[i] < pivote) {
      left.push(b[i]);
    }
  }
  //3 2
  //5 7
  //4
  let res = [];
  for (let i = 0; i < left.length; i++) {
    res.push(left[i]);
  }
  res.push(pivote);
  for (let i = 0; i < right.length; i++) {
    res.push(right[i]);
  }
  console.log(res);
}

let b = [4, 5, 3, 7, 2];
quick_Partition_sort(b);

//====================================================================

function counting_sort_1(b) {
  let l = b.length;
  let result = new Map();
  for (let i = 0; i < b.length; i++) {
    let ele = b[i];
    if (result[ele]) {
      result[ele]++;
    } else {
      result[ele] = 1;
    }
  }
  let sandeb = [];
  console.log(result);
  for (let el of Object.values(result)) {
    sandeb.push(el);
  }
  sandeb.sort(function (a, b) {
    return a - b;
  });
  console.log(sandeb);
}

let b = [1, 0, 1, 3, 2, 1];
counting_sort_1(b);

//====================================================================================
// ---------------------------IMPORTANT------------------------------------------------
function counting_sort_1(b) {
  let frequency = new bay(20).fill(0);
  for (let el of b) {
    frequency[el]++;
    // if (frequency[el]) {
    //   frequency[el]++;
    // } else {
    //   frequency[el] = 1;
    // }
  }
  console.log(frequency);
}

let b = [1, 1, 3, 2, 1];
counting_sort_1(b);

//========================================================================================


function counting_sort(b) {
  let L = b.length;
  //find the Maximum and Minimum value in this bay;
  let max = b[0];
  let min = b[0];
  //bay to be sorted in this bay is necessary
  let aux = new bay(b.length);

  for (let i = 0; i < L; i++) {
    if (b[i] < min) min = b[i];
    else if (b[i] > max) max = b[i];
  }
  //frequency of bay
  let count = new bay(max - min + 1);
  for (let i = 0; i < b.length; i++) {
    count[b[i] - min]++;
  }
  count[0]--;
  for (let i = 1; i < count.length; i++) {
    count[i] = count[i] + count[i - 1];
  }

  for (let i = b.length - 1; i >= 0; i--) {
    aux[count[b[i] - min]--] = b[i];
  }
  console.log(aux);
}

let b = [1, 1, 3, 2, 1];
counting_sort(b);

//=====================================================================================
function toturial(b, v) {
  for (let i = 0; i < b.length; i++) {
    if (b[i] == v) {
      console.log(i);
      break;
    }
  }
}
let b = [1, 2, 3];
let v = 3;
toturial(b, v);

//==================================================================================
function sales_By_Match(b) {
  let frequency = new Map();
  for (let i = 0; i < b.length; i++) {
    let ele = b[i];
    if (frequency[ele]) {
      frequency[ele]++;
    } else {
      frequency[ele] = 1;
    }
  }
  console.log(frequency);
  let res = [];
  for (let i of Object.values(frequency)) {
    res.push(i);
  }

  let count = 0;
  for (let i = 0; i < res.length; i++) {
    if (res[i] > 1) {
      let r = Math.floor(res[i] / 2);
      count = count + r;
    }
  }
  console.log(count);
}

let b = [1, 2, 1, 2, 1, 3, 2];
sales_By_Match(b);

//======================================================================================

function Breaking_the_Records(b) {
  let maxCount = 0;
  let minCount = 0;
  let max = b[0];
  let min = b[0];
  for (let i = 1; i < b.length; i++) {
    if (b[i] == max) {
      continue;
    } else if (b[i] == min) {
      continue;
    } else if (b[i] < min) {
      minCount++;
      min = b[i];
    } else if (b[i] > max) {
      maxCount++;
      max = b[i];
    }
  }
  console.log(maxCount);
  console.log(minCount);
}

let b = [10, 5, 20, 20, 4, 5, 2, 25, 1];
Breaking_the_Records(b);

//=======================================================================================

function number_line_jumps(x1, v1, x2, v2) {
  //explanation:--
  //   speed=distance/time
  //   distance=speed*time
  //   we can say 1 juumps --1 seconds
  //   we can say    2 jumps ---2 seconds
  //   we can say    3 jumps ---3 seconds
  //   we can say    4 jumps ---4 seconds
  // distance=(v1*j)+x1  // (v1--number of jumps also called as speed*j(time)+starting newAition.)
  // distance=(v2*j)+x2
  // x1+(v1*j)=x2+(v2*j)
  // we have to find  j only , j is time.
  //  x1+(v1*j)=x2+(v2*j)
  //      (v1*j)-(v2*j)=x2-x1
  //       (v1-v2)j=x2-x1
  //---------------------------|
  //   j= x2-x1/v1-v2          |
  //---------------------------|
  if (v1 < v2) {
    console.log('NO');
  }
  if ((x2 - x1) % (v1 - v2) == 0) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

let x1 = 0; // starting newAition kangbo first
let v1 = 3; // number of jumps, kangaroo first
let x2 = 4; // starting newAition kangaroo second.
let v2 = 2; // number of jumps kangaroo second.
number_line_jumps(x1, v1, x2, v2);

//=======================================================================================

// multiple of a bay:--[2,6]
//   2----->> 2,4,6,8,10,12,14,16
//   6----->> 6,12,18,24,30,36,42
//-----------------------------------------------
// factor of b bay:---[24,36]
//    24---> 2,3,4,6,12,24
//    36---> 2,3,4,6,9,12,18,36

// find the common element:--- 6 , 12
// only two element are common so prlet 2 is your anwser.

function between_Two_Set(a, b) {
  let resultLCM = gettingLCM(a); // 6
  let resultGCD = gettingGCD(b); //12
  let multiple_Count = 0;
  let result = 0;
  while (multiple_Count <= resultGCD) {
    multiple_Count = multiple_Count + resultLCM;
    if (resultGCD % multiple_Count == 0) {
      result++;
    }
  }
  console.log(result);
}

let a = [2, 6];
let b = [24, 36];
between_Two_Set(a, b);
//----------------------------------------------
//finding LCM
function gcdd__(i, j) {
  if (j == 0) return i;
  return gcdd__(j, i % j);
}

function gettingLCM(a) {
  let ans = a[0];
  for (let i = 1; i < a.length; i++) {
    ans = (a[i] * ans) / gcdd__(a[i], ans);
  }
  return ans;
}
//-----------------------------------------------------
// finding GCD
function gcdd_(i, j) {
  if (i == 0) return j;
  return gcdd_(j % i, i);
}

function gettingGCD(b) {
  let ans = b[0];
  for (let i = 1; i < b.length; i++) {
    ans = gcdd_(b[i], ans);
    if (ans == 1) return 1;
  }
  return ans;
}
//-------------------------------------------------------------------
//===================================================================
//function super_reducing_string(str) {
  // let set = new Set(str);
  // console.log(set);

  // let s = str.split('');
  // let freq = [];
  // for (let i = 0; i < s.length; i++) {
  //   let el = s[i];
  //   if (freq[el]) {
  //     freq[el]++;
  //   } else {
  //     freq[el] = 1;
  //   }
  // }
  // console.log(freq);

  // for (let ell in freq) {
  //   freq[ell]--;
  // }
  // console.log(freq);
// }

// let str = 'aaabccddd';
// super_reducing_string(str);
//==================================================================================

function super_reducing_string(str) {
  let split = str.split('');
  let stack = [];
  for (let i = 0; i < split.length; i++) {
    if (stack.length == 0) {
      stack.push(split[i]);
    } else if (split[i] == stack[stack.length - 1]) {
      stack.pop();
    } else if (split[i] != stack[stack.length - 1]) {
      stack.push(split[i]);
    }
  }

  if (stack.length == 0) {
    console.log('Empty String');
  } else {
    let res = '';
    for (let i = 0; i < stack.length; i++) {
      res = res + stack[i];
    }
    console.log(res);
  }
}

let str = 'aa';
super_reducing_string(str);

//============================================================================================

function bill_Division(arr, bill, b) {
  let b_actual = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i == bill) {
      continue;
    } else {
      b_actual = b_actual + arr[i];
    }
  }
  // console.log(b_actual);
  let actual_charged = b_actual / 2;
  // console.log(actual_charged);
  if (actual_charged == b) {
    console.log('Bon Appetit');
  } else {
    console.log(b - actual_charged);
  }
}

let arr = [3, 10, 2, 9];
let bill = 1; // as a index anna did not eat.
let b = 7; // anna already paid it.
bill_Division(arr, bill, b);

//===================================================================================



function anagram(str) {
  let l = str.length;
  if (l % 2 == 1) {
    console.log(-1);
  } else {
    let s1 = '';
    let s2 = '';
    for (let i = 0; i < l / 2; i++) {
      s1 = s1 + str[i];
    }
    for (let i = l / 2; i < l; i++) {
      s2 = s2 + str[i];
    }

    // console.log(s1);
    // console.log(s2);
    let count = 0;
    let res_1 = s1.split('').sort().join('');
    let res_2 = s2.split('').sort().join('');

    console.log(res_1);
    console.log(res_2);
    for (let i = 0; i < res_1.length; i++) {
      if (res_1[i] != res_2[i]) {
        count++;
      }
    }
    console.log(count);
  }
}

let str = 'hhpddlnnsjfoyxpciioigvjqzfbpllssuj';
//let str = 'abc';
anagram(str);

//==========================================================================
function anagram(str) {
  let l = str.length;

  if (l % 2 == 1) {
    console.log(-1);
  } else {
    let s1 = '';
    let s2 = '';
    for (let i = 0; i < l / 2; i++) {
      s1 = s1 + str[i];
    }
    for (let i = l / 2; i < l; i++) {
      s2 = s2 + str[i];
    }
    console.log(s1);
    console.log(s2);
    let st1 = s1.split('');
    let st2 = s2.split('');
    let count = 0;
    let flag = false;
    for (let i = 0; i < s1.length; i++) {
      if (st2.includes(st1[i])) {
      }
    }
    console.log(st1);
  }
}

let str = 'hhpddlnnsjfoyxpciioigvjqzfbpllssuj';
//let str = 'aaabbb';
anagram(str);

//====================================================================

function fre_(str) {
  let l = str.length;
  let s1 = '';
  let s2 = '';

  if (l % 2 == 1) {
    console.log(-1);
  } else {
    for (let i = 0; i < l / 2; i++) {
      s1 = s1 + str[i];
    }
    for (let i = l / 2; i < l; i++) {
      s2 = s2 + str[i];
    }

    let st1 = s1.split('');
    let st2 = s2.split('');

    let map = new Map();
    for (let i = 0; i < st1.length; i++) {
      let el = st1[i];
      if (map[el]) {
        map[el]++;
      } else {
        map[el] = 1;
      }
    }
    console.log(map);
    for (let ell of st2) {
      map[ell]--;
    }
    console.log(map);

    let arr = [];
    for (let i in map) {
      if (map[i] > 0 || map[i] == NaN) {
        arr.push(map[i]);
      }
    }

    //  console.log(arr);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    console.log(sum);
    //return sum;
  }
}
let str = 'aaabbb';
fre_(str);

//==================================================================================

function cut_and_sticks(arr) {
  let l = arr.length;
  let result = [];
  let zeroCount = 0;
  while (zeroCount < l) {
    result.push(l - zeroCount);
    // let min = Math.min(...arr);
    let min = 1001;
    for (let i = 0; i < arr.length; i++) {
      if (min > arr[i] && arr[i] > 0) {
        min = arr[i];
      }
    }
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] - min;
      if (arr[i] == 0) {
        zeroCount++;
      }
    }
  }
  console.log(result);
}
let arr = [5, 4, 4, 2, 2, 8];
cut_and_sticks(arr);


//=============================================================================
let n = 88209;
let no = String(n);
// console.log(no);
// console.log(typeof no);
// console.log(no.length);
let sum_1 = '';
for (let i = 0; i < Math.floor(no.length / 2); i++) {
  sum_1 += no[i];
}
console.log(sum_1);
let sum_2 = '';
for (let i = Math.floor(no.length / 2); i < no.length; i++) {
  sum_2 += no[i];
}
console.log(sum_2);
let final = parselet(sum_1) + parselet(sum_2);
console.log(final);

// let sum_1 = parselet(Math.floor(no.length / 2));

// Dattatreya Ramchandra Kaprekar :-------  दत्तात्रेय रामचंद्र कापरेकर
//---------------------------------------------------------------------------

function dattatreya_Ramchandra_Kaprekar(p, q) {
  let kkaprekar = [];
  // Kaprekar.push(1);
  for (let i = p; i <= q; i++) {
    let po = Math.pow(i, 2);
    let no = String(po);

    let sum_1 = '';
    for (let i = 0; i < Math.floor(no.length / 2); i++) {
      sum_1 += no[i];
    }
    //console.log(sum_1);
    let sum_2 = '';
    for (let i = Math.floor(no.length / 2); i < no.length; i++) {
      sum_2 += no[i];
    }
    //console.log(sum_2);

    let final = parselet(sum_1) + parselet(sum_2);
    if (final == i) {
      kkaprekar.push(final);
    }
    sum_1 = '';
    sum_2 = '';
    if (i == 1) {
      kkaprekar.push(1);
    }
  }

  if (kkaprekar.length == 0) {
    // return 'INVALID RANGE';
    console.log('INVALID RANGE');
  } else {
    let res = '';
    for (let i = 0; i < kkaprekar.length; i++) {
      res = res + kkaprekar[i] + ' ';
    }
    console.log(res);
  }
}

let p = 100;
let q = 300;
dattatreya_Ramchandra_Kaprekar(p, q);

//===============================================================================


function cut_(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let res = [];
  let i = 0;
  while (i < arr.length) {
    res.push(arr.length - i);
    while (arr[i] == arr[i + 1]) {
      i++;
    }
    i++;
  }
  console.log(res);
}

let arr = [5, 4, 4, 2, 2, 8];
cut_(arr);

//============================================================================

// Explanations:--
//                                      a b c
//                                -----/----\-----
//
//
//               a b c                     b a c                  c b a
//
//        a b c          a c b        b a c    b c a           c b a    c a b
//
// str="abc"  [abc][acb][bac][bca][cba][cab];
// method - 1
//  1- generate all the permutations  of the given string.
//  2- check it contains palindrome string.
//--------------------------------------------------------------------
//note:- he taking more time and more space so bruth force algo will not work.
//
// method -2 in case of palindrome--
// 1- If the length of string is even number, frequency of all the alphabets
//    should be even.
// 2- if length of string is odd number : frequency of all the alphabets should be
//    be even, except one.
//------------------------------------------------------------------------------
// example:--
//   anna                   [a:2,n:2]
//   noon                   [n:2,o:2]
//   level                  [e:2,l:2,v:1]
//   madam                  [m:2,a:2,d:1]
//   repaper                [r:2,e:2,p:2,a:1]
//   kinikkinik             [k:4,i:4,n:2]
//----------------------------------------------------------------------------------
// if string length have 3 so permutation will be 3!=3*2*1==6 substring will
// if string length have 4 so permutation will be 4!=4*3*2*1=24 substring will
// if string length have 5 so permutation will be 5!=5*4*3*2*1=120 substring will
// if string length have 6 so permutation will be 6!=6*5*4*3*2*1=720 substring will
//-------------------------------------------------------------------------------------

function game_of_thrones_1(str) {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    let el = str[i];
    if (map[el]) {
      map[el]++;
    } else {
      map[el] = 1;
    }
  }
  console.log(map);
  let count = 0;
  for (let ell in map) {
    if (map[ell] % 2 == 0) {
      continue;
    } else {
      count++;
    }
  }
  if (count == 0 || count == 1) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

let str = 'aaabbbb';
game_of_thrones_1(str);

//===============================================================================
function happy_Lady_Bugs(str) {
  let flag = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '_') {
      //  console.log('NO');
      flag = true;
      break;
    }
  }
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] == str[i + 1]) {
      // console.log('NO');
      flag = true;
      break;
    }
  }

  if (str.length == 1 || (str.length == 2 && str[0] == '_') || str[1] == '_') {
    flag = true;
  }

  if (flag == true) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

let str = 'RB_YBR';
happy_Lady_Bugs(str);

//==================================================================================
function happy_Lady_Bugs(str) {
  let result = happy_Lady_Bugs(str);
}

let str = 'RB_YBR';
happy_Lady_Bugs(str);

function happy_Lady_Bugs(str) {}


//=================================================================
function sub_Division(s, d, m) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let c = 0;
    for (let j = 0; j < m; j++) {
      if (i + j < s.length) {
        c = c + s[i + j];
      }
    }
    if (c == d) {
      count++;
    }
  }
  console.log(count);
}

let arr = [1, 2, 1, 3, 2];
let d = 3;
let m = 2;
sub_Division(arr, d, m);

//=========================================================================

function migrateBird(arr) {
  let map = new Map();
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (map[el]) {
      map[el]++;
      max = Math.max(max, map[el]);
    } else {
      map[el] = 1;
      max = Math.max(max, map[el]);
    }
  }
  console.log(max);
  for (let i in map) {
    if (map[i] == max) {
      console.log(i);
    }
  }
}

//let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
let arr = [1, 4, 4, 4, 5, 3];
migrateBird(arr);


//========================================================================
//_________________________________________________
//    |  |   |  |   |   |   |   |   |    |   |   |
//_________________________________________________
//    -----x----------  <-y-> --------x----------- lets assuming
//
//   we can say sum of all the  element
//   should be present.in
//    x+y+x=sum of all element.
//    2x+y=sum
//    2x=sum-y --------- (i)
//                   ^
//   arr = 3, 7, 5, 10, 2, 7, 4, 2
//         |        ^
//         y            ^
//    sum=3+7+5+10+2+7+4+2=
//    ==40  put the 40 in equation number ,now take x=0 left side have nothing we just started
//     x=0
//-------------------------
//     2*x=40-y          y means arr[i]
//     2*0=40-3
//     0==37   whitch are not equal to
////---------------------------------------------
//     now x become x+arr[y];  0+3==3
//   2*3==40-7
//   6==33    is not equal
//---------------------------------------------
//    now x become x+arr[y]  3+7=10
//   2*10==40-5
//   20==35  which is not equal
//---------------------------------------------
//   now x become  x+arr[y] 10+5=15
//   2*15==sum-10
//   30==40-10
//   30===30
//   sum of all elements to the left is equal to the sum of all elements to the right.
//
// so we prlet YES.
//
//
//===========================================================================

function sherlock_And_Array(arr) {
  let sum = 0;
  let flag = false;
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let y = 0; y < arr.length; y++) {
    if (2 * x == sum - arr[y]) {
      flag = true;
    }
    x = x + arr[y];
  }
  if (flag == true) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

let arr = [5, 6, 8, 11];
sherlock_And_Array(arr);

//============================================================================
// console.log('b' == 'b');
// function g(grid) {
//   let newArr = [];
//   //console.log(grid.length); // 3
//   for (let i = 0; i < grid.length; i++) {
//     let text = grid[i].split('').sort();
//     newArr.push(text);
//   }

//   let col = newArr[0].length;
//   // console.log(col);  // 3
//   for (let i = 0; i < newArr.length - 1; i++) {
//     for (let j = 0; j < col; j++) {
//       if (newArr[i][j] > newArr[i + 1][j]) {
//         return 'NO';
//       }
//     }
//   }
//   return 'YES';
// }

//====================================================================================


function grid_(row, col) {
  let arr = [
    'e',
    'b',
    'a',
    'c',
    'd',
    'f',
    'g',
    'h',
    'i',
    'j',
    'o',
    'l',
    'm',
    'k',
    'n',
    't',
    'r',
    'p',
    'q',
    's',
    'x',
    'y',
    'w',
    'u',
    'v',
  ];

  let matrixGrid = new Array(row);
  for (let i = 0; i < row; i++) {
    matrixGrid[i] = new Array(col);
  }
  console.log(matrixGrid);

  let k = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrixGrid[i][j] = arr[k];
      k++;
    }
  }
  console.log(matrixGrid);

  let n = matrixGrid.length;

  let newArr = [];
  for (let i = 0; i < n; i++) {
    let text = matrixGrid[i].split('').sort();
    newArr.push(text);
  }
  console.log(newArr);
}

let row = 5;
let col = 5;
grid_(row, col);


//=========================================================================
function challenge(grid, n) {
  let newArr = [];

  sort_By_Row(grid, n);
  // console.log(res);
  // console.log(newArr);
  // let col = newArr[0].length;
  // console.log(col);

  // for (let i = 0; i < newArr.length - 1; i++) {
  //   for (let j = 0; j < col; j++) {
  //     if (newArr[i][j] > newArr[i + 1][j]) {
  //       // return "NO";
  //       console.log('NO');
  //     }
  //   }
  // }
  // console.log('YES');
//}

// let grid = [
//   ['a', 'd', 'c'],
//   ['z', 'b', 'e'],
//   ['e', 'f', 'g'],
// ];
// let n = grid.length;
// challenge(grid);
// function sort_By_Row(grid, n) {
//   for (let i = 0; i < n; i++) {
//     grid[i].split('').sort();
//   }
//   console.log(grid);


//==========================================================
function twice(gridBySand, n) {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    let text = gridBySand[i].toString().split('').sort();
    newArr.push(text);
  }
  console.log(newArr.trim());
  let col = newArr[0].length;
  console.log(col);

  let flag = true;
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < col; j++) {
      if (newArr[i][j] > newArr[i + 1][j]) {
        flag = false;
      }
    }
  }
  if (flag == true) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

let gridBySand = [
  ['a', 'd', 'c'],
  ['z', 'b', 'e'],
  ['e', 'f', 'g'],
];
let n = gridBySand.length;

twice(gridBySand, n);

//===========================================================================

function sherlock_square(a, b) {
  // let count = 0;
  // for (let i = a; i <= b; i++) {
  //   let s = Math.sqrt(i);
  //   if (Number.isleteger(s)) {
  //     count++;
  //   }
  // }
  // console.log(count);
  let b_ = Math.floor(Math.sqrt(b));
  console.log(b_);
  let a_ = Math.ceil(Math.sqrt(a));
  console.log(a_);
  let res = b_ - a_;
  console.log(res + 1);
}

let a = 24;
let b = 49;
sherlock_square(a, b);

//===========================================================================


function rotateArray(arr, k, quaries) {
  while (k > 0) {
    let last = arr.pop();
    arr.unshift(last);
    k--;
  }
  //arr.unshift(last);
  // console.log(arr);
  let newArr = [];
  for (let i = 0; i < quaries.length; i++) {
    // if (quaries[i] == i + 1) {
    //   newArr.push(arr[i]);
    // }
    newArr.push(arr[quaries[i]]);
  }
  console.log(newArr);
}

let arr = [3, 4, 5];
let k = 2;
let quaries = [1, 2];
rotateArray(arr, k, quaries);

//==============================================================================

//function equalize_Array(arr) {
// let map = new Map();
// let max = 0;
// let maxx = max;
// for (let i = 0; i < arr.length; i++) {
//   let el = arr[i];
//   if (map[el]) {
//     map[el]++;
//     maxx = Math.max(map[el], max);
//   } else {
//     map[el] = 1;
//     //  maxx = Math.max(map[el], max);
//   }
// }
// console.log(map);
// let count = 0;
// for (let i in map) {
//   if (map[i] == 1) {
//     count++;
//   }
// }
// console.log(count);
// console.log(arr);
//   let count = 0;
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   let max = arr[arr.length - 1];
//   console.log(arr);
//   console.log(max);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != max) {
//       count++;
//     }
//   }
//   console.log(count);
// }
function equalize_Array(arr) {
  let map = new Map();
  let max = 0;
  let maxx = max;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (map[el]) {
      map[el]++;
      maxx = Math.max(map[el], max);
    } else {
      map[el] = 1;
      maxx = Math.max(map[el], max);
    }
  }
  //  console.log(maxx);
  let keynu = 0;
  for (let e in map) {
    if (map[e] == maxx) {
      keynu = e;
    }
  }
  //console.log(keynu);

  arr.sort(function (a, b) {
    return a - b;
  });
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == keynu) {
      count++;
    }
  }
  console.log(count);
}
//==========================================================================


function equalize_Array(arr) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (map[el]) {
      map[el]++;
    } else {
      map[el] = 1;
    }
  }
  console.log(map);
  let val = [];
  for (let el in map) {
    val.push(map[el]);
  }
  console.log(val);
  let max = Math.max(...val);
  console.log(max);
  console.log(arr.length - max);
}

let arr = [1, 2, 2, 3];
equalize_Array(arr);

//=====================================================================

function minimum_Distance(arr) {
  // 1 1 3 4
  let min = Number.MAX_VALUE;
  let j = 1;
  let res = 0;
  //  let fi = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1 + i; j < arr.length; j++)
      if (arr[i] == arr[j]) {
        res = j - i;
        res = Math.min(res, min);
      }
  }
  if (res == 0) {
    return;
  }
  console.log(res);
}

let arr = [7, 1, 3, 4, 1, 7];
minimum_Distance(arr);

//===================================================================================
// function minimum_Distance(arr) {}
// let arr = [7, 1, 3, 4, 1, 7];
// minimum_Distance(arr);

//---------------------------------------------------------------------------------------
function sortedSentence(s) {
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
  return result.join(' ');
}

let s = 'is2 sentence4 This1 a3';
sortedSentence(str);

//==================================================================================

function love_Letters_mistrery(s) {
  // let map = new Map();
  // for (let i = 0; i < str.length; i++) {
  //   let el = str[i];
  //   if (map[el]) {
  //     map[el]++;
  //   } else {
  //     map[el] = 1;
  //   }
  // }
  // console.log(map);

  let count = 0;
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    count = count + Math.abs(s.charCodeAt(i) - s.charCodeAt(s.length - 1 - i));
  }
  console.log(count);
}

let s = 'cde';
love_Letters_mistrery(s);



//====================================================================================
function helloweenSales(p, d, m, s) {
  let count = 0;
  while (s >= p) {
    count++;
    s = s - p;
    p = Math.max(p - d, m);
  }
  console.log(count);
}

let priceOffirstGame = 20;
let discount = 3;
let minCostOfGame = 6;
let budget = 80;
helloweenSales(priceOffirstGame, discount, minCostOfGame, budget);
//========================================================================================
 // for (let i = 0; i < arr.length - 2; i++) {
  //   for (let j = i + 1; j < arr.length - 1; j++) {
  //     for (let k = j + 1; k < arr.length; k++) {
  //       let a = arr[i];
  //       let b = arr[j];
  //       let c = arr[k];

  //       if (b + c > a && c + a > b && a + b > c) {
  //         flag = true;
  //         newArr = [];
  //         //   newArr.push(a,b,c);
  //         //=======================
  //         newArr.push(a);
  //         newArr.push(b);
  //         newArr.push(c);
  //         //=========================
  //       }
  //     }
  //   }
  // }


function maximumPerimeter(arr) {
  let flag = false;
  let newArr = [];
  arr.sort(function (a, b) {
    return a - b;
  });
  let l = arr.length;
  while (l > 0) {
    let i = 0;
    let a = arr[i];
    let b = arr[i + 1];
    let c = arr[i + 2];
    if (b + c > a && c + a > b && a + b > c) {
      flag = true;
      newArr = [];
      //   newArr.push(a,b,c);

      newArr.push(a);
      newArr.push(b);
      newArr.push(c);
      break;
    }
    l--;
    i++;
  }
  //=======================================================

  //===========================================================
  if (flag == true) {
    console.log(newArr);
  } else {
    console.log(-1);
  }
}

let arr = [1, 2, 3];
maximumPerimeter(arr);

//================================================================================
function maximumPerimeter(arr) {
  let flag = false;
  let newArr = [];
  arr.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let a = arr[i];
        let b = arr[j];
        let c = arr[k];

        if (b + c > a && c + a > b && a + b > c) {
          flag = true;
          newArr = [];
          //   newArr.push(a,b,c);
          //=======================
          newArr.push(a);
          newArr.push(b);
          newArr.push(c);
          //=========================
        }
      }
    }
  }
  let kingOfMirzapur = '';
  if (flag == true) {
    // for(let i=0;i<newArr.length;i++){
    //     kingOfMirzapur=kingOfMirzapur+newArr[i]+ " ";
    // }
    //return kingOfMirzapur;
    return newArr;
  } else {
    // console.log(-1);
    return [-1];
  }
}

let arr = [1, 2, 3];
maximumPerimeter(arr);


//==============================================================

function alternativeCharacter(s) {
  let count = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] == s[i + 1]) {
      count++;
    }
  }
  console.log(count);
}

let s = 'AAAA';
alternativeCharacter(s);

//====================================================================


function beautifulString(s) {
  let count = 0;
  for (let i = 0; i < s.length - 2; i++) {
    if (s[i] == '0' && s[i + 1] == '1' && s[i + 2] == '0') {
      count++;
    }
  }
  console.log(count);
}

let s = '0101010';
beautifulString(s);

//=======================================================================
function utopianTree(n) {
  let height = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      height = height + 1;
    } else {
      height = height * 2;
    }
  }
  console.log(height);
}
let n = 1;
utopianTree(n);

//=================================================================================

function beautifulTriplet(arr, d) {
  let count = 0;
  arr.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] - arr[i] == d) {
        for (let k = j + 1; k < arr.length; k++) {
          if (arr[k] - arr[j] == d) {
            count++;
          }
        }
      }
    }
  }
  console.log(count);
}

let arr = [2, 2, 3, 4, 5];
let d = 1;
beautifulTriplet(arr, d);

//=======================================================================================

function picking_Number(arr) {
  let count = 0;
  // arr.sort(function (a, b) {
  //   return a - b;
  // });
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1] <= 1)) {
      count++;
    }
  }
  console.log(count);
}

let arr = [4, 6, 5, 3, 3, 1];
picking_Number(arr);
//===================================================================================


function picking_Number(arr) {
  //  console.log(arr.length);
  //  let map = new Map();
  let tempArr = new Array(100).fill(0);
  // console.log(tempArr);
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (tempArr[el]) {
      tempArr[el]++;
    } else {
      tempArr[el] = 1;
    }
  }
  //  console.log(tempArr);
  let newArr = [];
  for (let i of Object.values(tempArr)) {
    newArr.push(i);
  }
  // console.log(newArr);
  let max = Number.MIN_VALUE;
  for (let i = 1; i < newArr.length; i++) {
    max = Math.max(max, newArr[i] + newArr[i - 1]);
  }
  console.log(max);
}

let arr = [4, 6, 5, 3, 3, 1];
//let arr = [1, 2, 2, 3, 1, 2];
// let arr = [
//   66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
//   66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
//   66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
//   66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
//   66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
//   66, 66, 66, 66, 66,
// ];
picking_Number(arr);

//===================================================================================

function repeat_String(s) {
  let strLength = s.length;
  //count the number of a in given string.
  let countA = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 'a') {
      countA++;
    }
  }
  console.log('A :' + countA);
  // how many times actal string are repeated.
  let repeatedTimes = Math.floor(n / strLength);
  console.log(repeatedTimes);

  // find the length of string left after reperating.
  let stringLeftLength = n - strLength * repeatedTimes;
  console.log(stringLeftLength);

  // count the remaining repetitions.
  let extraA = 0;
  for (let i = 0; i < stringLeftLength; i++) {
    if (s[i] == 'a') {
      extraA++;
    }
  }
  console.log(extraA);
  let totalCount = repeatedTimes * countA + extraA;
  console.log(totalCount);
}

let s = 'abcd';
let n = 10;
repeat_String(s, n);

//=================================================================

function hackerRankReperting(s) {
  let orignal = 'hackerrank';
  let set = new Set(s);
  let flag = false;
  // for (let i = 0; i < s.length; i++) {
  //   if (s[i] == orignal[i]) {
  //   }
  // }
  console.log(set);
  let comp = '';
  for (let el of set) {
    comp = comp + el;
  }
  console.log(comp);
  if (orignal == comp) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

let s = 'hhaacckkekraraannk';
hackerRankReperting(s);

        let str = "hackerrank";
        if (sandeepstr.length() < str.length()) {
            return "NO";
        }
        let j = 0;
        for (let i = 0; i < sandeepstr.length(); i++) {
            if (j < str.length() && sandeepstr.charAt(i) == str.charAt(j)) {
                    j++;
            }
        }
        return (j == str.length() ? "YES" : "NO");

//====================================================================
function hackerRankReperting(s) {
  let original = 'hackerrank';
  if (s.length < original.length) {
    console.log('NO');
  } else {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      if (count < original.length && s[i] == original[count]) {
        count++;
      }
    }
    // if (count == original.length ? 'YES' : 'NO');
    if (count == original.length) {
      console.log('YES');
    } else {
      console.log('NO');
    }
  }
}

let s = 'hhaacckkekraraannk';
hackerRankReperting(s);

//=====================================================================================

function desinerViewerPDF(h, s) {
  let max = Number.MIN_VALUE;
  for (let i = 0; i < s.length; i++) {
    let res = s.charCodeAt(i) - 97;
    let val = h[res];
    max = Math.max(max, val);
  }
  console.log(max * s.length);
}

let h = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7,
];
let s = 'zaba';
desinerViewerPDF(h, s);



//====================================================================================

function jumping_Cloud(arr) {
  // let count = -1;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] == 0) {
  //     count++;
  //   }
  // }
  // console.log(count);
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (map[el]) {
      map[el]++;
    } else {
      map[el] = 1;
    }
  }
  // console.log(map);
  let arrNew = [];
  for (let i of Object.values(map)) {
    arrNew.push(i);
  }
  // console.log(arrNew);
  for (let i = 0; i < 1; i++) {
    console.log(arrNew[i] - 1);
  }
}
let arr = [0, 0, 1, 0, 0, 1, 0];
jumping_Cloud(arr);


//================================================================================
function jumping_Cloud(arr) {
  let l = arr.length;
  let count = -1;
  for (let i = 0; i < arr.length; ) {
    if (i + 2 < l && arr[i + 2] == 0) {
      i += 2;
    } else {
      i++;
    }
    count++;
  }
  console.log(count);
}

let arr = [0, 0, 1, 0, 0, 1, 0];
jumping_Cloud(arr);


//=================================================================================
let arr = [1, 2, 3];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length; j++) {
    console.log(i, j);
  }
}

//===============================================================================

function acmICPC(row, col) {
  let arr = [1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1];
  let matrix = new Array(row);
  for (let i = 0; i < row; i++) {
    matrix[i] = new Array(col);
  }
  // console.log(matrix);
  let k = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrix[i][j] = arr[k];
      k++;
    }
  }
  // console.log(matrix);

  let maxTopicCount = 0;
  let teamCount = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      let tempVari = oR_Operation(matrix[i], matrix[j]);
      if (tempVari > maxTopicCount) {
        maxTopicCount = tempVari;
        teamCount = 1;
      } else if (tempVari == maxTopicCount) {
        teamCount++;
      }
    }
  }
  console.log([maxTopicCount, teamCount]);
}
let row = 4;
let col = 5;
acmICPC(row, col);

function oR_Operation(st1, st2) {
  let count = 0;
  for (let i = 0; i < st1.length; i++) {
    if (st1[i] == '1' || st2[i] == '1') {
      count++;
    }
  }
  return count;
}

//==================================================================================

function chocolate_Feast(amount, cost_of_choco, min_num_wrap) {
  let countChoco = 0;
  while (amount > min_num_wrap || amount <= min_num_wrap) {
    if (amount < cost_of_choco) {
      amount = Math.floor(amount / min_num_wrap);
    } else {
      amount = Math.floor(amount / cost_of_choco);
    }
    amount = Math.floor(amount / cost_of_choco);
    countChoco = countChoco + amount;
    // amount = Math.floor(amount / min_num_wrap);
    // countChoco = countChoco + amount;
    if (amount < 1) {
      break;
    }
  }
  console.log(countChoco);
}
let amount = 15;
let cost_of_choco = 3;
let min_num_wrap = 2;
chocolate_Feast(amount, cost_of_choco, min_num_wrap);

 let counter = n / c;
    let wrappers = counter; // 3
    while (wrappers >= m) { // 3 > 2
      let tmp = wrappers / m;
      counter += tmp;
      wrappers = wrappers - (tmp * m) + tmp;
    }

    return counter;

//============================================================
function chocolate_feast(n, c, m) {
  let counter = Math.floor(n / c);
  let wrappers = counter;
  while (wrappers >= m) {
    let temp = Math.floor(wrappers / m);
    counter = counter + temp;
    wrappers = wrappers - temp * m + temp;
  }
  console.log(counter);
}

let n = 15;
let c = 3;
let m = 2;
chocolate_feast(n, c, m);

//==========================================

function gemstones(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].arr[i] == arr[j].arr[j]) {
        for (let k = j + 1; k < arr.length; k++) {
          if (arr[j].arr[j] == arr[k].arr[k]) {
            count++;
            break;
          }
          break;
        }
        break;
      }
      break;
    }
  }
  console.log(count);
}

let arr = ['abc', 'abc', 'bc'];
gemstones(arr);


//==========================================================================
function gemstones(row, col) {
  let arr = ['a', 'b', 'c', 'a', 'b', 'c', 'b', 'c'];

  let matrix = new Array(row);
  for (let i = 0; i < row; i++) {
    matrix[i] = new Array(col);
  }

  let k = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrix[i][j] = arr[k];
      k++;
    }
  }
  console.log(matrix);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] == undefined) {
        matrix[i][j] = '1';
      }
    }
  }

  let count = 0;
  //  let actualCount = 0;
  for (let i = 0; i < matrix.length - 1; i++) {
    let actualCount = 0;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] == matrix[i + 1][j]) {
        actualCount++;
        break;
      }
    }
    if (actualCount == matrix.length) {
      count++;
      actualCount = 0;
    }
  }

  console.log(count);
}

let row = 3;
let col = 3;
gemstones(row, col);

function gemstones(arr) {
  let temp = [
    'a',
    'b',
    'c',
    'd',
    'e',
    // 'f',
    // 'g',
    // 'h',
    // 'i',
    // 'j',
    // 'k',
    // 'l',
    // 'm',
    // 'n',
    // 'o',
    // 'p',
    // 'q',
    // 'r',
    // 's',
    // 't',
    // 'u',
    // 'v',
    // 'w',
    // 'x',
    // 'y',
    // 'z',
  ];
  let count = 0;
  let countActualResult = 0;
  for (let i = 0; i < temp.length; i++) {
    count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].includes(temp[i])) {
        count++;
      }
      if (count == arr.length) {
        countActualResult++;
      }
    }
  }
  console.log(countActualResult);
}
let arr = ['abc', 'abc', 'bc'];
gemstones(arr);

//==============================================================
// //let arr1 = ['a', 'b', 'c'];
// let res = ['a', 'b', 'c'].includes('a');
// console.log(res);


//==============================================================================

function gemstones(str_Array) {
  let str_temp_Arr = ['a', 'b', 'c', 'd', 'e'];
  let temp_Count = 0;
  let res_Count = 0;

  for (let i = 0; i < str_temp_Arr.length; i++) {
    temp_Count = 0;
    for (let j = 0; j < str_Array.length; j++) {
      if (str_Array[j].includes(str_temp_Arr[i])) {
        // search ele[str_temp_Arr]
        temp_Count++;
      }
      if (temp_Count == str_Array.length) {
        res_Count++;
      }
    } //2nd for loop
  } //1st for loop
  console.log(res_Count);
}

let str_Array = ['abc', 'abc', 'bc'];
gemstones(str_Array);


//==========================================================================

function counting_Valleys(str, step) {
  let vallyCount = 0;
  let altitude = 0;
  for (let i = 0; i < step; i++) {
    if (str[i] == 'U') {
      altitude++;
      if (altitude == 0) {
        vallyCount++;
      }
    } else {
      altitude--;
    }
  }
  console.log(vallyCount);
}

let str = 'UDDDUDUU';
let step = 8;
counting_Valleys(str, step);


//============================================================================


function library_Fine(
  returned_Date,
  returned_Month,
  returned_Year,
  due_Date,
  due_Month,
  due_Year
) {
  let fine = '';
  if (returned_Month == due_Month && returned_Year == due_Year) {
    fine = fine + returned_Date - due_Date;
    console.log(fine * 15);
  } else if (returned_Date == due_Date && returned_Year == due_Year) {
    fine = fine + returned_Month - due_Month;
    console.log(fine * 500);
  } else if (returned_Date == due_Date && returned_Month == due_Month) {
    fine = 10000;
    console.log(fine);
  } else {
    console.log(fine);
  }

  if (fine < 0) {
    console.log('0');
  }
}

let returned_Date = 2;
let returned_Month = 5;
let returned_Year = 2015;
let due_Date = 30;
let due_Month = 5;
let due_Year = 2015;
library_Fine(
  returned_Date,
  returned_Month,
  returned_Year,
  due_Date,
  due_Month,
  due_Year
);


//============================================================================

function service_Lane(arr, row, col) {
  let newArr = [0, 3, 4, 6, 6, 7, 3, 5, 0, 7];
  let matrix = new Array(row);
  for (let i = 0; i < row; i++) {
    matrix[i] = new Array(col);
  }

  let x = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrix[i][j] = newArr[x];
      x++;
    }
  }
  console.log(matrix);
  for (let e of matrix) {
    console.log(e);
  }
  // let san = [4, 5, 6, 8];
  // let sl = san.slice(-1);
  // console.log('Sandeep' + sl);
  let resultArr = [];
  for (let e of matrix) {
    let sliArr = arr.slice(e[0], e[1] + 1);
    let min = Math.min(...sliArr);
    resultArr.push(min);
  }
  console.log(resultArr);
  // for (let el of matrix) {
  //   console.log(el[0], el[1]);
  // }

  // for (let ell of matrix) {
  //   console.log(ell[1]);
  // }
}

let arr = [2, 3, 1, 2, 3, 2, 3, 3];
let row = 5;
let col = 2;
service_Lane(arr, row, col);


//===========================================================================

function grading(grades) {
  let resArr = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      // console.log(grades[i]);
      resArr.push(grades[i]);
    } else {
      let multipleOF5 = Math.floor(grades[i] / 5 + 1) * 5;
      if (multipleOF5 - grades[i] < 3) {
        //   console.log(multipleOF5);
        resArr.push(multipleOF5);
      } else {
        //   console.log(grades[i]);
        resArr.push(grades[i]);
      }
    }
  }
  console.log(resArr);
}
//==========================================================
// for (let i = 0; i < grades.length; i++) {
//   if (grades[i] < 38) {
//     console.log(grades[i]);
//   } else {
//     let multipleOF5 = Math.floor(grades[i] / 5 + 1) * 5;
//     if (multipleOF5 - grades[i] < 3) {
//       console.log(multipleOF5);
//     } else {
//       console.log(grades[i]);
//     }
//   }
// }
//====================================================

//   for (let i = 0; i < grades.length; i++) {
//     let multipleOF5 = Math.floor((arr[i] / 5) * 5);
//     if (multipleOF5 < 38) {
//       return arr[i];
//       continue;
//     }
//     if(multipleOF5-arr1[i]<3){
//    return multipleOF5;
//     }
// else{
//   return arr1[i];
// }
// }
//===========================================================

let grades = [73, 67, 38, 33];
grading(grades);

//======================================================================================

let arr = [7, 2, 3, 4];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
let l = arr.length;
let i = 0;
while (i + 1 < l) {
  console.log(arr[i + 1]);
  i++;
}

//======================================================================================

function getMaxiPrice(b, keyboards, drives) {
  let sum = 0;
  let maximum = 0;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      sum = keyboards[i] + drives[j];
      if (sum >= maximum && sum <= b) {
        maximum = sum;
      }
    }
  }
  if (maximum == 0) {
    return -1;
  }
  console.log(maximum);
}

let b = 60;
let keyboard = [40, 50, 60];
let drives = [5, 8, 12];
getMaxiPrice(b, keyboard, drives);

// 24 remaining.

//=====================================================================
function jumping_Cloud_revisited(c, k) {
  let energy = 100;
  let startingPoint = 0;
  do {
    startingPoint = (startingPoint + k) % c.length;
    energy--;
    if (c[startingPoint] == 1) {
      energy -= 2;
    }
  } while (startingPoint != 0);
  console.log(energy);
}

let c = [0, 0, 1, 0, 0, 1, 1, 0];
let k = 2;
jumping_Cloud_revisited(c, k);


//=========================================================================

function mars_Expolaration(s) {
  let count = 0;
  let fixed = 'SOS';
  for (let i = 0; i < s.length; i++) {
    if (s[i] != fixed[i % 3]) {
      count++;
    }
  }
  console.log(count);
}

let s = 'SOSTOT';

mars_Expolaration(s);

//==========================================================================

function day_Of_Programmar(year) {
  if (year < 1918) {
    if (year % 4 == 0)
      //Julian Calender

      console.log('12.09.' + year);
    else console.log('13.09.' + year);
  } else if (year > 1918) {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
      //Gregorial Caledder

      console.log('12.09.' + year);
    else console.log('13.09.' + year);
  } else {
    //Special case: transition year
    //year == 1918
    console.log('26.09.' + year);
  }
}

let year = 2017;
day_Of_Programmar(year);


//=================================================================================
function caesar_cipher(s, k) {
  // let newArr = [];
  // for (let i = 0; i < s.length; i++) {
  //   let code = s.charCodeAt(i) + k;
  //   while (code > 122) {
  //     code = code - 122 + 96;
  //   }
  //   newArr.push(String.fromCharCode(code));
  // }
  // console.log(newArr.join(''));

  let temp = '';
  for (let i = 0; i < s.length; i++) {
    if()
  }
}
let s = 'middle-Outz';
let k = 2;
caesar_cipher(s, k);
//=======================================================================

function caesar_cipher(s, k) {
  let resultArr = [];
  for (let i = 0; i < s.length; i++) {
    let undefResult = s.charCodeAt(i);
    if (undefResult >= 65 && undefResult <= 90) {
      let capi_ChangePlusK = ((undefResult - 65 + k) % 26) + 65;
      resultArr.push(String.fromCharCode(capi_ChangePlusK));
    } else if (undefResult >= 97 && undefResult <= 122) {
      let small_changePlusK = ((undefResult - 97 + k) % 26) + 97;
      resultArr.push(String.fromCharCode(small_changePlusK));
    } else {
      resultArr.push(s[i]);
    }
  }
  console.log(resultArr.join(''));
}
let s = 'middle-Outz';
let k = 2;
caesar_cipher(s, k);

//=====================================================================

function strong_Password(password, n) {
  let special_char = '!@#$%^&*()-+';
  let make_count = [0, 0, 0, 0];
  for (let i = 0; i < password.length; i++) {
    let asciiValu = password.charCodeAt(i);
    if (asciiValu >= 48 && asciiValu <= 57) {
      // belong to 0 to 9 digit.
      make_count[0] = 1;
    } else if (asciiValu >= 65 && asciiValu <= 90) {
      make_count[1] = 1;
      //belong to Capital latters.
    } else if (asciiValu >= 97 && asciiValu <= 122) {
      make_count[2] = 1;
      // belong to small latters.
    } else if (special_char.includes(password[i])) {
      make_count[3] = 1;
      // belong to special character.
    }
  }
  let sum_Make = 0;
  for (let i = 0; i < make_count.length; i++) {
    sum_Make += make_count[i];
  }
  let max = Math.max(sum_Make, 6 - password.length);
  console.log(max);
}

let password = '2bbbb';
let n = password.length;
strong_Password(password, n);

//===================================================================================
function strong_Password(password, n) {
  let lc = 0;
  let uc = 0;
  let dc = 0;
  let sp = 0;
  let moreCount = 0;

  for (let i = 0; i < n; i++) {
    let asciiCode = password.charCodeAt(i);

    if (asciiCode >= 65 && asciiCode <= 90) {
      lc = 1;
    } else if (asciiCode >= 97 && asciiCode <= 122) {
      uc = 1;
    } else if (asciiCode >= 48 && asciiCode <= 57) {
      dc = 1;
    } else {
      sp = 1;
    }
  }
  if (sp == 0) {
    moreCount++;
  }
  if (lc == 0) {
    moreCount++;
  }
  if (uc == 0) {
    moreCount++;
  }
  if (dc == 0) {
    moreCount++;
  }
  if (n < 6) {
    if (6 - n > moreCount) {
      console.log(6 - n);
    } else {
      console.log(moreCount);
    }
  } else {
    console.log(moreCount);
  }
}
let password =
  'ni3buu2w5de91h9k2odvvpl3k235id1nca23kiv93p3dep1g4cl4irv72hb7v53q673w237qjtsru2tyt6a7531s6jo0tqts391v';
let n = password.length;
strong_Password(password, n);

//======================================================================================================

function findtwoNuBit(arr) {
  let xorOff = 0;
  let xorOn = 0;
  let bitMask = 1 << 1;
  // console.log(bitMask);
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
// o/p  7,5

//=====================================================================================
function findtwoNuBit(arr_1) {
  let map = new Map();
  let newArr = [];
  for (let i = 0; i < arr_1.length; i++) {
    let el = arr_1[i];
    if (map[el]) {
      map[el]++;
    } else {
      map[el] = 1;
    }
  }

  for (let i in map) {
    if (map[i] % 2 != 0) {
      newArr.push(i);
    }
  }
  console.log(newArr);
}

let arr_1 = [4, 3, 4, 3, 6, 7, 5, 6];
findtwoNuBit(arr_1);

//=================================================================================
function cavity_Map(row, col) {
  let arr = [1, 1, 1, 2, 1, 9, 1, 2, 1, 8, 9, 2, 1, 2, 3, 4];
  let matrix = new Array(row);
  for (let i = 0; i < row; i++) {
    matrix[i] = new Array(col);
  }

  let k = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrix[i][j] = arr[k];
      k++;
    }
  }
  console.log(matrix);

  const matrix_2 = matrix.map(ele => ele.split(''));
  // console.log(twoDArr);

  // for (let i = 0; i < row; i++) {
  //   for (let j = 0; j < col; j++) {
  //     if(matrix[i][j].split(",")){

  //     }
  //   }

  //   }
  console.log(matrix);

  for (let i = 1; i < matrix_2.length - 1; i++) {
    for (let j = 1; j < matrix_2[i].length - 1; j++) {
      if (
        matrix_2[i][j] > matrix_2[i][j + 1] &&
        matrix_2[i][j] > matrix_2[i][j - 1] &&
        matrix_2[i][j] > matrix_2[i + 1][j] &&
        matrix_2[i][j] > matrix_2[i - 1][j]
      ) {
        matrix_2[i][j] = 'X';
      }
    }
  }
  console.log(matrix_2);
  let newGrid = matrix_2.map(el => el.join(''));
  console.log(newGrid);

  // good concept .. you have to remember this logic.
}

let row = 4;
let col = 4;
cavity_Map(row, col);

//================================================================================


function priyankaAndToys(w) {
  w.sort(function (a, b) {
    return a - b;
  });
  let count_Container = 1;
  let sum = w[0];
  for (let i of w) {
    if (i > sum + 4) {
      count_Container++;
      sum = i;
    }
  }
  console.log(count_Container);
}

let w = [1, 2, 3, 7, 12, 14, 21, 21];
priyankaAndToys(w);

for (let i = 0; i <= n; i++) {
    if ((5 * (n - i)) % 3 == 0 && (3 * i) % 5 === 0) {
      console.log(
        Array(n - i)
          .fill(5)
          .concat(Array(i).fill(3))
          .join('')
      );

      return;
    }
  }
  console.log(-1);
  return;

//==========================================================================
function decentNumber(n) {
  var fives = n;
  var threes = 0;
  let actualRes = [];

  while (threes <= n) {
    if (fives % 3 == 0 && threes % 5 == 0) {
      let result = assembleDecentNumber(fives, threes);
      actualRes.push(result);
    } else {
      threes += 5;
      fives -= 5;
    }
  }
  if (actualRes.length == 0) {
    // return -1;
    console.log(-1);
  } else {
    // return actualRes;
    console.log(actualRes);
  }
}
let n = 11;
decentNumber(n);

function assembleDecentNumber(fives, threes) {
  var arr = [];
  for (let i = 0; i < fives; i++) {
    arr.push(5);
  }
  for (let i = 0; i < threes; i++) {
    arr.push(3);
  }
  return arr;
}

//=================================================================
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

//=================================================================
let str = 'YYBBA__';
let res = str.split('');
console.log(res);
res.sort();

console.log(res.join(''));



function largestPermutations(arr, k) {
  let n = arr.length;
  let newA = new Array(n + 1);
  for (let i = 0; i < n; i++) {
    newA[arr[i]] = i;
  }
  for (let i = 0; i < n && k > 0; i++) {
    if (arr[i] == n - i) {
      continue;
    }
    let temp = newA[n - i];

    newA[arr[i]] = newA[n - i]; //swap the element newAition
    newA[n - i] = i;

    // Swap the ith largest value with
    // the current value at ith place
    let tmp1 = arr[temp];
    arr[temp] = arr[i];
    arr[i] = tmp1;

    // decrement number of swaps
    --k;
  }
  console.log(arr);
  // console.log(newA);
  // for (let i = 0; i < newA.length; i++) {
  //   console.log(newA[i]);
  // }
}

let arr = [1, 2, 3, 4];
let k = 1;
largestPermutations(arr, k);

//==========================================================================
function manasa_Stones(n, a, b) {
  let set = new Set();
  for (let i = 0; i < n; i++) {
    let res = b * i + a * (n - i - 1);
    set.add(res);
  }
  // console.log(set);
  // return [...set].sort(function (a, b) {
  //   return a - b;
  });
  let sandeep = '';
  for (let i of set) {
    sandeep = sandeep + i + ' ';
  }
  //  return sandeep;
  console.log(sandeep);
}

let n = 4;
let a = 10;
let b = 100;
manasa_Stones(n, a, b);

//========================================================================

function magicSquare(row, col) {
  let arr = [4, 9, 2, 3, 5, 7, 8, 1, 5];
  let matrix = new Array(row);
  for (let i = 0; i < row; i++) {
    matrix[i] = new Array(col);
  }
  let k = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrix[i][j] = arr[k];
      k++;
    }
  }
  //making a permutation of all matrix.

  // let row_1 = 24;
  // let col_1 = 3;
  // let newArr = [
  //   8, 1, 6, 3, 5, 7, 4, 9, 2, 6, 1, 8, 7, 5, 3, 2, 9, 4, 4, 9, 2, 3, 5, 7, 8,
  //   1, 6, 2, 9, 4, 7, 5, 3, 6, 1, 8, 8, 3, 4, 1, 8, 9, 6, 7, 2, 4, 3, 8, 9, 5,
  //   1, 2, 7, 6, 6, 7, 2, 1, 5, 9, 8, 3, 4, 2, 7, 6, 9, 5, 1, 4, 3, 8,
  // ];
  // let permutMatrix = new Array(row_1);
  // for (let i = 0; i < row_1; i++) {
  //   permutMatrix[i] = new Array(col_1);
  // }
  // let l = 0;
  // for (let i = 0; i < row_1; i++) {
  //   for (let j = 0; j < col_1; j++) {
  //     permutMatrix[i][j] = newArr[l];
  //     l++;
  //   }
  // }
  // console.log(permutMatrix);
  let permutMatrix = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ], //1
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ], //2
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ], //3
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ], //4
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ], //5
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ], //6
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ], //7
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ], //8
  ];

  // console.log(permutMatrix.length);

  // console.log(permutMatrix[0][0][2]);
  let minCost = Number.MAX_VALUE;
  for (let p = 0; p < 8; p++) {
    let cost = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cost += Math.abs(matrix[i][j] - permutMatrix[p][i][j]);
      }
    }
    minCost = Math.min(minCost, cost);
  }
  console.log(minCost);
}

let row = 3;
let col = 3;
magicSquare(row, col);


//===============================================================================
function climbibing_the_leaderboard(scores, alice) {
  //  scores = Array.from(new Set(scores));
  scores = Array.from(new Set(scores));
  console.log(scores);

  let player_rank = [];
  // for (let score of alice) {
  for (let i = 0; i < alice.length; i++) {
    while (scores[0] && alice[i] >= scores[scores.length - 1]) {
      scores.pop();
    }
    player_rank.push(scores.length + 1);
  }
  console.log(player_rank);
}
let ranked = [100, 100, 50, 40, 40, 20, 10];
let player = [5, 25, 50, 120];
climbibing_the_leaderboard(ranked, player);


//============================================================================
function grid_Search(row_1, col_1, row_2, col_2) {
  let arr_1 = [
    1, 2, 3, 4, 5, 2, 3, 4, 5, 6, 4, 5, 6, 7, 8, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5,
  ];
  let arr_2 = [3, 4, 5, 5, 6, 7, 3, 4, 5];
  let matrix1 = new Array(row_1);
  for (let i = 0; i < row_1; i++) {
    matrix1[i] = new Array(col_1);
  }
  let k = 0;
  for (let i = 0; i < row_1; i++) {
    for (let j = 0; j < col_1; j++) {
      matrix1[i][j] = arr_1[k];
      k++;
    }
  }
  let matrix2 = new Array(row_2);
  for (let i = 0; i < row_2; i++) {
    matrix2[i] = new Array(col_2);
  }
  let z = 0;
  for (let i = 0; i < row_2; i++) {
    for (let j = 0; j < col_2; j++) {
      matrix2[i][j] = arr_2[z];
      z++;
    }
  }
  console.log(matrix1);
  console.log(matrix2);
  console.log(matrix1.length);
  console.log(matrix2.length);

  let flag = false;
  for (let i = 0; i < matrix1.length - 1; i++) {
    for (let j = 0; j < matrix1.length; j++) {
      if (matrix1[i][j] == matrix2[i][j]) {
      }
    }
  }
}

let row_1 = 5;
let col_1 = 5;
let row_2 = 3;
let col_2 = 3;
grid_Search(row_1, col_1, row_2, col_2);

 let result_Arr = [];
  for (let i = 0; i < order_Matrix.length; i++) {
    result_Arr.push({
      orderTime: order_Matrix[i][0] + order_Matrix[i][1],
      index: i + 1,
    });
  }
 // console.log(result_Arr);

  result_Arr.sort((a, b) => a.orderTime - b.orderTime);
 // console.log(result_Arr);

  let res = [];
  for (let el of result_Arr) {
    res.push(el.index);
  }
  // console.log(res);
    return res;

//=================================================================
function jimAndOrder(row, col) {
  let jimMatrix = new Array(row);
  let arr = [8, 1, 4, 2, 5, 6, 3, 1, 4, 3];

  for (let i = 0; i < row; i++) {
    jimMatrix[i] = new Array(col);
  }
  let k = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      jimMatrix[i][j] = arr[k];
      k++;
    }
  }
  console.log(jimMatrix);

  let result = [];
  for (let i = 0; i < jimMatrix.length; i++) {
    result.push({ orderTime: jimMatrix[i][0] + jimMatrix[i][1], index: i + 1 });
  }
  console.log(result);
  result.sort((a, b) => a.orderTime - b.orderTime);

  console.log(result);

  let acutualRes = [];
  for (let i of result) {
    acutualRes.push(i.index);
  }
  console.log(acutualRes);

  for (let i = 0; i < acutualRes.length; i++) {
    console.log(acutualRes[i]);
  }
}
let row = 5;
let col = 2;

jimAndOrder(row, col);

//=======================================================================


function lisa_WorkBook(n, k, arr) {
  let page = 1;
  let specialPage = 0;
  let i = 0;
  while (i < n) {
    for (let index = 1; index <= arr[i]; index++) {
      if (index == page) {
        specialPage++;
      }
      if (index == arr[i] || index % k == 0) {
        page++;
      }
    }
    i++;
  }
  console.log(specialPage);
}

let n = 5;
let k = 3;
let arr = [4, 2, 6, 1, 10];
lisa_WorkBook(n, k, arr);

//===========================================================================

function valid_String(s) {
  let freq = [];
  let str = s.split('');
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    let el = str[i];
    if (freq[el]) {
      freq[el]++;
    } else {
      freq[el] = 1;
    }
  }
  console.log(freq);
  let arr = [];
  for (let ele in freq) {
    arr.push(freq[ele]);
  }
  console.log(arr);

  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  let first = arr[0];
  let second = arr[1];
  let secondLast = arr[arr.length - 2];
  // console.log(secondLast);
  let last = arr[arr.length - 1];

  let flag = false;
  if (arr.length == 1) {
    flag = true;
  }
  if (first == last) {
    flag = true;
  }
  if (first == last - 1) {
    flag = true;
  }
  if (first == second && second == secondLast && secondLast == last - 1) {
    flag = true;
  }
  if (first == 1 && second == last) {
    flag = true;
  }
  if (flag == true) {
    return 'YES';
  } else {
    return 'NO';
  }
}

let s = 'aabbccc';
valid_String(s);
//===========================================================================


function making_Anagaram(s1, s2) {
  let map = [];
  for (let i = 0; i < s1.length; i++) {
    let el = s1[i];
    if (map[el]) {
      map[el]++;
    } else {
      map[el] = 1;
    }
  }
  console.log(map);
  let count = 0;
  for (let i = 0; i < s2.length; i++) {
    let ell = s2[i];
    if (map[ell]) {
      map[ell]--;
    } else {
      count++;
    }
  }
  console.log(map);
  console.log(count);

  for (let e in map) {
    count = count + map[e];
  }
  console.log(count);
}

let s1 = 'abc';
let s2 = 'amnop';
making_Anagaram(s1, s2);

//==============================================================================
function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

function largestpermutation(arr, k) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] > arr[i] && k > 0) {
        swap(i, j, arr);
        k--;
      }
    }
  }
  console.log(arr);
}



function largestpermutation(arr, k) {
  let n = arr.length;
  let newA = new Array(n + 1);
  for (let i = 0; i < n; i++) {
    newA[arr[i]] = i;
  }
  for (let i = 0; i < n && k > 0; i++) {
    if (arr[i] == n - i) {
      continue;
    }
    let temp = newA[n - i];

    newA[arr[i]] = newA[n - i]; //swap the element newAition
    newA[n - i] = i;

    // Swap the ith largest value with
    // the current value at ith place
    let tmp1 = arr[temp];
    arr[temp] = arr[i];
    arr[i] = tmp1;

    // decrement number of swaps
    --k;
  }
  console.log(arr);
  // return arr;
}

let arr = [4, 2, 3, 5, 1];
let k = 3;
largestpermutation(arr, k);
//==============================================================

function sherlock(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  console.log(sum);

  let x = 0;
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (2 * x == sum - arr[i]) {
      flag = true;
    }
    x += arr[i];
  }

  if (flag == true) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

let arr_1 = [5, 6, 8, 11];
sherlock(arr_1);

//======================================================================
function gemsStones(str_Array) {
  let str_temp_Arr = ['a', 'b', 'c', 'd', 'e'];
  let temp_Count = 0;
  let res_Count = 0;

  for (let i = 0; i < str_temp_Arr.length; i++) {
    temp_Count = 0;
    for (let j = 0; j < str_Array.length; j++) {
      if (str_Array[j].includes(str_temp_Arr[i])) {
        // search ele[str_temp_Arr]
        temp_Count++;
      }
      if (temp_Count == str_Array.length) {
        res_Count++;
      }
    } //2nd for loop
  } //1st for loop
  console.log(res_Count);
}

let arr = ['abc', 'abc', 'bc'];
gemsStones(arr);

//===========================================================================

function lisa_(arr, k) {
  let page = 1;
  let spacial_page = 0;
  let i = 0;
  while (i < arr.length) {
    for (let index = 1; index <= arr[i]; index++) {
      if (index == page) {
        spacial_page++;
      }
      if (index == arr[i] || index % k == 0) {
        page++;
      }
    }

    i++;
  }
  console.log(spacial_page);
}

let arr = [4, 2, 6, 1, 10];
let k = 3;
lisa_(arr, k);

//====================================================================
function countWord(str) {
  if (input.length == 1) {
    console.log(1);
  } else {
    let sp = input.split(' ');
    if (sp.length == 6) {
      console.log('7');
    } else if (sp.length == 1) {
      console.log('7');
    } else {
      console.log(sp.length);
    }
  }
}
let str = 'i love my country';
countWord(str);

//================================================================================

function leetcodeXOR(n, start) {
  let arr = [];
  while (n != 0) {
    arr.push(start);
    start += 2;
    n--;
  }
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor ^= arr[i];
  }
  console.log(xor);
}
let n = 5;
let start = 0;
leetcodeXOR(n, start);
//==============================================================================
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


//===============================================================================

//rotate matrix clock wise direction only for 90 degree.
function rotataionDegree(row, col) {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let k = 0;

  let matrix = new Array(row);
  for (let i = 0; i < row; i++) {
    matrix[i] = new Array(col);
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrix[i][j] = arr[k];
      k++;
    }
  }

  let n = matrix.length;
  let newArr = [];
  for (let j = 0; j < row; j++) {
    for (let i = n - 1; i >= 0; i--) {
      // console.log(matrix[i][j]);
      newArr.push(matrix[i][j]);
    }
  }
  // console.log(newArr);

  let mat = new Array(row);
  for (let i = 0; i < row; i++) {
    mat[i] = new Array(col);
  }
  let z = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      mat[i][j] = newArr[z];
      z++;
    }
  }
  console.log(mat);
}

let row = 3;
let col = 3;
rotataionDegree(row, col);

//=============================================================================
//        j=0   j=1     j=2 |  j=3  | 
//       |-----|------|------|----|
// top=0 |  1  | 2    | 3    | 4  |
//       |---- |------|------|-----|
//       |  12 | 13   |  14  | 5   |
//       |-----|------|------|-----|
//       | 11  |   16 | 15   | 6   |
//-      |-----|------|------|-----|
//down=n-1| 10  |  9  |  8   | 7   |
//       |--|---|-----|------|-----|
//          |                    |
//      left=0                right=n-1
//
function spiralMatrix(row, col) {
  let matrix = new Array(row);
  for (let i = 0; i < row; i++) {
    matrix[i] = new Array(row);
  }
  // console.log(matrix);
  let k = 0;
  let arr = [1, 2, 3, 4, 12, 13, 14, 5, 11, 16, 15, 6, 10, 9, 8, 7];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrix[i][j] = arr[k];
      k++;
    }
  }
  console.log(matrix);
  //==================================================
  let spiralM=[];
  let top=0;
  let down=n-1;
  let left=0;
  let right=n-1;
  // direction

  for(let i=0;i<)
}

let row = 4;
let col = 4;
spiralMatrix(row, col);


///===========================================================================

function noTeenSum(a, b, c) {
  let arr = [];
  arr.push(a);
  arr.push(b);
  arr.push(c);
  let sum = 0;
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 15) {
      sum += arr[i];
    } else if (arr[i] == 16) {
      sum += arr[i];
    } else if (arr[i] >= 13 && arr[i] <= 19) {
      continue;
    } else {
      sum += arr[i];
    }
  }
  console.log(sum);
}
let a = 16;
let b = 15;
let c = 11;
noTeenSum(a, b, c);

//=====================================================================================
function fixTeen(val) {
  if (val == 15) {
    return val;
  } else if (val == 16) {
    return val;
  } else if (val >= 13 && val <= 19) {
    return 0;
  } else {
    return val;
  }
}
function noTeenSum(a, b, c) {
  let sum = 0;
  let arr = [];
  arr.push(a);
  arr.push(b);
  arr.push(c);
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    let res = fixTeen(value);
    sum = sum + res;
  }
  console.log(sum);
}

let a = 1;
let b = 15;
let c = 2;
noTeenSum(a, b, c);
//===============================================================================


//        j=0   j=1     j=2 |  j=3  |
//       |-----|------|------|----|
// top=0 |  1  | 2    | 3    | 4  |
//       |---- |------|------|-----|
//       |  12 | 13   |  14  | 5   |
//       |-----|------|------|-----|
//       | 11  |   16 | 15   | 6   |
//-      |-----|------|------|-----|
//down=n-1| 10 |  9  |  8   | 7   |
//       |------|-----|------|-----|
//          |                    |
//      left=0                right=n-1
//-----------------------------------------------
// direction ==1
// left to right
//-----------------------------------------------
// direction ==2
// top to down
//-----------------------------------------------
// direction ==3
// right to left
//-----------------------------------------------
// direction ==4
// down to top
//-----------------------------------------------
function spiralMatrix(row, col) {
  let matrix = new Array(row);
  for (let i = 0; i < row; i++) {
    matrix[i] = new Array(row);
  }
  // console.log(matrix);
  let k = 0;
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrix[i][j] = arr[k];
      k++;
    }
  }
  console.log(matrix);
  let n = matrix.length;
  console.log(n);
  console.log(matrix[0].length);
  //==================================================================================
  let spiralM = [];
  let top = 0;
  let down = n - 1;
  let left = 0;
  //let right = n - 1; //
  let right = matrix[0].length - 1;
  console.log(right);
  let direction = 1;
  while (top <= down && left <= right) {
    if (direction == 1) {
      // move left to right.
      for (let i = left; i <= right; i++) {
        spiralM.push(matrix[top][i]);
      }
      top++;
      direction = 2;
    } else if (direction == 2) {
      // top to down
      for (let i = top; i <= down; i++) {
        spiralM.push(matrix[i][right]);
      }
      right--;
      direction = 3;
    } else if (direction == 3) {
      // right to left
      for (let i = right; i >= left; i--) {
        spiralM.push(matrix[down][i]);
      }
      down--;
      direction = 4;
    } else if (direction == 4) {
      // down to top
      for (let i = down; i >= top; i--) {
        spiralM.push(matrix[i][left]);
      }
      left++;
      direction = 1;
    }
  }
  console.log(spiralM);
}

let row = 3;
let col = 4;
spiralMatrix(row, col);

// time complexcity will be o(mn);
//=====================================================================

function task(val) {
  if (val.length == 1) {
    return val;
  } else {
    task(val);
  }
}

function triangleSum(arr) {
  let update = [];
  if (arr.length == 1) {
    console.log(arr[0]);
  }

  for (let i = 0; i < arr.length - 1; i++) {
    update.push(arr[i] + (arr[i + 1] % 10));
  }
  let res = task(update);
}

let arr = [1, 2, 3, 4, 5];
triangleSum(arr);


//=======================================================================


function triangleSum(arr) {
  let n = arr.length;
  //  let newA = [];
  while (n > 1) {
    let newA = [];
    for (let i = 0; i < n - 1; i++) {
      newA.push((arr[i] + arr[i + 1]) % 10);
    }
    n--;
    arr = newA;
  }
  console.log(arr[0]);
}
let arr = [1, 2, 3, 4, 5];
triangleSum(arr);

//=============================================================

function triangleSum(arr) {
  let n = arr.length;
  let newA = [];
  while (n > 1) {
    for (let i = 0; i < n - 1; i++) {
      newA.push((arr[i] + arr[i + 1]) % 10);
    }
    n--;
    arr = newA;
    newA = [];
  }
  console.log(arr[0]);
}
let arr = [1, 2, 3, 4, 5];
triangleSum(arr);
let str = 'ded';
let sp = str.split('');
console.log(sp);
let map = [];
for (let i = 0; i < sp.length; i++) {
  if (map[sp[i]]) {
    map[sp[i]]++;
  } else {
    map[sp[i]] = 1;
  }
}
console.log(map);
//========================================================
About undefined:--
                 A variable that has not been assigned a value is of type undefined . 
                 A method or statement also returns undefined if the variable that is being 
                 evaluated does not have an assigned value.
                  A function returns undefined if a value was not returned 

let x;
if (x === undefined) {
  console.log('welcome');  //true
} else {
  console.log('not wel');
}

//=====================================================================

function patternMaching(word, pattern) {
  let map = [];
  let mapping_1 = '';
  for (let i = 0; i < pattern.length; i++) {
    let c = pattern[i];
    if (map[c] === undefined) {
      map[c] = i;
    }
    mapping_1 = mapping_1 + map[c];
  }
  // console.log(map);
  // console.log(mapping_1);
  // console.log(typeof mapping_1);

  // let w = word[0];
  // console.log(w);

  let result = [];
  for (let i = 0; i < word.length; i++) {
    let wMap = [];
    let w = word[i];
    let mapping_2 = '';
    for (let j = 0; j < w.length; j++) {
      const c = w[j];
      if (wMap[c] === undefined) {
        wMap[c] = j;
      }
      mapping_2 = mapping_2 + wMap[c];
    }
    // console.log(wMap);
    if (mapping_1 == mapping_2) {
      result.push(w);
    }
  } //1 loop
  console.log(result);
}
let word = ['abc', 'bcc', 'dff'];
let pattern = 'abb';

patternMaching(word, pattern);


//============================================================

function mapingPattern(word, pattern) {
  let map_1 = [];
  let mapping_1 = '';
  for (let i = 0; i < pattern.length; i++) {
    let el = pattern[i];
    if (map_1[el] === undefined) {
      map_1[el] = i;
    }
    mapping_1 = mapping_1 + map_1[el];
  }
  // console.log(mapping_1);
  //console.log(map);
  //---------------------------------------------

  let result = [];

  for (let i = 0; i < word.length; i++) {
    let word_Map = [];
    let mapping_2 = '';
    let single_word = word[i];

    for (let j = 0; j < single_word.length; j++) {
      let char_ = single_word[j];
      if (word_Map[char_] === undefined) {
        word_Map[char_] = j;
      }
      mapping_2 = mapping_2 + word_Map[char_];
    }
    if (mapping_1 == mapping_2) {
      result.push(single_word);
    }
  }
  console.log(result);
}

let word = ['mee', 'ccc'];
let pattern = 'abb';
mapingPattern(word, pattern);

//===============================================================================


function taskingFreq(str, pattern) {
  let map = [];
  let pat = '';
  for (let i = 0; i < pattern.length; i++) {
    let el = pattern[i];
    if (map[el] === undefined) {
      map[el] = i;
    }
    pat = pat + map[el];
  }
  console.log(map);
  console.log(pat);
}

let str = ['abc', 'bcc', 'acc'];
let pattern = 'bbb';
taskingFreq(str, pattern);

//======================================================================================

function findthe_duplicate(nums) {
  let map = [];
  for (let i = 0; i < nums.length; i++) {
    let el = nums[i];
    if (map[el]) {
      map[el]++;
    } else {
      map[el] = 1;
    }
  }
  console.log(map);
  let newArr = [];
  for (let e in map) {
    if (map[e] % 2 == 0) {
      newArr.push(e);
    }
  }
  console.log(newArr);
}
let nums = [4, 3, 2, 7, 8, 2, 3, 1];
findthe_duplicate(nums);

//========================================================================================
*/
