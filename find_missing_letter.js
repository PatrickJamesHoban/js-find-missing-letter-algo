// PSEUDOCODE
// provide an alphabet for reference
// find the index of the first letter of the array in the alphabet
// check if the next letter in the array matches the next letter in the alphabet based on the index


// CODE

// FIRST REFACTOR
function findMissingLetter(array) {
  var alpha = 'abcdefghijklmnopqrstuvwxyz';
  var idx = alpha.indexOf(array[0]);
  if (idx == -1) { 
    alpha = alpha.toUpperCase();
    idx = alpha.indexOf(array[0]);
  }
  for (let i = 1; i < array.length; i++) {
    if ( array[i] !== alpha.charAt(idx+i) ) {
      return alpha.charAt(idx+i);
    }
  }
}


// OTHER SOLUTIONS
// function findMissingLetter(array) {
//   let first = array[0].charCodeAt(0);
//   for (let i = 1; i < array.length; i++) {
//     if (first + i !== array[i].charCodeAt(0)) {
//       return String.fromCharCode(first + i);
//     }
//   }
//   throw new Error("Invalid input");
// }

// ORIGINAL CODE
// function findMissingLetter(array) {
//   var alpha = 'abcdefghijklmnopqrstuvwxyz';
//   var idx = alpha.indexOf(array[0]);
//   // var r = ''
//   if (idx == -1) { 
//     alpha = alpha.toUpperCase();
//     idx = alpha.indexOf(array[0]);
//   }
//   // console.log(alpha);
//   // console.log(idx);
//   for (let i = 1; i < array.length; i++) {
//     // console.log(array[i]);
//     // console.log(alpha.charAt(idx+i));
//     if ( array[i] != alpha.charAt(idx+i) ) {
//       return alpha.charAt(idx+i);
//     }
//   }
//   // return r;
// }

// DRIVER CODE

findMissingLetter(['a','b','c','d','f']);   // 'e'
findMissingLetter(['O','Q','R','S']);       // 'P'
