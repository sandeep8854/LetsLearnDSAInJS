'use strict';

// there are 2 restrictions
// 1:- Only one disc can be moved at a time.
// 2:- At any point in the process, we should never places a larger disc on top
//       of a smaller disc

//=====================================================================================
function hanoiTowerRec(n, from_rod, to_rod, aux_rod) {
  if (n == 1) {
    console.log('Move disc 1 from rod ' + from_rod + ' to rod ' + to_rod);
    return;
  }
  hanoiTowerRec(n - 1, from_rod, aux_rod, to_rod);

  console.log('Move disc ' + n + ' from rod ' + from_rod + ' to rod ' + to_rod);

  hanoiTowerRec(n - 1, aux_rod, to_rod, from_rod);
}

let n = 3;
hanoiTowerRec(n, 'A', 'C', 'B');

/*
Move disc 1 from rod A to rod C
Move disc 2 from rod A to rod B
Move disc 1 from rod C to rod B
Move disc 3 from rod A to rod C
Move disc 1 from rod B to rod A
Move disc 2 from rod B to rod C
Move disc 1 from rod A to rod C

1====>3
1====>2
3====>2
1====>3
2====>1
2====>3
1====>3


*/
