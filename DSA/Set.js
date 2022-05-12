'use strict';

// Set :-
//     set is a collection of unique element
// set play a very important role in DSA to find unique element.
// Set Definitions
//-------------------------

//  A set containing no members is called the empty set. The universe is the set of all
// possible members.
//  Two sets are considered equal if they contain exactly the same members.
//  A set is considered a subset of another set if all the members of the first set are
// contained in the second set.

// Set Operations
//-------------------------------------------------------------
// Union
// A new set is obtained by combining the members of one set with the members of
// another set.
//----------------------------------------------------------
// Intersection
// A new set is obtained by adding all the members of one set that also exist in a second
// set.
// Difference
//---------------------------------------------------------------------------------------
// A new set is obtained by adding all the members of one set except those that also
// exist in a second set.

//====================================================================================

function Set() {
  this.dataArray = [];
  this.add = add;
  this.remove = remove;
  // this.size = size;
  // this.union = union;
  //this.intersect = intersect;
  //this.subset = subset;
  //this.difference = difference;
  this.show = show;
}

function add(data) {
  if (this.dataArray.indexOf(data)) {
    this.dataArray.push(data);
    return true;
  } else {
    false;
  }
}

function remove(data) {
  var pos = this.dataArray.indexOf(data);
  if (pos > -1) {
    this.dataArray.splice(pos, 1);
    return true;
  } else {
    return false;
  }
}

function show() {
  for (let i = 0; i < this.dataArray.length; i++) {
    console.log(this.dataArray[i]);
  }
}

let names = new Set();
names.add('Sandeep');
names.add('Pradeep');
names.add('Divakar');
names.add('Kallu');
names.add('Ballu');

if (names.add('Sandeep')) {
  console.log('Sandeep Added...');
} else {
  console.log("Can't Add Sandeep, Must Already in the set..");
}
names.show();

let removed = 'Sandeep';
if (names.remove(removed)) {
  console.log(removed + ' removed');
} else {
  console.log(removed + ' not removed');
}
console.log('After removing the element..');
names.show();
/*
//Can't Add Sandeep, Must Already in the set..
Sandeep
Pradeep
Divakar
Kallu
Ballu
Sandeep removed
After removing the element..
Pradeep
Divakar
Kallu
Ballu
*/
