// Colleen is turning i years old! Therefore, she has i candles of 
// n various heights on her cake, and candle i has height height(i).Because 
// the taller candles tower over the shorter ones, Colleen can only 
// blow out the tallest candles.

// Given the height(i) for each individual candle, find and print the 
// number of candles she can successfully blow out.

// sample input
// birthdayCakeCandle(4, [3,2,1,3])

// sample output
// 2

function birthdayCakeCandle(n, arr) {
  let max = arr.reduce(function(a,b) {
    return Math.max(a,b);    
  });

  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === max) {
      count += 1;
    }
  }
  return count;
}

console.log(birthdayCakeCandle(4, [3,2,1,3]));