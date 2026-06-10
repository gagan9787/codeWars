// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// Arguments (Haskell)
// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// Arguments (Other languages)
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// Example
// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'




function titleCase(title, minorWords) {
  let m = minorWords == undefined ? " " : minorWords.toLowerCase().split(" ");
  let res = "";
  let array = title.toLowerCase().split(" ");
  for (let i = 0; i < array.length; i++) {
    if (!m.includes(array[i]) || i == 0) {
      res +=
        array[i].charAt(0).toUpperCase() +
        array[i].slice(1) +
        `${array.length - 1 == i ? "" : " "}`;
    }
    else{
      res += array[i] +
        `${array.length - 1 == i ? "" : " "}`;
    }
  }
  return res;
}

// console.log(titleCase("First a of in", "an often into"));
console.log(titleCase("the quick brown fox", "an often into"));
console.log(titleCase("the QUICK bRoWn fOX", "xyz fox quick the"));
console.log(titleCase("aBC deF Ghi", undefined));
console.log(titleCase("a bc", "bc"));
console.log(titleCase("First a of in", "an often into"));