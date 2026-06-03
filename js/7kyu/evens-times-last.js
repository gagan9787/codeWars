// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.




function evenLast(numbers) {
  if (numbers == "") {
    return 0;
  } else {
    let count = 0;
    const lastItem = numbers[numbers.length - 1];
    for (let i = 0; i < numbers.length; i++) {
      if (i % 2 == 0) {
        count += numbers[i];
      }
    }
    return lastItem * count;
  }
}
