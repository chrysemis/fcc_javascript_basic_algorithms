// Seek and Destroy 

// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.


function destroyer(arr) {
  // Remove all the values
  arr = arguments[0];
  
  for ( var i = 1; i < arguments.length; i++ ) {
    var valueToCompare = arguments[i];
    arr = arr.filter( destroyValue );
  }
  
   function destroyValue(value) {
    return value !== valueToCompare;
  }
  
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
