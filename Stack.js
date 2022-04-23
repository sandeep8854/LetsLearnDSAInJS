
//console.log("Welcome to Stack Contribuation..");
// Stack:-
//        accessible only from one end of list,called top.
// real world example:--
//              of a stack is stack of trays at a cafeteria . trays are always remove from the top
//  wwhen trays are put back on the stack after being washed they are placed on the top of the
//  stack, stack is know as a last in first out[LIFO] data structure.
//      
//
//==================================================================================
//                                _____
//                                |    |
//                    ________    |_4__|    ______
//                     |     |    |    |    |    |
//             _____   |__3__|   _|_3__|    |_3__|__   _____     ______
//             |    |   |    |    |    |    |    |     |   |     |    |
//      _____  |_2_     |__2_|   _|_2__|    |_2__|__   |_2_|_    |_4__|_
//      |   |  |   |    |    |    |    |    |    |     |   |     |    |
//      | 1 |  | 1 |    |  1 |    | 1  |    |  1 |     | 1 |     | 1  |
//     ------- -------  --------  -------   -------    ------    -------
//     push(1)  push(2) push(3)   push(4)    pop()      pop()     push(4)
//=====================================================================================
function Stack() {
    //---------------------------------
    this.dataStore = [];
    // the array that stores  the stack element is named dataStore, the constrctore set it to
    // an empty array.
    //====================================================================================
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
    }
    //============================================================================
    //the first function to implement is the push() function. when we push the new element 
    //  on the stack, we have to store on the top position and increment the top variable.
    function push(element) {
    this.dataStore[this.top++] = element;
    }
    //====================================================================================
//  the peek() function return the top element of the stack by accessing the element at 
//  top-1 osition of the array.
    function peek() {
    return this.dataStore[this.top-1];
    }
    //=====================================================================================
//  the pop() function does the reverse of the push() function.it return the element in the 
// top position of the stack and then decrement the top variavble.
    function pop() {
    return this.dataStore[--this.top];
    }
    //=====================================================================================
//  we can clear a stack by simply setting the top variable back to 0.
    function clear() {
    this.top = 0;
    }
    //=====================================================================================
// the length() function return this value by returning the value of top.
    function length() {
    return this.top;
    }
    //=====================================================================================

    let s=new Stack();
    s.push("Sandeep");
    s.push("Raghunatha");
    s.push("Rahan Reddy");
    s.push("Yash Wardhan Yadav");
    s.push("Anand");
    console.log("Printing the Stack Length:-  " +s.length());
    console.log(s.peek());    //Anand
    let popped=s.pop();
    console.log("The Popped Element is : " + popped); //Anand
    console.log(s.peek());  // Yash Wardhan Yadav
    s.clear();
    console.log("Length of Stack:-  " + s.length()); // 0
    console.log(s.peek());  //undefined
    s.push("ShreeKant Chukka");
    console.log(s.peek());  