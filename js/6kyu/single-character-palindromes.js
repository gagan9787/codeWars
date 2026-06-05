// You will be given a string and you task is to check if it is possible to convert that string into a palindrome by removing a single character. If the string is already a palindrome, return "OK". If it is not, and we can convert it to a palindrome by removing one character, then return "remove one", otherwise return "not possible". The order of the characters should not be changed.

// For example:

// "abba"   -> "OK"           - this is a palindrome
// "abbaa"  -> "remove one"   - remove the 'a' at the extreme right
// "abbaab" -> "not possible" - cannot be made a palindrome 
// Good luck!

// If you like this Kata, please try Single Character Palindromes II




function solve(s) {
  let ary = s.split("");
  let msg;
  if (s == ary.reverse().join("")) {
    msg = "OK";
  } else {
    for (let i = 0; i < ary.length; i++) {
      let deletd = ary.splice(i, 1);
      ary.reverse();
      if (ary.join("") === ary.reverse().join("")) {
        msg = "remove one";
        break;
      } else {
        msg = "not possible";
      }

      ary.splice(i, 0, deletd[0]);
    }
  }
  return msg;
}

console.log(solve("madmam"));
