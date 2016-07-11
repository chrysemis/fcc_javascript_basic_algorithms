// TASK: Falsy Bouncer

// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  checkValues = function(value) {
    return Boolean(value);
  };
  
  arr = arr.filter( checkValues );
  return arr;
  
}

bouncer([1, null, NaN, 2, undefined]) ;
