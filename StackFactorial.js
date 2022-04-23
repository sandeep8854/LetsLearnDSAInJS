'use strict';

function Stack() {
  this.dataStore = [];
  this.push = push;
  this.top = 0;
  this.length = length;
  this.pop = pop;
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

function factStack(num) {
  let s = new Stack();
  while (num > 1) {
    s.push(num);
    num--;
  }
  let product = 1;
  while (s.length() > 0) {
    product = product * s.pop();
  }
  return product;
}

let result = factStack(5);
console.log('Factorial of :- ' + result);
