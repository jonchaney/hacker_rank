// Given a square matrix of size N * N, calculate the absolute difference 
// between the sums of its diagonals.

// solved in O(n) time complexity and N space

let a = [[11,2,4],[4,5,6],[10,8,-12]];

let sum1 = 0;
let sum2 = 0;
let j = a.length - 1;
for (let i = 0; i < a[0].length; i++) {
  sum1 += a[i][j];
  sum2 += a[i][i];
  j--;
}
let res = sum1 - sum2;
if (res < 0) {
  console.log(res * -1);
} else {
  console.log(res);
}
