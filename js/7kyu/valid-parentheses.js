// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= length of input <= 100

// All inputs will be strings, consisting only of characters ( and ).
// Empty strings are considered balanced (and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.

// Protip: If you are trying to figure out why a string of parentheses is invalid, paste the parentheses into the code editor, and let the code highlighting show you!




function validParentheses(parenStr) {

    let l1 = 0; 
    let ary = parenStr.split("");
    for (let i = 0; i < ary.length; i++) {
        if (l1 < 0) {
            continue;
        }
        if (ary[0] == "(" && ary[i] == "(") {
            l1++;
        }
        else{
            l1--
        }
    }
    return l1 == 0 ? true : false;
}