
// Failed Sort - Bug Fixing #4
// Oh no, Timmy's Sort doesn't seem to be working? Your task is to fix the sortString function to sort all numbers in ascending order






let sortString = function(value) {
  let split = value.split("").map((a) => {
    return Number(a) 
  }) ;
  split.sort((a, b) => {
    return a- b;
  })
  return split.join("")
}

console.log(sortString("12345"));
console.log(sortString("54321"));