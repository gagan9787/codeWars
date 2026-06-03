// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


// Solution

function bmi(weight, height) {
  const b = weight / (height * height);
  let res = "";
  if (b <= 18.5) {
    res = "Underweight";
  } else if (b <= 25.0) {
    res = "Normal";
  } else if (b <= 30.0) {
    res = "Overweight";
  } else if (b > 30) {
    res = "Obese";
  }
  return res;
}

console.log(bmi(50, 1.8));
console.log(bmi(80, 1.8));
console.log(bmi(90, 1.8));
console.log(bmi(100, 1.8));