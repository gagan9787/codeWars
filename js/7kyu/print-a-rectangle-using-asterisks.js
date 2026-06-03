// Write a method that, given two arguments, width and height, returns a string representing a rectangle with those dimensions.

// The rectangle should be filled with spaces, and its borders should be composed of asterisks (*).

// For example, given width = 3 and height = 3:

// ***
// * *
// ***
// End each line of the string (including the last one) with a carriage return-line feed combination.

// Note: You may assume that width and height will always be greater than zero.




function getRectangleString(width, height) {
  let str = "";
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
     if (i == 0 || i == height - 1) {
       str += "*";
      }
      else{
       if (j == 0 || j == width - 1) {
         str += "*";
        }
        else{
         str += " ";
        }
     }
    }
    str += "\r\n";
  }
  return str;
}
