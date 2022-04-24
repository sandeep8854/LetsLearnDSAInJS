//console.log("Welcome to Linked List Program.");

// Popping PseudoCode:-
    // 1:- if there are no nodes in the list ,return undefined.
    // 2:- loop througth the list until you reached the tail.
    // 3:- set the next property of 2nd to last node to be null.
    // 4:- set to tail to be the second to last node.
    // 5:- decrement the length of the list by 1.
    // 6:- return the value of node removed.

    class Node {
        constructor(val) {
          this.val = val;
          this.next = null;
        }
      }
      class SinglyLinkedList_ {
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
//============================================================
        // Popping PseudoCode:-
        // 1:- if there are no nodes in the list ,return undefined.
        // 2:- loop througth the list until you reached the tail.
        // 3:- set the next property of 2nd to last node to be null.
        // 4:- set to tail to be the second to last node.
        // 5:- decrement the length of the list by 1.
        // 6:- return the value of node removed.
        pop(){
          if(!this.head) return undefined;
          let current=this.head;
          let newTail=current;
          while(current.next){
            newTail=current;
            current=current.next;
          }
          this.tail=newTail;
          this.tail.next=null;
          this.length--;
          return current;
        }

        
      
        ///====================================================
        traverse_() { // for printing element.
          let current = this.head;
          while (current) {
            console.log(current.val);
            current = current.next;
          }
        }
      } // this is singly Linked class bracket.
      //======================================================
      let list = new SinglyLinkedList_();
      list.push('Hi');
      list.push('GoodBye');
      list.push("!")
      // list.push(1245);
      // list.traverse_();
     

      