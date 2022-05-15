'use strict';

// Dictionaries:--
// stores data as key-value pairs
// such as the way of phone book stores is data as names and phone numbers,

function Dictionary() {
  this.add = add;
  this.data_store = new Array();
  this.find = find;
  // this.remove = remove;
  this.showAll = showAll;
}

function add(key, value) {
  this.data_store[key] = value;
}

function find(key) {
  return this.data_store[key];
}
// function remove(key) {
//   delete this.data_store[key];
// }

// function showAll() {
//   for (let i = 0; i < this.data_store.key; i++) {
//     console.log(this.data_store[i] + ' ');
//   }
// }

let pbook = new Dictionary();
pbook.add('Sandeep', '8112912494');
pbook.add('Ram Charitra', '8005079895');
pbook.add('Ram Ashish', '9920558063');
console.log("Ram Ashish's Extension " + pbook.find('Ram Ashish'));
// pbook.remove('Ram Ashish');

pbook.showAll();
