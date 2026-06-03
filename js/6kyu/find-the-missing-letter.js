// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!




const alphabet = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

function findMissingLetter(array) {
  const isUpper = (str) => str === str.toUpperCase();
  let Tcase = isUpper(array[0]);
  array = array.map((k) => k.toLowerCase());
  let f = array[0];
  let l = array[array.length - 1];
  let missVal = null;
  let orgVal = [];

  for (let i = alphabet[f]; i <= alphabet[l]; i++) {
    Object.keys(alphabet).find((k) =>
      alphabet[k] === i ? orgVal.push(k) : null,
    );
  }
  orgVal.forEach((element) => {
    if (!array.includes(element)) {
      missVal = element;
    }
  });
  return Tcase === true ? missVal.toUpperCase() : missVal.toLowerCase();
}
