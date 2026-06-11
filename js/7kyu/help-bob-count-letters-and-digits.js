
// Bob is a lazy man.

// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1




const a = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
];

const n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function countLettersAndDigits(input) {
    let count = 0;
    for (const element of input) {
        if (a.includes(element.toLowerCase()) || n.includes(element)) {
            count++
        }
    }
    return count;
}

console.log(countLettersAndDigits("hel2!lo"));