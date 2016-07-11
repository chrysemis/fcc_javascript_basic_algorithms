// Where do I belong 

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
// The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).


function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort( function( a, b ) {
    return a - b;
  });
  
  var i = 0;
  //if all array elements are < num, it will stay at the end of the array.
  //therefore we assume that index = arr.length
  var index = arr.length; 
  //moving index inside array
  while ( i < arr.length ) {
     if ( num <= arr[i] ) {
      index = i;
      break;
    }
    i++;
  }
  return index;
}

getIndexToIns([5, 3, 20, 3], 5) ;
