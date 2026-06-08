// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]



function moveZeros(arr) {
  let nonZero = [];
  let zero = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0 && typeof arr[i] == "number"){
     zero.push(arr[i]);
    }
    else{
      nonZero.push(arr[i])
    }
  }
  return [...nonZero, ...zero];
}

// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
// console.log(moveZeros([
//   9, 0, 0, 9, 1, 2, 0,
//   1, 0, 1, 0, 3, 0, 1,
//   9, 0, 0, 0, 0, 9
// ]));

// console.log(moveZeros([
//   'a', 0,   0, 'b', null,
//   'c', 'd', 0, 1,   false,
//   0,   1,   0, 3,   [],
//   0,   1,   9, 0,   0,
//   {},  0,   0, 9
// ]));