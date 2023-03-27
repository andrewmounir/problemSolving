// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:
// Input: nums = [0]
// Output: [0]
// Constraints:
// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

var moveZeroes = function (nums) {
  var i = 0;
  var counter = 0;
  while (i <= nums.length) {
    while (nums[i] === 0) {
      counter++;
      nums.splice(i, 1);
    }
    i++;
  }
  for (var c = 0; c < counter; c++) {
    nums.push(0);
  }
  console.log(nums);
};
var a = moveZeroes([1,0,1,0,1,0]);
console.log(a);
