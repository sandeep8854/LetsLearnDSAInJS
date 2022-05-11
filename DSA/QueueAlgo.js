'use strict';
// Queue:--
//         A queue is a type of list where data are inserted at the end and remove from the
//  front.  A queue is a First In First Out [FIFO] data structure.
// There are two primary operation involving queue are inserted a new element from the queue.
// the insertion opertation is called enqueue and removal operation is called dequeue.
// enqueue oeration insert a new element at the end of quueue
// and the dequeue operation remove and element from the front of queue.

// ------------------------------------------
//  | A  |    |     |    |     |     |     |      A arrive in queue.
//------------------------------------------

//-----------------------------------------
// |  A  | B    |     |     |      |      |      B arrive in queue.
//-----------------------------------------

//-----------------------------------------
// |  A  | B  | C  |     |      |     |     |    C arrives in queue.
//-----------------------------------------

//----------------------------------------
// | B  | C  |     |     |     |     |          a departs queue
//---------------------------------------

//---------------------------------------
// | C |    |      |     |     |    |    |      b departs queue.
//---------------------------------------
// by defining a constructor function.
function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}
//============================================================================
// the enqueue() function adds an element to the end of queue.
function enqueue(element) {
  this.dataStore.push(element);
}
//===========================================================================
//the dequeue() function remove an element from the front of a queue.
function dequeue() {
  return this.dataStore.shift(); // Then we can remove the element from the front of the array using shift():
}
//============================================================================

//we can examine front and back element of a queue using these function.
function front() {
  return this.dataStore[0];
}
function back() {
  return this.dataStore[this.dataStore.length - 1];
}
//=============================================================================
// we also need a toString() function to display all the element in queue.
function toString() {
  let retStr = '';
  for (let i = 0; i < this.dataStore.length; i++) {
    retStr = retStr + this.dataStore[i] + '\n';
  }
  return retStr;
}

// finally, we need a function that lets us know if a queue is empty.

function empty() {
  if (this.dataStore.length == 0) {
    return true;
  } else {
    return false;
  }
}

let q = new Queue();
q.enqueue('Sandeep');
q.enqueue('Duggi Reddy');
q.enqueue('Reghu Reddy');

console.log(q.toString());
console.log('--------------------------');
q.dequeue();
console.log(q.toString());

console.log('Fornt Of Queue : ' + q.front());
console.log('Back Of Queue : ' + q.back());

console.log(q.empty());

// let n = 5;
// let res = (n * (n + 1)) / 2;
// console.log(res); // 15
