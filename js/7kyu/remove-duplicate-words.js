// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'




function removeDuplicateWords (s) {
    var select_words = s.split(' ')
    var result = [];
    select_words.forEach((v) => {
         if(!result.includes(v)) {
            result.push(v)
         }
    });
  
  return result.join(' ');
 
}
