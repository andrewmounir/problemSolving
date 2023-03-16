// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Example 1:

// Input: arr = [2,1]
// Output: false
// Example 2:

// Input: arr = [3,5,5]
// Output: false
// Example 3:

// Input: arr = [0,3,2,1]
// Output: true

var validMountainArray = function (arr) {
  var firsthalf = false;
  var secondhalf = false;
  var final = false;
  var max = 0;
  var c = 0;
  // make sure array length >= 3
  if (arr.length >= 3) {
    for (var i = 0; i < arr.length; i++) {
      // we must determine max no with no repetition

      if (max < arr[i]) {
        max = arr[i];
        c = i;
      }
    }

    //before max
    for (var i = 0; i < c; i++) {
      if (arr[i] < arr[i + 1]) {
        firsthalf = true;
      } else {
        return false;
      }
    }
    // after max
    for (var i = c; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        secondhalf = true;
      } else {
        return false;
      }
    }

    if (firsthalf === true && secondhalf === true) {
      // make sure its increasing to max then decreasing
      final = true;
      return final;
    } else {
      return final;
    }
  } else {
    return false;
  }
};

var a = validMountainArray([1, 2, 2, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

console.log(a);
