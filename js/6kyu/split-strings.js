// Complete the solution so that it splits the string into strings of two characters in a list/array (depending on the language you use). If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']




function solution(str) {
  let ary = [];
  let strAry = str.split("");
  let st = "";
  for (let i = 0; i < strAry.length; i++) {
    if (i % 2 == 0) {
      st += strAry[i];
      if (strAry[i + 1] == undefined) ary.push((st+"_"));
    }
    else{
      st += strAry[i];
      ary.push(st);
      st = "";
    }
  }
  return ary;
}

console.log(solution("abcde"));
console.log(solution("abcdefg"));
console.log(solution(""));
