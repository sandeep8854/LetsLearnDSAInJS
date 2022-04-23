'use strict';
// Palindrome String  as use of Stack.:---
// We can use a stack to determine whether or not a given string is a palindrome. We take
// the original string and push each character onto a stack, moving from left to right. When
// the end of the string is reached, the stack contains the original string in reverse order,
// with the last letter at the top of the stack and the first letter at the bottom of the stack,
function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.length = length;
}
function push(element) {
  this.dataStore[this.top++] = element;
}

function pop() {
  return this.dataStore[--this.top];
}
function length() {
  return this.top;
}
function isPalindrome(word) {
  let st = new Stack();
  for (let i = 0; i < word.length; i++) {
    st.push(word[i]);
  }
  let reverseWord = '';
  while (st.length() > 0) {
    reverseWord = reverseWord + st.pop();
  }
  if (word == reverseWord) {
    return true;
  } else {
    return false;
  }
}

let word = 'level';
if (isPalindrome(word)) {
  console.log(word + ' is a palindrome.');
} else {
  console.log(word + ' is not palindrome . ');
}
