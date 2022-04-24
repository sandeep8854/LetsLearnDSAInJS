//  Set:-- changing the value of the node based on it's position in the linked list.

//Set Pseudo code:-
// 1:- this function should accept a value and an index.
// 2:- use your get function to find spacific node.
// 3:- if the node is not found, return false.
// 4:- if node is found, set the value of that node to be value
//     passed to the function and return true.

class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class SinglyLinkedListValue{
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
    set(index,val){
        let foundNode=this.get(index);
        if(foundNode){
            foundNode.val=val;
            return true;
        }
        return false;
    }
    

    
    }
    let list=new SinglyLinkedListValue();
    list.push("Hi");
    list.push("GoodBye");
    list.push("!");
    list.push(":)");

