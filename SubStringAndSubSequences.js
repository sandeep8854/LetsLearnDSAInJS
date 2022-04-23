'use strict';

// SubArray:-
//            a subArray is a contiguous (usi ka part hai) part of array
// and array that inside another array.
// for example:- arr=[1,2,3,4];
//  (1),(2),(3),(4),(1,2),(2,3),(3,4),(1,2,3),(2,3,4),(1,2,3,4)
// there are all subarray.
// size of subarray :-  n*(n+1)/2;

// we can run two nested loops,the outer loop picks starting element inner loop
//  consider all element on right of picked as ending element.
/*
function subArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    // picked starting point
    for (let j = i; j < arr.length; j++) {
      //picked ending point
      for (let k = i; k <= j; k++) {
        //print current ,starting and ending point
        console.log(arr[k] + ' ');
        console.log('\n');
      }
    }
  }
}

subArray([1, 2, 3, 4]);
*/
// 1
// 1,2
// 1,2,3
// 1,2,3,4
// 2
// 2,3
// 2,3,4
// 3
// 3,4
// 4
// let n = 4;
// let res = (n * (n + 1)) / 2;
// console.log(res);

//==================================================================
// Subsequence:----
// Subseqence is seqence that can be derived from another sequence by removing
// zero or more element without changing order of remaining element.
// find the total number of subsequence
// suppose that i have 4 element;
// total number of of subsequence 2^4-1
//   2*4-1;      {2powerN-1}    N means, number of element.-----

// arr=[1,2,3,4]
// [1],[2],[3].[4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4],[1,2,3],[1,2,4],[1,3,4],[2,3,4],[1,2,3,4]
// 2*N-1     formula to find number of subsequence.
// 2*4-1
// 16-1 = 15  , means 15 subsequence will be generated seperatally.

function subsequence(str, output) {
  if (str.length == 0) {
    console.log(output + ' ');
    return;
  }
  // first charcter
  subsequence(str.substring(1), output + str[0]);

  //all after first charctor.
  subsequence(str.substring(1), output);
}
let output = '';
let str = 'abcd';
subsequence(str, output);
