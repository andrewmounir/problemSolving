// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.

var thirdMax = function (nums) {
  // sort the array first to be able to remove duplicates.
  nums.sort(function (a, b) {
    return a - b;
  });
  // remove duplicates.
  for (var i = 0; i < nums.length; i++) {
    while (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    }
  }
  var count = nums.length;
  // if there is no third distinct we return Max number.
  if (count < 3) {
    return Math.max(...nums);
  }
  // we need to get the first , second , third distict in the array

  // first distinct should be the max number
  var firstDistinct = Math.max(...nums);
  var secondDistinct = 0;
  var thirdDistinct = 0;
  //Second Distinct should be less than the max but greater than the rest.

  // get the index of the element.
  var firstDistinctIndex = nums.indexOf(firstDistinct);
  var secondDistinct = nums[firstDistinctIndex - 1];
  var thirdDistinct = nums[firstDistinctIndex - 2];

  console.log(firstDistinctIndex);

  console.log(firstDistinct + ` first Distinct`);
  console.log(secondDistinct + ` second Distinct`);
  console.log(thirdDistinct + ` third Distinct`);

  console.log(nums);
  return thirdDistinct;
};
var a = thirdMax([1, 2, 2, 5, 3, 5]);
console.log(a); //1253
//2
