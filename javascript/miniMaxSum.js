// Given five positive integers, find the minimum and maximum 
// values that can be calculated by summing exactly four of the 
// five integers.Then print the respective minimum and maximum
// values as a single line of two space- separated long integers.


// Sample Input
// 1 2 3 4 5

// Sample Output
// 10 14

// 1) create sub array of all but one integer
// 2) sum the sub array
// 3) test if number is greater than max variable, if so reassign
// 4) check if variable is less than min variable, if so reassign
// 5) return min and max variables


// function main() {
  //   var arr = readLine().split(' ');
  //   const sorted = arr.sort();
  //   const min = sorted.slice(0, 4).reduce(sum, 0);
  //   const max = sorted.slice(1, 5).reduce(sum, 0);
  //   console.log(min, max);
  // }

function sum(x, y) {
  return Number(x) + Number(y);
}

function miniMaxSum(arr) {
  let max = 0;
  let min = arr[0] + arr[1] + arr[2] + arr[3];
  for (let i = 0; i < arr.length; i++) {
    let sub_arr = arr.slice(0);
    sub_arr.splice(i, 1);
    let total = sub_arr.reduce(sum,0);
    if (total > max) {
      max = total;
    } else if (total < min) {
      min = total;
    }
  }
  return [min, max];
}
let arr = [1,2,3,4,5];
let res = miniMaxSum(arr);

console.log(res[0] + " " + res[1]);


