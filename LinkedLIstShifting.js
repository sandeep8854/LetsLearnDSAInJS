// Shifting:--
//           Removing a new Node from the begining of the linked list
// also callled as shifting.

// Pseudo Code.
// 1:- if there are no nodes , return undefined.
// 2:- store the current head property in the variable.
// 3:- set the head property to be the current head's next property
// 4:- decrement the length by 1.
// 5:- return the value of the node removed.

//  2--->77--->6--->43--->76--->89
//  |                           |
// head/temp                   tail


//  2--->77--->6--->43--->76--->89
//  |    |                      |
//temp  head                  tail


//  77--->6--->43--->76--->89   final result.
//  |                      |
//  head                  tail


class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class SinglyLinkedListShifting{
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
     shiftRemove(){
         if(!this.head) return undefined;
         let currentHead=this.head;
         this.head=currentHead.next;
         this.length--;
         if(this.length==0){
             this.tail=null;
         }
         return currentHead;
     }
    }
    let list=new SinglyLinkedListShifting();
    list.push("Hi");
    list.push("GoodBye");
    list.push("!");
   // list.traverse_();
    // list.shiftRemove();

  





