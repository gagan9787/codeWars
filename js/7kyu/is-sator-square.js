// A Discovery
// One fine day while Farmer Arepo tenaciously labored at turning the soil,
//        he discovered a field that was scattered with strange stone tablets.
//                   Noticing they were carved with letters in a square pattern,
//                              he wisely kept them in case some might be special.

// Your Task
// Please help Farmer Arepo inspecting tablets
//   to find out if any form a valid Sator Square!

// sator square
// The Square
// is a two-dimentional palindrome
// observing rotational symmetry,
// made from words of equal length
// that can be read in these 4 ways:

//     1)    left-to-right    (across)
//     2)    top-to-bottom    (down)
//     3)    bottom-to-top    (up)
//     4)    right-to-left    (reverse)
// An Example
// Considering this square:

//     B A T S
//     A B U T
//     T U B A
//     S T A B
// Here are the four ways a word (in this case "TUBA") can be read:

//                          down
//                           ↓
//            B A T S    B A T S    B A T S    B A T S
//            A B U T    A B U T    A B U T    A B U T ← reverse
//   across → T U B A    T U B A    T U B A    T U B A
//            S T A B    S T A B    S T A B    S T A B
//                                    ↑
//                                    up
// IMPORTANT:

// In a true Sator Square, ALL of its words can be read in ALL four of these ways.
// If there is any deviation, it would be false to consider it a Sator Square.
// Some Details
// tablet (square) dimensions range from 2x2 to 33x33 inclusive
// all characters used will be upper-case alphabet letters
// there is no need to validate any input
// Input
// an N x N (square) two-dimentional matrix of uppercase letters
// Output
// boolean true or false whether or not the tablet is a Sator Square




// function isSatorSquare(tablet) {
//   let ary = [];
//   let res = true;
//   for (let i = 0; i < tablet.length; i++) {
//     if (res == true) {
//       tablet[0].forEach((element, ii) => {
//         ary.push(tablet[ii][i]);
//       });
//       if (JSON.stringify(ary) === JSON.stringify(tablet[i])) {
//         res = true;
//       } else {
//         res = false;
//       }
//       ary = [];
//     }
//   }

//   let newAry = [];
//   for (let i = tablet.length - 1; i >= 0; i--) {
//     let a = [];
//     for (let j = tablet[i].length - 1; j >= 0; j--) {
//       a.push(tablet[i][j]);
//     }
//     newAry.push(a);
//     a = [];
//   }

//   let res1 = true;
//   for (let i = 0; i < newAry.length; i++) {
//     if (JSON.stringify(newAry[i]) === JSON.stringify(tablet[i]) && res1 == true) {
//       res1 = true;
//     } else {
//       res1 = false;
//     }
//   }

//   return res && res1 ? true : false;
// }

// // console.log(
// //   isSatorSquare([
// //     ["T", "E", "N"],
// //     ["E", "Y", "E"],
// //     ["N", "E", "T"],
// //   ]),
// // );

// console.log(
//   isSatorSquare([
//     ["P", "A", "R", "T"],
//     ["A", "G", "A", "R"],
//     ["R", "A", "G", "A"],
//     ["T", "R", "A", "M"],
//   ]),
// );
