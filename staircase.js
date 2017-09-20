// Consider a staircase of size :

//    #
//   ##
//  ###
// ####
// Observe that its base and height are both equal to , and the image is 
// drawn using # symbols and spaces.The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

function staircase(n) {
  // create array with n-1 whitespace and a # at the end
  let arr = [];
  for(let i = 0; i < n-1; i++) {
    arr.push(" ");
  }
  arr.push("#");

  // print staircase
  console.log(arr.join(''));
  for(let i = n-2; i >= 0; i--) {
      arr[i] = "#";
      console.log(arr.join(''));
  }
}

staircase(10);
