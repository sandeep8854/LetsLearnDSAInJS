console.log("Welcome To Git..");

//            Singly Linked List:-
// 1:- A Data structure that contains a head ,tail and length property.
// 2:- Linked List Consists of node , each node has a value and a pointer to another node
//       or null.

// piece of data- val
// reference to next node - next
//================================================================================
//  Push PesudoCode
// 1:-  This function should accept a value.
// 2:-  create a new Node using the value passed to the function.
// 3:-  if there is no head property on the list , set the head and tail to be
//         newly created node.
// 4:- otherise set the next property on the tail to be the new node and set the tail
//      property on the list to the newly created node.
// 5:- incerement the length by 1.
// 6:- and return the list.
//==========================================================================================
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(val) {
      let newNode = new Node(val);
      if (!this.head) {
        // it means head is empty.
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
    // Popping PseudoCode:-
    // 1:- if there are no nodes in the list ,return undefined.
    // 2:- loop througth the list until you reached the tail.
    // 3:- set the next property of 2nd to last node to be null.
    // 4:- set to tail to be the second to last node.
    // 5:- decrement the length of the list by 1.
    // 6:- return the value of node removed.
  
    ///====================================================
    traverse() { // for printing element.
      let current = this.head;
      while (current) {
        console.log(current.val);
        current = current.next;
      }
    }
    //======================================================
  }
  let list = new SinglyLinkedList();
  list.push('Hi');
  list.push('GoodBye');
  list.push('!');
  list.traverse();
  
  // let first = new Node('Hi');
  // first.next = new Node('There');
  // first.next.next = new Node('how');
  // first.next.next.next = new Node('are');
  // first.next.next.next.next = new Node('You');
  // console.log(first.next.next);