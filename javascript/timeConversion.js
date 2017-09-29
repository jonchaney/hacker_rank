// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Sample Input
// 07:05:45PM

// Sample Output
// 19:05:45

function timeConversion(s) {
  let time = s.split(":");
  // console.log(time);

  let hours = parseInt(time[0]);
  if (time[2][2] === 'P' && hours !== 12) {
    hours = hours + 12;
  } else if (time[2][2] === 'A' && hours === 12) {
    hours = "00";
  } else {
    hours = time[0];
  }

  let minutes = parseInt(time[1]);
  if (minutes < 10) {
    minutes = time[1];
  } 
  
  let seconds = parseInt(time[2]);
  if (seconds < 10) {
    seconds = "0" + seconds;
  } 
  
  return [hours, minutes, seconds].join(":");
}

console.log(timeConversion('12:05:39AM'));