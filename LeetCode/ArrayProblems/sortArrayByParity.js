// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 5000
// 0 <= nums[i] <= 5000

var sortArrayByParity = function (nums) {
// iterate and filter out even or odd push it to the last element and the sort 
nums.filter(function(element,index){
if(element%2===0){
    var a = nums.splice(index,1)[0];
    nums.splice(0,0,a);

}
})
console.log(nums);
return nums;

};

var result = sortArrayByParity([0]);
console.log(result);