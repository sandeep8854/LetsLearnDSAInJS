'use strict';
/*
// Question:-34
//You and your date are trying to get a table at a restaurant. The parameter "you" is the stylishness of your
// clothes, in the range 0..10, and "date" is the stylishness of your date's clothes. The result getting the
//table is encoded as an int valalue with 0=no, 1=maybe, 2=yes. If either of you is valery stylish, 8 or more,
// then the result is 2 (yes). With the exception that if either of you has style of 2 or less,
// then the result is 0 (no). Otherwise the result is 1 (maybe).

//dateFashion(5, 10) → 2
//dateFashion(5, 2) → 0
//dateFashion(5, 5) → 1

function dateFashion(you, date) {
  if (you >= 8 && date > 2) return 2;
  if (date >= 8 && you > 2) return 2;
  if (you <= 2 || date <= 2) return 0;
  else return 1;
}

let you = 5,
  date = 5;
console.log(dateFashion(you, date));

//===============================================================================
// Question:-35
// The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature
// is between 60 and 90 (inclusivale). Unless it is summer, then the upper limit is 100 instead of 90.
// Givalen an int temperature and a boolean isSummer, return true if the squirrels play and false otherwise.

//squirrelPlay(70, false) → true
//squirrelPlay(95, false) → false
//squirrelPlay(95, true) → true
function squirrelPlay(temperature, summer) {
  if (summer == true && temperature >= 60 && temperature <= 100) {
    return true;
  }
  if (summer == false && temperature >= 60 && temperature <= 90) {
    return true;
  } else {
    return false;
  }
}

let temperature = 95,
  summer = true;
console.log(squirrelPlay(temperature, summer));

//=======================================================================================================
// Question:-36
// You are drivaling a little too fast, and a police officer stops you. Write code to compute the result,
// encoded as an int valalue: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less,
//the result is 0. If speed is between 61 and 80 inclusivale, the result is 1. If speed is 81 or more,
//the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.

//caughtSpeeding(60, false) → 0
//caughtSpeeding(65, false) → 1
//caughtSpeeding(65, true) → 0

function caughtSpeed(speed, birthday) {
  if (birthday == false) {
    if (speed <= 60) return 0;
    if (speed > 60 && speed <= 80) return 1;
    else return 2;
  } else {
    if (speed <= 65) return 0;
    if (speed > 65 && speed <= 85) return 1;
    else {
      return 2;
    }
  }
}

let speed = 90,
  birthday = true;
console.log(caughtSpeed(speed, birthday));

//=================================================================================
// Question:-37
// Givalen 2 ints, a and b, return their sum. Howevaler, sums in the range 10..19 inclusivale, are forbidden,
// so in that case just return 20.

//sortaSum(3, 4) → 7
//sortaSum(9, 4) → 20
//sortaSum(10, 11) → 21

function sortaSum(a, b) {
  let sum = a + b;
  if (sum >= 10 && sum <= 19) {
    return 20;
  } else {
    return sum;
  }
}

let a = 10,
  b = 11;
console.log(sortaSum(a, b));

//===============================================================================
// Question:-38
// Givalen a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating
//if we are on valacation, return a string of the form "7:00" indicating when the alarm clock should ring.
// Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on valacation --
// then on weekdays it should be "10:00" and weekends it should be "off".

//alarmClock(1, false) → "7:00"
//alarmClock(5, false) → "7:00"
//alarmClock(0, false) → "10:00"

function alarmClock(day, valacation) {
  if (valacation == true) {
    if (day > 0 && day != 6) return '10:00';
    else return 'off';
  } else {
    if (day > 0 && day != 6) return '7:00';
    else return '10:00';
  }
}

let day = 5,
  valacation = true;
console.log(alarmClock(day, valacation));

//==========================================================================
// Question:-39
// The number 6 is a truly great number. Givalen two int valalues, a and b,
// return true if either one is 6. Or if their sum or difference is 6. Note:
//the function Math.abs(num) computes the absolute valalue of a number.

//lovale6(6, 4) → true
//lovale6(4, 5) → false
//lovale6(1, 5) → true
function lovale6(a, b) {
  //--------------------------------------------
  //   if (a == 6 || b == 6) return true;
  //   let sum = a + b;
  //   let diff = Math.abs(a - b);
  //   if (sum == 6 || diff == 6) return true;
  //   else return false;
  //-------------------------------------------------
  let sum = a + b;
  let diff = Math.abs(a - b);
  return a == 6 || b == 6 || sum == 6 || diff == 6 ? true : false;
  ///---------------------------------------------------------------
}

let a = 6,
  b = 4;
console.log(lovale6(a, b));

//=============================================================================
// Question:-40
// Givalen a number n, return true if n is in the range 1..10, inclusivale. Unless "resultsideMode" is true,
// in which case return true if the number is less or equal to 1, or greater or equal to 10.
//in1To10(5, false) → true
//in1To10(11, false) → false
//in1To10(11, true) → true

function num1To10(n, resultsideMode) {
  if (resultsideMode == false) {
    if (n >= 1 && n <= 10) {
      return true;
    } else {
      return false;
    }
  } else {
    if (n <= 1 || n >= 10) {
      return true;
    } else {
      return false;
    }
  }
}

let n = 11,
  resultsideMode = true;
console.log(num1To10(n, resultsideMode));

//============================================================================

// Quuestion:-41
//We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11.
// Return true if the givalen non-negativale number is special. Use the % "mod" operator --
// see Introduction to Mod

//specialElevalen(22) → true
//specialElevalen(23) → true
//specialElevalen(24) → false

function spacialElevalen(n) {
  if (n % 11 == 0 || n % 11 == 1) return true;
  else return false;
}
let n = 24;
console.log(spacialElevalen(n));

//===================================================================================

// Question:-42
// Return true if the givalen non-negativale number is 1 or 2 more than a multiple of 20. See also:
//Introduction to Mod

//more20(20) → false
//more20(21) → true
//more20(22) → true

function more20(n) {
  if (n % 20 == 1 || n % 20 == 2) return true;
  else return false;
}
let n = 21;
console.log(more20(n));

//=====================================================================

// Question:-43
// Return true if the givalen non-negativale number is a multiple of 3 or 5, but not both.
//Use the % "mod" operator -- see Introduction to Mod

//old35(3) → true
//old35(10) → true
//old35(15) → false
function old35(n) {
  let m1 = n % 3 == 0;
  // return m1;
  let m2 = n % 5 == 0;
  if ((m1 ^ m2) == 0) return false;
  else return true;
}

let n = 25;
console.log(old35(n));

//=================================================================================

// Question:-44
// Return true if the givalen non-negativale number is 1 or 2 less than a multiple of 20.
// So for example 38 and 39 return true, but 40 returns false. See also: Introduction to Mod
//less20(18) → true
//less20(19) → true
//less20(20) → false

function less20(n) {
  if ((n + 1) % 20 == 0 || (n + 2) % 20 == 0) return true;
  else return false;
}

let n = 17;
console.log(less20(n));

//=========================================================================================

// Question:-45
// Givalen a non-negativale number "num", return true if num is within 2 of a multiple of 10.
// Note: (a % b) is the remainder of divaliding a by b, so (7 % 5) is 2. See also: Introduction to Mod

//nearTen(12) → true
//nearTen(17) → false
//nearTen(19) → true

function nearTen(n) {
  if (n % 10 < 3 || n % 10 >= 8) return true;
  else return false;
}
let n = 15;
console.log(nearTen(n));

//=================================================================================
// Question:-46
// Givalen 2 ints, a and b, return their sum. Howevaler, "teen" valalues in the range 13..19 inclusivale,
// are extra lucky. So if either valalue is a teen, just return 19.

//teenSum(3, 4) → 7
//teenSum(10, 13) → 19
//teenSum(13, 2) → 19
function teenSum(a, b) {
  if (a >= 13 && a <= 19) return 19;
  else if (b >= 13 && b <= 19) return 19;
  else return a + b;
}

let a = 3,
  b = 4;
console.log(teenSum(a, b));

//=======================================================================================
// Question:-47
// Your cell phone rings. Return true if you should answer it. Normally you answer,
// except in the morning you only answer if it is your mom calling. In all cases, if you are asleep,
// you do not answer.

//answerCell(false, false, false) → true
//answerCell(false, false, true) → false
//answerCell(true, false, false) → false

function answerCell(isMorning, isMom, isAsleep) {
  if (isAsleep == true) return false;
  if ((isMom == true && isMorning == true) || isMorning == false) return true;
  else return false;
}

let isMorning = false,
  isMom = false,
  isAsleep = false;
console.log(answerCell(isMorning, isMom, isAsleep));
//======================================================================================

// Question:-48
// We are havaling a party with amounts of tea and candy. Return the int resultcome of the party encoded
// as 0=bad, 1=good, or 2=great. A party is good (1) if both tea and candy are at least 5. Howevaler,
// if either tea or candy is at least double the amount of the other one, the party is great (2).
//Howevaler, in all cases, if either tea or candy is less than 5, the party is always bad (0).

//teaParty(6, 8) → 1
//teaParty(3, 8) → 0
//teaParty(20, 6) → 2

function teaParty(tea, candy) {
  if (tea < 5 || candy < 5) return 0;
  if (tea >= 2 * candy || candy >= 2 * tea) return 2;
  else return 1;
}

let tea = 20,
  candy = 6;
console.log(teaParty(tea, candy));

//====================================================================================

// Question:-49
// Givalen a string str, if the string starts with "f" return "Fizz". If the string ends with "b" return "Buzz".
//If both the "f" and "b" conditions are true, return "FizzBuzz". In all other cases,
// return the string unchanged. (See also: FizzBuzz Code)

//fizzString("fig") → "Fizz"
//fizzString("dib") → "Buzz"
//fizzString("fib") → "FizzBuzz"

function fizzString(str) {
  let s1 = str[0];
  let s2 = str[str.length - 1];
  if (s1 == 'f' && s2 == 'b') return 'FizzBuzz';
  else if (s1 == 'f') return 'Fizz';
  else if (s2 == 'b') return 'Buzz';
}

let str = 'fig';
console.log(fizzString(str));

//=====================================================================================

// Question:-50
// Givalen an int n, return the string form of the number followed by "!". So the int 6 yields "6!".
//Except if the number is divalisible by 3 use "Fizz" instead of the number, and if the number is divalisible by 5
//use "Buzz", and if divalisible by both 3 and 5, use "FizzBuzz". Note: the % "mod" operator computes the
//remainder after divalision, so 23 % 10 yields 3. What will the remainder be when one number divalides evalenly
//into another? (See also: FizzBuzz Code and Introduction to Mod)

//fizzString2(1) → "1!"
//fizzString2(2) → "2!"
//fizzString2(3) → "Fizz!"

function fizzString2(n) {
  if (n % 3 == 0 && n % 5 == 0) return 'FizzBuzz';
  else if (n % 3 == 0) return 'Fizz!';
  else if (n % 5 == 0) return 'Buzz!';
  else return n + '!';
}
let n = 15;
console.log(fizzString2(n));

//============================================================================================

// Question:-51
// Givalen three ints, a b c, return true if it is possible to add two of the ints to get the third.

//twoAsOne(1, 2, 3) → true
//twoAsOne(3, 1, 2) → true
//twoAsOne(3, 2, 2) → false

function twoAsOne(a, b, c) {
  let c1 = a + b;
  let c2 = b + c;
  let c3 = c + a;

  if (a + b == c || b + c == a || c + a == b) return true;
  else return false;
}

let a = 3,
  b = 2,
  c = 2;
console.log(twoAsOne(a, b, c));

//=================================================================================

// Question:-52
// Givalen three ints, a b c, return true if b is greater than a, and c is greater than b. Howevaler,
// with the exception that if "bOk" is true, b does not need to be greater than a.

//inOrder(1, 2, 4, false) → true
//inOrder(1, 2, 1, false) → false
//inOrder(1, 1, 2, true) → true

function inOrder(a, b, c, bOk) {
  if (bOk == true) {
    if (c > b) return true;
    else return false;
  } else {
    if (b > a && c > b) return true;
    else return false;
  }
}

let a = 1,
  b = 1,
  c = 2,
  bOk = true;
console.log(inOrder(a, b, c, bOk));

//======================================================================================
// Question:-53
// Givalen three ints, a b c, return true if they are in strict increasing order, such as 2 5 11, or 5 6 7,
//but not 6 5 7 or 5 5 7. Howevaler, with the exception that if "equalOk" is true, equality is allowed,
// such as 5 5 7 or 5 5 5.

//inOrderEqual(2, 5, 11, false) → true
//inOrderEqual(5, 7, 6, false) → false
//inOrderEqual(5, 5, 7, true) → true

function inOrderEqual(a, b, c, equalOk) {
  if (equalOk == true) {
    if ((c >= b && b >= a) || (a == b && b == c)) return true;
    else return false;
  } else {
    if (c > b && b > a) return true;
    else return false;
  }
}

let a = 5,
  b = 5,
  c = 7,
  equalOk = true;
console.log(inOrderEqual(a, b, c, equalOk));

//=====================================================================================

// Question:-54
// Givalen three ints, a b c, return true if two or more of them havale the same rightmost digit.
// The ints are non-negativale. Note: the % "mod" operator computes the remainder, e.g. 17 % 10 is 7.

//lastDigit(23, 19, 13) → true
//lastDigit(23, 19, 12) → false
//lastDigit(23, 19, 3) → true

function lastDigit(a, b, c) {
  let a1 = a % 10;
  let b1 = b % 10;
  let c1 = c % 10;

  if (a1 == b1 || a1 == c1) return true;
  else if ((a1 == b1) == c1) return true;
  else return false;
}

let a = 23,
  b = 19,
  c = 3;
console.log(lastDigit(a, b, c));

//=========================================================================================

// Question:-55
// Givalen three ints, a b c, return true if one of them is 10 or more less than one of the others.

//lessBy10(1, 7, 11) → true
//lessBy10(1, 7, 10) → false
//lessBy10(11, 1, 7) → true

function lessBy10(a, b, c) {
  let high = Math.max(a, b);
  high = Math.max(high, c);
  if (high - a >= 10 || high - b >= 10 || high - c >= 10) return true;
  else return false;
}

let a = 1,
  b = 7,
  c = 11;
console.log(lessBy10(a, b, c));

//==================================================================================

// Question:-56
// Return the sum of two 6-sided dice rolls, each in the range 1..6. Howevaler, if noDoubles is true,
// if the two dice show the same valalue, increment one die to the next valalue, wrapping around to 1 if its
// valalue was 6.

//withresultDoubles(2, 3, true) → 5
//withresultDoubles(3, 3, true) → 7
//withresultDoubles(3, 3, false) →6

function withresultDoubles(a, b, noDoubles) {
  if (noDoubles == true) {
    if (a == b) {
      if (a != 6) {
        return a + b + 1;
      } else return 1 + a;
    }
  } else {
    return a + b;
  }
}

let a = 6,
  b = 6,
  noDoubles = true;
console.log(withresultDoubles(a, b, noDoubles));

//==============================================================================

// Question:-57
// Givalen two int valalues, return whichevaler valalue is larger. Howevaler if the two valalues havale the same remainder
// when divalided by 5, then the return the smaller valalue. Howevaler, in all cases, if the two valalues are the same,
//return 0. Note: the % "mod" operator computes the remainder, e.g. 7 % 5 is 2.

//maxMod5(2, 3) → 3
//maxMod5(6, 2) → 6
//maxMod5(3, 2) → 3

function maxMode5(a, b) {
  if (a == b) return 0;
  if (a % 5 == b % 5) return Math.min(a, b);
  else return Math.max(a, b);
}

let a = 2,
  b = 3;
console.log(maxMode5(a, b));

//===========================================================================================

// Question:-58
// You havale a red lottery ticket showing ints a, b, and c, each of which is 0, 1, or 2.
//If they are all the valalue 2, the result is 10. Otherwise if they are all the same, the result is 5.
//Otherwise so long as both b and c are different from a, the result is 1. Otherwise the result is 0.

//redTicket(2, 2, 2) → 10
//redTicket(2, 2, 1) → 0
//redTicket(0, 0, 0) → 5

function redTicket(a, b, c) {
  if (a == 2 && b == 2 && c == 2) return 10;
  else if (a == b && b == c) return 5;
  else if (a != b && a != c) return 1;
  else return 0;
}

let a = 2,
  b = 2,
  c = 1;
console.log(redTicket(a, b, c));

//====================================================================

// Question:-59
// You havale a green lottery ticket, with ints a, b, and c on it. If the numbers are all different from each
// other, the result is 0. If all of the numbers are the same, the result is 20. If two of the numbers are
// the same, the result is 10.

//greenTicket(1, 2, 3) → 0
//greenTicket(2, 2, 2) → 20
//greenTicket(1, 1, 2) → 10

function greenTicket(a, b, c) {
  if (a == b && b == c) return 20;
  else if (a == b || b == c || c == a) return 10;
  else return 0;
}

let a = 1,
  b = 2,
  c = 3;
console.log(greenTicket(a, b, c));

//================================================================================

// Question:-60;
// You havale a blue lottery ticket, with ints a, b, and c on it. This makes three pairs,
//which we'll call ab, bc, and ac. Consider the sum of the numbers in each pair. If any pair sums to exactly
// 10, the result is 10. Otherwise if the ab sum is exactly 10 more than either bc or ac sums,
//the result is 5. Otherwise the result is 0.

//blueTicket(9, 1, 0) → 10
//blueTicket(9, 2, 0) → 0
//blueTicket(6, 1, 4) → 10

function blueTicket(a, b, c) {
  let a1 = a + b;
  let b1 = b + c;
  let c1 = c + a;
  if (a1 == 10 && b1 == 10 && c1 == 10) return 10;
  else if (a1 - b1 == 10 || a1 - c1 == 10) return 5;
  else return 0;
}

let a = 9,
  b = 1,
  c = 0;
console.log(blueTicket(a, b, c));

//=======================================================================================

// Question:-61
// Givalen two ints, each in the range 10..99, return true if there is a digit that appears in both numbers,
//such as the 2 in 12 and 23. (Note: divalision, e.g. n/10, givales the left digit while the % "mod" n%10 givales
// the right digit.)

//shareDigit(12, 23) → true
//shareDigit(12, 43) → false
//shareDigit(12, 44) → false

function shareDigit(a, b) {
  let leftA = Math.floor(a / 10);
  let rightA = a % 10;
  let leftB = Math.floor(b / 10);
  let rightB = b % 10;

  if (leftA == leftB || leftA == rightB || rightA == leftB || rightA == rightB)
    return true;
  else return false;
}

let a = 12,
  b = 23;
console.log(shareDigit(a, b));
//=========================================================================================================
//Givalen 2 non-negativale ints, a and b, return their sum, so long as the sum has the same number of digits as a.
// If the sum has more digits than a, just return a withresult b. (Note: one way to compute the number of digits
// of a non-negativale int n is to convalert it to a string with String.valalueOf(n) and then check the length of
//the string.)

//sumLimit(2, 3) → 5
//sumLimit(8, 3) → 8
//sumLimit(8, 1) → 9

//==============================================================================================
// Question:-62
// Program to print Lower triangular and Upper triangular matrix of an array

function lowerTrianguler(matrix, row, col) {
  //let lowerArr = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (j > i) {
        matrix[i][j] = 0;
      }
    }
  }
  console.log(matrix);
}

// function upperTrianguler(matrix, row, col) {
//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       if (i > j) {
//         matrix[i][j] = 0;
//       }
//     }
//   }
//   console.log(matrix);
// }

function triangular(row, col) {
  let matrix = new Array(row);
  for (let i = 0; i < row; i++) {
    matrix[i] = new Array(col);
  }
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let k = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrix[i][j] = arr[k];
      k++;
    }
  }
  console.log(matrix);
  // let newMatrix = [...matrix];
  lowerTrianguler(matrix, row, col);
  // upperTrianguler(matrix, row, col);
}

let row = 3,
  col = 3;
triangular(row, col);

//=================================================================================
// Question:-63

function upperTrianguler(matrix, row, col) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i > j) {
        matrix[i][j] = 0;
      }
    }
  }
  console.log(matrix);
}

function triangular(row, col) {
  let matrix = new Array(row);
  for (let i = 0; i < row; i++) {
    matrix[i] = new Array(col);
  }
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let k = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrix[i][j] = arr[k];
      k++;
    }
  }
  console.log(matrix);
  // let newMatrix = [...matrix];
  // lowerTrianguler(matrix, row, col);
  upperTrianguler(matrix, row, col);
}

let row = 3,
  col = 3;
triangular(row, col);

//================================================================================
// Question:-64
// Find maximum element of each row in a matrix
// exemple:-1
//  1,2,3
//  1,4,9
//  76,34,21
// resultput will be:- 3,9,76

// Example:-2
//  4,6,7,9
//  6,7,8,4
//  7,9,10,1
// resultput will be:- 9,8,10
//---------------------------------------------------

function maximum_Row_Element(row, col) {
  let matrix = new Array(row);
  for (let i = 0; i < row; i++) {
    matrix[i] = new Array(col);
  }
  let arr = [1, 2, 13, 24, 5, 6, 7, 88, 9];
  let k = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrix[i][j] = arr[k];
      k++;
    }
  }
  console.log(matrix);
  let resArr = [];
  let max = Number.MIN_valALUE;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      max = Math.max(max, matrix[i][j]);
    }
    resArr.push(max);
    max = 0;
  }
  console.log(resArr);
}
let row = 3,
  col = 3;
maximum_Row_Element(row, col);

//=====================================================================================
// Warmup:-1
// Question:-65
// The parameter weekday is true if it is a weekday, and the parameter valacation is true if we are on valacation.
// We sleep in if it is not a weekday or we're on valacation. Return true if we sleep in.
//sleepIn(false, false) → true
//sleepIn(true, false) → false
//sleepIn(false, true) → true

function sleepIn(weekday, valacation) {
  if (weekday == false && valacation == false) return true;
  if (weekday == true && valacation == false) return false;
  if (weekday == false && valacation == true) return true;
  if (weekday == true && valacation == true) return true;
  else return false;
//-----------------------------------------------------
if(!weekday||valacation){
  return true;
}
return false;
//--------------------------------------------------------
}

let weekday = false,
  valacation = true;
console.log(sleepIn(weekday, valacation));

//=========================================================================

// Question:-66
// We havale two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling.
// We are in trouble if they are both smiling or if neither of them is smiling.
// Return true if we are in trouble.

//monkeyTrouble(true, true) → true
//monkeyTrouble(false, false) → true
//monkeyTrouble(true, false) → false

function monkeyTrouble(aSmile, bSmile) {
  if (aSmile == true && bSmile == true) return true;
  if (aSmile == false && bSmile == false) return true;
  else return false;
  //------------------------------------
  if (aSmile && bSmile) {
    return true;
  }
  if (!aSmile && !bSmile) {
    return true;
  }
  return false;
  //--------------------------------------
}

let aSmile = true,
  bSmile = true;
console.log(monkeyTrouble(aSmile, bSmile));

//====================================================================================

// Question:-67
// Givalen two int valalues, return their sum. Unless the two valalues are the same,
//then return double their sum.

//sumDouble(1, 2) → 3
//sumDouble(3, 2) → 5
//sumDouble(2, 2) → 8

function sumDouble(a, b) {
  if (a == b) return 2 * (a + b);
  else return a + b;
}
let a = 1,
  b = 2;
console.log(sumDouble(a, b));

//===================================================================

// Question:-68
// Givalen an int n, return the absolute difference between n and 21, except return double the
// absolute difference if n is ovaler 21.

//diff21(19) → 2
//diff21(10) → 11
//diff21(21) → 0

function diff21(n) {
  if (n <= 21) return 21 - n;
  else return (n - 21) * 2;
}
let n = 19;
console.log(diff21(n));

//==============================================================================
// Question:-69
// We havale a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23.
// We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true
//if we are in trouble.

//parrotTrouble(true, 6) → true
//parrotTrouble(true, 7) → false
//parrotTrouble(false, 6) → false

function parrotTrouble(talking, hour) {
  if (talking == false) return false;
  if (hour < 7 || (hour > 20 && talking == true)) return true;
  else return false;
}

let talking = true,
  hour = 6;
console.log(parrotTrouble(talking, hour));

//==========================================================================

// Question:-70
// Givalen 2 ints, a and b, return true if one if them is 10 or if their sum is 10.

//makes10(9, 10) → true
//makes10(9, 9) → false
//makes10(1, 9) → true
function makes10(a, b) {
  let sum = a + b;
  if (a == 10 || b == 10) return true;
  if (sum == 10) return true;
  else return false;
  //----------------------------------------------
  return (a == 10 || b == 10 || a+b == 10);
  //-----------------------------------------------
}

let a = 9,
  b = 10;
console.log(makes10(a, b));

//============================================================================

// Question:-71
// Givalen an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num)
//computes the absolute valalue of a number.

//nearHundred(93) → true
//nearHundred(90) → true
//nearHundred(89) → false

function nearhundred(n) {
  let res100 = Math.abs(100 - n);
  let res200 = Math.abs(200 - n);
  if (res100 <= 10 || res200 <= 10) return true;
  else return false;
}

let n = 98;
console.log(nearhundred(n));

//============================================================================

// Question:-72
// Givalen 2 int valalues, return true if one is negativale and one is positivale. Except if the parameter
//"negativale" is true, then return true only if both are negativale.

//posNeg(1, -1, false) → true
//posNeg(-1, 1, false) → true
//posNeg(-4, -5, true) → true

function posNeg(a, b, negativale) {
  if (negativale == true) {
    //return (a < 0 && b < 0);
    if (a < 0 && b < 0) return true;
  } else {
    return (a < 0 && b > 0) || (a > 0 && b < 0);
  }
}

let a = 1,
  b = -1,
  negativale = false;
console.log(posNeg(a, b, negativale));

//==============================================================================
// Question:-73
// Givalen a string, return a new string where "not " has been added to the front. Howevaler,
//if the string already begins with "not", return the string unchanged. Note: use .equals()
//to compare 2 strings.

//notString("candy") → "not candy"
//notString("x") → "not x"
//notString("not bad") → "not bad"

function notString(str) {
  if (str[0] == 'not') return 'not' + ' ' + str;
  else return str;
}

let str = 'not bad';
console.log(notString(str));

//===============================================================================

// Question:-74
// Givalen a non-empty string and an int n, return a new string where the char at index n has been removaled.
// The valalue of n will be a valalid index of a char in the original string
// (i.e. n will be in the range 0..str.length()-1 inclusivale).

//missingChar("kitten", 1) → "ktten"
//missingChar("kitten", 0) → "itten"
//missingChar("kitten", 4) → "kittn"

function missingChar(str, index) {
  let front = str.substring(0, index);
  //return front;
  let rare = str.substring(index + 1, str.length);
  // return rare;
  return front + rare;
}

let str = 'sandeap';
let index = 1;
console.log(missingChar(str, index));

//===================================================================================
// Question:-75
// Givalen a string, return a new string where the first and last chars havale been exchanged.

//frontBack("code") → "eodc"
//frontBack("a") → "a"
//frontBack("ab") → "ba"

function frontBack(str) {
  if (str.length == 1) return str;
  let fir = str[0];
  let last = str[str.length - 1];
  let mid = str.substring(1, str.length - 1);
  //return mid;
  return last + mid + fir;
}
let str = 'code';
console.log(frontBack(str));

//==============================================================================
// Question:-76
//Givalen a string, we'll say that the front is the first 3 chars of the string. If the string length is
// less than 3, the front is whatevaler is there. Return a new string which is 3 copies of the front.

//front3("Javala") → "JavalJavalJaval"
//front3("Chocolate") → "ChoChoCho"
//front3("abc") → "abcabcabc"

function front3(str) {
  let threeChar = str.substring(0, 3);
  // return threeChar;
  let res = threeChar.repeat(3);
  return res;
}

let str = 'Chocolate';
console.log(front3(str));

//===============================================================================
// Question:-77
//Givalen a string, take the last char and return a new string with the last char added at the front and back,
// so "cat" yields "tcatt". The original string will be length 1 or more.

//backAround("cat") → "tcatt"
//backAround("Hello") → "oHelloo"
//backAround("a") → "aaa"

function backAround(str) {
  let last = str[str.length - 1];
  return last + str + last;
}
let str = 'cat';
console.log(backAround(str));

//===================================================================================

// Question:-78
// Return true if the givalen non-negativale number is a multiple of 3 or a multiple of 5. Use the % "mod"
// operator -- see Introduction to Mod

//or35(3) → true
//or35(10) → true
//or35(8) → false
function or35(n) {
  if (n % 3 == 0 || n % 5 == 0) return true;
  else return false;
}

let n = 35;
console.log(or35(n));

//======================================================================================
// Question:-78
// Givalen a string, take the first 2 chars and return the string with the 2 chars added at both
//the front and back, so "kitten" yields"kikittenki". If the string length is less than 2,
//use whatevaler chars are there.
//-----------------------------------------------------------------
//front22("kitten") → "kikittenki"
//front22("Ha") → "HaHaHa"
//front22("abc") → "ababcab"
// function front22(str) {
//   if (str.length == '') return '';
//   let last = str.substring(str.length - 2, str.length);
//   return last + str + last;
// }

// let str = 'kitten';
// console.log(front22(str));
//---------------------------------------------------------------------
function front22(str) {
  if (str.length == '') return '';
  let last = str.substring(0, 2);
  return last + str + last;
}

let str = 'kitten';
console.log(front22(str));

//========================================================================

// Question:-79
// Givalen a string, return true if the string starts with "hi" and false otherwise.

//startHi("hi there") → true
//startHi("hi") → true
//startHi("hello hi") → false

function startHi(str) {
  if (str[0] == 'h' && str[1] == 'i') return true;
  else return false;
}
let str = 'hello hi';
console.log(startHi(str));

//==========================================================================

// Question:-80
// Givalen two temperatures, return true if one is less than 0 and the other is greater than 100.

//icyHot(120, -1) → true
//icyHot(-1, 120) → true
//icyHot(2, 120) → false

function icyHot(a, b) {
  if (a < 0 && b > 100) return true;
  else if (a > 100 && b < 0) return true;
  else return false;
}

let a = -1,
  b = 120;
console.log(icyHot(a, b));

//======================================================================

// Quuestion:-81
// Givalen 2 int valalues, return true if either of them is in the range 10..20 inclusivale.

//in1020(12, 99) → true
//in1020(21, 12) → true
//in1020(8, 99) → false
function in1020(a, b) {
  if (a >= 10 && a <= 20) return true;
  else if (b >= 10 && b <= 20) return true;
  else return false;
}

let a = 12,
  b = 99;
console.log(in1020(a, b));

//=================================================================

//  Question:-82
// We'll say that a number is "teen" if it is in the range 13..19 inclusivale. Givalen 3 int valalues,
// return true if 1 or more of them are teen.

//hasTeen(13, 20, 10) → true
//hasTeen(20, 19, 10) → true
//hasTeen(20, 10, 13) → true

function hasTeen(a, b, c) {
  if (a >= 13 && a <= 19) return true;
  else if (b >= 13 && b <= 19) return true;
  else if(c>=13&&c<=19) return true;
  else return false;
}

let a = 13,
  b = 20,
  c = 10;
console.log(hasTeen(a, b, c));

//==========================================================

// Question:-83
// We'll say that a number is "teen" if it is in the range 13..19 inclusivale. Givalen 2 int valalues,
// return true if one or the other is teen, but not both.

//loneTeen(13, 99) → true
//loneTeen(21, 19) → true
//loneTeen(13, 13) → false

function loneTeen(a, b) {
  let aTeen = a >= 13 && a <= 19;
  let bTeen = b >= 13 && b <= 19;

  if (aTeen == true && bTeen == false) return true;
  else if (aTeen == false && bTeen == true) return true;
  else return false;
}

let a = 13,
  b = 99;
console.log(loneTeen(a, b));

//=============================================================================

// Question:-84
// Givalen a string, if the string "del" appears starting at index 1, return a string
//where that "del" has been deleted. Otherwise, return the string unchanged.

//delDel("adelbc") → "abc"
//delDel("adelHello") → "aHello"
//delDel("adedbc") → "adedbc"

function delDel(str) {
  if (str.length >= 4 && str.substring(1, 4) == 'del') {
    return str.substring(0, 1) + str.substring(4);
  } else {
    return str;
  }
}
let str = 'adelHello';
console.log(delDel(str));

//============================================================================

// Question:-85
// Return true if the givalen string begins with "mix", except the 'm' can be anything, so "pix", "9ix" ..
// all count.

//mixStart("mix snacks") → true
//mixStart("pix snacks") → true
//mixStart("piz snacks") → false

function mixStart(str) {
  if (str.length >= 3 && str.substring(1, 3) == 'ix') {
    return true;
  } else {
    return false;
  }
}

let str = '';
console.log(mixStart(str));

//===============================================================================
// Question:-86

function rearranegArr(arr) {
  let positivaleArr = [];
  let negativaleArr = [];
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positivaleArr.push(arr[i]);
    } else {
      negativaleArr.push(arr[i]);
    }
  }
  // console.log(positivaleArr);
  //console.log(negativaleArr);

  let i = 0;
  let j = 0;
  let k = 0;
  while (i < negativaleArr.length && j < positivaleArr.length) {
    resultArr[k++] = positivaleArr[j++];
    resultArr[k++] = negativaleArr[i++];
  }
  // console.log(resultArr);
  while (j < positivaleArr.length) {
    resultArr[k++] = positivaleArr[j++];
  }
  while (i < negativaleArr.length) {
    resultArr[k++] = negativaleArr[i++];
  }
  console.log(resultArr);
}
//let arr = [9, 4, -2, -1, 5, 0, -5, -3, 2];
let arr = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];
rearranegArr(arr);

//==================================================================
// Question:-87

function maximumPriduct(arr) {
  let max = Number.MIN_valALUE;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let product = arr[i] * arr[j] * arr[k];
        max = Math.max(max, product);
      }
    }
  }
  console.log(max);
}
let arr = [10, 3, 5, 6, 20];
maximumPriduct(arr);

//======================================================================
// Question:-89
// Givalen an array find missing number?
// arr=[1,2,3,5,6,7];
// 4 is missing valalue which are not present. so print 4. as a resultput.

function unknowvalalue(arr) {
  let tempArr = [];
  let n = arr.length;
  console.log(n);
  for (let i = 1; i <= n + 1; i++) {
    tempArr.push(i);
  }
  console.log(tempArr);
  let n1 = tempArr.length;
  console.log(n1);

  let z = 0;
  for (let i = n; i < n + n1; i++) {
    arr[i] = tempArr[z];
    z++;
  }
  console.log(arr);
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor ^= arr[i];
  }
  console.log(xor);
}
let arr = [1, 2, 3, 5, 6, 7, 4, 9];
unknowvalalue(arr);

//==============================================================================
// method:-2
// Optimized Code.
function unknown(arr) {
  let x1 = 0;
  for (let i = 0; i < arr.length; i++) {
    x1 ^= arr[i];
  }
  let x2 = 0;
  for (let i = 1; i <= arr.length + 1; i++) {
    x2 ^= i;
  }
  console.log(x1 ^ x2);
}

let arr = [1, 2, 3, 5, 6];
unknown(arr);

//===============================================================================
// Question:-90
function maximumPriduct(arr) {
  arr.sort((a, b) => a - b);
  let max = Number.MIN_valALUE;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        //  let product = arr[i] * arr[j] * arr[k];
        //max = Math.max(max, product);
        console.log(`${arr[i]}  ${arr[j]}  ${arr[k]}`);
      }
    }
  }
  // console.log(max);

  // let n = arr.length;
  // arr.sort(function (a, b) {
  //   return a - b;
  // });
  // console.log(arr);
  // let maxpro = Math.max(
  //   arr[0] * arr[1] * arr[n - 1],
  //   arr[n - 1] * arr[n - 2] * arr[n - 3]
  // );
  // console.log(maxpro);
}
let arr = [-10, -3, -5, -6, -20];
maximumPriduct(arr);

//============================================================================
// Question:-91
// Givalen a string, return a string made of the first 2 chars (if present), howevaler include first char only
// if it is 'o' and include the second only if it is 'z', so "ozymandias" yields "oz".

//startOz("ozymandias") → "oz"
//startOz("bzoo") → "z"
//startOz("oxx") → "o"

function startOz(str) {
  let res = '';
  if (str.length >= 1 && str[0] == 'o') {
    res = res + str[0];
  }
  if (str.length >= 2 && str[1] == 'z') {
    res = res + str[1];
  }
  return res;
}
let str = 'bzoo';
console.log(startOz(str));

//=================================================================================
// Question:-92
// Givalen three int valalues, a b c, return the largest.

//intMax(1, 2, 3) → 3
//intMax(1, 3, 2) → 3
//intMax(3, 2, 1) → 3

function intMax(a, b, c) {
  let m = 0;
  if (a > b) {
    m = a;
  } else {
    m = b;
  }
  let res = Math.max(m, c);
  return res;
}
let a = 1,
  b = 2,
  c = 3;
console.log(intMax(a, b, c));

//==========================================================================
// Question:-93
// Givalen 2 int valalues, return whichevaler valalue is nearest to the valalue 10, or return 0 in the evalent of a tie.
// Note that Math.abs(n) returns the absolute valalue of a number.

//close10(8, 13) → 8
//close10(13, 8) → 8
//close10(13, 7) → 0

function close10(a, b) {
  let a1 = Math.abs(a - 10);
  let b1 = Math.abs(b - 10);
  if (a1 < b1) {
    return a;
  }
  if (b1 < a1) {
    return b;
  }
  return 0;
}

let a = 8,
  b = 13;
console.log(close10(a, b));

//=========================================================================
// Question:-94
// Givalen 2 int valalues, return true if they are both in the range 30..40 inclusivale,
// or they are both in the range 40..50 inclusivale.

//in3050(30, 31) → true
//in3050(30, 41) → false
//in3050(40, 50) → true

function in3050(a, b) {
  // if ((a >= 30 && b <= 40) || (a >= 40 && b <= 50)) return true;
  // else return false;

  if (a >= 30 && a <= 40 && b >= 30 && b <= 40) {
    return true;
  }
  if (a >= 40 && a <= 50 && b >= 40 && b <= 50) {
    return true;
  }
  return false;
}
let a = 30,
  b = 31;
console.log(in3050(a, b));

//======================================================================

// Question:-95
// Givalen 2 positivale int valalues, return the larger valalue that is in the range 10..20 inclusivale,
// or return 0 if neither is in that range.

//max1020(11, 19) → 19
//max1020(19, 11) → 19
//max1020(11, 9) → 11

function max1020(a, b) {
  // if (a >= 10 && a <= 20 && b >= 10 && b <= 20) {
  //   return Math.max(a, b);
  // }
  // return 0;
  // let bigger = Math.max(a, b);
  // // return bigger;
  // if (bigger >= 10 && bigger <= 20) return bigger;

  // first make a is bigger valalue.

  if (b > a) {
    let temp = a;
    a = b;
    b = temp;
  }

  if (a >= 10 && a <= 20) return a;
  if (b >= 10 && b <= 20) return b;
  return 0;
}
let a = 11,
  b = 19;
console.log(max1020(a, b));

//==========================================================================
// Question:-96
// Return true if the givalen string contains between 1 and 3 'e' chars.

//stringE("Hello") → true
//stringE("Heelle") → true
//stringE("Heelele") → false

function stringE(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'e') {
      count++;
    }
  }
  if (count >= 1 && count <= 3) return true;
  else return false;
}
let str = 'helleeeo';
console.log(stringE(str));

//================================================================================
// Question:-97
// Givalen two non-negativale int valalues, return true if they havale the same last digit,
// such as with 27 and 57. Note that the % "mod" operator computes remainders, so 17 % 10 is 7.

//lastDigit(7, 17) → true
//lastDigit(6, 17) → false
//lastDigit(3, 113) → true

function lastDigit(a, b) {
  let first = a % 10;
  let second = b % 10;
  if (first == second) return true;
  else return false;
}

let a = 7,
  b = 17;
console.log(lastDigit(a, b));

//===================================================================================
// Question:-98
// Givalen a string, return a new string where the last 3 chars are now in upper case.
//If the string has less than 3 chars, uppercase whatevaler is there. Note that str.toUpperCase()
// returns the uppercase valersion of a string.

//endUp("Hello") → "HeLLO"
//endUp("hi there") → "hi thERE"
//endUp("hi") → "HI"

function endUp(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    let st = str.substring(str.length - 3);
    let upper = st.toUpperCase();
    let temp = str.substring(0, str.length - 3);
    return temp + upper;
  }
}
let str = '';
console.log(endUp(str));

//=========================================================================
// Question:-99
// Givalen a non-empty string and an int N, return the string made starting with char 0, and then evalery
// Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.

//evaleryNth("Miracle", 2) → "Mrce"
//evaleryNth("abcdefg", 2) → "aceg"
//evaleryNth("abcdefg", 3) → "adg"

function evaleryNth(str, n) {
  let res = '';
  for (let i = 0; i < str.length; i = i + n) {
    res = res + str[i];
  }
  return res;
}

let str = 'Chocolates';
let n = 100;
console.log(evaleryNth(str, n));

//==========================================================================
// Question:-100
// Warmup:-2
//---------------------
// Givalen a string and a non-negativale int n, return a larger string that is n copies of the original string.

//stringTimes("Hi", 2) → "HiHi"
//stringTimes("Hi", 3) → "HiHiHi"
//stringTimes("Hi", 1) → "Hi"

function stringTimes(str, n) {
  return str.repeat(n);
}

let str = 'Hi';
let n = 3;
console.log(stringTimes(str, n));

//=======================================================================================
// Qestion:-101
// Givalen a string and a non-negativale int n, we'll say that the front of the string is the first 3 chars,
//or whatevaler is there if the string is less than length 3. Return n copies of the front;

//frontTimes("Chocolate", 2) → "ChoCho"
//frontTimes("Chocolate", 3) → "ChoChoCho"
//frontTimes("Abc", 3) → "AbcAbcAbc"

function frontTimes(str, n) {
  if (str.length < 3) return str.repeat(n);
  else {
    let res = str[0] + str[1] + str[2];
    return res.repeat(n);
  }
}
let str = 'Ab',
  n = 4;
console.log(frontTimes(str, n));

//=========================================================================
// Question:-102
// Count the number of "xx" in the givalen string. We'll say that ovalerlapping is allowed,
//so "xxx" contains 2 "xx".

//countXX("abcxx") → 1
//countXX("xxx") → 2
//countXX("xxxx") → 3

function countXX(str) {
  // let count = 0;
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] == 'x') {
  //     count++;
  //   }
  // }
  // return count - 1;
  let count = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str.substring(i, i + 2) == 'xx') count++;
  }
  return count;
}
let str = 'abcxx sandeepxx prajxx';
console.log(countXX(str));

//====================================================================================
// Question:-103
// Givalen a string, return true if the first instance of "x" in the string is immediately followed by
// another "x".

//doubleX("axxbb") → true
//doubleX("axaxax") → false
//doubleX("xxxxx") → true

function dobleXX(str) {
  // for (let i = 0; i < str.length - 1; i++) {
  //   if (str.substring(i, i + 2) == 'xx') {
  //     if (str.substring(i + 1, i + 3) == 'xx') {
  //       return false;
  //     }
  //     return true;
  //   }
  // }
  // return false;
  let i = str.indexOf('x');
  if (i == -1) return false; // not x ie there.

  if (i + 1 >= str.length) return false;
  return str.substring(i + 1, i + 2) == 'x';
}
let str = 'xxaa';
console.log(dobleXX(str));

//================================================================================
// Question:-104

// Givalen a string, return a new string made of evalery other char starting with the first,
// so "Hello" yields "Hlo".

//stringBits("Hello") → "Hlo"
//stringBits("Hi") → "H"
//stringBits("Heeololeo") → "Hello"

function stringBits(str) {
  let result = '';
  for (let i = 0; i < str.length; i = i + 2) {
    result += str[i];
  }
  return result;
}
let str = 'Heeololeo';
console.log(stringBits(str));
//-----------------------------------------------------------------------------
function product(arr) {
  let n = arr.length;
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  return Math.max(
    arr[0] * arr[1] * arr[n - 1],
    arr[n - 1] * arr[n - 2] * arr[n - 3]
  );
}

let arr = [1, -4, 3, -6, 7, 0];
console.log(product(arr));


//================================================================================
// Question:-105
// Givalen a non-empty string like "Code" return a string like "CCoCodCode".

//stringSplosion("Code") → "CCoCodCode"
//stringSplosion("abc") → "aababc"
//stringSplosion("ab") → "aab"

function stringSplosion(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str.substring(0, i + 1);
  }
  return result;
}
let str = 'Code';
console.log(stringSplosion(str));

//=======================================================================================
// Question:-106
// Givalen a string, return the count of the number of times that a substring length 2 appears in the
// string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring)
//.

//last2("hixxhi") → 1
//last2("xaxxaxaxx") → 1
//last2("axxxaaxx") → 2

function last2(str) {
  let count = 0;
  let end = str.substring(str.length - 2);
  for (let i = 0; i < str.length - 2; i++) {
    let sub = str.substring(i, i + 2);
    if (end == sub) count++;
  }
  return count;
}

let str = '13121312';
console.log(last2(str));

//======================================================================================
// Question:-107
// Givalen an array of ints, return the number of 9's in the array.

//arrayCount9([1, 2, 9]) → 1
//arrayCount9([1, 9, 9]) → 2
//arrayCount9([1, 9, 9, 3, 9]) → 3

function arrayCount9(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 9) count++;
  }
  return count;
}

let arr = [1, 2, 9, 2, 9, 4, 5, 9];
console.log(arrayCount9(arr));

//========================================================================================
// Question:-108
// Givalen an array of ints, return true if one of the first 4 elements in the array is a 9.
//The array length may be less than 4.

//arrayFront9([1, 2, 9, 3, 4]) → true
//arrayFront9([1, 2, 3, 4, 9]) → false
//arrayFront9([1, 2, 3, 4, 5]) → false

function arrayFront9(arr) {
 // let count = 0;
  let len = arr.length;
  if (len > 4) len = 4;

  for (let i = 0; i < len; i++) {
    if (arr[i] == 9) return true;
  }
  return false;
}

let arr = [1, 2, 9, 4, 3];
console.log(arrayFront9(arr));

//===============================================================================
// Question:-109
// Givalen an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.

//array123([1, 1, 2, 3, 1]) → true
//array123([1, 1, 2, 4, 1]) → false
//array123([1, 1, 2, 1, 2, 3]) → true

function array123(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] == 1 && arr[i + 1] == 2 && arr[i + 2] == 3) {
      return true;
    }
  }
  return false;
}

let arr = [1, 1, 2, 3, 1];
console.log(array123(arr));

//================================================================================
// Question:-110
// Givalen 2 strings, a and b, return the number of the positions where they contain the same length 2
//substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in
// the same place in both strings.

//stringMatch("xxcaazz", "xxbaaz") → 3
//stringMatch("abc", "abc") → 2
//stringMatch("abc", "axc") → 0

function stringMatch(a, b) {
  let len = Math.min(a.length, b.length);
  let count = 0;
  for (let i = 0; i < len - 1; i++) {
    let a_sub_string = a.substring(i, i + 2);
    let b_sub_string = b.substring(i, i + 2);
    if (a_sub_string == b_sub_string) {
      count++;
    }
  }
  return count;
}

//let a = 'xxcaazz';
//let b = 'xxbaaz';
let a = 'abc';
let b = 'abc';
console.log(stringMatch(a, b));

//=====================================================================================
// Question:-111
// Givalen a string, return a valersion where all the "x" havale been removaled. Except an "x" at the valery start or
//end should not be removaled.

//stringX("xxHxix") → "xHix"
//stringX("abxxxcd") → "abcd"
//stringX("xabxxxcdx") → "xabcdx"

function stringX(str) {
  let result = '';
  let first = str.substring(0, 1);
  let last = str.substring(str.length - 1);

  for (let i = 1; i < str.length - 1; i++) {
    if (str[i] == 'x') {
      continue;
    } else {
      result = result + str[i];
    }
  }
  return first + result + last;
}
let str = 'xabxxxcdx';
console.log(stringX(str));

//===================================================================================
// Question:-112
// Givalen a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so
// "kittens" yields "kien".

//altPairs("kitten") → "kien"
//altPairs("Chocolate") → "Chole"
//altPairs("CodingHorror") → "Congrr"

function altPair(str) {
  let result = '';
  for (let i = 0; i < str.length; i = i + 4) {
    let end = i + 2;
    if (end > str.length) {
      end = str.length;
    }
    result = result + str.substring(i, end);
  }
  return result;
}

let str = 'Chocolate';
console.log(altPair(str));

//===========================================================================
function rightDigitFind(n) {
  while (n >= 10) {
    n = Math.floor(n / 10);
  }
  return Math.floor(n);
}

function rightDigti(arr) {
  let digti = [];
  for (let i = 0; i < arr.length; i++) {
    let rightDi = rightDigitFind(arr[i]);
    digti.push(rightDi);
  }
  return digti;
}

let arr = [5, 0.5, 14, 05];
console.log(rightDigti(arr));

//===============================================================================
// Join():--
//The join() method returns a new string by concatenating all of the elements in an array,
//separated by a specified separator.
//

//let message = ['JavalaScript', 'is', 'fun.']; // JavalaScript is fun
let message = [45, 14, 25, 36, 40];
// join all elements of array using space
let joinedMessage = message.join(' ');
console.log(joinedMessage);
console.log(typeof joinedMessage);
console.log(joinedMessage.length);
console.log(joinedMessage[0].joinedMessage[1]);

// resultput: JavalaScript is fun.

//====================================================================================

//arr.join(','); // array look like as 16,8,886,8,1 this is become string
//arr.join(",").split(",") // ["16","8","886","8","1"] this will become array.
function rightDigit(arr) {
  let final = [];
  let arr_1 = arr.join(',').split(',');
  // return arr_1;
  for (let i = 0; i < arr_1.length; i++) {
    final.push(arr_1[i][arr_1[i].length - 1]);
  }
  //return final;
  let res = [];
  for (let i = 0; i < final.length; i++) {
    let tempNum = parseInt(final[i]);
    res.push(tempNum);
  }
  return res;
}

let arr = [16, 8, 886, 8, 1];
console.log(rightDigit(arr));

//===================================================================================
function leftDigit(arr_1) {
  let result = [];
  // let arr_1 = arr.join(',').split(',');
  //  console.log(arr_1);
  //console.log(typeof arr_1);
  for (let i = 0; i < arr_1.length; i++) {
    for (let j = 0; j < arr_1[i].length; j++) {
      result.push(arr_1[i].charAt(0));
      break;
    }
  }
  console.log(result);
  // return result;
  //==----------------------------------------------------------------------------
  // let final = [];
  // let arr_1 = arr.join(',').split(',');
  // console.log(arr_1); // ["16","8","886","8","1"]
  // let res = arr_1[0][arr_1[0].arr_1[length-]];
  // console.log(res);

  // for (let i = 0; i < arr_1.length; i++) {
  //   final.push(arr_1[i][arr_1[i].arr_1[0]]);
  // }
  // return final;
}
//---------------------------------------------------------------------------------

let arr = ['16', '8', '0886', '8', '01'];
leftDigit(arr);

//========================================================================================
function leftDigit(arr) {
  let result = [];
  //console.log(arr);
  valar num = 040;
  console.log(num); // 32
  // Uncaught SyntaxError: Decimals with leading zeros are not allowed in strict mode.
}

let arr = [16, 8, 18, 8, 1];
arr = arr.join(',').split(',');
leftDigit(arr);

//====================================================================================
// Question:-113
// Suppose the string "yak" is unlucky. Givalen a string, return a valersion where all the "yak" are removaled,
// but the "a" can be any char. The "yak" strings will not ovalerlap.

//stringYak("yakpak") → "pak"
//stringYak("pakyak") → "pak"
//stringYak("yak123ya") → "123ya"

function stringYak(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (i + 2 < str.length && str[i] == 'y' && str[i + 2] == 'k') {
      i += 2;
    } else {
      res += str[i];
    }
  }
  return res;
}

let str = 'yakpak';
console.log(stringYak(str));

//=================================================================================
// Question:-114
// Givalen an array of ints, return the number of times that two 6's are next to each other in the array.
// Also count instances where the second "6" is actually a 7.

//array667([6, 6, 2]) → 1
//array667([6, 6, 2, 6]) → 1
//array667([6, 7, 2, 6]) → 1

function array667(arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == 6) {
      if (arr[i + 1] == 6 || arr[i + 1] == 7) {
        count++;
      }
    }
  }
  return count;
  //---------------------------------------------------
  // for (let i = 0; i < arr.length - 1; ) {
  //   if (arr[i] == 6 && arr[i + 1] == 6) {
  //     count++;
  //     i += 1;
  //   } else if (arr[i] == 6 && arr[i + 1] == 7) {
  //     count++;
  //     i += 1;
  //   }
  //   i++;
  // }
  // return count;
  //------------------------------------------------------
}

let arr = [6, 6, 1, 2, 6, 7];
console.log(array667(arr));

//===================================================================================
// Question:-115
//Givalen an array of ints, we'll say that a triple is a valalue appearing 3 times in a row in the array.
//Return true if the array does not contain any triples.

//noTriples([1, 1, 2, 2, 1]) → true
//noTriples([1, 1, 2, 2, 2, 1]) → false
//noTriples([1, 1, 1, 2, 2, 2, 1]) → false

function noTriplet(arr) {
  // arr.sort(function (a, b) {
  //   return a - b;
  // });
  for (let i = 0; i < arr.length - 2; ) {
    if (arr[i] == arr[i + 1] && arr[i + 1] == arr[i + 2]) {
      return false;
    }
    i++;
  }
  return true;
}
let arr = [1, 1, 2, 2, 2, 1, 4, 4, 1, 4];
console.log(noTriplet(arr));

//===========================================================================================
// Question:-116
//Givalen an array of ints, return true if it contains a 2, 7, 1 pattern: a valalue, followed by the valalue plus 5,
// followed by the valalue minus 1. Additionally the 271 counts evalen if the "1" differs by 2 or less from
//the correct valalue.

//has271([1, 2, 7, 1]) → true
//has271([1, 2, 8, 1]) → false
//has271([2, 7, 1]) → true

function has271(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    let valal = nums[i];
    if (
      nums[i + 1] == valal + 5 && // the "7" check
      Math.abs(nums[i + 2] - (valal - 1)) <= 2
    ) {
      // the "1" check
      return true;
    }
  }

  // If we get here ... none found.
  return false;
}
let nums = [1, 2, 7, 1];
console.log(has271(nums));

//===============================================================================
//Question:-117
// Array:-1
// Givalen an array of ints, return true if 6 appears as either the first or last element in the array.
//The array will be length 1 or more.

//firstLast6([1, 2, 6]) → true
//firstLast6([6, 1, 2, 3]) → true
//firstLast6([13, 6, 1, 2, 3]) → false

function firstLast6(arr) {
  if (arr[0] == 6 || arr[arr.length - 1] == 6) return true;
  return false;
}

let arr = [1, 2, 6];
console.log(firstLast6(arr));

//===================================================================================
// Question:-118
//Givalen an array of ints, return true if the array is length 1 or more, and the first element and the
//last element are equal.

//sameFirstLast([1, 2, 3]) → false
//sameFirstLast([1, 2, 3, 1]) → true
//sameFirstLast([1, 2, 1]) → true

function sameFirstLast(arr) {
  if(arr.length==0) return false;
  if (arr[0] == arr[arr.length - 1]) return true;
  return false;
}

let arr = [1, 2, 3];
console.log(sameFirstLast(arr));

//=========================================================================================
// Question:-119
// Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}.

//makePi() → [3, 1, 4]

function makePi() {
  let arr = new Array(3, 1, 4);
  return arr;
}
console.log(makePi());

//====================================================================================
// Question:-120
// Givalen 2 arrays of ints, a and b, return true if they havale the same first element or they havale
//the same last element. Both arrays will be length 1 or more.

//commonEnd([1, 2, 3], [7, 3]) → true
//commonEnd([1, 2, 3], [7, 3, 2]) → false
//commonEnd([1, 2, 3], [1, 3]) → true

function commonEnd(a, b) {
  if (a[0] == b[0] || a[a.length - 1] == b[b.length - 1]) return true;
  return false;
}

let a = [1, 2, 3];
let b = [7, 3];
console.log(commonEnd(a, b));

//===========================================================================================
// Question:-121
// Givalen an array of ints length 3, return the sum of all the elements.

//sum3([1, 2, 3]) → 6
//sum3([5, 11, 2]) → 18
//sum3([7, 0, 0]) → 7

function sum3(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let arr = [1, 2, 3];
console.log(sum3(arr));

//==========================================================================================
// Question:-122
// Givalen an array of ints length 3, return an array with the elements "rotated left"
//so {1, 2, 3} yields {2, 3, 1}.

//rotateLeft3([1, 2, 3]) → [2, 3, 1]
//rotateLeft3([5, 11, 9]) → [11, 9, 5]
//rotateLeft3([7, 0, 0]) → [0, 0, 7]

function rotateLeft(arr) {
  let resArr = new Array(3);
  resArr[0] = arr[1];
  resArr[1] = arr[2];
  resArr[2] = arr[0];
  return resArr;
}
let arr = [1, 2, 3];
console.log(rotateLeft(arr));

//=======================================================================================
// Question:-123
// Givalen an array of ints length 3, return a new array with the elements in revalerse order,
// so {1, 2, 3} becomes {3, 2, 1}.

//revalerse3([1, 2, 3]) → [3, 2, 1]
//revalerse3([5, 11, 9]) → [9, 11, 5]
//revalerse3([7, 0, 0]) → [0, 0, 7]

function revalerse3(arr) {
  // return arr.sort(function (a, b) {
  //   return a - b;
  // });

  let resArr = new Array(3);
  resArr[0] = arr[2];
  resArr[1] = arr[1];
  resArr[2] = arr[0];
  return resArr;
}

let arr = [1, 2, 3];
console.log(revalerse3(arr));

//===============================================================================
// Question:-124
// Givalen an array of ints length 3, figure result which is larger, the first or last element in the array,
// and set all the other elements to be that valalue. Return the changed array.

//maxEnd3([1, 2, 3]) → [3, 3, 3]
//maxEnd3([11, 5, 9]) → [11, 11, 11]
//maxEnd3([2, 11, 3]) → [3, 3, 3]

function maxEnd3(arr) {
  let resArr = new Array(3);
  let maxx = Number.MIN_valALUE;
  if (arr[0] > arr[2]) {
    maxx = arr[0];
  } else {
    maxx = arr[2];
  }
  resArr[0] = maxx;
  resArr[1] = arr[1];
  resArr[2] = maxx;
  return resArr;
}

let arr = [2, 11, 3];
console.log(maxEnd3(arr));

//===================================================================
// Question:-125
// Givalen an array of ints, return the sum of the first 2 elements in the array. If the array length
//is less than 2, just sum up the elements that exist, returning 0 if the array is length 0.

//sum2([1, 2, 3]) → 3
//sum2([1, 1]) → 2
//sum2([1, 1, 1, 1]) → 2

function sum2(arr) {
  let sum;
  if (arr.length == 1) {
    sum = arr[0];
  } else if (arr.length == 0) {
    sum = 0;
  } else {
    let a = arr[0];
    let b = arr[1];
    sum = a + b;
  }
  return sum;
}
let arr = [12, 8, 12];
console.log(sum2(arr));

//====================================================================================
// Question:-126
// Givalen 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.

//middleWay({1, 2, 3}, {4, 5, 6}) → {2, 5}
//middleWay({7, 7, 7}, {3, 8, 0}) → {7, 8}
//middleWay({5, 2, 9}, {1, 4, 5}) → {2, 4}

function middleWay(a, b) {
  let resArr = new Array(2);
  resArr[0] = a[1];
  resArr[1] = b[1];
  return resArr;
}
let a = [1, 2, 3];
let b = [4, 5, 6];
console.log(middleWay(a, b));

//=======================================================================================
// Question:-127
// Givalen an array of ints, return a new array length 2 containing the first and last elements
// from the original array. The original array will be length 1 or more.

//makeEnds([1, 2, 3]) → [1, 3]
//makeEnds([1, 2, 3, 4]) → [1, 4]
//makeEnds([7, 4, 6, 2]) → [7, 2]

function makeEnds(arr) {
  let resArr = new Array(2);
  if (arr.length == 1) {
    resArr[0] = arr[0];
  } else {
    resArr[0] = arr[0];
    resArr[1] = arr[arr.length - 1];
  }
  return resArr;
}

let arr = [7, 4, 6, 2];
console.log(makeEnds(arr));

//=========================================================================================
// Question:-128
// Givalen an int array length 2, return true if it contains a 2 or a 3.

//has23([2, 5]) → true
//has23([4, 3]) → true
//has23([4, 5]) → false

function has23(arr) {
  if (arr[0] == 2 || arr[0] == 3 || arr[1] == 2 || arr[1] == 3) return true;
  return false;
}
let arr = [2, 5];
console.log(has23(arr));

//=======================================================================================
// Question:-129
// Givalen an int array length 2, return true if it does not contain a 2 or 3.

//no23([4, 5]) → true
//no23([4, 2]) → false
//no23([3, 5]) → false

function no23(arr) {
  if (arr[0] == 2 || arr[0] == 3 || arr[1] == 2 || arr[1] == 3) return false;
  return true;
}
let arr = [2, 5];
console.log(no23(arr));

//=================================================================================
// Question:-130
// Givalen an int array, return a new array with double the length where its last element is the
//same as the original array, and all the other elements are 0. The original array will be length 1 or more.
// Note: by default, a new int array contains all 0's.

//makeLast([4, 5, 6]) → [0, 0, 0, 0, 0, 6]
//makeLast([1, 2]) → [0, 0, 0, 2]
//makeLast([3]) → [0, 3]

function makeLast(arr) {
  let n = arr.length;
  let resArr = new Array(n * 2);
  resArr[resArr.length - 1] = arr[arr.length - 1];

  for (let i = 0; i < resArr.length - 1; i++) {
    resArr[i] = 0;
  }
  return resArr;
}
let arr = [1, 2];
console.log(makeLast(arr));

//=======================================================================================
// Question:-131
// Givalen an int array, return true if the array contains 2 twice, or 3 twice. The array will be
// length 0, 1, or 2.

//double23([2, 2]) → true
//double23([3, 3]) → true
//double23([2, 3]) → false

function double23(arr) {
  if (arr.length == 1 || arr.length == 0) return false;
  if ((arr[0] == 2 && arr[1] == 2) || (arr[0] == 3 && arr[1] == 3)) return true;
  return false;
}
let arr = [2, 3];
console.log(double23(arr));

//=============================================================================================
// Question:-132
// Givalen an int array length 3, if there is a 2 in the array immediately followed by a 3,
//set the 3 element to 0. Return the changed array.

//fix23([1, 2, 3]) → [1, 2, 0]
//fix23([2, 3, 5]) → [2, 0, 5]
//fix23([1, 2, 1]) → [1, 2, 1]

function fix23(arr) {
  let resArr = new Array(arr.length);
  //---------------------------------------------------------------
  // for (let i = 0; i < arr.length - 1; i++) {
  //   if (arr[i] == 2 && arr[i + 1] == 3) {
  //     resArr[i + 1] = 0;
  //     resArr[i] = arr[i];            WRong.
  //   } else {
  //     resArr[i] = arr[i];
  //   }
  // }
  //---------------------------------------------------------------
  if (arr[0] == 2 && arr[1] == 3) {
    resArr[1] = 0;
    resArr[0] = arr[0];
    resArr[2] = arr[2];
  } else if (arr[1] == 2 && arr[2] == 3) {
    resArr[2] = 0;
    resArr[1] = arr[1];
    resArr[0] = arr[0];
  } else {
    for (let i = 0; i < arr.length; i++) {
      resArr[i] = arr[i];
    }
  }
  return resArr;
  //---------------------------------------------------------------
}

let arr = [2, 3, 5];
console.log(fix23(arr));

//=============================================================================
// Question:-133
// Start with 2 int arrays, a and b, of any length. Return how many of the arrays havale 1 as
//their first element.

//start1({1, 2, 3}, {1, 3}) → 2
//start1({7, 2, 3}, {1}) → 1
//start1({1, 2}, {}) → 1

function start1(a, b) {
  let count = 0;
  if (a.length > 0 && a[0] == 1) count++;
  if (b.length > 0 && b[0] == 1) count++;
  return count;
}
let a = [1, 2, 3];
let b = [];
console.log(start1(a, b));

//==============================================================================
// Question:-134
// Start with 2 int arrays, a and b, each length 2. Consider the sum of the valalues in each array.
//Return the array which has the largest sum. In evalent of a tie, return a.

//biggerTwo([1, 2], [3, 4]) → [3, 4]
//biggerTwo([3, 4], [1, 2]) → [3, 4]
//biggerTwo([1, 1], [1, 2]) → [1, 2]

function biggerTwo(a, b) {
  let sum1 = a[0] + a[1];
  let sum2 = b[0] + b[1];
  if (sum1 > sum2) {
    return a;
  } else if (sum1 == sum2) {
    return a;
  } else {
    return b;
  }
}

let a = [2, 2];
let b = [1, 3];
console.log(biggerTwo(a, b));

//===========================================================================================
// Question:-135
// Givalen an array of ints of evalen length, return a new array length 2 containing the middle two elements
//from the original array. The original array will be length 2 or more.

//makeMiddle([1, 2, 3, 4]) → [2, 3]
//makeMiddle([7, 1, 2, 3, 4, 9]) → [2, 3]
//makeMiddle([1, 2]) → [1, 2]

function makeMiddle(arr) {
  let resArr = new Array(2);
  let n = arr.length;
  let indexz = n / 2;
  if (arr.length == 2) return arr;
  resArr[1] = arr[indexz];
  resArr[0] = arr[indexz - 1];
  return resArr;
}

let arr = [1, 2];
console.log(makeMiddle(arr));

//===============================================================================================
// Question:-136
// Givalen 2 int arrays, each length 2, return a new array length 4 containing all their elements.

//plusTwo([1, 2], [3, 4]) → [1, 2, 3, 4]
//plusTwo([4, 4], [2, 2]) → [4, 4, 2, 2]
//plusTwo([9, 2], [3, 4]) → [9, 2, 3, 4]

function plusTwo(a, b) {
  let resArr = new Array(a.length + b.length);
  resArr = [...a, ...b];
  return resArr;
}

let a = [1, 2];
let b = [3, 4];
console.log(plusTwo(a, b));

//==================================================================================================
// Question:-137
// Givalen an array of ints, swap the first and last elements in the array. Return the modified array.
// The array length will be at least 1.

//swapEnds([1, 2, 3, 4]) → [4, 2, 3, 1]
//swapEnds([1, 2, 3]) → [3, 2, 1]
//swapEnds([8, 6, 7, 9, 5]) → [5, 6, 7, 9, 8]

function swapEnds(arr) {
  if (arr.length == 1) return arr;
  let n = arr.length;
  let temp = arr[0];
  arr[0] = arr[n - 1];
  arr[n - 1] = temp;
  return arr;
}

let arr = [1];
console.log(swapEnds(arr));

//================================================================================================
// Question:-138
// Givalen an array of ints of odd length, return a new array length 3 containing the elements from the
// middle of the array. The array length will be at least 3.

//midThree([1, 2, 3, 4, 5]) → [2, 3, 4]
//midThree([8, 6, 7, 5, 3, 0, 9]) → [7, 5, 3]
//midThree([1, 2, 3]) → [1, 2, 3]
function midThree(arr) {
  let resArr = new Array(3);
  let n = arr.length;
  let index = Math.floor(n / 2);
  resArr[0] = arr[index - 1];
  resArr[1] = arr[index];
  resArr[2] = arr[index + 1];

  return resArr;
}

let arr = [8, 6, 7, 5, 3, 0, 9];
console.log(midThree(arr));

//============================================================================================
// Question:-139
// Givalen an array of ints of odd length, look at the first, last, and middle valalues in the array and return
// the largest. The array length will be a least 1.

//maxTriple([1, 2, 3]) → 3
//maxTriple([1, 5, 3]) → 5
//maxTriple([5, 2, 3]) → 5

function maxTriplet(arr) {
  // if (arr.length == 1) return arr[0];
  // arr.sort(function (a, b) {
  //   return a - b;
  // });
  // return arr[arr.length - 1];

  let n = arr.length;
  let mid = Math.floor(n / 2);
  mid = Math.max(arr[0], arr[mid]);
  mid = Math.max(mid, arr[n - 1]);
  return mid;
}

let arr = [5, 1, 7, 3, 7, 8, 1];
console.log(maxTriplet(arr));

//===========================================================================================
// Question:-140
// Givalen an int array of any length, return a new array of its first 2 elements. If the array is smaller
//than length 2, use whatevaler elements are present.

//frontPiece([1, 2, 3]) → [1, 2]
//frontPiece([1, 2]) → [1, 2]
//frontPiece([1]) → [1]

function frontPiece(arr) {
  let res = [];
  if (arr.length <= 2) return arr;
  else {
    res.push(arr[0]);
    res.push(arr[1]);
  }
  return res;
}

let arr = [1];
console.log(frontPiece(arr));

//===========================================================================================
// Question:-141
//We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1.
// Return true if the givalen array contains an unlucky 1 in the first 2 or last 2 positions
//in the array.

//unlucky1({1, 3, 4, 5}) → true
//unlucky1({2, 1, 3, 4, 5}) → true
//unlucky1({1, 1, 1}) → false

function unlucky(nums) {
  if (nums.length < 2) {
    return false;
  } else if (
    (nums[0] == 1 && nums[1] == 3) ||
    (nums[nums.length - 2] == 1 && nums[nums.length - 1] == 3)
  ) {
    return true;
  } else if (nums.length > 2 && nums[1] == 1 && nums[2] == 3) {
    return true;
  } else return false;
}
let arr = [1, 2, 3];
console.log(unlucky(arr));

//=====================================================================================
//Question:-142
//Givalen 2 int arrays, a and b, return a new array length 2 containing, as much as will fit, the elements from
//a followed by the elements from b. The arrays may be any length, including 0, but there will be 2 or more
// elements avalailable between the 2 arrays.

//make2([4, 5], [1, 2, 3]) → [4, 5]
//make2([4], [1, 2, 3]) → [4, 1]
//make2([], [1, 2]) → [1, 2]

function make2(a, b) {
  let resArr = new Array(2);
  let aL = a.length;
  let bL = b.length;

  if (aL == 0) {
    resArr[0] = b[0];
    resArr[1] = b[1];
    return resArr;
  } else if (aL == 1 && bL == 1) {
    resArr[0] = a[0];
    resArr[1] = b[1];
    return resArr;
  } else if (aL == 1) {
    resArr[0] = a[0];
    resArr[1] = b[0];
    return resArr;
  } else {
    resArr[0] = a[0];
    resArr[1] = a[1];
    return resArr;
  }
}

let a = [4, 5];
let b = [1, 2, 3];
console.log(make2(a, b));

//=======================================================================================
// Question:-143
// Givalen 2 int arrays, a and b, of any length, return a new array with the first element of each array.
//If either array is length 0, ignore that array.

//front11({1, 2, 3}, {7, 9, 8}) → {1, 7}
//front11({1}, {2}) → {1, 2}
//front11({1, 7}, {}) → {1}

function front11(a, b) {
  let res = [];
  if (a.length == 0) {
    res[0] = b[0];
  } else if (b.length == 0) {
    res[0] = a[0];
  } else if (a.length == 0 && b.length == 0) {
    return a;
  } else {
    res[0] = a[0];
    res[1] = b[0];
  }
  return res;
}

let a = [];
let b = [];
console.log(front11(a, b));

//=============================================================================================
// Array:-02 medium levalel
// Question:-144
// Return the number of evalen ints in the givalen array. Note: the % "mod" operator computes the
// remainder, e.g. 5 % 2 is 1.

//countEvalens([2, 1, 2, 3, 4]) → 3
//countEvalens([2, 2, 0]) → 3
//countEvalens([1, 3, 5]) → 0

function countEvalens(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) count++;
  }
  return count;
}
let arr = [2, 1, 2, 3, 4];
console.log(countEvalens(arr));

//===========================================================================================
// Question:-145
// Givalen an array length 1 or more of ints, return the difference between the largest and smallest
// valalues in the array. Note: the built-in Math.min(val1, val2) and Math.max(val1, val2) methods return the
// smaller or larger of two valalues.

//bigDiff([10, 3, 5, 6]) → 7
//bigDiff([7, 2, 10, 9]) → 8
//bigDiff([2, 10, 7, 2]) → 8

function bigDiff(arr) {
  //--------------------------------------------
  // arr.sort(function (a, b) {
  //   return a - b;
  // });
  // let min = arr[0];
  // let max = arr[arr.length - 1];

  // return max - min;
  //----------------------------------------------

  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }
  return max - min;
}
let arr = [10, 3, 5, 6];
console.log(bigDiff(arr));

//===================================================================================
// Question:-146
// Return the "centered" avalerage of an array of ints, which we'll say is the mean avalerage of the valalues,
// except ignoring the largest and smallest valalues in the array. If there are multiple copies of the smallest
// valalue, ignore just one copy, and likewise for the largest valalue. Use int divalision to produce the final
// avalerage. You may assume that the array is length 3 or more.

//centeredAvalerage([1, 2, 3, 4, 100]) → 3
//centeredAvalerage([1, 1, 5, 5, 10, 8, 7]) → 5
//centeredAvalerage([-10, -4, -2, -4, -2, 0]) → -3

function centeredAvalerage(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }
  sum = sum - max - min;
  sum = Math.floor(sum / (arr.length - 2));
  return sum;
}

let arr = [1, 2, 3, 4, 100];
console.log(centeredAvalerage(arr));

//===============================================================================================
// Question:-147
// Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is
// valery unlucky, so it does not count and numbers that come immediately after a 13 also do not count.

//sum13([1, 2, 2, 1]) → 6
//sum13([1, 1]) → 2
//sum13([1, 2, 2, 1, 13]) → 6

function sum13(arr) {
  // let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] == 13) {
  //     break;
  //   } else {
  //     sum += arr[i];          WRONG;
  //   }
  // }
  // return sum;

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 13) {
      i++;
      continue;
    }
    sum += arr[i];
  }
  return sum;
}
let arr = [13, 1, 2, 13, 2, 1, 13];
console.log(sum13(arr));

//==================================================================================
// Question:-148
// Return the sum of the numbers in the array, except ignore sections of numbers starting
//with a 6 and extending to the next 7 (evalery 6 will be followed by at least one 7).
// Return 0 for no numbers.

//sum67([1, 2, 2]) → 5
//sum67([1, 2, 2, 6, 99, 99, 7]) → 5
//sum67([1, 1, 6, 7, 2]) → 4

function sum67(nums) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 6) {
      sum = sum + nums[i];
    } else {
      while (nums[i] != 7) {
        i++;
      }
    }
  }
  return sum;
}

let arr = [1, 2, 2, 6, 99, 99, 7];
console.log(sum67(arr));

//============================================================================================
// Question:-149
// Givalen an array of ints, return true if the array contains a 2 next to a 2 somewhere.

//has22([1, 2, 2]) → true
//has22([1, 2, 1, 2]) → false
//has22([2, 1, 2]) → false

function has22(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == 2 && arr[i + 1] == 2) return true;
  }
  return false;
}
let arr = [1, 2, 2];
console.log(has22(arr));

//===============================================================================================
// Question:-150
// Givalen an array of ints, return true if the array contains no 1's and no 3's.

//lucky13([0, 2, 4]) → true
//lucky13([1, 2, 3]) → false
//lucky13([1, 2, 4]) → false

function lucky13(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (a[i] == 1 || arr[i] == 3) {
      return false;
    }
  }
  return true;
}

let arr = [1, 2, 3];
console.log(lucky13(arr));

//=====================================================================================
// Question:-151
// Givalen an array of ints, return true if the sum of all the 2's in the array is exactly 8.

//sum28([2, 3, 2, 2, 4, 2]) → true
//sum28([2, 3, 2, 2, 4, 2, 2]) → false
//sum28([1, 2, 3, 4]) → false

function sum28(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 2) sum += arr[i];
  }
  if (sum == 8) return true;
  return false;
}

let arr = [2, 3, 2, 2, 4, 2];
console.log(sum28(arr));

//===================================================================================
// Question:-152
// Givalen an array of ints, return true if the number of 1's is greater than the number of 4's

//more14([1, 4, 1]) → true
//more14([1, 4, 1, 4]) → false
//more14([1, 1]) → true

function more14(arr) {
  let oneCount = 0;
  let fourCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) oneCount++;
    else if (arr[i] == 4) fourCount++;
  }
  if (oneCount > fourCount) return true;
  else return false;
}

let arr = [1, 4, 1];
console.log(more14(arr));

//===============================================================================
// Question:-153
// Givalen a number n, create and return a new int array of length n, containing the numbers 0, 1, 2, ... n-1.
//The givalen n may be 0, in which case just return a length 0 array. You do not need a separate if-statement
// for the length-0 case; the for-loop should naturally execute 0 times in that case, so it just works.
// The syntax to make a new int array is: new int[desired_length]   (See also: FizzBuzz Code)

//fizzArray(4) → [0, 1, 2, 3]
//fizzArray(1) → [0]
//fizzArray(10) → [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function fizzArray(n) {
  let resArr = new Array();
  // if (n == 0) {
  //   resArr.push(n);
  for (let i = 0; i < n; i++) {
    resArr.push(i);
  }
  return resArr;
}

let n = 1;
console.log(fizzArray(n));

//========================================================================================
// Question:-154
// Givalen an array of ints, return true if evalery element is a 1 or a 4.

//only14([1, 4, 1, 4]) → true
//only14([1, 4, 2, 4]) → false
//only14([1, 1]) → true

function only14(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 1 && arr[i] != 4) {
      count++;
    }
  }
  if (count > 0) return false;
  else return true;
}

let arr = [1, 4, 1, 4];
console.log(only14(arr));

//==================================================================================
// Question:-155
// Givalen a number n, create and return a new string array of length n, containing the
//strings "0", "1" "2" .. through n-1. N may be 0, in which case just return a length 0 array. Note:
// String.valalueOf(xxx) will make the String form of most types. The syntax to make a new string array is:
// new String[desired_length]  (See also: FizzBuzz Code)

//fizzArray2(4) → ["0", "1", "2", "3"]
//fizzArray2(10) → ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//fizzArray2(2) → ["0", "1"]

function fizzArray2(n) {
  let resArr = new Array();
  if (n == 0) resArr;
  else {
    for (let i = 0; i < n; i++) {
      resArr.push(i);
    }
  }
  return resArr.join(',').split(',');
}

let n = 4;
console.log(fizzArray2(n));

//===================================================================================
// Question:-156
// Givalen an array of ints, return true if it contains no 1's or it contains no 4's.

//no14([1, 2, 3]) → true
//no14([1, 2, 3, 4]) → false
//no14([2, 3, 4]) → true

function no14(arr) {
  let count = 0;
  let oneC = 0;
  let fourC = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      oneC++;
    } else if (arr[i] == 4) {
      fourC++;
    }
  }

  if (oneC > 0 && fourC > 0) return false;
  else return true;
}

let arr = [1, 2, 3];
console.log(no14(arr));

//===================================================================================
// Question:-157
// We'll say that a valalue is "evalerywhere" in an array if for evalery pair of adjacent elements in the array,
// at least one of the pair is that valalue. Return true if the givalen valalue is evalerywhere in the array.

//isEvalerywhere([1, 2, 1, 3], 1) → true
//isEvalerywhere([1, 2, 1, 3], 2) → false
//isEvalerywhere([1, 2, 1, 3, 4], 1) → false

function isEvaleryThing(arr, valal) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != valal && arr[i + 1] != valal) return false;
  }
  return true;
}

let arr = [1, 2, 1, 3];
let valal = 1;
console.log(isEvaleryThing(arr, valal));

//==============================================================================
// Question:-158
// Givalen an array of ints, return true if the array contains a 2 next to a 2 or a 4 next to a 4, but not both.

//either24([1, 2, 2]) → true
//either24([4, 4, 1]) → true
//either24([4, 4, 1, 2, 2]) → false

function either24(arr) {
  let twoC = 0;
  let fourC = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == 2 && arr[i + 1] == 2) {
      twoC++;
    } else if (arr[i] == 4 && arr[i + 1] == 4) {
      fourC++;
    }
  }
  if (twoC > 1 && fourC > 1) return false;
  else if (twoC == 0 && fourC == 0) return false;
  else return true;
}
let arr = [1, 2, 2];
console.log(either24(arr));

//===============================================================================
//  Question:-159
// Givalen arrays nums1 and nums2 of the same length, for evalery element in nums1, consider the corresponding
//element in nums2 (at the same index). Return the count of the number of times that the two elements
// differ by 2 or less, but are not equal.

//matchUp([1, 2, 3], [2, 3, 10]) → 2
//matchUp([1, 2, 3], [2, 3, 5]) → 3
//matchUp([1, 2, 3], [2, 3, 3]) → 2

function matchUp(arr1, arr2) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    let temp = Math.abs(arr1[i] - arr2[i]);
    if (temp == 1 || temp == 2) count++;
  }
  return count;
}

let arr1 = [1, 2, 3];
let arr2 = [2, 3, 5];
console.log(matchUp(arr1, arr2));

//======================================================================================
// Question:-160
// Givalen an array of ints, return true if the array contains two 7's next to each other,
//or there are two 7's separated by one element, such as with {7, 1, 7}.

//has77([1, 7, 7]) → true
//has77([1, 7, 1, 7]) → true
//has77([1, 7, 1, 1, 7]) → false

function has77(arr) {
  let result = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == 7 && arr[i + 1] == 7) {
      result = true;
    }
  }
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] == 7 && arr[i + 2] == 7) {
      result = true;
    }
  }
  return result;
}

let arr = [1, 7, 7];
console.log(has77(arr));

//=======================================================================
// Question:-161
// Givalen an array of ints, return true if there is a 1 in the array with a 2 somewhere later in the array.

//has12([1, 3, 2]) → true
//has12([3, 1, 2]) → true
//has12([3, 1, 4, 5, 2]) → true

function has12(arr) {
  //-------------------------------------------------------------
  let result = true;
  let oneC = 0;
  let twoC = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == 2 && arr[i + 1] == 1) {
      result = false;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      oneC++;
    } else if (arr[i] == 2) {
      twoC++;
    }
  }
  if (result == false) return false;
  else if (oneC >= 1 && twoC >= 1) return true;
  // else if(result==false) return false;
  else return false;
  //-----------------------------------------------------------
  let oneFound = false;
  let twoFound = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      oneFound = true;
    }
    if (arr[i] == 2 && oneFound == true) {
      twoFound = true;
    }
  }
  return twoFound;
}

let arr = [1, 3, 2];
console.log(has12(arr));

//=============================================================================
// Question:-162
// Givalen an array of ints, return true if the array contains either 3 evalen or 3 odd valalues
//all next to each other.

//modThree([2, 1, 3, 5]) → true
//modThree([2, 1, 2, 5]) → false
//modThree([2, 4, 2, 5]) → true

function modThree(arr) {
  let evalenC = 0;
  let oddC = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] & 1) == 1) oddC++;
    else evalenC++;
  }
  if (evalenC == 3 || oddC == 3) return true;
  else return false;
}
let arr = [2, 1, 3, 5];
console.log(modThree(arr));

//==================================================================================
// Question:-163
// Givalen an array of ints, return true if the valalue 3 appears in the array exactly 3 times,
// and no 3's are next to each other.

//havaleThree([3, 1, 3, 1, 3]) → true
//havaleThree([3, 1, 3, 3]) → false
//havaleThree([3, 4, 3, 3, 4]) → false

function havaleThree(arr) {
  let count = 0;
  let found = false;
  //-------------------------------------------------------------------------
  // for (let i = 0; i < arr.length - 2; i++) {
  //   if (arr[i] == 3 && arr[i + 2] == 3 && arr[i + 4] == 3) return true;
  //   if (arr[i + 1] == 3 && arr[i + 3] == 3 && arr[i + 5] == 3) return true;
  // }
  // return false;
  //------------------------------------------------------------------------
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 3) {
      found = false;
    }
    if (arr[i] == 3 && found == true) {
      return false;
    }
    if (arr[i] == 3 && found == false) {
      found = true;
      count++;
    }
  }
  if (count == 3) return true;
  else return false;
}

let arr = [3, 1, 3, 1, 3];
console.log(havaleThree(arr));

//============================================================================
// Question:-164
// Givalen an array of ints, return true if evalery 2 that appears in the array is next to another 2.

//twoTwo([4, 2, 2, 3]) → true
//twoTwo([2, 2, 4]) → true
//twoTwo([2, 2, 4, 2]) → false
function twoTwo(arr) {
  let newArr = new Array(arr.length + 2);
  for (let i = 0; i < arr.length; i++) {
    newArr[i + 1] = arr[i];
  }
  // return newArr;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == 2) {
      if (!(newArr[i + 1] == 2 || newArr[i - 1] == 2)) return false;
    }
  }
  return true;
}

let arr = [4, 2, 2, 3];
console.log(twoTwo(arr));

//============================================================================
// Question:-165
// Return true if the group of N numbers at the start and end of the array are the same.
// For example, with {5, 6, 45, 99, 13, 5, 6}, the ends are the same for n=0 and n=2,
// and false for n=1 and n=3. You may assume that n is in the range 0..nums.length inclusivale.

//sameEnds([5, 6, 45, 99, 13, 5, 6], 1) → false
//sameEnds([5, 6, 45, 99, 13, 5, 6], 2) → true
//sameEnds([5, 6, 45, 99, 13, 5, 6], 3) → false

function sameEnds(arr, givalenLen) {
  let findTrue = true;
  for (let i = 0; i < givalenLen; i++) {
    if (arr[i] == arr[arr.length - givalenLen - i]) {
      findTrue = true;
    } else {
      findTrue = false;
    }
  }
  return findTrue;
}
let arr = [5, 6, 45, 99, 13, 5, 6];
let givalenLen = 1;
console.log(sameEnds(arr, givalenLen));

//====================================================================================
// Question:-166
// Return true if the array contains, somewhere, three increasing adjacent numbers
//like .... 4, 5, 6, ... or 23, 24, 25.

//tripleUp([1, 4, 5, 6, 2]) → true
//tripleUp([1, 2, 3]) → true
//tripleUp([1, 2, 4]) → false

function tripleUp(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (i > 0 && arr[i] - 1 == arr[i - 1] && arr[i + 1] - 1 == arr[i]) {
      return true;
    }
  }
  return false;
}

let arr = [1, 4, 5, 6, 2];
console.log(tripleUp(arr));

//================================================================================
// Question:-167
// Givalen start and end numbers, return a new array containing the sequence of integers from start
// up to but not including end, so start=5 and end=10 yields {5, 6, 7, 8, 9}. The end number will be
// greater or equal to the start number. Note that a length-0 array is valalid. (See also: FizzBuzz Code)

//fizzArray3(5, 10) → [5, 6, 7, 8, 9]
//fizzArray3(11, 18) → [11, 12, 13, 14, 15, 16, 17]
//fizzArray3(1, 3) → [1, 2]

function fizzArray(start, end) {
  let resArr = new Array();
  for (let i = start; i < end; i++) {
    resArr.push(i);
  }
  return resArr;
}

let start = 5;
let end = 10;
console.log(fizzArray(start, end));

//====================================================================================
// Question:-168
// Return an array that is "left shifted" by one -- so {6, 2, 5, 3} returns {2, 5, 3, 6}. You may modify
//and return the givalen array, or return a new array.

//shiftLeft({6, 2, 5, 3}) → {2, 5, 3, 6}
//shiftLeft({1, 2}) → {2, 1}
//shiftLeft({1}) → {1}

function shiftLeft(arr) {
  let resArr = new Array(arr.length);
  resArr[arr.length - 1] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    resArr[i - 1] = arr[i];
  }
  return resArr;
}
let arr = [7, 6, 7, 3, 6];
console.log(shiftLeft(arr));

//=======================================================================================
// Question:-169
// For each multiple of 10 in the givalen array, change all the valalues following it to be that multiple of 10,
// until encountering another multiple of 10. So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}.

//tenRun([2, 10, 3, 4, 20, 5]) → [2, 10, 10, 10, 20, 20]
//tenRun([10, 1, 20, 2]) → [10, 10, 20, 20]
//tenRun([10, 1, 9, 20]) → [10, 10, 10, 20]


//let arr = [2, 10, 3, 4, 20, 5];

let a = 5;
console.log(a % 10 == 0);

//========================================================================================
// Question:-170
// Givalen a non-empty array of ints, return a new array containing the elements from the original array that
// come before the first 4 in the original array. The original array will contain at least one 4. Note that
// it is valalid in javala to create an array of length 0.

//pre4([1, 2, 4, 1]) → [1, 2]
//pre4([3, 1, 4]) → [3, 1]
//pre4([1, 4, 4]) → [1]

function pre4(arr) {
  let resArr = new Array();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 4) break;
    resArr.push(arr[i]);
  }
  return resArr;
}
let arr = [1, 4, 4];
console.log(pre4(arr));

//==================================================================================
// Question:-171
// Givalen a non-empty array of ints, return a new array containing the elements from the original array that
//come after the last 4 in the original array. The original array will contain at least one 4. Note that it
// is valalid in javala to create an array of length 0.

//post4([2, 4, 1, 2]) → [1, 2]
//post4([4, 1, 4, 2]) → [2]
//post4([4, 4, 1, 2, 3]) → [1, 2, 3]

function post4(arr) {
  let resArr = new Array();
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == 4) break;
    resArr.push(arr[i]);
  }
  //return resArr;
  let res = [];
  for (let i = resArr.length - 1; i >= 0; i--) {
    res.push(resArr[i]);
  }
  return res;
}

let arr = [4, 4, 1, 2, 3];
console.log(post4(arr));

//---------------------------------------------------------------------------------------
// Question:-172
// We'll say that an element in an array is "alone" if there are valalues before and after it,
//and those valalues are different from it. Return a valersion of the givalen array where evalery instance
// of the givalen valalue which is alone is replaced by whichevaler valalue to its left or right is larger.

//notAlone([1, 2, 3], 2) → [1, 3, 3]
//notAlone([1, 2, 3, 2, 5, 2], 2) → [1, 3, 3, 5, 5, 2]
//notAlone([3, 4], 3) → [3, 4]
function notAlone(arr) {
  // if (arr.length < 3) return arr;

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && i < arr.length - 1 && arr[i] == valalue) {
      if (arr[i] != arr[i - 1] && arr[i] != arr[i + 1]) {
        arr[i] = Math.max(arr[i - 1], arr[i + 1]);
      }
    }
  }
  return arr;
}

let arr = [3, 4];
let valalue = 3;
console.log(notAlone(arr, valalue));

//====================================================================================
// Question:-173
// Return an array that contains the exact same numbers as the givalen array, but rearranged so that all the
// zeros are grouped at the start of the array. The order of the non-zero numbers does not matter.
//So {1, 0, 0, 1} becomes {0 ,0, 1, 1}. You may modify and return the givalen array or make a new array.

//zeroFront([1, 0, 0, 1]) → [0, 0, 1, 1]
//zeroFront([0, 1, 1, 0, 1]) → [0, 0, 1, 1, 1]
//zeroFront([1, 0]) → [0, 1]
function zeroFront(arr) {
  //----------------------------------------------
  let zeroC = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) zeroC++;
  }
  let resArr = new Array();

  for (let i = 0; i < zeroC; i++) {
    resArr[i] = 0;
  }
  let ele;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      ele = arr[i];
      break;
    }
  }
  for (let i = zeroC; i < arr.length; i++) {
    resArr[i] = ele;
  }
  //-----------------------------------------------------
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr[i] = arr[count];
      arr[count] = 0;
      count++;
    }
  }

  return resArr;
}

let arr = [1, 0];
console.log(zeroFront(arr));

//===============================================================================
// Question:-174
// Return a valersion of the givalen array where all the 10's havale been removaled. The remaining elements should
//shift left towards the start of the array as needed, and the empty spaces a the end of the array should
// be 0. So {1, 10, 10, 2} yields {1, 2, 0, 0}. You may modify and return the givalen array or make a new array.

//withresultTen({1, 10, 10, 2}) → {1, 2, 0, 0}
//withresultTen({10, 2, 10}) → {2, 0, 0}
//withresultTen({1, 99, 10}) → {1, 99, 0}

function withresultTen(arr) {
  let resArr = new Array(arr.length);
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 10) {
    } else {
      resArr[j] = arr[i];
      j++;
    }
  }
  for (let i = j; i < arr.length; i++) {
    resArr[i] = 0;
  }
  return resArr;
}
let arr = [10, 2, 10];
console.log(withresultTen(arr));

//================================================================================
// Question:-175
// fizzBuzz

function fizzbuzz(start, end) {
  let resArr = new Array();
  for (let i = start; i < end; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      resArr.push('fizzBuzz');
    } else if (i % 3 == 0) {
      resArr.push('Fizz');
    } else if (i % 5 == 0) {
      resArr.push('Buzz');
    } else {
      resArr.push(i);
    }
  }
  return resArr.join(',').split(',');
}
let start = 1;
let end = 35;
console.log(fizzbuzz(start, end));

//=======================================================================================
// Array:-3 Hard problem with complex logic and with two loop.
// Question:-176
// Consider the leftmost and righmost appearances of some valalue in an array. We'll say that the "span"
//is the number of elements between the two inclusivale. A single valalue has a span of 1. Returns the
//largest span found in the givalen array. (Efficiency is not a priority.)

//maxSpan([1, 2, 1, 1, 3]) → 4
//maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
//maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6

function maxSpan(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        let t = i - j + 1;
        if (t > result) {
          result = t;
        }
      }
    }
  }
  return result;
}

let arr = [1, 2, 1, 1, 3];
console.log(maxSpan(arr));

//=========================================================================================
// Question:-177
//
//let a = 'abcdeeeffg';
//let res = Array.from(new Set(a));
//console.log(res);

// let score = [100, 80, 80, 20];
// score = Array.from(score);
// console.log(score);
// score = Array.from(new Set(score));
// console.log(score);
// console.log(typeof score);

function leaderBoard(score, alice) {
  score = Array.from(new Set(score));
  console.log(score);
  let rank_Res = [];

  for (let i = 0; i < alice.length; i++) {
    while (score[0] && alice[i] >= score[score.length - 1]) {
      score.pop();
    }
    rank_Res.push(score.length + 1);
  }
  return rank_Res;
}

let score = [100, 90, 90, 80];
let alice = [70, 80, 105];
console.log(leaderBoard(score, alice));

//====================================================================================
// Question:-178
// Return an array that contains exactly the same numbers as the givalen array, but rearranged so that evalery 3 is
// immediately followed by a 4. Do not movale the 3's, but evalery other number may movale. The array contains the
// same number of 3's and 4's, evalery 3 has a number after it that is not a 3, and a 3 appears in the array
// before any 4.

//fix34([1, 3, 1, 4]) → [1, 3, 4, 1]
//fix34([1, 3, 1, 4, 4, 3, 1]) → [1, 3, 4, 1, 1, 3, 4]
//fix34([3, 2, 2, 4]) → [3, 4, 2, 2]

function fix34(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == 4 && arr[j] == 3) {
        temp = arr[j + 1]; // swaping operation going on.
        arr[j + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
let arr = [1, 3, 1, 4];
console.log(fix34(arr));

//================================================================================================
// Question:-179
// (This is a slightly harder valersion of the fix34 problem.) Return an array that contains exactly the same
// numbers as the givalen array, but rearranged so that evalery 4 is immediately followed by a 5. Do not movale the 4's,
//but evalery other number may movale. The array contains the same number of 4's and 5's, and evalery 4 has a number
// after it that is not a 4. In this valersion, 5's may appear anywhere in the original array.

//fix45([5, 4, 9, 4, 9, 5]) → [9, 4, 5, 4, 5, 9]
//fix45([1, 4, 1, 5]) → [1, 4, 5, 1]
//fix45([1, 4, 1, 5, 5, 4, 1]) → [1, 4, 5, 1, 1, 4, 5]

function fix45(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == 5 && arr[j] == 4) {
        temp = arr[j + 1];
        arr[j + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

let arr = [5, 4, 9, 4, 9, 5];
console.log(fix45(arr));

//=======================================================================================================
// Question:-180
// Givalen a non-empty array, return true if there is a place to split the array so that the sum of the
// numbers on one side is equal to the sum of the numbers on the other side.

//canBalance([1, 1, 1, 2, 1]) → true
//canBalance([2, 1, 1, 2, 1]) → false
//canBalance([10, 10]) → true

function canBalance(arr) {
  let sum_1 = 0;   // some test cases will fail.
  let sum_2 = 0;
  let len = Math.floor(arr.length / 2);
  if (arr.length % 2 == 0) {
    for (let i = 0; i < len; i++) {
      sum_1 += arr[i];
    }
    for (let i = len; i < arr.length; i++) {
      sum_2 += arr[i];
    }
  } else {
    for (let i = 0; i <= len; i++) {
      sum_1 += arr[i];
    }
    for (let i = len + 1; i < arr.length; i++) {
      sum_2 += arr[i];
    }
  }
  if (sum_1 == sum_2) return true;
  else return false;
}

let arr = [2, 1, 1, 2, 1];
console.log(canBalance(arr));
//-------------------------------------------------------------------------------

// 2nd approch.
function canBalance(arr) {
  let left_Sum = 0;
  for (let i = 0; i < arr.length; i++) {
    left_Sum += arr[i];

    let right_Sum = 0;
    for (let j = arr.length - 1; j > i; j--) {
      right_Sum += arr[j];
    }
    if (left_Sum == right_Sum) return true;
  }
  return false;
}

let arr = [2, 1, 1, 2, 1];
console.log(canBalance(arr));

//---------------------------------------------------------
// 3rd Approch.
function canBalance(arr) {
  let right_Sum = 0;
  for (let i = 0; i < arr.length; i++) {
    right_Sum += arr[i];
  }
  let left_Sum = 0;
  for (let i = 0; i < arr.length; i++) {
    left_Sum += arr[i];
    right_Sum -= arr[i];
    if (right_Sum == left_Sum) return true;
  }
  return false;
}

let arr = [3, 2, 1, 1, 2, 3];
console.log(canBalance(arr));

//=======================================================================================
// Question:-181
// Givalen two arrays of ints sorted in increasing order, resulter and inner, return true if all of the numbers
//in inner appear in resulter. The best solution makes only a single "linear" pass of both arrays, taking
//advalantage of the fact that both arrays are already in sorted order.

//linearIn([1, 2, 4, 6], [2, 4]) → true
//linearIn([1, 2, 4, 6], [2, 3, 4]) → false
//linearIn([1, 2, 4, 4, 6], [2, 4]) → true

function linearIn(arrA, arrB) {
  let count = 0;
  let j = 0;
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] == arrB[j]) {
      count++;
      j++;
    } else if (arrA[i] > arrB[j]) {
      return false;
    }
    if (count == arrB.length) return true;
  }
  return false;
}

let arrA = [1, 2, 4, 6];
let arrB = [2, 4];
console.log(linearIn(arrA, arrB));

//=====================================================================================
// Question:-182
// Givalen n>=0, create an array length n*n with the following pattern, shown here for
// n=3 : {0, 0, 1,    0, 2, 1,    3, 2, 1} (spaces added to show the 3 groups).

//squareUp(3) → [0, 0, 1, 0, 2, 1, 3, 2, 1]
//squareUp(2) → [0, 1, 2, 1]
//squareUp(4) → [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]

function squareUp(n) {
  let result = new Array(n * n).fill(0);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result[i * n - j] = j;
    }
  }
  return result;
}

let n = 4;
console.log(squareUp(n));

//============================================================================================
// Question:-183
// Givalen n>=0, create an array with the pattern {1,    1, 2,    1, 2, 3,   ... 1, 2, 3 .. n}
//(spaces added to show the grouping). Note that the length of the array will be 1 + 2 + 3 ... + n,
// which is known to sum to exactly n*(n + 1)/2.

//seriesUp(3) → [1, 1, 2, 1, 2, 3]
//seriesUp(4) → [1, 1, 2, 1, 2, 3, 1, 2, 3, 4]
//seriesUp(2) → [1, 1, 2]

function seriesUP(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result.push(j);
    }
  }
  return result;
}

let n = 3;
console.log(seriesUP(n));

//==========================================================================================
// Question:-184
// We'll say that a "mirror" section in an array is a group of contiguous elements such that somewhere in
//the array, the same group appears in revalerse order. For example, the largest mirror section in
// {1, 2, 3, 8, 9, 3, 2, 1} is length 3 (the {1, 2, 3} part). Return the size of the largest mirror section
//found in the givalen array.

//maxMirror([1, 2, 3, 8, 9, 3, 2, 1]) → 3
//maxMirror([1, 2, 1, 4]) → 3
//maxMirror([7, 1, 2, 9, 7, 2, 1]) → 2

function maxMirror(arr) {
  let len = arr.length;
  let count = 0;
  let max = 0;
  for (let i = 0; i < len; i++) {
    count = 0;
    for (let j = len - 1; j >= 0 && i + count < len; j--) {
      if (arr[i + count] == arr[j]) {
        count++;
      } else {
        if (count > 0) {
          max = Math.max(count, max);
          count = 0;
        }
      }
    }
    max = Math.max(max, count);
  }
  return max;
}

let arr = [7, 1, 2, 9, 7, 2, 1];
console.log(maxMirror(arr));

//==================================================================================
// Question:-185
// Say that a "clump" in an array is a series of 2 or more adjacent elements of the same valalue.
//Return the number of clumps in the givalen array.

//countClumps([1, 2, 2, 3, 4, 4]) → 2
//countClumps([1, 1, 2, 1, 1]) → 2
//countClumps([1, 1, 1, 1, 1]) → 1

function countClumps(arr) {
  let len = arr.length;
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) {
      count++;
    }
    while (i < arr.length - 1 && arr[i] == arr[i + 1]) {
      i++;
    }
  }
  return count;
}

let arr = [1, 1, 1, 1, 1];
console.log(countClumps(arr));

//==============================================================================================

// Question:-186
// Givalen a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".

//helloName("Bob") → "Hello Bob!"
//helloName("Alice") → "Hello Alice!"
//helloName("X") → "Hello X!"

function helloName(str) {
  return 'Hello' + ' ' + str + '!';
}

let str = 'Bob';
console.log(helloName(str));

//===========================================================================================
// Question:-187
// Givalen two strings, a and b, return the result of putting them together in the order abba, e.g.
//"Hi" and "Bye" returns "HiByeByeHi".

//makeAbba("Hi", "Bye") → "HiByeByeHi"
//makeAbba("Yo", "Alice") → "YoAliceAliceYo"
//makeAbba("What", "Up") → "WhatUpUpWhat"

//============================================================================================
// Question:-188
// Functional:-01
// Givalen a list of integers, return a list where each integer is multiplied by 2.

//doubling([1, 2, 3]) → [2, 4, 6]
//doubling([6, 8, 6, 8, -1]) → [12, 16, 12, 16, -2]
//doubling([]) → []

function doubling(arr) {
  let resArr = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    resArr[i] = arr[i] * 2;
  }
  return resArr;
}
let arr = [1, 2, -1];
console.log(doubling(arr));

//==========================================================================================
// Question:-189
// Givalen a list of integers, return a list where each integer is multiplied with itself.

//square([1, 2, 3]) → [1, 4, 9]
//square([6, 8, -6, -8, 1]) → [36, 64, 36, 64, 1]
//square([]) → []

function square(arr) {
  let resArr = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    resArr[i] = arr[i] * arr[i];
  }
  return resArr;
}

let arr = [6, 8, -6, -8, 1];
console.log(square(arr));

//===========================================================================================
// Question:-190
// Givalen a list of strings, return a list where each string has "*" added at its end.

//addStar(["a", "bb", "ccc"]) → ["a*", "bb*", "ccc*"]
//addStar(["hello", "there"]) → ["hello*", "there*"]
//addStar(["*"]) → ["**"]

function addStar(arr) {
  let resArr = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    resArr[i] = arr[i] + '*';
  }
  return resArr;
}

let arrList = ['one', 'two', 'three'];
console.log(addStar(arrList));

//==============================================================================================
// Question:-191
// Givalen a list of strings, return a list where each string is replaced by 3 copies of the string
//concatenated together.

//copies3(["a", "bb", "ccc"]) → ["aaa", "bbbbbb", "ccccccccc"]
//copies3(["24", "a", ""]) → ["242424", "aaa", ""]
//copies3(["hello", "there"]) → ["hellohellohello", "theretherethere"]

function copies3(arr) {
  let resArr = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    let res = el.repeat(3);
    resArr[i] = res;
  }
  return resArr;
}

let arr = ['a', 'bb', 'sandeep'];
console.log(copies3(arr));

//=======================================================================================
// Question:-192
// Givalen a list of strings, return a list where each string has "y" added at its start and end.

//moreY(["a", "b", "c"]) → ["yay", "yby", "ycy"]
//moreY(["hello", "there"]) → ["yhelloy", "ytherey"]
//moreY(["yay"]) → ["yyayy"]

function moreY(arr) {
  let resArr = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    let res = 'y' + arr[i] + 'y';
    resArr[i] = res;
  }
  return resArr;
}

let arr = ['abc', 'ball', 'cat'];
console.log(moreY(arr));

//========================================================================================
// Question:-193
// Givalen a list of integers, return a list where each integer is added to 1 and the result is multiplied by 10.

//math1([1, 2, 3]) → [20, 30, 40]
//math1([6, 8, 6, 8, 1]) → [70, 90, 70, 90, 20]
//math1([10]) → [110]

function math1(arr) {
  let resArr = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    let el = (arr[i] + 1) * 10;
    resArr[i] = el;
  }
  return resArr;
}

let arr = [6, 8, 6, 8, 1];
console.log(math1(arr));

//================================================================================================
// Question:- 194
// Givalen a list of non-negativale integers, return an integer list of the rightmost digits. (Note: use %)

//rightDigit([1, 22, 93]) → [1, 2, 3]
//rightDigit([16, 8, 886, 8, 1]) → [6, 8, 6, 8, 1]
//rightDigit([10, 0]) → [0, 0]
function leftDigit(n) {
  while (n >= 10) {
    n = Math.floor(n / 10);
  }
  return Math.floor(n);
}

function right(el) {
  let reminder = el % 10;
  return reminder;
}

function rightDigit(arr) {
  let resArr = new Array();
  let resArrLeft = new Array();

  for (let i = 0; i < arr.length; i++) {
    // let ele = right(arr[i]);
    let ele1 = leftDigit(arr[i]);
    // resArr.push(ele);
    resArrLeft.push(ele1);
  }
  // return resArr;
  return resArrLeft;
}
let arr = [10, 0];
console.log(rightDigit(arr));

//=================================================================================
// Question:-195
// Givalen a list of strings, return a list where each string is convalerted to lower case
//(Note: String toLowerCase() method).

//lower(["Hello", "Hi"]) → ["hello", "hi"]
//lower(["AAA", "BBB", "ccc"]) → ["aaa", "bbb", "ccc"]
//lower(["KitteN", "ChocolaTE"]) → ["kitten", "chocolate"]

function lower(arr) {
  let resArr = new Array();
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i].toLowerCase();
    resArr.push(ele);
  }
  return resArr;
}

let arr = ['Hello', 'Hi', 'AAA', 'SAndEEp'];
console.log(lower(arr));

//===================================================================
// Question:-196
// convalert lower to upper and uppert to lower.

function convalert(str) {
  let st = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      //convalert lower case to upper case.
      let conval = str.charCodeAt(i) - 32;
      st += String.fromCharCode(conval);
    } else {
      // convalert to upper case to lower case.
      let conval_2 = str.charCodeAt(i) + 32;
      st += String.fromCharCode(conval_2);
    }
  }
  return st;
}
let str = 'SandEEp';
console.log(convalert(str));

//=======================================================================================
// Question:-197
// during bit manipulation:-

function convalert(str) {
  let st = '';
  for (let i = 0; i < str.length; i++) {
    let con = str.charCodeAt(i) ^ (1 << 5);
    st += String.fromCharCode(con);
  }
  return st;
}

let str = 'ZandEEp';
console.log(convalert(str));

//=======================================================================================
// Question:-198
// givalen an array convalert upper case to lower case and lower case to upper case.

function convalert(stArr) {
  let resArr = new Array();
  for (let i = 0; i < stArr.length; i++) {
    let s = stArr[i];
    let ss = '';
    let index = 0;
    while (s.length > index) {
      let con = s.charCodeAt(index) ^ (1 << 5);
      ss += String.fromCharCode(con);
      index++;
    }
    resArr.push(ss);
    ss = '';
    index = 0;
  }
  return resArr;
}

let stArr = ['sAndeeP', 'praJaPATi', 'OjashWy', 'APPle'];
console.log(convalert(stArr));

//=============================================================================================
// Question:-199
// Givalen a list of strings, return a list where each string has all its "x" removaled.

//noX(["ax", "bb", "cx"]) → ["a", "bb", "c"]
//noX(["xxax", "xbxbx", "xxcx"]) → ["a", "bb", "c"]
//noX(["x"]) → [""]

function noX(strArr) {
  let resArr = new Array();
  for (let i = 0; i < strArr.length; i++) {
    let s = strArr[i];
    let index = 0;
    let ss = '';
    while (s.length > index) {
      if (s[index] != 'x') {
        ss += s[index];
      }
      index++;
    }
    resArr.push(ss);
    index = 0;
    ss = '';
  }
  return resArr;
}
let strArr = ['xbxbx', 'xxax', 'xxcx'];
console.log(noX(strArr));

//=============================================================================================
// Question:-200
// Givalen a list of integers, return a list of the integers, omitting any that are less than 0.

//noNeg([1, -2]) → [1]
//noNeg([-3, -3, 3, 3]) → [3, 3]
//noNeg([-1, -1, -1]) → []

function noNeg(arr) {
  let resArr = new Array();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      resArr.push(arr[i]);
    }
  }
  return resArr;
}

let arr = [-3, -3, 3, 3, -5, 5, -7, 10];
console.log(noNeg(arr));

//====================================================================================
// Question:-201
// Givalen a list of non-negativale integers, return a list of those numbers except omitting any that end with 9.
// (Note: % by 10)

//no9([1, 2, 19]) → [1, 2]
//no9([9, 19, 29, 3]) → [3]
//no9([1, 2, 3]) → [1, 2, 3]

function no9(arr) {
  let resArr = new Array();
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    let e = el % 10;
    if (e != 9) {
      resArr.push(e);
    }
  }
  return resArr;
}
let arr = [9, 19, 29, 3, 29, 1, 2, 6];
console.log(no9(arr));

//=============================================================================================
// Question:-202
// Givalen a list of integers, return a list of those numbers, omitting any that are between 13 and 19 inclusivale.

//noTeen([12, 13, 19, 20]) → [12, 20]
//noTeen([1, 14, 1]) → [1, 1]
//noTeen([15]) → []

function noTeen(arr) {
  let resArr = new Array();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 13 && arr[i] <= 19) {
    } else {
      resArr.push(arr[i]);
    }
  }
  return resArr;
}

let arr = [12, 13, 19, 20];
console.log(noTeen(arr));

//====================================================================================================
// Question:-203
// Givalen a list of strings, return a list of the strings, omitting any string that contains a "z".
// (Note: the str.contains(x) method returns a boolean)

//noZ(["aaa", "bbb", "aza"]) → ["aaa", "bbb"]
//noZ(["hziz", "hzello", "hi"]) → ["hi"]
//noZ(["hello", "howz", "are", "youz"]) → ["hello", "are"]

function noZ(strArr) {
  let resArr = new Array();
  for (let i = 0; i < strArr.length; i++) {
    let s = strArr[i];
    let index = 0;
    let flag = true;
    while (s.length > index) {
      if (s[index] == 'z') {
        flag = false;
      }
      index++;
    }
    index = 0;
    if (flag == true) {
      resArr.push(strArr[i]);
    }
  }
  return resArr;
}

let strArr = ['hello', 'howz', 'are', 'youz'];
console.log(noZ(strArr));

//=================================================================================
// Question:-204
// Givalen a list of strings, return a list of the strings, omitting any string length 4 or more.

//noLong(["this", "not", "too", "long"]) → ["not", "too"]
//noLong(["a", "bbb", "cccc"]) → ["a", "bbb"]
//noLong(["cccc", "cccc", "cccc"]) → []

function nolong(strArr) {
  let resArr = new Array();
  for (let i = 0; i < strArr.length; i++) {
    let s = strArr[i];
    if (s.length < 4) {
      resArr.push(strArr[i]);
    }
  }
  return resArr;
}

let strArr = [
  'this',
  'not',
  'too',
  'long',
  'sandeep',
  'you',
  'havale',
  'to',
  'imp',
];
console.log(nolong(strArr));

//==============================================================================================
// Question:-205
// Givalen a list of strings, return a list of the strings, omitting any string length 3 or 4.

//no34(["a", "bb", "ccc"]) → ["a", "bb"]
//no34(["a", "bb", "ccc", "dddd"]) → ["a", "bb"]
//no34(["ccc", "dddd", "apple"]) → ["apple"]

function no34(strArr) {
  let resArr = new Array();
  for (let i = 0; i < strArr.length; i++) {
    let s = strArr[i];
    if (s.length == 3 || s.length == 4) {
    } else {
      resArr.push(strArr[i]);
    }
  }
  return resArr;
}

let strArr = ['a', 'bb', 'ccc', 'apple', 'dddd'];
console.log(no34(strArr));

//==============================================================================================
// Question:-206
// Givalen a list of strings, return a list where each string has "y" added at its end, omitting any
// resulting strings that contain "yy" as a substring anywhere.

//noYY(["a", "b", "c"]) → ["ay", "by", "cy"]
//noYY(["a", "b", "cy"]) → ["ay", "by"]
//noYY(["xx", "ya", "zz"]) → ["xxy", "yay", "zzy"]

function noYY(strArr) {
  let resArr = new Array();
  for (let i = 0; i < strArr.length; i++) {
    let s = strArr[i];
    let s1 = s + 'y';
    let flag = false;
    for (let j = 0; j < s1.length - 1; j++) {
      if (s1.substring(j, j + 2) == 'yy') {
        flag = true;
      }
    }
    if (flag == false) {
      resArr.push(strArr[i]);
    }
    flag = false;
  }
  return resArr;
}
let strArr = ['a', 'yyb', 'c', 'cy', 'xx'];
console.log(noYY(strArr));

//=======================================================================================
// Question:-207
// Givalen a list of non-negativale integers, return a list of those numbers multiplied by 2,
//omitting any of the resulting numbers that end in 2.

//two2([1, 2, 3]) → [4, 6]
//two2([2, 6, 11]) → [4]
//two2([0]) → [0]

function two2(arr) {
  let resArr = new Array();
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i] * 2;
    let remainder = el % 10;
    if (remainder != 2) {
      resArr.push(el);
    }
  }
  return resArr;
}

let arr = [1, 2, 3, 21, 26, 31];
console.log(two2(arr));

//====================================================================================
// Question:-208
// Givalen a list of integers, return a list of those numbers squared and the product added to 10,
// omitting any of the resulting numbers that end in 5 or 6.

//square56([3, 1, 4]) → [19, 11]
//square56([1]) → [11]
//square56([2]) → [14]

function square56(arr) {
  let resArr = new Array();
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i] * arr[i] + 10;
    let reminder = el % 10;
    if (reminder == 5 || reminder == 6) {
    } else {
      resArr.push(el);
    }
  }
  return resArr;
}

let arr = [3, 1, 4];
console.log(square56(arr));

//=============================================================================================
// Question:-209
// Givalen a string, count the number of wordss ending in 'y' or 'z' -- so the 'y' in "heavaly" and the 'z'
//in "fez" count, but not the 'y' in "yellow" (not case sensitivale). We'll say that a y or z is at the
//end of a words if there is not an alphabetic letter immediately following it. (Note: Character.isLetter(char)
// tests if a char is an alphabetic letter.)

//countYZ("fez day") → 2
//countYZ("day fez") → 2
//countYZ("day fyyyz") → 2

function countYZ(str) {
  let count = 0;
  let s = str.split(' ');
  for (let i = 0; i < s.length; i++) {
    let el = s[i];
    if (el[el.length - 1] == 'y' || el[el.length - 1] == 'z') {
      count++;
    }
  }
  return count;
}
let str = 'day fyyyz';
console.log(countYZ(str));

//=============================================================================================
// Question:-210
// Givalen two strings, base and removale, return a valersion of the base string where all instances of the removale
//string havale been removaled (not case sensitivale). You may assume that the removale string is length 1 or more.
// Removale only non-ovalerlapping instances, so with "xxx" removaling "xx" leavales "x".

//withresultString("Hello there", "llo") → "He there"
//withresultString("Hello there", "e") → "Hllo thr"
//withresultString("Hello there", "x") → "Hello there"

function withresultString(base, removale) {
  let bLen = base.length;
  let rLen = removale.length;
  let lowbase = base.toLowerCase();
  let lowrem = removale.toLowerCase();
  let finalRes = '';

  for (let i = 0; i < bLen; i++) {
    if (i <= bLen - rLen) {
      let temp = lowbase.substring(i, i + rLen);
      if (temp != lowrem) {
        finalRes += base.substring(i, i + 1);
      } else {
        i += rLen - 1;
      }
    } else {
      let temp2 = lowbase.substring(i, i + 1);
      if (temp2 != lowrem) {
        finalRes += base.substring(i, i + 1);
      }
    }
  }
  return finalRes;
}
let str = 'Hello there';
let removale = 'llo';
console.log(withresultString(str, removale));

//===========================================================================================
// Question:-211
// Givalen a string, return true if the number of appearances of "is" anywhere in the string is equal
//to the number of appearances of "not" anywhere in the string (case sensitivale).

//equalIsNot("This is not") → false
//equalIsNot("This is notnot") → true
//equalIsNot("noisxxnotyynotxisi") → true

function equalISNot(str) {
  //let newStr = '';
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] != ' ') {
  //     newStr += str[i];
  //   }
  // }
  //newStr = str.toLowerCase();
  //-----------------------------------------------------------------------
  // let notC = 0;
  // let isC = 0;
  // for (let i = 0; i < str.length - 1; i++) {
  //   let temp1 = str.substring(i, i + 2);
  //   if (temp1 == 'is') isC++;
  // }
  // for (let i = 0; i < str.length - 2; i++) {
  //   let temp2 = str.substring(i, i + 3);
  //   if (temp2 == 'not') notC++;
  // }
  // if (notC == isC) return true;
  // else return false;
  //---------------------------------------------------------------------
  let len = str.length;
  let isCount = 0;
  let notCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (i < len - 2) {
      let temp1 = str.substring(i, i + 3);
      if (temp1 == 'not') notCount++;
    }
    if (i < len - 1) {
      let temp2 = str.substring(i, i + 2);
      if (temp2 == 'is') isCount++;
    }
  }
  if (isCount == notCount) return true;
  else return false;
}

let str = 'This is notnot';
console.log(equalISNot(str));

//===============================================================================================
// Question:-212
// We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right.
// Return true if all the g's in the givalen string are happy.

//gHappy("xxggxx") → true
//gHappy("xxgxx") → false
//gHappy("xxggyygxx") → false

function gHappy(str) {
  // //----------------------------------------------------------
  // for (let i = 1; i < str.length - 1; i++) {
  //   if (str[i] == 'g') {
  //     if (str[i - 1] == 'g' || str[i + 1] == 'g') return true;
  //   }
  // }
  // return false;
  //-------------------------------------------------------------
  let len = str.length;
  let happy = true;
  for (let i = 0; i < len; i++) {
    if (str[i] == 'g') {
      if (i > 0 && str[i - 1] == 'g') happy = true;
      else if (i < len - 1 && str[i + 1] == 'g') happy = true;
      else happy = false;
    }
  }
  return happy;
}

let str = 'xxggyygxx';
console.log(gHappy(str));

//=============================================================================
// Quuestion:-213
// We'll say that a "triple" in a string is a char appearing three times in a row. Return the number of
// triples in the givalen string. The triples may ovalerlap.

//countTriple("abcXXXabc") → 1
//countTriple("xxxabyyyycd") → 3
//countTriple("a") → 0

function counttriplet(str) {
  //-----------------------------------------------------------------------------------------
  // let count = 0;
  // for (let i = 0; i < str.length - 2; i++) {
  //   for (let j = i + 1; j < str.length - 1; j++) {
  //     for (let k = j + 1; k < str.length; k++) {       //   he will givale wrong answer always.
  //       // if ((str[i] == str[j]) == str[k]) count++;
  //       console.log(str[i] + ' ' + str[j] + ' ' + str[k]);
  //     }
  //   }
  // }
  // return count;
  //-----------------------------------------------------------------------------------------
  let count = 0;
  let len = str.length;
  for (let i = 0; i < len - 2; i++) {
    let temp = str[i];
    if (temp == str[i + 1] && temp == str[i + 2]) count++;
  }
  return count;
}

let str = 'xxxabyyyycd';
console.log(counttriplet(str));

//==========================================================================================
// Question:-214
// Givalen a string, return the sum of the digits 0-9 that appear in the string, ignoring all other characters.
// Return 0 if there are no digits in the string. (Note: Character.isDigit(char) tests if a char is one of the
// chars '0', '1', .. '9'. Integer.parseInt(string) convalerts a string to an int.)

//sumDigits("aa1bc2d3") → 6
//sumDigits("aa11b33") → 8
//sumDigits("Chocolate") →0

function sumDigits(str) {
  let sum = 0;
  let s = str.split('');
  for (let i = 0; i < s.length; i++) {
    let valal = str[i];
    let num = parseInt(valal);
    if (!isNaN(num)) {
      // important concept.
      sum += num;
    }
  }
  return sum;
}

let str = 'aa11b33';
console.log(sumDigits(str));

//=======================================================================================
// Question:-215
// Givalen a string, return the longest substring that appears at both the beginning and end of the string
//withresult ovalerlapping. For example, sameEnds("abXab") is "ab".

//sameEnds("abXYab") → "ab"
//sameEnds("xx") → "x"
//sameEnds("xxx") → "x"

function sameEnds(str) {
  let len = str.length;
  let half = Math.floor(len / 2);
  let front = '';
  let end = '';
  for (let i = half; i >= 0; i--) {
    front = str.substring(0, i);
    end = str.substring(len - i);
    if (front == end) break;
  }
  return front;
}

let str = 'abXYab';
console.log(sameEnds(str));

//========================================================================================
// Question:-216
// Givalen a string, return a string where evalery appearance of the lowercase words "is" has been replaced with
//"is not". The words "is" should not be immediately preceeded or followed by a letter -- so for example the
//"is" in "this" does not count. (Note: Character.isLetter(char) tests if a char is a letter.)

//notReplace("is test") → "is not test"
//notReplace("is-is") → "is not-is not"
//notReplace("This is right") → "This is not right"

function notReplace(str) {
  let strArr = str.split(' ');
  console.log(strArr);
  let n = 'not';
  let result = '';
  for (let i = 0; i < strArr.length; i++) {
    let s = strArr[i];
    if (s.length == 2) {
      if (s == 'is') {
        result = result + 'is' + ' ' + n;
      }
    } else {
      result = result + ' ' + s + ' ';
    }
  }
  return result;
}
let str = 'is-is';
console.log(notReplace(str));

//====================================================================================
// Question:-217
// Givalen an array and givalen an number add evalery digit to evalery array element if digit has been finised,
// then start the digit from 0 index.

function addingNumber(arr, n) {
  n = String(n);
  let resArr = new Array();
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = Number(n[j]);
    j++;
    resArr.push(num + arr[i]);
    if (n.length == j) {
      j = 0;
    }
  }
  return resArr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = 123456789;
console.log(addingNumber(arr, n));

//==========================================================================================
// Question:-218
// message = "scresult"
//key = 1939
//digitalCipher(message, key) ➞ [20, 12, 18, 30, 21]

//  s  c  o  u  t
// 19  3 15 21 20

//s  c  o  u  t
//19  3 15 21 20
//+1  9  3  9  1
//---------------
//20 12 18 30 21

function digitalCipher(message, key) {
  key = String(key);
  let res = [];
  for (let i = 0; i < message.length; i++) {
    // res.push(key[i % key.length] - 96 + message.charCodeAt(i));
    let ascii = message.charCodeAt(i);
    let accdChar = ascii - 96;
    // let strvalalue = key[i % key.length];
    let num = Number(key[i % key.length]);
    // console.log(num);
    res.push(accdChar + num);
  }
  return res;
}

let message = 'scresult';
let key = 1939;
console.log(digitalCipher(message, key));

//===================================================================================
// Question:-219
//----------------------------------------------------------------------
function findDigit(n) {
  while (n >= 10) {
    n = n % 10;
  }
  return n;
}
// not pass all test cases;

function sevalenBoom(arr) {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    let el = findDigit(arr[i]);
    if (el == 7) {
      flag = true;
    }
  }
  if (flag == true) return 'Boom!';
  else return 'there is no 7 in the array';
}
//--------------------------------------------------------------
function sevalenBoom(arr) {
  valar new_arr = arr.join('');
  console.log(typeof new_arr);
  if (new_arr.includes('7')) {
    return 'Boom!';
  } else {
    return 'there is no 7 in the array';
  }
}
//----------------------------------------------------------------

let arr = [2, 55, 60, 97, 86];
console.log(sevalenBoom(arr));

//====================================================================================
// Question:-220
// Mutations Only: Zeroes to the End

function zerostoEnd(arr) {
  //--------------------------------------------
  // let count = 0;
  // arr.sort(function (a, b) {
  //   return a - b;
  // });
  // // return arr;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] == 0) count++;
  // }
  // for (let i = 0; i < arr.length - count; i++) {
  //   arr[i] = arr[i];
  // }
  // return arr;
  //--------------------------------------------------
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == 0) {
      arr.splice(i, 1);
    //  console.log(arr);
      result.push(0);
    }
  }
  arr.push(...result);
  return arr;
}

let arr = [1, 2, 0, 0, 4, 0, 5];
console.log(zerostoEnd(arr));

//=====================================================================================
// Question:-221
// Create a function that takes the dimensions of two triangles (as arrays)
//and checks if the first triangle fits into the second one.
// doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true
//doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true
//doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false
//doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false
//Notes
//Triangle fits if it has the same or smaller size as the hole.
//The function should return false if the triangle with that dimensions is not possible.

function area_Triangle(arr) {
  let area = 0;
  let sum = 0;
  // let flag = true;

  if (
    arr[0] + arr[1] > arr[2] &&
    arr[1] + arr[2] > arr[0] &&
    arr[0] + arr[2] > arr[1]
  ) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    let p = Math.floor(sum / 2);
    area = Math.floor(
      Math.sqrt(p * (p - arr[0]) * (p - arr[1]) * (p - arr[2]))
    );
  } else {
    area = false;
  }
  return area;
}

function doesTriangeFit(arr_1, arr_2) {
  let area_1 = area_Triangle(arr_1);
  let area_2 = area_Triangle(arr_2);
  if (area_1 === false || area_2 === false) {
    return false;
  } else if (area_1 <= area_2) return true;
}

let arr_1 = [1, 1, 1];
let arr_2 = [2, 2, 2];
console.log(doesTriangeFit(arr_1, arr_2));

//===============================================================================
// Question:-222
// Programming Polyglot
//Create a function that takes a number that represents a person's programming language score,
// and returns an alphabetised array of programming languages they are proficient in. Arbitrarily assigned
//points for each language are listed below:
// getLanguages(25) ➞ ["C#", "JavalaScript", "PHP"]
//getLanguages(100) ➞ ["Javala", "Python", "Ruby"]
//getLanguages(53) ➞ ["C#", "Javala", "PHP", "Python"]

function getLanguage(n) {
  //----------------------------------------------------
  // let map = new Map();
  // map.set('c#', 1);
  // map.set('c++', 2);
  // map.set('javala', 4);
  // map.set('PHP', 16);
  // map.set('python', 32);
  // map.set('Ruby', 64);
  // map.set('shift', 128);
  // console.log(map);
  // let resLang = [];
  // for (let el in map) {
  //   if (map[el] <= n) {
  //     resLang.push(el, map[el]);
  //   }
  // }
  // return resLang;
  //------------------------------------------------------
  let result = [];
  let language = [
    'C#',
    'C++',
    'Javala',
    'JavalaScript',
    'PHP',
    'Python',
    'Ruby',
    'Swift',
  ];
  for (let i = 0; i < language.length; i++) {
    if ((n & (1 << i)) === 2 ** i) {
      result.push(language[i]);
    }
  }
  return result;
}
let n = 25;
console.log(getLanguage(n));

//============================================================================
// Question:-223
// maximum product subarray. find?
// arr=[2,3,-2,4]---[2,3]=6
// arr=[-2,0,-1]--- [0].

function maxiProduct(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  let max = Math.max(
    arr[0] * arr[1] * arr[arr.length - 1],
    arr[arr.length - 1] * arr[arr.length - 2 * arr[arr.length - 3]]
  );
  return max;
}

let arr = [2, 3, -2, 4];
console.log(maxiProduct(arr));

//===============================================================================
// Question:-224
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money
//stashed, the only constraint stopping you from robbing each of them is that adjacent houses havale security systems
// connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
//Givalen an integer array nums representing the amount of money of each house, return the maximum amount of money you
// can rob tonight withresult alerting the police.

//let arr = [1, 2, 3,1];  1+3=4;
//arr=[2,7,9,3,1]=12

function rob(arr) {
  let product = Number.MIN_valALUE;
  for (let i = 0; i < arr.length - 1; i += 2) {
    for (let j = i + 1; j < arr.length; j += 2) {
      product = Math.max(arr[i] + arr[j], product);
    }
  }
  return product;
}

let arr = [2, 7, 9, 3, 1];
console.log(rob(arr));

//========================================================================================
// Question:-225
// find prefix product of array.
//[1,2,3,4,5]--[1,2,6,24,120];

function prefixProduct(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i - 1];
  }
  return arr;
}
let arr = [2, 2, 3, 4, 5];
console.log(prefixProduct(arr));

//======================================================================================
// Question:-226
// find suffix product of array.
// [1,2,3,4,5]--[120,120,60,20,5]

function suffixProduct(arr) {
  for (let i = arr.length - 2; i >= 0; i--) {
    arr[i] = arr[i] * arr[i + 1];
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(suffixProduct(arr));

//====================================================================================
// Quuestion:-227
//  Product of Array Except Self
//Givalen an integer array nums, return an array answer such that answer[i] is equal to the product of all the
//elements of nums except nums[i].
//The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
//You must write an algorithm that runs in O(n) time and withresult using the divalision operation.
//Example 1:
//Input: nums = [1,2,3,4]
//resultput: [24,12,8,6]
//Example 2:
//Input: nums = [-1,1,0,-3,3]
//resultput: [0,0,9,0,0]

// Apporach :-01
// A brute force solution using nested loop.
//[2,1,3,4]--[12,24,8,6];

function productExceptSelf(arr) {
  let productArr = [];
  for (let i = 0; i < arr.length; i++) {
    let productCurrent = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        continue;
      }
      productCurrent = productCurrent * arr[j];
    }
    productArr.push(productCurrent);
  }
  return productArr;
}

let arr = [2, 1, 3, 4];
console.log(productExceptSelf(arr));
// time complexcity o(n^2).

//========================================================================================
// Question:-228
// Apporach 2 using prefix and suffix product array.

function productExceptSelf(arr) {
  let product = [];
  // let prefixProduct = [];
  let prefixProduct = new Array(arr.length);

  prefixProduct[0] = arr[0];

  //let suffixProduct = [];
  let suffixProduct = new Array(arr.length);
  suffixProduct[arr.length - 1] = arr[arr.length - 1];

  for (let i = 1; i < arr.length; i++) {
    prefixProduct[i] = arr[i] * prefixProduct[i - 1];
  }
  console.log(prefixProduct);

  for (let i = arr.length - 2; i >= 0; i--) {
    suffixProduct[i] = arr[i] * suffixProduct[i + 1];
  }
  console.log(suffixProduct);

  for (let i = 0; i < arr.length; i++) {
    product.push(prefixProduct[i] * suffixProduct[i]);
  }
  return product;
}

let arr = [1, 2, 3, 4];
console.log(productExceptSelf(arr));

//-----------------------------------------------------------------------------
function productExceptSelf(arr) {
  let prefixProduct = new Array(arr.length);
  let suffixProduct = new Array(arr.length);
  let product = new Array(arr.length);

  prefixProduct[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    prefixProduct[i] = arr[i - 1] * prefixProduct[i - 1];
  }
  console.log(prefixProduct);

  suffixProduct[arr.length - 1] = 1;
  for (let i = arr.length - 2; i >= 0; i--) {
    suffixProduct[i] = arr[i + 1] * suffixProduct[i + 1];
  }
  console.log(suffixProduct);

  for (let i = 0; i < arr.length; i++) {
    product[i] = prefixProduct[i] * suffixProduct[i];
  }
  return product;
}

let arr = [1, 2, 3, 4];
console.log(productExceptSelf(arr));

//==============================================================================
// Question:-229
//Givalen an array of integers nums and an integer k, return the number of contiguous subarrays where the
// product of all the elements in the subarray is strictly less than k.
//Example 1:
//Input: nums = [10,5,2,6], k = 100
//resultput: 8
//Explanation: The 8 subarrays that havale product less than 100 are:
//[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
//Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
//Example 2:
//Input: nums = [1,2,3], k = 0
//resultput: 0

function sumarrayProductLessThanK(arr, k) {
  let count = 0;
  let multiplication;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < k) {
      count++;
    }
    multiplication = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      multiplication = multiplication * arr[j];
      if (multiplication < k) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
}

let arr = [10, 5, 2, 6];
let k = 100;
console.log(sumarrayProductLessThanK(arr, k));

//=================================================================================================
// Question:-230
// rotate an array..
// Givalen an array, rotate the array to the right by k steps, where k is non-negativale.
//Example 1:
//Input: nums = [1,2,3,4,5,6,7], k = 3
//resultput: [5,6,7,1,2,3,4]
//Explanation:
//rotate 1 steps to the right: [7,1,2,3,4,5,6]
//rotate 2 steps to the right: [6,7,1,2,3,4,5]
//rotate 3 steps to the right: [5,6,7,1,2,3,4]
//Example 2:
//Input: nums = [-1,-100,3,99], k = 2
//resultput: [3,99,-1,-100]
//Explanation:
//rotate 1 steps to the right: [99,-1,-100,3]
//rotate 2 steps to the right: [3,99,-1,-100]

function rotate(arr, k) {
  while (k--) {
    let last = arr.pop();
    arr.unshift(last);
  }
  return arr;
}
let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log(rotate(arr, k));

//================================================================================
// Question:-231
//Find First and Last Position of Element in Sorted Array
//Givalen an array of integers nums sorted in non-decreasing order, find the starting and ending position of
//a givalen target valalue.
//If target is not found in the array, return [-1, -1].
//You must write an algorithm with O(log n) runtime complexity.
//Example 1:
//Input: nums = [5,7,7,8,8,10], target = 8
//resultput: [3,4]
//Example 2:
//Input: nums = [5,7,7,8,8,10], target = 6
//resultput: [-1,-1]
//Example 3:
//Input: nums = [], target = 0
//resultput: [-1,-1]

function searchRange(arr, target) {
  let notFound = [-1, -1];
  let res = [];
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      res.push(i);
      res.push(i + 1);
      flag = true;
      break;
    }
  }
  if (flag == true) return res;
  else return notFound;
}
let arr = [5, 7, 7, 8, 8, 10];
let target = 12;
console.log(searchRange(arr, target));

//=======================================================================================
//Givalen n>=0, create an array length n*n with the following pattern, show
//n here for n=3 : {0, 0, 1,    0, 2, 1,    3, 2, 1} (spaces added to show the 3 groups).

//squareUp(3) → [0, 0, 1, 0, 2, 1, 3, 2, 1]
//squareUp(2) → [0, 1, 2, 1]
//squareUp(4) → [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]

function pattern(n) {
  let result = [];
  // let str="";
  for (let i = 1; i <= n; i++) {
    for (let j = n; j >= 1; j--) {
      if (j > i) {
        result.push(0);
      } else {
        // str+=j+" ";
        result.push(j);
      }
    }
    // str+="\n";
  }
  console.log(result);
}
let n = 6;
pattern(n);

//====================================================================================================

function shiftZEro(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) count++;
  }
  let len = arr.length - count;
  let i = len - 1;
  // for (let i = len - 1; i >= 0;) {
  for (let j = 0; j < len; j++) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
    i--;
  }

  return arr;
}

let arr = [1, 0, 0, 4, 5];
console.log(shiftZEro(arr));

//================================================================================
function zero(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
}

let arr = [1, 2, 0, 4, 0, 0, 5];
console.log(zero(arr));

//===================================================================================
function heigestPair(arr) {
  let map = new Map();
  // let strArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   let st = String(arr[i]);
  //   strArr.push(st);
  // }
  //  console.log(strArr);
//--------------------------------------------------
  for (let el of arr) {
    if (map[el]) {
      map[el]++;
    } else {
      map[el] = 1;
    }
  }


  //--------------------------------------------------------
  // for (valar i = 0; i < arr.length; i++) {
  //   if (map.has(arr[i])) {
  //     map.set(arr[i], map.get(arr[i]) + 1);
  //   } else {
  //     map.set(arr[i], 1);
  //   }
  // }
  //--------------------------------------------------------
  console.log(map);
  console.log(map.length);
  // let flag = false;
  // let result = [];
  // for (let ell in map) {
  //   if (ell > 1) {
  //     result.push(map[ell]);
  //     flag = true;
  //     result.push(flag);
  //     break;
  //   }
  // }
  // if (flag == true) {
  //   return result;
  // } else {
  //   return flag;
  // }
}

let arr = ['a', 'a', 'q', 'q', '6'];
console.log(heigestPair(arr));

//=======================================================================

function heigestPair(arr) {
  let hp = new Map();
  for (let el of arr) {
    if (hp[el]) {
      hp[el]++;
    } else {
      hp[el] = 1;
    }
  }
  console.log(hp);
  let result = [];
  let flag = false;

  for (let ell in hp) {
    if (hp[ell] > 1) {
      result.push(ell);
      result.push(true);
      flag = true;
      break;
    }
    // console.log(ell);
  }
  if (flag == true) {
    return result;
  }
  return flag;
}

let arr = ['a', 'a', 'q', 'q', '6'];
console.log(heigestPair(arr));

//========================================================================================
//Balanced wordss
//We can assign a valalue to each character in a words, based on their position in the alphabet
// (a = 1, b = 2, ... , z = 26). A balanced words is one where the sum of valalues on the left-hand side of the words
//equals the sum of valalues on the right-hand side. For odd length wordss, the middle character (balance point) is ignored.
//Write a function that returns true if the words is balanced, and false if it's not.
//Examples
//balanced("zips") ➞ true
// "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true
//balanced("brake") ➞ false
// "brake" = "br|ke" = 2+18|11+5 = 20|16 = false

function balanced(str) {
  let len = str.length;
  let mid = ~~(len / 2);
  let num_1 = 0;
  let num_2 = 0;

  if (len % 2 == 0) {
    for (let i = 0; i < mid; i++) {
      num_1 += str.charCodeAt(i) - 96;
    }
    for (let k = mid; k < len; k++) {
      num_2 += str.charCodeAt(k) - 96;
    }
  } else {
    for (let i = 0; i < mid; i++) {
      num_1 += str.charCodeAt(i) - 96;
    }
    for (let jj = mid + 1; jj < len; jj++) {
      num_2 += str.charCodeAt(jj) - 96;
    }
  }
  if (num_1 == num_2) return true;
  else return false;
}

let str = 'brake';
console.log(balanced(str));

//======================================================================================

function diamondArrays(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(Array(i).fill(i));
  }

  for (let i = n - 1; i >= 1; i--) {
    result.push(Array(i).fill(i));
  }
  return result;
}

let n = 5;
console.log(diamondArrays(n));

//==========================================================================================
// givalen an string find result how  many character are repeated.
//let str="abccdb"
// a==1
// b==2
// c==2
// d==1

function repeatedCount(str) {
  let count = 0;
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j] && !result.includes(str[j])) {
        result.push(str[i]);
        count++;
      }
    }
  }
  return count;
}

let str = 'abccdbccaa';
console.log(repeatedCount(str));

//==================================================================================================

function repeatedCount(str) {
  let map = new Map();
  let s = str.split(''); 
  console.log(s);

  for (let el of s) {
    if (map[el]) {
      map[el]++;
    } else {
      map[el] = 1;
    }
  }
  console.log(map);

  let count = 0;
  for (let ell in map) {
    if (map[ell] > 1) {
      count++;
    }
  }
  return count;
}

let str = 'abccdbccaa';
console.log(repeatedCount(str));

//================================================================================================

function left_rotation(n, d, t) {
  // let bit = 32;
  let binary = n.toString(2);
  // console.log(binary);
  let len = binary.length;
  //console.log(len);
  let cut = len - d;
  // console.log(cut);
  if (t == false) {
    // let bit = 32;
    let a = n << d;
    //  console.log(a);
    let b = n >> cut;
    return a | b;
  } else {
    let a = n >> d;
    let b = n << cut;
    return a | b;
  }
}

let n = 16;
let d = 1;
let t = false;

console.log(left_rotation(n, d, t));

//============================================================================================

function decode(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let num = str.charCodeAt(i);
    result[i] = 0;
    while (num > 0) {
      result[i] += num % 10;
      num = ~~(num / 10);
    }
  }
  return result;
}

//let str = 'something challenging';
let str = 'wonderful';
console.log(decode(str));

//==========================================================================================
// Givalen an array of strings nums containing n unique binary strings each of length n, return a binary string
//of length n that does not appear in nums. If there are multiple answers, you may return any of them.
//Example 1:
//Input: nums = ["01","10"]
//Output: "11"
//Explanation: "11" does not appear in nums. "00" would also be correct.
//Example 2:
//Input: nums = ["00","01"]
//Output: "11"
//Explanation: "11" does not appear in nums. "10" would also be correct.
//Input: nums = ["111","011","001"]
//Output: "101"
//Explanation: "101" does not appear in nums. "000", "010", "100", and "110" would also be correct.

function differentBinaryString(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][i] == '0') {
      result += '1';
    } else {
      result += '0';
    }
  }
  return result;
}

let arr = ['111', '011', '001'];
console.log(differentBinaryString(arr));

//===========================================================================================

function addingArray(arr, n) {
  let result = [];
  let re = '';
  for (let i = 0; i < n; i++) {
    re += arr[i];
  }
  result.push(re);
  if (result.length == n * n) {
    console.log(result);
  }
}

function generatrBinaryString(n, arr, i) {
  if (i == n) {
    addingArray(arr, n);
    return;
  }

  arr[i] = 0;
  generatrBinaryString(n, arr, i + 1);

  arr[i] = 1;
  generatrBinaryString(n, arr, i + 1);
}

let n = 4;
let arr = new Array(n).fill(0);

generatrBinaryString(n, arr, 0);

//==========================================================================================
// Minimum Number of Steps to Make Two Strings Anagram II
//You are givalen two strings s and t. In one step, you can append any character to either s or t.
//Return the minimum number of steps to make s and t anagrams of each other.
//An anagram of a string is a string that contains the same characters with a different (or the same) ordering.
//Example 1:
//Input: s = "leetcode", t = "coats"
//Output: 7
//Explanation:
//- In 2 steps, we can append the letters in "as" onto s = "leetcode", forming s = "leetcodeas".
//- In 5 steps, we can append the letters in "leede" onto t = "coats", forming t = "coatsleede".
//"leetcodeas" and "coatsleede" are now anagrams of each other.
//We used a total of 2 + 5 = 7 steps.
//It can be shown that there is no way to make them anagrams of each other with less than 7 steps.
//Example 2:
//Input: s = "night", t = "thing"
//Output: 0
//Explanation: The givalen strings are already anagrams of each other. Thus, we do not need any further steps.
//"cotxazilut"
//"nahrrmcchxwrieqqdwdpneitkxgnt"
//
function minStep(s, t) {
  let map = new Map();

  for (let el of s) {
    if (map[el]) {
      map[el]++;
    } else {
      map[el] = 1;
    }
  }
  console.log(map);
  let count = 0;
  for (let el in map) {
    if (map[el] > 1) {
      count++;
    }
  }
  console.log(count);

  let present = 0;
  let nonpresent = 0;
  for (let i = 0; i < s.length; i++) {
    if (t.includes(s[i])) {
      present++;
    } else {
      nonpresent++;
    }
  }
  // console.log(present);
  // console.log(nonpresent);
  let pre = 0;
  let non_ = 0;
  for (let i = 0; i < t.length; i++) {
    if (s.includes(t[i])) {
      pre++;
    } else {
      non_++;
    }
  }
  // console.log(pre);
  // console.log(non_);
  return nonpresent + non_;
}
let s = 'leetcode';
let t = 'coats';
console.log(minStep(s, t));

//======================================================================================================
//let arr = ['S', 'a', 't'];
//let str = 'darling';
//let st = str.splice(1, 1);
//console.log(st);

function removaleOccourecence(s, part) {
  let stack = [];

  // stack.push(10);
  // stack.push(20);
  // console.log(stack);
  let res = '';
  for (let i = 0; i < s.length; i++) {
    if (res.length == part.length) {
      stack.push(res);
      if (stack[0] == part) {
        stack.pop();
        res = '';
      } else {
        res = '';
      }
    } else {
      res += s[i];
    }
  }
  console.log(stack);
}
let s = 'axxxxyyyyb';
let part = 'xy';
console.log(removaleOccourecence(s, part));

//===================================================================================

function removaleOccourecence(s, part) {
  while (s.includes(part)) {
    s = s.replace(part, '');
  }
  return s;
}

let s = 'axxxxyyyyb';
let part = 'xy';
console.log(removaleOccourecence(s, part));

//===================================================================================

function numOfPair(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        count++;
      }
      if (arr[j] + arr[i] == target) {
        count++;
      }
    }
  }
  return count;
}

let arr = ['777', '7', '77', '77'];
let target = '7777';
console.log(numOfPair(arr, target));

//==========================================================================================

// function smallest_Subsequence(str) {
//   let set = new Set(str);
//   let arr = Array.from(set);
//   let res = '';
//   for (let i = 0; i < arr.length; i++) {
//     res += arr[i];
//   }
//   return res;
// }

// let str = 'bcabc'; //bca
// console.log(smallest_Subsequence(str));
//----------------------------------------------------------------------------------------
let A = ['sandeep'];
 function serial (A){
    let ans = '';
    let i =0;
    let count=0;
    while ( i<A.length){
      ans+=A[i];
ans+=count
      ans+='~';
      count++;
      i++
    
    }
    
    return ans;
  }
  console.log(serial(A));

//========================================================================================
// Monotonic Stack:-
// A monotonic stack is a stack whose elements are monotonically increasing or decreasing. It contains all
//qualities that a typical stack has and its elements are all monotonic decreasing or increasing.
//Below are the features of a monotonic stack:
//It is a range of queries in an array situation
//The minima/maxima elements
//When an element is popped from the monotonic stack, it will nevaler be utilised again.
// Example:---

function monotonic_Stack(arr) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length != 0 && stack[stack.length - 1] > arr[i]) {
      stack.pop();
    }
    stack.push(arr[i]);
  }
  return stack;
}

let arr = [2, 3, 7, 11, 5, 17, 19]; //  Answer:-[2, 3, 5, 17, 19]
console.log(monotonic_Stack(arr));

//---------------------------------------------------------------------------------------------
//Givalen an array find the next greater element for evalery elements. next greater element of a element
//in the first greater element on the right side of the array. element for which no greater element
//exits consider as next greater element is -1.

//brute force approach

function next_Greater_Element(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let nextGreaterEle = -1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        nextGreaterEle = arr[j];
        break;
      }
    }
    // result[i] = nextGreaterEle;
    result.push(nextGreaterEle);
  }
  return result;
}

let arr = [3, 2, 8, 7, 6, 17, 12];
console.log(next_Greater_Element(arr));

//===================================================================================
// An efficient solution using stack - travalesing from left to right.

function next_Greater_Element(arr) {
  let le = arr.length;
  let result = new Array(le).fill(0);
  let stack = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    let el = arr[i];
    // if stack is empty, no next greater element.
    while (stack.length == 0) {
      stack.push(el);
      result[i] = -1;
      continue;
    }

    // if top of stack is greater, it is next greater.
    while (stack[stack.length - 1] > el) {
      stack.push(el);
      result[i] = stack[stack.length - 1];
    }

    // removale all element smaller than element
    while (stack[stack.length - 1] <= el && stack.length != 0) {
      stack.pop();
    }

    if (stack.length == 0) {
      result[i] = -1;
    } else {
      result[i] = stack[stack.length - 1];
    }

    stack.push(el);
  }
  return result;
}

let arr = [1, 3, 4, 1, 2];
//let arr = [6, 4, 3, 8, 7, 12, 15, 16, 2, 1, 5, 11, 13, 9];
console.log(next_Greater_Element(arr));

//================================================================================================

function nge(arr) {
  let b = new Array(arr.length).fill(-1);
  let stack = [];
  stack.push(0);
  for (let i = 1; i < arr.length; i++) {
    while (stack.length != 0 && stack[stack.length - 1] < arr[i]) {
      b[i] = arr[i];
      stack.pop();
    }
    stack.push(i);
  }
  return b;
}

let arr = [13, 7, 6, 12, 10];
console.log(nge(arr));

//=============================================================================================
// Sevalen Ate Nine
//A number can eat the number to the right of it if it's smaller than itself. After eating that number,
// it becomes the sum of itself and that number. Your job is to create a function that returns the final
// array after the leftmost element has finished "eating".
//Examples
//[5, 3, 7] ➞ [8, 7] ➞ [15]
// 5 eats 3 to become 8
// 8 eats 7 to become 15

function nomNam(arr) {
  // let le = arr.length;
  while (arr.length != 1) {
    if (arr[0] > arr[1]) {
      arr[1] = arr[0] + arr[1];
      arr = arr.slice(1);
    } else {
      break;
    }
  }
  return arr;
}

//let arr = [1, 2, 3];
let arr = [9, 8, 60, 2, 50];
console.log(nomNam(arr));

//===================================================================================
// Product of Remaining Elements
//Write a function that returns true if you can partition an array into one element and the rest,
// such that this element is equal to the product of all other elements excluding itself.
//Examples
//canPartition([2, 8, 4, 1]) ➞ true
// 8 = 2 x 4 x 1
//canPartition([-1, -10, 1, -2, 20]) ➞ false

//canPartition([-1, -20, 5, -1, -2, 2]) ➞ true

function canPartitions(arr) {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      //  product = 1;
      if (i == j) {
        continue;
      }
      product *= arr[j];
    }
    if (el == product) flag = true;
  }
  return flag;
}

let arr = [-1, -20, 5, -1, -2, 2];
console.log(canPartitions(arr));

//==================================================================================
function nge(arr) {
  let nextGreaterEle = new Array(arr.length);
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack.length == 0) {
      stack.push(i);
    }

    while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      let po = stack.pop();
      nextGreaterEle[po] = arr[i];
    }
    stack.push(i);
  } // for loop end
  while (stack.length != 0) {
    // this loop will be handle only -1 valalue
    let po = stack.pop(); // where -1 valalue want to put up.
    nextGreaterEle[po] = -1;
  }
  return nextGreaterEle;
}

let arr = [13, 7, 6, 12, 10];
console.log(nge(arr));

//=========================================================================================
// Example 1:
//Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
//Output: [-1,3,-1]
//Explanation: The next greater element for each value of nums1 is as follows:
//- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
//- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
//- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
//Example 2:
//Input: nums1 = [2,4], nums2 = [1,2,3,4]
//Output: [3,-1]
//Explanation: The next greater element for each value of nums1 is as follows:
//- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
//- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

function nextGreaterElement(nums1, nums2) {
  let result = [];
  for (let val of nums1) {
    const index = nums2.indexOf(val);
    let find = false;
    for (let j = index + 1; j < nums2.length; j++) {
      if (nums2[j] > val) {
        result.push(nums2[j]);
        find = true;
        break;
      }
    }
    if (find == false) {
      result.push(-1);
    }
  }
  return result;
}

let nums1 = [4, 1, 2];
let nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));

//==========================================================================================
// Input: nums = [1,2,1]
//Output: [2,-1,2]
//Explanation: The first 1's next greater number is 2;
//The number 2 can't find next greater number.
//The second 1's next greater number needs to search circularly, which is also 2.
//Example 2:
//Input: nums = [1,2,3,4,3]
//Output: [2,3,4,-1,4]

function nextGreaterElement_II(arr) {
  let updateArr = new Array();
  for (let i = 0; i < arr.length; i++) {
    updateArr.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    updateArr.push(arr[i]);
  }
  console.log(updateArr);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    for (let j = i + 1; j < updateArr.length; j++) {
      if (updateArr[j] > arr[i]) {
        result.push(updateArr[j]);
        flag = true;
        break;
      }
    }
    if (flag == false) result.push(-1);
  }
  return result;
}

let arr = [1, 5, 3, 6, 8];
console.log(nextGreaterElement_II(arr));

//======================================================================================
// 137. Single Number II
//Given an integer array nums where every element appears three times except for one, which appears exactly once.
//Find the single element and return it.
//You must implement a solution with a linear runtime complexity and use only constant extra space.
//Input: nums = [2,2,3,2]
//Output: 3
//Example 2:
//Input: nums = [0,1,0,1,0,1,99]
//Output: 99

function singleNumber_II(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (res[el]) {
      res[el]++;
    } else {
      res[el] = 1;
    }
  }
  // console.log(res);
  for (let val in res) {
    if (res[val] == 1) {
      return val;
    }
  }
}

let arr = [0, 1, 0, 1, 0, 1, 99];
console.log(singleNumber_II(arr));

//==============================================================================================

//Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
//Output: true

//Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
//Output: false

function searchEle(row, col) {
  let arr = [
    1, 4, 7, 11, 15, 2, 5, 8, 12, 19, 3, 6, 9, 16, 22, 10, 13, 14, 17, 24, 18,
    21, 23, 26, 30,
  ];
  let target = 5;
  let matrix = [];
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
  //console.log(matrix);
  let flag = false;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == target) flag = true;
    }
  }
  return flag;
}
let row = 5;
let col = 5;
console.log(searchEle(row, col));

//=============================================================================================
// Input: nums1 = [2,1,3], nums2 = [10,2,5,0]
//Output: 13
//Explanation:
//A possible nums3 array is [8,0,7,2,11,3,4,1,9,1,6,3].
//The bitwise XOR of all these numbers is 13, so we return 13.
//Example 2:
//Input: nums1 = [1,2], nums2 = [3,4]
//Output: 0
//Explanation:
//All possible pairs of bitwise XORs are nums1[0] ^ nums2[0], nums1[0] ^ nums2[1], nums1[1] ^ nums2[0],
//and nums1[1] ^ nums2[1].
//Thus, one possible nums3 array is [2,5,1,6].
//2 ^ 5 ^ 1 ^ 6 = 0, so we return 0.

function xorAllNumber(arr) {
  let xor = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      console.log(arr1[i], arr2[j]);
      let xor1 = arr1[i] ^ arr2[j];
      xor ^= xor1;
    }
  }
  return xor;
}

let arr1 = [2, 1, 3];
let arr2 = [10, 2, 5, 0];
console.log(xorAllNumber(arr1, arr2));

//============================================================================================
// Use three nested loops.
//Outer loops will decide the starting point of a sub-array, call it as startPoint.
//First inner loops will decide the group size (sub-array size). Group size starting from 1 and goes up array size.
//Let’s call is as grps.
//The most inner loop will actually print the sub-array by iterating the given array from startPoint and print
//the next grps elements
function sumOddLengthSubArray(arr) {
  let sum = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // startPoint
    for (let j = i; j <= arr.length; j++) {
      // grps
      for (let k = i; k < j; k++) {
        // subarray from start point and print next grps
        result.push(arr[k]);
      }
      if (result.length % 2 == 1) {
        for (let z = 0; z < result.length; z++) {
          sum += result[z];
        }
      }
      console.log(result);
      result = [];
    }
  }
  return sum;
}

let arr = [1, 4, 2, 5, 3];
console.log(sumOddLengthSubArray(arr));

//==============================================================================================
// 78. Subsets
//Given an integer array nums of unique elements, return all possible subsets (the power set).
//The solution set must not contain duplicate subsets. Return the solution in any order.
//Example 1:
//Input: nums = [1,2,3]
//Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
//Example 2:
//Input: nums = [0]
//Output: [[],[0]]

function subset_(arr) {
  let result = [];
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      for (let k = i; k <= j; k++) {
        result.push(arr[k]);
      }
      //  console.log(result);
      answer.push(result);
      result = [];
    }
  }
  console.log(answer);
  let final_ = [];
  final_.push([]);

  //console.log(answer[2].length); //2
  for (let i = 0; i < answer.length; i++) {
    if (answer[i].length == 0) {
    } else {
      final_.push(answer[i]);
    }
  }
  return final_;

  // for (let i = 1; i < answer.length; i++) {
  //   for(let j=i;j<answer[il.length;j++){
  //     if()
  //   }
  //  return answer;

  // for (let i = 0; i < answer.length; i++) {
  //   console.log(answer[i]);
  // }
  // console.log(answer[0]);
  // console.log(answer[1]);
  // console.log(answer[2]);
  // console.log(answer[3]);
  // console.log(answer[4]);
  // console.log(answer[5]);
  // console.log(answer[6]);

  // for (let i = 1; i < answer.length; i++) {
  //   if (answer[i].length != 0) {
  //     final_.push(answer[i]);
  //   }
  // }
  // return answer;
}

let arr = [1, 2, 3];
console.log(subset_(arr));

//============================================================================================
// 907. Sum of Subarray Minimums
//Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr.
//Since the answer may be large, return the answer modulo 109 + 7.
//Example 1:
//Input: arr = [3,1,2,4]
//Output: 17
//Explanation:
//Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
//Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
//Sum is 17.
//Example 2:
//Input: arr = [11,81,94,43,3]
//Output: 444

//========================================================================================
// Example 1:
//Input: names = ["Mary","John","Emma"], heights = [180,165,170]
//Output: ["Mary","Emma","John"]
//Explanation: Mary is the tallest, followed by Emma and John.
//Example 2:
//Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
//Output: ["Bob","Alice","Bob"]
//Explanation: The first Bob is the tallest, followed by Alice and the second Bob

function sortPeople(name, heights) {
  let arr = [];
  for (let i = 0; i < name.length; i++) {
    arr.push(heights[i]);
    arr.push(name[i]);
  }
  let row = heights.length;
  let col = name.length;

  let matrix = new Array(row);
  for (let i = 0; i < row; i++) {
    matrix[i] = new Array(2);
  }

  let k = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < 2; j++) {
      matrix[i][j] = arr[k];
      k++;
    }
  }
  // return matrix;
  let newRes = [];
  for (let i = 0; i < matrix.length; i++) {
    newRes.push({ Num: matrix[i][0], Name: matrix[i][1] });
  }
  // return newRes;
  newRes.sort(function (a, b) {
    return b.Num - a.Num;
  });
  console.log(newRes);

  let result = [];
  for (let val of newRes) {
    result.push(val.Name);
  }
  return result;
}

let name = ['Marry', 'John', 'Emma'];
let heights = [180, 165, 170];

console.log(sortPeople(name, heights));

//=================================================================================

function findOne(num) {
  let gate_1;
  num = num / 2;
  gate_1 = num + 1;
  num -= 1;

  let gate_2;
  num = num / 2;
  gate_2 = num + 1;
  num--;

  let gate_3;
  num = num / 2;
  gate_3 = num + 1;
  num--;

  return num;
}

let num = 22;
console.log(findOne(num));

//=====================================================================================
// Given an array of integers nums, return the number of good pairs.
//A pair (i, j) is called good if nums[i] == nums[j] and i < j.
//Example 1:
//Input: nums = [1,2,3,1,1,3]
//Output: 4
//Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
//Example 2:
//Input: nums = [1,1,1,1]
//Output: 6
//Explanation: Each pair in the array are good.
//Example 3:
//Input: nums = [1,2,3]
//Output: 0
function goodPair(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
  }
  return count;
}

let arr = [1, 2, 3];
console.log(goodPair(arr));

//=========================================================================================
// Given an integer array nums, return the most frequent even element.
//If there is a tie, return the smallest one. If there is no such element, return -1.
//Example 1:
//Input: nums = [0,1,2,2,4,4,1]
//Output: 2
//Explanation:
//The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
//We return the smallest one, which is 2.
//Example 2:
//Input: nums = [4,4,4,9,2,4]
//Output: 4
//Explanation: 4 is the even element appears the most.
// Example 3:
//Input: nums = [29,47,21,41,13,37,25,7]
//Output: -1
//Explanation: There is no even element.

function mostFrequentEven(arr) {
  let freq = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (freq[el]) {
      freq[el]++;
    } else {
      freq[el] = 1;
    }
  }
  console.log(freq);

  for (let ell of freq) {
    if (freq[ell] % 2 == 0) {
      if (ell == 1) {
        return 2;
      } else {
        return ell;
      }
    }
  }
  return -1;
}

let arr = [4, 4, 4, 9, 2, 4];
console.log(mostFrequentEven(arr));

//=========================================================================================
//Input: arr = [0,1,2,3,4,5,6,7,8]
//Output: [0,1,2,4,8,3,5,6,7]
//Explantion: [0] is the only integer with 0 bits.
//[1,2,4,8] all have 1 bit.
//[3,5,6] have 2 bits.
//[7] has 3 bits.
//The sorted array by bits is [0,1,2,4,8,3,5,6,7]
//Example 2:
//Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
//Output: [1,2,4,8,16,32,64,128,256,512,1024]
//Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.

// function sortBasedOnBinary(arr) {}

// let arr = [0, 1, 2, 3, 4, 5, 7, 8];
// console.log(sortBasedOnBinary(arr));

// function countOne(n) {
//   if (n == 0) {
//     return n;
//   }
//   let setBitCount = 0;
//   while (n != 0) {
//     n = n & (n - 1);
//     setBitCount++;
//   }
//   return setBitCount;
// }
// let n = 8;
// console.log(countOne(n));

//-----------------------------------------------------------------------------------------------

function countSetBit_Function(n) {
  let setBitCount = 0;
  if (n == 1) return n;
  while (n != 0) {
    n = n & (n - 1);
    setBitCount++;
  }
  return setBitCount;
}

function sortBasedOnBinary(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    let countOneBit = countSetBit_Function(arr[i]);
    resArr.push(countOneBit);
    resArr.push(arr[i]);
  }
  // return resArr;
  let matrix = [];
  for (let i = 0; i < arr.length; i++) {
    matrix[i] = new Array(2);
  }
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 2; j++) {
      matrix[i][j] = resArr[k];
      k++;
    }
  }
  console.log(matrix);
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    res.push({ countOneBIT: matrix[i][0], arrayNumber: matrix[i][1] });
  }
  console.log(res);

  res.sort(function (a, b) {
    return a.countOneBIT - b.countOneBIT;
  });

  console.log(res);

  let finalRES = [];

  for (let el of res) {
    finalRES.push(el.arrayNumber);
  }
  //console.log(finalRES);
  return finalRES;
}
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let arr = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
console.log(sortBasedOnBinary(arr));

//===========================================================================================
// Input: nums = [2,1,3,3], k = 2
//Output: [3,3]
//Explanation:
//The subsequence has the largest sum of 3 + 3 = 6.
//Example 2:
//Input: nums = [-1,-2,3,4], k = 3
//Output: [-1,3,4]
//Explanation: 
//The subsequence has the largest sum of -1 + 3 + 4 = 6.
//Example 3:
//Input: nums = [3,4,3,3], k = 2
//Output: [3,4]
//Explanation:
//The subsequence has the largest sum of 3 + 4 = 7. 
//Another possible subsequence is [4, 3].
function numOfSubArray(nums, k) {
  let n = nums.length;
  let min;
  let index;
  for (let i = 0; i < n - k; i++) {
    min = Math.min(...nums);
    index = nums.indexOf(min);
    nums.splice(index, 1);
  }
  return nums;
}

let arr = [2, 1, 3, 3];
let k = 2;
console.log(numOfSubArray(arr, k));

//=========================================================================================
//  Kth Largest Element in an Array
//Given an integer array nums and an integer k, return the kth largest element in the array.
//Note that it is the kth largest element in the sorted order, not the kth distinct element.
//You must solve it in O(n) time complexity.
//Example 1:
//Input: nums = [3,2,1,5,6,4], k = 2
//Output: 5
//Example 2:
//Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
//Output: 4

function kthLargestElement(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  return arr[arr.length - k];
}
let arr = [3, 2, 1, 5, 6, 4];
let k = 2;
console.log(kthLargestElement(arr));

//==========================================================================================
// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does
// not exist, return the maximum number.
//Example 1:
//Input: nums = [3,2,1]
//Output: 1
//Explanation:
//The first distinct maximum is 3.
//The second distinct maximum is 2.
//The third distinct maximum is 1.
//Example 2:
//Input: nums = [1,2]
//Output: 2
//Explanation:
//The first distinct maximum is 2.
//The second distinct maximum is 1.
//The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:
//Input: nums = [2,2,3,1]
//Output: 1
//Explanation:
//The first distinct maximum is 3.
//The second distinct maximum is 2 (both 2's are counted together since they have the same value).
//The third distinct maximum is 1.

function thirdMaximum(arr) {
  let set = new Set(arr);
  let newArr = Array.from(set);
  let n = newArr.length;
  let l = n - 3;
  newArr.sort(function (a, b) {
    return a - b;
  });

  if (newArr.length == 1) return newArr[0];
  else if (newArr.length == 2) return newArr[1];
  else if (newArr.length > 2) return newArr[l];
}

let arr = [3, 2, 1, 1];
console.log(thirdMaximum(arr));

//=============================================================================================
// 389. Find the Difference
//You are given two strings s and t.
//String t is generated by random shuffling string s and then add one more letter at a random position.
//Return the letter that was added to t.
//Example 1:
//Input: s = "abcd", t = "abcde"
//Output: "e"
//Explanation: 'e' is the letter that was added.
//Example 2:
//Input: s = "", t = "y"
//Output: "y"

function findTheDifference(s, t) {
  let strAscii = [];
  let str_t_ascii = [];
  for (let i = 0; i < s.length; i++) {
    let convert = s.charCodeAt(i);
    strAscii.push(convert);
  }
  for (let i = 0; i < t.length; i++) {
    let convert = t.charCodeAt(i);
    str_t_ascii.push(convert);
  }

  let xor = 0;
  for (let i = 0; i < strAscii.length; i++) {
    xor ^= strAscii[i];
  }

  for (let i = 0; i < str_t_ascii.length; i++) {
    xor ^= str_t_ascii[i];
  }

  return String.fromCharCode(xor);
}

let s = 'abcd';
let t = 'abcde';
console.log(findTheDifference(s, t));

//==========================================================================================
//Example 1:
//Input: arr = [1,3,5]
//Output: 4
//Explanation: All subarrays are [[1],[1,3],[1,3,5],[3],[3,5],[5]]
//All sub-arrays sum are [1,4,9,3,8,5].
//Odd sums are [1,9,3,5] so the answer is 4.
//Example 2:
//Input: arr = [2,4,6]
//Output: 0
//Explanation: All subarrays are [[2],[2,4],[2,4,6],[4],[4,6],[6]]
//All sub-arrays sum are [2,6,12,4,10,6].
//All sub-arrays have even sum and the answer is 0.
//Example 3:
//Input: arr = [1,2,3,4,5,6,7]
//Output: 16

function numOfSubArray(arr) {
  let subarray = [];
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      for (let k = i; k <= j; k++) {
        subarray.push(arr[k]);
      }
      answer.push(subarray);
      subarray = [];
    }
  }
  console.log(answer.length);
  let res = [];
  let sum = 0;
  for (let i = 0; i < answer.length; i++) {
    sum = 0;
    for (let j = 0; j < answer[i].length; j++) {
      sum = sum + answer[i][j];
    }
    res.push(sum);
  }
  let count = 0;
  for (let i = 0; i < res.length; i++) {
    if (res[i] % 2 != 0) {
      count++;
    }
  }
  return count;
}

let arr = [1, 3, 5];
console.log(numOfSubArray(arr));

//----------------------------------------------------------------------------------------------------

function printArray(arr, currentIndex) {
  if (currentIndex == arr.length) {
    return;
  }

  let result = '';
  for (let i = currentIndex; i < arr.length; i++) {
    result += arr[i];
    console.log(result);
  }
  printArray(arr, currentIndex + 1);
}

function numOfSubArray(arr) {
  let res = printArray(arr, 0);
  return res;
}

let arr = [1, 3, 5];
console.log(numOfSubArray(arr));

//=======================================================================================
function numOfSubArray(arr, k) {
  let subarray = [];
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      for (let k = i; k <= j; k++) {
        subarray.push(arr[k]);
      }
      answer.push(subarray);
      subarray = [];
    }
  }
  let count = 0;
  for (let i = 0; i < answer.length; i++) {
    let sum = 0;
    for (let j = 0; j < answer[i].length; j++) {
      sum += answer[i][j];
    }
    if (sum == k) {
      count++;
    }
  }
  return count;
}

let arr = [1, 2, 3];
let k = 3;
console.log(numOfSubArray(arr, k));

//======================================================================================

function hourGlassMaxSum(row, col) {
  let arr = [
    2, 3, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 2, 4, 4, 0, 0, 0, 2, 0,
  ];
  let matrix = [];
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

  let top_1, top_2, top_3, center, bottom_1, bottom_2, bottom_3;
  let maxSum = Number.MIN_VALUE;
  for (let i = 0; i < matrix.length - 2; i++) {
    for (let j = 0; j < matrix[i].length - 2; j++) {
      //  let sum = 0;
      top_1 = matrix[i][j];
      top_2 = matrix[i][j + 1];
      top_3 = matrix[i][j + 2];
      center = matrix[i + 1][j + 1];
      bottom_1 = matrix[i + 2][j];
      bottom_2 = matrix[i + 2][j + 1];
      bottom_3 = matrix[i + 2][j + 2];
      let sum = top_1 + top_2 + top_3 + center + bottom_1 + bottom_2 + bottom_3;
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
}

let row = 5;
let col = 5;
console.log(hourGlassMaxSum(row, col));

//=========================================================================================
// 1991. Find the Middle Index in Array

function findMiddleIndex(arr) {
  sum=0;
  for(let e of nums){
      sum+=e;
  }
  let x=0;
  let index=-1
  for(let i=0;i<nums.length;i++){
      if(2*x==sum-nums[i]){
          index=i;
          break;
      }
      x+=nums[i];
  }
  return index;
  
}

let arr = [2, 3, -1, 8, 4];
console.log(findMiddleIndex(arr));

//=============================================================================================

// 1380. Lucky Numbers in a Matrix
//Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.
//A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.
//Example 1:
//Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
//Output: [15]
//Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.
//Example 2:
//Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
//Output: [12]
//Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
//Example 3:
//Input: matrix = [[7,8],[1,2]]
//Output: [7]
//Explanation: 7 is the only lucky number since it is the minimum in its row and the maximum in its column.

function luckyNumber(row, col) {
  let arr = [1, 10, 4, 2, 9, 3, 8, 7, 15, 16, 17, 12];
  let matrix = [];

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
  let row_1 = matrix.length; // 3
  let col_1 = matrix[0].length; //4
  console.log(row_1, col_1);
  let minRowMaxColArr = [];
  for (let i = 0; i < matrix.length; i++) {
    let min = Number.MAX_VALUE;
    for (let j = 0; j < matrix[i].length; j++) {
      if (min > matrix[i][j]) {
        min = matrix[i][j];
      }
    }
    minRowMaxColArr.push(min);
  }
  console.log(minRowMaxColArr);

  //  let maxColArr = [];
  for (let j = 0; j < col_1; j++) {
    let max = Number.MIN_VALUE;
    for (let i = 0; i < matrix.length; i++) {
      if (max < matrix[i][j]) {
        max = matrix[i][j];
      }
    }
    minRowMaxColArr.push(max);
  }
  console.log(minRowMaxColArr);
  let result = [];
  let map = [];
  for (let i = 0; i < minRowMaxColArr.length; i++) {
    let el = minRowMaxColArr[i];
    if (map[el]) {
      map[el]++;
    } else {
      map[el] = 1;
    }
  }
  console.log(map);

  for (let ell in map) {
    if (map[ell] > 1) {
      result.push(ell);
    }
  }
  return result;
}

let row = 3;
let col = 4;
console.log(luckyNumber(row, col));

//=============================================================================================

// prefix sum array creation:-

function funPrefixArr(arr) {
  let prefixArr = [];
  prefixArr[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefixArr[i] = arr[i] + prefixArr[i - 1];
  }
  return prefixArr;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(funPrefixArr(arr));

//------------------------------------------------------------------------------------------
// Input: arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
//Output: [2,7,14,8]
//Explanation:
//The XOR values for queries are:
//[0,1] = 1 xor 3 = 2
//[1,2] = 3 xor 4 = 7
//[0,3] = 1 xor 3 xor 4 xor 8 = 14
//[3,3] = 8

function xorQuaries(arr, row, col) {
  let matrix = [];
  // let matrixArr = [0, 1, 1, 2, 0, 3, 3, 3];
  let matrixArr = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < row; i++) {
    matrix[i] = new Array(col);
  }
  let k = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrix[i][j] = matrixArr[k];
      k++;
    }
  }
  console.log(matrix);
  let answer = [];
  for (let i = 0; i < matrix.length; i++) {
    let left = matrix[i][0];
    let right = matrix[i][1];
    let xor = 0;
    if (left == right) {
      answer.push(arr[left]);
    } else {
      for (let j = left; j <= right; j++) {
        xor ^= arr[j];
      }
      answer.push(xor);
    }
  }
  return answer;
}

//let arr = [1, 3, 4, 8];
let arr = [16];
let row = 3;
let col = 2;
console.log(xorQuaries(arr, row, col));

//==================================================================================

function numSubArrayWithSum(arr, goal) {
  let subarray = [];
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      for (let k = i; k <= j; k++) {
        subarray.push(arr[k]);
      }
      answer.push(subarray);
      subarray = [];
    }
  }
  console.log(answer);
  let count = 0;
  let str = '';
  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < answer[i].length; j++) {
      str += answer[j];
    }
    str = Number(str);
    let num = parseInt(str, 2);
    if (num == goal) {
      count++;
    }
    str = '';
  }

  return count;
}

let arr = [1, 0, 1, 0, 1];
let goal = 2;
console.log(numSubArrayWithSum(arr, goal));

//========================================================================================
//Example 1:
//Input: nums = [2,3,5]
//Output: [4,3,5]
//Explanation: Assuming the arrays are 0-indexed, then
//result[0] = |2-2| + |2-3| + |2-5| = 0 + 1 + 3 = 4,
//result[1] = |3-2| + |3-3| + |3-5| = 1 + 0 + 2 = 3,
//result[2] = |5-2| + |5-3| + |5-5| = 3 + 2 + 0 = 5.
//Example 2:
//Input: nums = [1,4,6,8,10]
//Output: [24,15,13,15,21]

function getSumAbsoluteDiff(nums) {
  // let result = [];
  // for (let i = 0; i < arr.length; i++) {
  //   let sum = 0;
  //   let re = 0;
  //   for (let j = 0; j < arr.length; j++) {
  //     re = Math.abs(arr[i] - arr[j]);
  //     sum += re;
  //   }
  //   result.push(sum);
  // }
  // return result;

  let res = [];
  let neg = 0;
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    pos += nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    pos -= nums[i];
    let sum = 0;
    sum += neg + nums[i] * i;
    sum += pos - nums[i] * (nums.length - i - 1);
    res.push(sum);
    neg -= nums[i];
  }
  return res;
}
let arr = [2, 3, 5];
console.log(getSumAbsoluteDiff(arr));

//==============================================================================

function squareOnSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  console.log(arr);
  let result = new Array(arr.length).fill(0);
  console.log(result);

  let left = 0;
  let right = arr.length - 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[left] > arr[right]) {
      result[i] = arr[left];
      left++;
    } else {
      result[i] = arr[right];
      right--;
    }
  }
  return result;
}

let arr = [-4, -1, 0, 3, 10];
console.log(squareOnSorted(arr));

//========================================================================================
// Input: nums = [4,5,0,-2,-3,1], k = 5
//Output: 7
//Explanation: There are 7 subarrays with a sum divisible by k = 5:
//[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
//Example 2:
//Input: nums = [5], k = 9
//Output: 0

function subArrayDivByK(arr, k) {
  let subarray = [];
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      for (let k = i; k <= j; k++) {
        subarray.push(arr[k]);
      }
      answer.push(subarray);
      subarray = [];
    }
  }
  console.log(answer);

  let count = 0;
  let sum = 0;
  for (let i = 0; i < answer.length; i++) {
    sum = 0;
    for (let j = 0; j < answer[i].length; j++) {
      sum += answer[i][j];
    }
    if (sum % k == 0) {
      count++;
    }
  }
  return count;
}

let arr = [4, 5];
let k = 5;
console.log(subArrayDivByK(arr, k));

//------------------------------------------------------------------------------------
// Input: ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5
// Output: true
// Explanation: Every integer between 2 and 5 is covered:
// - 2 is covered by the first range.
// - 3 and 4 are covered by the second range.
// - 5 is covered by the third range.
// Example 2:

// Input: ranges = [[1,10],[10,20]], left = 21, right = 21
// Output: false
// Explanation: 21 is not covered by any range.

function getCovered(row, col, left, right) {
  let matrix = [];
  let arr = [1, 2, 3, 4, 5, 6];
  let k = 0;
  for (let i = 0; i < row; i++) {
    matrix[i] = new Array(col);
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrix[i][j] = arr[k];
      k++;
    }
  }
  console.log(matrix);

  let arrr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      arrr.push(matrix[i][j]);
    }
  }
  console.log(arrr);
  let flag = true;
  for (let i = left; i <= right; i++) {
    if (!arr.includes(i)) {
      flag = false;
    }
  }

  return flag;

  //------------------------------------------------------
  // let count = 0;
  // for (let i = 0; i < matrix.length; i++) {
  //   if (matrix[i][0] <= left || matrix[i][1] <= right) {
  //     count++;
  //   }
  // }
  // if (count == matrix.length) return true;
  // else {
  //   return false;
  // }
  //------------------------------------------------------------
  // var t = new Set();
  // for (let x of matrix) {
  //   for (let i = x[0]; i <= x[1]; i++) {
  //     t.add(i);
  //   }
  // }
  // for (let i = left; i <= right; i++) {
  //   if (!t.has(i)) return false;
  // }

  // return true;
  //------------------------------------------------------------
}

let row = 3;
let col = 2;
let left = 2;
let right = 5;
console.log(getCovered(row, col, left, right));

//==========================================================================================

// function reverseBITS(n) {
//   var result = 0;
//   var count = 32;

//   while (count--) {
//     result *= 2;
//     result += n & 1;
//     n = n >> 1;
//   }
//   return result;
// }

// let n = 00000010100101000001111010011100;
// console.log(reverseBITS(n));

//=========================================================================================

function addingWithoutPlusMin(a, b) {
  let xor = a ^ b;
  let carry = a & b;
  if (carry == 0) return xor;
  else {
    return addingWithoutPlusMin(xor, carry << 1);
  }
}

let a = -10,
  b = -5;
console.log(addingWithoutPlusMin(a, b));

//==========================================================================================
// 2433. Find The Original Array of Prefix Xor
// You are given an integer array pref of size n. Find and return the array arr of size n that satisfies:
// pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
// Note that ^ denotes the bitwise-xor operation.
// It can be proven that the answer is unique.
// Example 1:
// Input: pref = [5,2,0,3,1]
// Output: [5,7,2,3,2]
// Explanation: From the array [5,7,2,3,2] we have the following:
// - pref[0] = 5.
// - pref[1] = 5 ^ 7 = 2.
// - pref[2] = 5 ^ 7 ^ 2 = 0.
// - pref[3] = 5 ^ 7 ^ 2 ^ 3 = 3.
// - pref[4] = 5 ^ 7 ^ 2 ^ 3 ^ 2 = 1.
//===========================================================================
// Explanation:-   pref=[5,2,0,3,1]
//                 arr=[a,b,c,d,e]
// we know that b=x^a
//              x=b^a  , yes we can do it.

//step-1  a=5;
//step-2  a^b=2   -------------equation (i)
//      5^b=2
// then b=5^2=7

// step-3  a^b^c=0       ---equation(ii)    ,  we now that a^b=2;
//         2^c=0
//         c=0^2 ==2

// step-4  a^b^c^d=3     -----  equation(iii)
// we know that a^b^c=0
//         0^d=3
//         d=3^0===3

// step-5  a^b^c^d^e=1  ------equation(iv)
// we know that a^b^c^d=3
//          3^d=1
//          d=3^1 == 2

// final result will be =[5,7,2,3,2]
function findArray(pref) {
  let arr = [];
  for (let i = 0; i < pref.length; i++) {
    if (i == 0) {
      arr[i] = pref[i];
    } else {
      arr[i] = pref[i] ^ pref[i - 1];
    }
  }
  return arr;
}

let pref = [5, 2, 0, 3, 1];
console.log(findArray(pref));

//=================================================================================
// Input: encoded = [1,2,3], first = 1
//Output: [1,0,2,1]
//Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]
//Example 2:
//Input: encoded = [6,2,7,3], first = 4
//Output: [4,2,0,7,4]

// function decodeXOR(arr, first) {}

// let encoded = [1, 2, 3];
// let first = 1;
// console.log(decodeXOR(encoded, first));

//-----------------------------------------------------------------------------------------
// for array =[1,2,3] , there will be 2(pow)3= 8 subset will be generated.
// subsequence;;
// based on this binary concept.
//  arr=[1,2,3]      binary    decimal
//  - - -             0 0 0     0
//  - - 3             0 0 1     1
//  - 2 -             0 1 0     2
//  - 2 3             0 1 1     3
//  1 - -             1 0 0     4
//  1 - 3             1 0 1     5
//  1 2 -             1 1 0     6
//  1 2 3             1 1 1     7

function findAllSubset(arr) {
  let subsetArr = [];
  let final = [];
  let limit = Math.pow(2, arr.length);
  console.log(limit);

  for (let i = 0; i < limit; i++) {
    let temp = i;
    for (let j = arr.length - 1; j >= 0; j--) {
      let reminder = temp % 2;
      temp = ~~(temp / 2);
      if (reminder == 0) {
      } else {
        subsetArr.push(arr[j]);
      }
    }
    final.push(subsetArr.reverse());
    subsetArr = [];
  }
  return final;
}

let arr = [1, 2, 3];
console.log(findAllSubset(arr));

//=====================================================================================

function findAllSubset(arr) {
  let subsetArr = [];
  let final = [];
  let limit = Math.pow(2, arr.length);
  console.log(limit);

  for (let i = 0; i < limit; i++) {
    let temp = i;
    for (let j = arr.length - 1; j >= 0; j--) {
      let reminder = temp % 2;
      temp = ~~(temp / 2);
      if (reminder == 0) {
      } else {
        subsetArr.push(arr[j]);
      }
    }
    final.push(subsetArr.reverse());
    subsetArr = [];
  }
  let str = final.map(JSON.stringify);
  console.log(str);
  let unique = new Set(str);
  console.log(unique);

  let result = [];
  unique.forEach(a => result.push(JSON.parse(a)));
  console.log(result);
  return result;
}

let arr = [4, 4, 4, 1, 4];
console.log(findAllSubset(arr));

// // how to remove duplicate array in side an array
//let  arr=[[],[2],[2],[2,2],[1],[1,2],[1,2],[1,2,3]];

// output :- [[],[2],[2,2],[1],[1,2],[1,2,3]]

//==================================================================================================
// Given a string array wordss, return the maximum value of length(words[i]) * length(words[j]) where the two
//wordss do not share common letters. If no such two wordss exist, return 0.
//Example 1:
//Input: wordss = ["abcw","baz","foo","bar","xtfn","abcdef"]
//Output: 16
//Explanation: The two wordss can be "abcw", "xtfn".
//Example 2:
//Input: wordss = ["a","ab","abc","d","cd","bcd","abcd"]
//Output: 4
//Explanation: The two wordss can be "ab", "cd".

function checkingUniqueStringwords(x, y) {
  for (let i = 0; i < x.length; i++) {
    if (y.includes(x[i])) {
      return false;
    }
  }
  return true;
}
function max_Product(words) {
  let max = Number.MIN_VALUE;
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      let findUnique = checkingUniqueStringwords(words[i], words[j]);
      if (findUnique == true) {
        max = Math.max(max, words[i].length * words[j].length);
      }
    }
  }
  return max;
}

let wordss = ['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef'];
console.log(max_Product(wordss));

//==================================================================================

function find_Complement(n) {
  let res = '';
  let bin = n.toString(2);
  console.log(bin);
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] == 0) {
      res += 1;
    } else {
      res += 0;
    }
  }
  console.log(res);
  return parseInt(res, 2);
  // let result = res.toString(10);
  // return result;
}

let num = 5;
console.log(find_Complement(num));

//=======================================================================================
// Input: nums = [3,10,5,25,2,8]
//Output: 28
//Explanation: The maximum result is 5 XOR 25 = 28.
//Example 2:
//Input: nums = [14,70,53,83,49,91,36,80,92,51,66,70]
//Output: 127

function maximumXOR(arr) {
  let max = Number.MIN_VALUE;
  let set = [...new Set(arr)];
  console.log(set);
  for (let i = 0; i < set.length - 1; i++) {
    for (let j = i + 1; j < set.length; j++) {
      let x = set[i] ^ set[j];
      max = Math.max(max, x);
    }
  }
  return max;
}

let arr = [3, 10, 5, 25, 2, 8, 5];
console.log(maximumXOR(arr));
*/
//======================================================================================
// 477. Total Hamming Distance
//Example 1:
//Input: nums = [4,14,2]
//Output: 6
//Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
//showing the four bits relevant in this case).
//The answer will be:
//HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.

function counting_(a, b) {
  //----------------------------------------------------
  // let count = 0;
  // let xor = a ^ b;
  // let bin = xor.toString(2);
  // for (let i = 0; i < bin.length; i++) {
  //   if (bin[i] == 1) {
  //     count++;
  //   }
  // }
  // return count;

  //------------------------------------------------------
  let xored = a ^ b;
  let count = 0;
  while (xored > 0) {
    const bit = xored & 1;
    count += bit;
    xored = xored >> 1;
  }
  return count;
}

function totalHammingDistance(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let res = counting_(arr[i], arr[j]);
      total += res;
    }
  }
  return total;
}

let arr = [4, 14, 2];
console.log(totalHammingDistance(arr));
