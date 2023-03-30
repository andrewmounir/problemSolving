/*
You are given an integer array nums where the largest integer is unique.

Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

 

Example 1:

Input: nums = [3,6,1,0]
Output: 1
Explanation: 6 is the largest integer.
For every other number in the array x, 6 is at least twice as big as x.
The index of value 6 is 1, so we return 1.
Example 2:

Input: nums = [1,2,3,4]
Output: -1
Explanation: 4 is less than twice the value of 3, so we return -1.
*/

var dominantIndex = function (nums) {
  // simply we need to check if the number less than the largest element is at least twice the largest number.
  // we will create a variable to store the largest number in the array
  let largestNumber = Math.max(...nums);
  // getting largest index
  let indexOfLargest = nums.indexOf(largestNumber);
  // Removing it from the array so we can repeat previous opeartion to get the second largest
  nums.splice(indexOfLargest, 1);
  // getting second largest element
  let secondLargestNumber = Math.max(...nums);
  // getting the half of the largest and storing it in a variable
  let largestNumberhalf = largestNumber / 2;
  //checking if its meeting the requirment which is second largest at least is equal or less half the largest
  if (secondLargestNumber <= largestNumberhalf) {
    return indexOfLargest;
  } else {
    return -1;
  }
};

let a = dominantIndex([3, 6, 1, 0]);
console.log(a);
