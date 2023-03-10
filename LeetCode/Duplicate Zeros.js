// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
//[1,0,0,2,3,0,0,4]
//[0,0,0,0,0,0,0,0]

var duplicateZeros = function (arr) {
  this.arr = arr;
  let length = 0;
  length = arr.length;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0 && arr[i + 1] != null) {
      arr.splice(i + 1, 0, 0);
      i += 1;

      if (arr.length > length) {
        arr.pop(arr.length);
      }
    }
  }

  return arr;
};

duplicateZeros([0, 4, 1, 0, 0, 8, 0, 0, 3]);
console.log(arr);
