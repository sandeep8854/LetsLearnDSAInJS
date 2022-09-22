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

//=====================================================================================
// Question:-111
// Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or
//end should not be removed.

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
// Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so
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

//let message = ['JavaScript', 'is', 'fun.']; // JavaScript is fun
let message = [45, 14, 25, 36, 40];
// join all elements of array using space
let joinedMessage = message.join(' ');
console.log(joinedMessage);
console.log(typeof joinedMessage);
console.log(joinedMessage.length);
console.log(joinedMessage[0].joinedMessage[1]);

// Output: JavaScript is fun.

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
  var num = 040;
  console.log(num); // 32
  // Uncaught SyntaxError: Decimals with leading zeros are not allowed in strict mode.
}

let arr = [16, 8, 18, 8, 1];
arr = arr.join(',').split(',');
leftDigit(arr);

//====================================================================================
// Question:-113
// Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed,
// but the "a" can be any char. The "yak" strings will not overlap.

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
// Given an array of ints, return the number of times that two 6's are next to each other in the array.
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
//Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array.
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
//Given an array of ints, return true if it contains a 2, 7, 1 pattern: a value, followed by the value plus 5,
// followed by the value minus 1. Additionally the 271 counts even if the "1" differs by 2 or less from
//the correct value.

//has271([1, 2, 7, 1]) → true
//has271([1, 2, 8, 1]) → false
//has271([2, 7, 1]) → true

function has271(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    let val = nums[i];
    if (
      nums[i + 1] == val + 5 && // the "7" check
      Math.abs(nums[i + 2] - (val - 1)) <= 2
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
// Given an array of ints, return true if 6 appears as either the first or last element in the array.
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
//Given an array of ints, return true if the array is length 1 or more, and the first element and the
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
// Given 2 arrays of ints, a and b, return true if they have the same first element or they have
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
// Given an array of ints length 3, return the sum of all the elements.

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
// Given an array of ints length 3, return an array with the elements "rotated left"
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
// Given an array of ints length 3, return a new array with the elements in reverse order,
// so {1, 2, 3} becomes {3, 2, 1}.

//reverse3([1, 2, 3]) → [3, 2, 1]
//reverse3([5, 11, 9]) → [9, 11, 5]
//reverse3([7, 0, 0]) → [0, 0, 7]

function reverse3(arr) {
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
console.log(reverse3(arr));

//===============================================================================
// Question:-124
// Given an array of ints length 3, figure out which is larger, the first or last element in the array,
// and set all the other elements to be that value. Return the changed array.

//maxEnd3([1, 2, 3]) → [3, 3, 3]
//maxEnd3([11, 5, 9]) → [11, 11, 11]
//maxEnd3([2, 11, 3]) → [3, 3, 3]

function maxEnd3(arr) {
  let resArr = new Array(3);
  let maxx = Number.MIN_VALUE;
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
// Given an array of ints, return the sum of the first 2 elements in the array. If the array length
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
// Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.

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
// Given an array of ints, return a new array length 2 containing the first and last elements
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
// Given an int array length 2, return true if it contains a 2 or a 3.

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
// Given an int array length 2, return true if it does not contain a 2 or 3.

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
// Given an int array, return a new array with double the length where its last element is the
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
// Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be
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
// Given an int array length 3, if there is a 2 in the array immediately followed by a 3,
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
// Start with 2 int arrays, a and b, of any length. Return how many of the arrays have 1 as
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
// Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array.
//Return the array which has the largest sum. In event of a tie, return a.

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
// Given an array of ints of even length, return a new array length 2 containing the middle two elements
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
// Given 2 int arrays, each length 2, return a new array length 4 containing all their elements.

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
// Given an array of ints, swap the first and last elements in the array. Return the modified array.
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
// Given an array of ints of odd length, return a new array length 3 containing the elements from the
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
// Given an array of ints of odd length, look at the first, last, and middle values in the array and return
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
// Given an int array of any length, return a new array of its first 2 elements. If the array is smaller
//than length 2, use whatever elements are present.

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
// Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions
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
//Given 2 int arrays, a and b, return a new array length 2 containing, as much as will fit, the elements from
//a followed by the elements from b. The arrays may be any length, including 0, but there will be 2 or more
// elements available between the 2 arrays.

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
// Given 2 int arrays, a and b, of any length, return a new array with the first element of each array.
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
// Array:-02 medium level
// Question:-144
// Return the number of even ints in the given array. Note: the % "mod" operator computes the
// remainder, e.g. 5 % 2 is 1.

//countEvens([2, 1, 2, 3, 4]) → 3
//countEvens([2, 2, 0]) → 3
//countEvens([1, 3, 5]) → 0

function countEvens(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) count++;
  }
  return count;
}
let arr = [2, 1, 2, 3, 4];
console.log(countEvens(arr));

//===========================================================================================
// Question:-145
// Given an array length 1 or more of ints, return the difference between the largest and smallest
// values in the array. Note: the built-in Math.min(v1, v2) and Math.max(v1, v2) methods return the
// smaller or larger of two values.

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
// Return the "centered" average of an array of ints, which we'll say is the mean average of the values,
// except ignoring the largest and smallest values in the array. If there are multiple copies of the smallest
// value, ignore just one copy, and likewise for the largest value. Use int division to produce the final
// average. You may assume that the array is length 3 or more.

//centeredAverage([1, 2, 3, 4, 100]) → 3
//centeredAverage([1, 1, 5, 5, 10, 8, 7]) → 5
//centeredAverage([-10, -4, -2, -4, -2, 0]) → -3

function centeredAverage(arr) {
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
console.log(centeredAverage(arr));

//===============================================================================================
// Question:-147
// Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is
// very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.

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
//with a 6 and extending to the next 7 (every 6 will be followed by at least one 7).
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
// Given an array of ints, return true if the array contains a 2 next to a 2 somewhere.

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
// Given an array of ints, return true if the array contains no 1's and no 3's.

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
// Given an array of ints, return true if the sum of all the 2's in the array is exactly 8.

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
// Given an array of ints, return true if the number of 1's is greater than the number of 4's

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
// Given a number n, create and return a new int array of length n, containing the numbers 0, 1, 2, ... n-1.
//The given n may be 0, in which case just return a length 0 array. You do not need a separate if-statement
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
// Given an array of ints, return true if every element is a 1 or a 4.

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
// Given a number n, create and return a new string array of length n, containing the
//strings "0", "1" "2" .. through n-1. N may be 0, in which case just return a length 0 array. Note:
// String.valueOf(xxx) will make the String form of most types. The syntax to make a new string array is:
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
// Given an array of ints, return true if it contains no 1's or it contains no 4's.

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
// We'll say that a value is "everywhere" in an array if for every pair of adjacent elements in the array,
// at least one of the pair is that value. Return true if the given value is everywhere in the array.

//isEverywhere([1, 2, 1, 3], 1) → true
//isEverywhere([1, 2, 1, 3], 2) → false
//isEverywhere([1, 2, 1, 3, 4], 1) → false

function isEveryThing(arr, val) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != val && arr[i + 1] != val) return false;
  }
  return true;
}

let arr = [1, 2, 1, 3];
let val = 1;
console.log(isEveryThing(arr, val));

//==============================================================================
// Question:-158
// Given an array of ints, return true if the array contains a 2 next to a 2 or a 4 next to a 4, but not both.

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
// Given arrays nums1 and nums2 of the same length, for every element in nums1, consider the corresponding
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
// Given an array of ints, return true if the array contains two 7's next to each other,
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
// Given an array of ints, return true if there is a 1 in the array with a 2 somewhere later in the array.

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
// Given an array of ints, return true if the array contains either 3 even or 3 odd values
//all next to each other.

//modThree([2, 1, 3, 5]) → true
//modThree([2, 1, 2, 5]) → false
//modThree([2, 4, 2, 5]) → true

function modThree(arr) {
  let evenC = 0;
  let oddC = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] & 1) == 1) oddC++;
    else evenC++;
  }
  if (evenC == 3 || oddC == 3) return true;
  else return false;
}
let arr = [2, 1, 3, 5];
console.log(modThree(arr));

//==================================================================================
// Question:-163
// Given an array of ints, return true if the value 3 appears in the array exactly 3 times,
// and no 3's are next to each other.

//haveThree([3, 1, 3, 1, 3]) → true
//haveThree([3, 1, 3, 3]) → false
//haveThree([3, 4, 3, 3, 4]) → false

function haveThree(arr) {
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
console.log(haveThree(arr));

//============================================================================
// Question:-164
// Given an array of ints, return true if every 2 that appears in the array is next to another 2.

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
// and false for n=1 and n=3. You may assume that n is in the range 0..nums.length inclusive.

//sameEnds([5, 6, 45, 99, 13, 5, 6], 1) → false
//sameEnds([5, 6, 45, 99, 13, 5, 6], 2) → true
//sameEnds([5, 6, 45, 99, 13, 5, 6], 3) → false

function sameEnds(arr, givenLen) {
  let findTrue = true;
  for (let i = 0; i < givenLen; i++) {
    if (arr[i] == arr[arr.length - givenLen - i]) {
      findTrue = true;
    } else {
      findTrue = false;
    }
  }
  return findTrue;
}
let arr = [5, 6, 45, 99, 13, 5, 6];
let givenLen = 1;
console.log(sameEnds(arr, givenLen));

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
// Given start and end numbers, return a new array containing the sequence of integers from start
// up to but not including end, so start=5 and end=10 yields {5, 6, 7, 8, 9}. The end number will be
// greater or equal to the start number. Note that a length-0 array is valid. (See also: FizzBuzz Code)

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
//and return the given array, or return a new array.

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
// For each multiple of 10 in the given array, change all the values following it to be that multiple of 10,
// until encountering another multiple of 10. So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}.

//tenRun([2, 10, 3, 4, 20, 5]) → [2, 10, 10, 10, 20, 20]
//tenRun([10, 1, 20, 2]) → [10, 10, 20, 20]
//tenRun([10, 1, 9, 20]) → [10, 10, 10, 20]


//let arr = [2, 10, 3, 4, 20, 5];

let a = 5;
console.log(a % 10 == 0);

//========================================================================================
// Question:-170
// Given a non-empty array of ints, return a new array containing the elements from the original array that
// come before the first 4 in the original array. The original array will contain at least one 4. Note that
// it is valid in java to create an array of length 0.

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
// Given a non-empty array of ints, return a new array containing the elements from the original array that
//come after the last 4 in the original array. The original array will contain at least one 4. Note that it
// is valid in java to create an array of length 0.

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
// We'll say that an element in an array is "alone" if there are values before and after it,
//and those values are different from it. Return a version of the given array where every instance
// of the given value which is alone is replaced by whichever value to its left or right is larger.

//notAlone([1, 2, 3], 2) → [1, 3, 3]
//notAlone([1, 2, 3, 2, 5, 2], 2) → [1, 3, 3, 5, 5, 2]
//notAlone([3, 4], 3) → [3, 4]
function notAlone(arr) {
  // if (arr.length < 3) return arr;

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && i < arr.length - 1 && arr[i] == value) {
      if (arr[i] != arr[i - 1] && arr[i] != arr[i + 1]) {
        arr[i] = Math.max(arr[i - 1], arr[i + 1]);
      }
    }
  }
  return arr;
}

let arr = [3, 4];
let value = 3;
console.log(notAlone(arr, value));

//====================================================================================
// Question:-173
// Return an array that contains the exact same numbers as the given array, but rearranged so that all the
// zeros are grouped at the start of the array. The order of the non-zero numbers does not matter.
//So {1, 0, 0, 1} becomes {0 ,0, 1, 1}. You may modify and return the given array or make a new array.

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
// Return a version of the given array where all the 10's have been removed. The remaining elements should
//shift left towards the start of the array as needed, and the empty spaces a the end of the array should
// be 0. So {1, 10, 10, 2} yields {1, 2, 0, 0}. You may modify and return the given array or make a new array.

//withoutTen({1, 10, 10, 2}) → {1, 2, 0, 0}
//withoutTen({10, 2, 10}) → {2, 0, 0}
//withoutTen({1, 99, 10}) → {1, 99, 0}

function withoutTen(arr) {
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
console.log(withoutTen(arr));

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
// Consider the leftmost and righmost appearances of some value in an array. We'll say that the "span"
//is the number of elements between the two inclusive. A single value has a span of 1. Returns the
//largest span found in the given array. (Efficiency is not a priority.)

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
// Return an array that contains exactly the same numbers as the given array, but rearranged so that every 3 is
// immediately followed by a 4. Do not move the 3's, but every other number may move. The array contains the
// same number of 3's and 4's, every 3 has a number after it that is not a 3, and a 3 appears in the array
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
// (This is a slightly harder version of the fix34 problem.) Return an array that contains exactly the same
// numbers as the given array, but rearranged so that every 4 is immediately followed by a 5. Do not move the 4's,
//but every other number may move. The array contains the same number of 4's and 5's, and every 4 has a number
// after it that is not a 4. In this version, 5's may appear anywhere in the original array.

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
// Given a non-empty array, return true if there is a place to split the array so that the sum of the
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
// Given two arrays of ints sorted in increasing order, outer and inner, return true if all of the numbers
//in inner appear in outer. The best solution makes only a single "linear" pass of both arrays, taking
//advantage of the fact that both arrays are already in sorted order.

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
// Given n>=0, create an array length n*n with the following pattern, shown here for
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
// Given n>=0, create an array with the pattern {1,    1, 2,    1, 2, 3,   ... 1, 2, 3 .. n}
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
//the array, the same group appears in reverse order. For example, the largest mirror section in
// {1, 2, 3, 8, 9, 3, 2, 1} is length 3 (the {1, 2, 3} part). Return the size of the largest mirror section
//found in the given array.

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
// Say that a "clump" in an array is a series of 2 or more adjacent elements of the same value.
//Return the number of clumps in the given array.

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
// Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".

//helloName("Bob") → "Hello Bob!"
//helloName("Alice") → "Hello Alice!"
//helloName("X") → "Hello X!"

function helloName(str) {
  return 'Hello' + ' ' + str + '!';
}

let str = 'Bob';
console.log(helloName(str));
*/
//===========================================================================================
// Question:-187
// Given two strings, a and b, return the result of putting them together in the order abba, e.g.
//"Hi" and "Bye" returns "HiByeByeHi".

//makeAbba("Hi", "Bye") → "HiByeByeHi"
//makeAbba("Yo", "Alice") → "YoAliceAliceYo"
//makeAbba("What", "Up") → "WhatUpUpWhat"
