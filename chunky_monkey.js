// TASK: Chunky Monkey 

// Write a function that splits an array (first argument) into groups the length of size (second argument)
// and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
   
  var subArr = [];
  var newArr = [];
  for ( var i=0; i<arr.length; i+=size ) {
	//slicing off subarrays of the given size...
    subArr = arr.slice( i, i+size );
	//...and pushing them to the new array of arrays. 
    newArr.push( subArr );
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

