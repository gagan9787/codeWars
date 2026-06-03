// Given a string of characters, create a function returning the middle digit in the product of each digit in the string. If the product has an even number of digits, return the middle two digits.

// You must return an integer, not a string, so if the product is e.g. 2016, return 1, not '01'.

// Not all strings will contain digits and not all inputs will be string. In those cases, return -1.

// Examples:

// 's7d8jd9' -> 7, 8, 9 -> 7 * 8 * 9 = 504 --> 0

// '8888' -> 8, 8, 8, 8, -> 8 * 8 * 8 * 8 = 4096 --> 09 --> 9

// 'abc' --> -1



// Solution


const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
function findMiddle(str) {
  if (typeof str !== "string") {
    return -1;
  }
  let newAry = [];
  let m = 1;
  let cenVal = 0;
  for (const element of str) {
    if (num.includes(element)) {
      newAry.push(element);
      m = m * Number(element);
    }
  }

  let res = 1;
  const ary = m.toString().split("");

  if (newAry != []) {
    console.log(m);
    if (m.toString().length % 2 == 0) {
      const index = (ary.length / 2) - 1 ;

      cenVal = ary.length <= 2 ? m : (ary[index] + ary[index + 1]);
      res = cenVal;
    } else {
      const index = (m.toString().length - 1) / 2;
      res = ary[index];
    }
  }
  return newAry.length == 0 ? -1 : Number(res);
}