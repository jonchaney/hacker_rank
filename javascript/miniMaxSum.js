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

function miniMaxSum(arr) {
  let max = 0;
  let min = arr[0] + arr[1] + arr[2] + arr[3];
  for(let i = 0; i < arr.length; i++) {
    let sub_arr = arr.slice(0);
    sub_arr.splice(i,1);
    let sum = sub_arr.reduce(function(acc, curVal){
      return acc + curVal;
    });
    if (sum > max) {
      max = sum;
    } else if (sum < min) {
      min = sum;
    }
  }
  return [min,max];
}

let res = miniMaxSum([1,2,3,4,5]);

console.log(res[0] + " " + res[1]);