// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'




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

function addLetters(...letters) {
  let sum = 0;
  if (letters == "") {
    return "z";
  }
  for (const element of letters) {
    sum += alphabet[element];
  }
  console.log("sum", sum);
  if (sum > 26) sum = sum % 26;
  const letter = Object.entries(alphabet).find(
    ([key, value]) => value === sum,
  )?.[0];

  return letter == undefined ? 'z' : letter;
}

console.log(addLetters("a", "b", "c"));
console.log(addLetters("a", "b", "c"));
console.log(addLetters("a", "b"));
console.log(addLetters("z"));
console.log(addLetters("z", "a"));
console.log(addLetters("y", "c", "b"));
console.log(addLetters());
