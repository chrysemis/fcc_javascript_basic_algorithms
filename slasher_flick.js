// TASK: Slasher Flick 

// Return the remaining elements of an array after chopping off n elements from the head.
// The head means the beginning of the array, or the zeroth index.


function slasher(arr, howMany) {
  // it doesn't always pay to be first
  if ( howMany >= arr.length ) return [];
  else return arr.slice( howMany, arr.length );
}

slasher([1, 2, 3], 2);


function mutation(arr) {
  strA = arr[0].toLowerCase();
  strB = arr[1].toLowerCase();
  
  var isFound = true;
  
  for ( var i=0; i<strB.length; i++ ) {
    var searchedLetter = strB.charAt(i);
    if ( strA.indexOf( searchedLetter ) === -1 ) isFound = false;
   }
  return isFound;
 }

mutation(["hello", "hey"]);
