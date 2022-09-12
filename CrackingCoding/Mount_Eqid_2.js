'use strict';
/*
// Question:-34
//You and your date are trying to get a table at a restaurant. The parameter "you" is the stylishness of your
// clothes, in the range 0..10, and "date" is the stylishness of your date's clothes. The result getting the
//table is encoded as an int value with 0=no, 1=maybe, 2=yes. If either of you is very stylish, 8 or more,
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
// is between 60 and 90 (inclusive). Unless it is summer, then the upper limit is 100 instead of 90.
// Given an int temperature and a boolean isSummer, return true if the squirrels play and false otherwise.

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
// You are driving a little too fast, and a police officer stops you. Write code to compute the result,
// encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less,
//the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more,
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
// Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive, are forbidden,
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
// Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating
//if we are on vacation, return a string of the form "7:00" indicating when the alarm clock should ring.
// Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation --
// then on weekdays it should be "10:00" and weekends it should be "off".

//alarmClock(1, false) → "7:00"
//alarmClock(5, false) → "7:00"
//alarmClock(0, false) → "10:00"

function alarmClock(day, vacation) {
  if (vacation == true) {
    if (day > 0 && day != 6) return '10:00';
    else return 'off';
  } else {
    if (day > 0 && day != 6) return '7:00';
    else return '10:00';
  }
}

let day = 5,
  vacation = true;
console.log(alarmClock(day, vacation));

//==========================================================================
// Question:-39
// The number 6 is a truly great number. Given two int values, a and b,
// return true if either one is 6. Or if their sum or difference is 6. Note:
//the function Math.abs(num) computes the absolute value of a number.

//love6(6, 4) → true
//love6(4, 5) → false
//love6(1, 5) → true
function love6(a, b) {
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
console.log(love6(a, b));

//=============================================================================
// Question:-40
// Given a number n, return true if n is in the range 1..10, inclusive. Unless "outsideMode" is true,
// in which case return true if the number is less or equal to 1, or greater or equal to 10.
//in1To10(5, false) → true
//in1To10(11, false) → false
//in1To10(11, true) → true

function num1To10(n, outsideMode) {
  if (outsideMode == false) {
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
  outsideMode = true;
console.log(num1To10(n, outsideMode));

//============================================================================

// Quuestion:-41
//We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11.
// Return true if the given non-negative number is special. Use the % "mod" operator --
// see Introduction to Mod

//specialEleven(22) → true
//specialEleven(23) → true
//specialEleven(24) → false

function spacialEleven(n) {
  if (n % 11 == 0 || n % 11 == 1) return true;
  else return false;
}
let n = 24;
console.log(spacialEleven(n));

//===================================================================================

// Question:-42
// Return true if the given non-negative number is 1 or 2 more than a multiple of 20. See also:
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
// Return true if the given non-negative number is a multiple of 3 or 5, but not both.
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
// Return true if the given non-negative number is 1 or 2 less than a multiple of 20.
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
// Given a non-negative number "num", return true if num is within 2 of a multiple of 10.
// Note: (a % b) is the remainder of dividing a by b, so (7 % 5) is 2. See also: Introduction to Mod

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
// Given 2 ints, a and b, return their sum. However, "teen" values in the range 13..19 inclusive,
// are extra lucky. So if either value is a teen, just return 19.

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
// We are having a party with amounts of tea and candy. Return the int outcome of the party encoded
// as 0=bad, 1=good, or 2=great. A party is good (1) if both tea and candy are at least 5. However,
// if either tea or candy is at least double the amount of the other one, the party is great (2).
//However, in all cases, if either tea or candy is less than 5, the party is always bad (0).

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
// Given a string str, if the string starts with "f" return "Fizz". If the string ends with "b" return "Buzz".
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
// Given an int n, return the string form of the number followed by "!". So the int 6 yields "6!".
//Except if the number is divisible by 3 use "Fizz" instead of the number, and if the number is divisible by 5
//use "Buzz", and if divisible by both 3 and 5, use "FizzBuzz". Note: the % "mod" operator computes the
//remainder after division, so 23 % 10 yields 3. What will the remainder be when one number divides evenly
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
// Given three ints, a b c, return true if it is possible to add two of the ints to get the third.

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
// Given three ints, a b c, return true if b is greater than a, and c is greater than b. However,
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
// Given three ints, a b c, return true if they are in strict increasing order, such as 2 5 11, or 5 6 7,
//but not 6 5 7 or 5 5 7. However, with the exception that if "equalOk" is true, equality is allowed,
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
// Given three ints, a b c, return true if two or more of them have the same rightmost digit.
// The ints are non-negative. Note: the % "mod" operator computes the remainder, e.g. 17 % 10 is 7.

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
// Given three ints, a b c, return true if one of them is 10 or more less than one of the others.

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
// Return the sum of two 6-sided dice rolls, each in the range 1..6. However, if noDoubles is true,
// if the two dice show the same value, increment one die to the next value, wrapping around to 1 if its
// value was 6.

//withoutDoubles(2, 3, true) → 5
//withoutDoubles(3, 3, true) → 7
//withoutDoubles(3, 3, false) →6

function withoutDoubles(a, b, noDoubles) {
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
console.log(withoutDoubles(a, b, noDoubles));

//==============================================================================

// Question:-57
// Given two int values, return whichever value is larger. However if the two values have the same remainder
// when divided by 5, then the return the smaller value. However, in all cases, if the two values are the same,
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
// You have a red lottery ticket showing ints a, b, and c, each of which is 0, 1, or 2.
//If they are all the value 2, the result is 10. Otherwise if they are all the same, the result is 5.
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
// You have a green lottery ticket, with ints a, b, and c on it. If the numbers are all different from each
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
// You have a blue lottery ticket, with ints a, b, and c on it. This makes three pairs,
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
// Given two ints, each in the range 10..99, return true if there is a digit that appears in both numbers,
//such as the 2 in 12 and 23. (Note: division, e.g. n/10, gives the left digit while the % "mod" n%10 gives
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
//Given 2 non-negative ints, a and b, return their sum, so long as the sum has the same number of digits as a.
// If the sum has more digits than a, just return a without b. (Note: one way to compute the number of digits
// of a non-negative int n is to convert it to a string with String.valueOf(n) and then check the length of
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
// output will be:- 3,9,76

// Example:-2
//  4,6,7,9
//  6,7,8,4
//  7,9,10,1
// output will be:- 9,8,10
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
  let max = Number.MIN_VALUE;
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
// The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation.
// We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.
//sleepIn(false, false) → true
//sleepIn(true, false) → false
//sleepIn(false, true) → true

function sleepIn(weekday, vacation) {
  if (weekday == false && vacation == false) return true;
  if (weekday == true && vacation == false) return false;
  if (weekday == false && vacation == true) return true;
  if (weekday == true && vacation == true) return true;
  else return false;
//-----------------------------------------------------
if(!weekday||vacation){
  return true;
}
return false;
//--------------------------------------------------------
}

let weekday = false,
  vacation = true;
console.log(sleepIn(weekday, vacation));

//=========================================================================

// Question:-66
// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling.
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
// Given two int values, return their sum. Unless the two values are the same,
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
// Given an int n, return the absolute difference between n and 21, except return double the
// absolute difference if n is over 21.

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
// We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23.
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
// Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.

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
// Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num)
//computes the absolute value of a number.

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
// Given 2 int values, return true if one is negative and one is positive. Except if the parameter
//"negative" is true, then return true only if both are negative.

//posNeg(1, -1, false) → true
//posNeg(-1, 1, false) → true
//posNeg(-4, -5, true) → true

function posNeg(a, b, negative) {
  if (negative == true) {
    //return (a < 0 && b < 0);
    if (a < 0 && b < 0) return true;
  } else {
    return (a < 0 && b > 0) || (a > 0 && b < 0);
  }
}

let a = 1,
  b = -1,
  negative = false;
console.log(posNeg(a, b, negative));

//==============================================================================
// Question:-73
// Given a string, return a new string where "not " has been added to the front. However,
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
// Given a non-empty string and an int n, return a new string where the char at index n has been removed.
// The value of n will be a valid index of a char in the original string
// (i.e. n will be in the range 0..str.length()-1 inclusive).

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
// Given a string, return a new string where the first and last chars have been exchanged.

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
//Given a string, we'll say that the front is the first 3 chars of the string. If the string length is
// less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.

//front3("Java") → "JavJavJav"
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
//Given a string, take the last char and return a new string with the last char added at the front and back,
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
// Return true if the given non-negative number is a multiple of 3 or a multiple of 5. Use the % "mod"
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
// Given a string, take the first 2 chars and return the string with the 2 chars added at both
//the front and back, so "kitten" yields"kikittenki". If the string length is less than 2,
//use whatever chars are there.
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
// Given a string, return true if the string starts with "hi" and false otherwise.

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
// Given two temperatures, return true if one is less than 0 and the other is greater than 100.

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
// Given 2 int values, return true if either of them is in the range 10..20 inclusive.

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
// We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 3 int values,
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
// We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 2 int values,
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
// Given a string, if the string "del" appears starting at index 1, return a string
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
// Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" ..
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
  let positiveArr = [];
  let negativeArr = [];
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positiveArr.push(arr[i]);
    } else {
      negativeArr.push(arr[i]);
    }
  }
  // console.log(positiveArr);
  //console.log(negativeArr);

  let i = 0;
  let j = 0;
  let k = 0;
  while (i < negativeArr.length && j < positiveArr.length) {
    resultArr[k++] = positiveArr[j++];
    resultArr[k++] = negativeArr[i++];
  }
  // console.log(resultArr);
  while (j < positiveArr.length) {
    resultArr[k++] = positiveArr[j++];
  }
  while (i < negativeArr.length) {
    resultArr[k++] = negativeArr[i++];
  }
  console.log(resultArr);
}
//let arr = [9, 4, -2, -1, 5, 0, -5, -3, 2];
let arr = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];
rearranegArr(arr);

//==================================================================
// Question:-87

function maximumPriduct(arr) {
  let max = Number.MIN_VALUE;
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
// Given an array find missing number?
// arr=[1,2,3,5,6,7];
// 4 is missing value which are not present. so print 4. as a output.

function unknowValue(arr) {
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
unknowValue(arr);

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
  let max = Number.MIN_VALUE;
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
// Given a string, return a string made of the first 2 chars (if present), however include first char only
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
// Given three int values, a b c, return the largest.

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
// Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie.
// Note that Math.abs(n) returns the absolute value of a number.

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
// Given 2 int values, return true if they are both in the range 30..40 inclusive,
// or they are both in the range 40..50 inclusive.

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
// Given 2 positive int values, return the larger value that is in the range 10..20 inclusive,
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

  // first make a is bigger value.

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
// Return true if the given string contains between 1 and 3 'e' chars.

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
// Given two non-negative int values, return true if they have the same last digit,
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
// Given a string, return a new string where the last 3 chars are now in upper case.
//If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase()
// returns the uppercase version of a string.

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
// Given a non-empty string and an int N, return the string made starting with char 0, and then every
// Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.

//everyNth("Miracle", 2) → "Mrce"
//everyNth("abcdefg", 2) → "aceg"
//everyNth("abcdefg", 3) → "adg"

function everyNth(str, n) {
  let res = '';
  for (let i = 0; i < str.length; i = i + n) {
    res = res + str[i];
  }
  return res;
}

let str = 'Chocolates';
let n = 100;
console.log(everyNth(str, n));

//==========================================================================
// Question:-100
// Warmup:-2
//---------------------
// Given a string and a non-negative int n, return a larger string that is n copies of the original string.

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
// Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars,
//or whatever is there if the string is less than length 3. Return n copies of the front;

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
// Count the number of "xx" in the given string. We'll say that overlapping is allowed,
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
// Given a string, return true if the first instance of "x" in the string is immediately followed by
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

// Given a string, return a new string made of every other char starting with the first,
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
// Given a non-empty string like "Code" return a string like "CCoCodCode".

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
// Given a string, return the count of the number of times that a substring length 2 appears in the
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
// Given an array of ints, return the number of 9's in the array.

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
// Given an array of ints, return true if one of the first 4 elements in the array is a 9.
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
// Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.

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
// Given 2 strings, a and b, return the number of the positions where they contain the same length 2
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
*/
//=====================================================================================
// Question:-111
// Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or
//end should not be removed.

//stringX("xxHxix") → "xHix"
//stringX("abxxxcd") → "abcd"
//stringX("xabxxxcdx") → "xabcdx"

function stringX(str) {}

let str = 'xxHxix';
console.log(stringX(str));
