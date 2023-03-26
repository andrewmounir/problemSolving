// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

var findDisappearedNumbers = function (nums) {
  const arrlength = nums.length;
  var newNums = [];
  var dissaperdNumbersArr = [];

  for (var i = 1; i <= arrlength; i++) {
    newNums.push(i);
  }
  // first we sort the array
  nums.sort(function (a, b) {
    return a - b;
  });
  // remove any duplicates from the array
  for (var i = 0; i < nums.length; i++) {
    while (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
    }
  }
  //var firstIndex = nums[0];
  // we create the second array which will be complete



  // Compare between the two arrays and get the difference in a new array.

  for (var i = 0; i < newNums.length; i++) {
    if (!nums.includes(newNums[i])) {
      dissaperdNumbersArr.push(newNums[i]);
    }
  }
  console.log(newNums);
  console.log(nums);
  console.log(dissaperdNumbersArr);
  return dissaperdNumbersArr;
};
findDisappearedNumbers([2, 2]);
