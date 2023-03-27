// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeElement = function (nums, val) {
  // var K to store the array length to return it later
    var k;
// Loop to iterate through the array to do a specific statement 
  for (var i = 0; i < nums.length; i++) {
    // while loop to do the 
    while (nums[i] === val) {
      // start index , how many elements we use splice method here to remove the val element each time we see it in the array
      nums.splice(i, 1);
    }
  }
  // we assign the array length to K to return it later
  k = nums.length;

  return nums, k;
};
var a = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
console.log(a);
