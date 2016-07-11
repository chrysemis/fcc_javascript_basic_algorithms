// Task: Find the longest word in string

// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// SOLUTION 1:
function findLongestWord(str) {
  var arr = str.split(" ");
  var length = 0;
  for ( var  i=0; i< arr.length; i++ ) {
    if (arr[i].length > length) length = arr[i].length;
  }
  return length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// SOLUTION2:
function findLongestWord(str) {
  var arr = str.split(" ");
  var length = 0;
  arr.forEach (function(word) {
    if (word.length > length) length = word.length;
  });
  return length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
