// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

var findMaxConsecutiveOnes = function (nums) {
  // for loop to iterate
  var nums1 = nums;
  var counter = 0;
  var store = 0;
  for (var i = 0; i <= nums1.length; i++) {
    // we need to count consecutive 1 in the array ,

    if (nums1[i] === 1) {
      counter++;
    } else if (nums1[i] === 0) {
      if (counter > store) {
        store = counter;
        counter = 0;
      }
      else {
        counter = 0;
      }
    }
  }
  if (counter > store) {
    store = counter;
  } 
  return store;
};

var a = findMaxConsecutiveOnes([
  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1
]);
console.log(a);
