// Given an array of integers, calculate which fraction of its elements 
// are positive, which fraction of its elements are negative, and which 
// fraction of its elements are zeroes, respectively. 
// Print the decimal value of each fraction on a new line.

// sample input 
// 6
// -4 3 - 9 0 4 1 

// sample output
// 0.500000
// 0.333333
// 0.166667

// solve in O(n) time and N space

function plusMinus(n, arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;

  for(let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      pos++;
    } else if (arr[i] < 0) {
      neg++;
    } else {
      zero++;
    }
  }

  return [ (pos/n).toFixed(6) ,(neg/n).toFixed(6),(zero/n).toFixed(6)];
  
}

let res = plusMinus(6,[-4,3,-9,0,4,1]);

console.log(res[0], res[1], res[2]);