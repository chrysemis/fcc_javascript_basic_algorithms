// Repeat a string repeat a string
// Repeat a given string (first argument) num times (second argument).
// Return an empty string if num is not a positive number.


function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num <= 0) return "";
  else {
  var i = 1;
  var newStr = "";
  while( i <= num ) {
    newStr += str;
    i++;
  }
  return newStr;
  }
}

repeatStringNumTimes("abc", 3);
