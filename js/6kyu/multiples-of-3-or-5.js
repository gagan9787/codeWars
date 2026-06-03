// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If a number is a multiple of both 3 and 5, only count it once.




function divdeThree(n) {
  return n % 3 === 0;
}

function divdeFive(n) {
  return n % 5 === 0;
}
function solution(number) {
  let count = 0;
  for (let i = 1; i < number; i++) {
    if (i < 0) {
      count += 0;
    } else {
      if (divdeFive(i) && divdeThree(i)) {
        count += i;
      } else if (divdeFive(i) || divdeThree(i)) {
        count += i;
      }
    }
  }
  return count;
}
