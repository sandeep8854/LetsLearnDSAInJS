//    Get:-
//         Retrieving a node by it's position in the linked list.

//   Get Pseudo Code.

// 1:- The Function should accept an index.
// 2:- if the index is less than zero or greater than or equal to
//     the length of list, return null.
// 3:- loop throught the list until you reach the index and return the node
//     at the spacific index.


class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class SinglyLinkedListGetIndexGivenPosi{
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
    get(index){ // find the value througth the index.
        if(index<0 ||index>=this.length) return null;
        let counter=0;
        let current=this.head;
        while(counter!=index){
            current=current.next;
            counter++;
        }
        return current;

    }

    
    }
    let list=new SinglyLinkedListGetIndexGivenPosi();
    list.push("Hi");
    list.push("GoodBye");
    list.push("!");
