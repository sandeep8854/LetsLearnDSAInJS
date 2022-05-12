'use strict';

function HashTable() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;
}

function put(data) {
  let pos = this.simpleHash(data);
  this.table[pos] = data;
}

function simpleHash(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data.charCodeAt(i);
  }
  console.log('Hash Value ' + data + '==> ' + total);
  return total % this.table.length;
}

function showDistro() {
  let n = 0;
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i] != undefined) {
      console.log(i + ' : ' + this.table[i]);
    }
  }
}

let someNames = [
  'Sandeep',
  'Harsh',
  'Anshika',
  'Bhim',
  'Arjun',
  'Nakul',
  'Anand',
];

let hTable = new HashTable();
for (let i = 0; i < someNames.length; i++) {
  hTable.put(someNames[i]);
}

hTable.showDistro();
