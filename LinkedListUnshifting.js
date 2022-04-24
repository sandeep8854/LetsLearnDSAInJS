// Unshifting:--
//     Adding a new node to the beginnig of the linked list.

// Unshifting Pseudo code:--
//  1:- the function should accept a value,.
//  2:- create a newNode using the value passed to the function.
//  3:- if there is no head properties on list , set the head and tail to be the
//      newly created node.
//  4:- set the head properties on the list to the next newly created node.
//  5:- increase the length by 1.
//  6:- return the linked list.

//==============================================================================



class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class SinglyLinkedListUn_ShiftingBigg{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(val){
        let newNode=new Node(val);
        if(!this.head){  // head is empty
            this.head=newNode;
            this.tail=this.head;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.length++;
        return this;
    }
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
    //  shiftRemove(){
    //      if(!this.head) return undefined;
    //      let currentHead=this.head;
    //      this.head=currentHead.next;
    //      this.length--;
    //      if(this.length==0){
    //          this.tail=null;
    //      }
    //      return currentHead;
    //  }

    unshift(val){
        let newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }else{
            newNode.next=this.head;
            this.head=newNode;
        }
        this.length++;
        return this;
    }
    }
    let list=new SinglyLinkedListUn_ShiftingBigg();
    list.push("Hi");
    list.push("GoodBye");
    list.push("!");
    
