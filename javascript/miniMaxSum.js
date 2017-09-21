// Given five positive integers, find the minimum and maximum 
// values that can be calculated by summing exactly four of the 
// five integers.Then print the respective minimum and maximum
// values as a single line of two space- separated long integers.


// Sample Input
// 1 2 3 4 5

// Sample Output
// 10 14

function sum(x, y) {
  return Number(x) + Number(y);
}

function main() {
  var arr = [1,2,3,4,5];
  const sorted = arr.sort();
  const min = sorted.slice(0, 4).reduce(sum, 0);
  const max = sorted.slice(1, 5).reduce(sum, 0);
  console.log(min, max);
}

main();