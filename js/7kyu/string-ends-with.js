// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// Inputs: "abc", "bc"
// Output: true

// Inputs: "abc", "d"
// Output: false


function solution(str, ending) {
  if (!ending) return true;
  if (!str) return false;
  const endCount = ending.length;
  return str.slice(-endCount) == ending;
}

console.log(solution("abcde", "cde"));
console.log(solution("abcde", "abc"));
console.log(solution("empty ending", ""));
