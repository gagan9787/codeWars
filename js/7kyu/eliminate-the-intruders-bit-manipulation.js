// You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

// Examples
// "11010101010101" ->  255 (= 0b11111111)
// "111" ->  7
// "1000000" -> 1
// "000" -> 0




function val(n) {
  let digit = 1;
  for (let i = 0; i < n; i++) {
    digit = digit * 2;
  }
  return digit;
}

function eliminateUnsetBits(v) {
  let count = 0;
  const split = v.split("");
  let newAry = [];
  split.forEach((element) => {
    if (element != 0) {
      newAry.push(element);
    }
  });
  console.log("newAry", newAry);
  for (let i = 0; i < newAry.length; i++) {
    if (i == 0) {
      count = 1
    } else {
      console.log(newAry[i], i, val(i));
      count += newAry[i] * val(i);
    }
  }
  return count;
}
