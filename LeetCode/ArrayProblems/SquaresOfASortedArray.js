// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
//var nums = [-4, -1, 0, 3, 10];

var sortedSquares = function (nums) {
  var newNum = [];
  this.nums = nums;
  var sorted = [];

  nums.map(function (num) {
    num = num * num;

    newNum.push(num);
  });
  var temp;
  for (var i = 0; i < newNum.length; i++) {
    for (var y = i; y < newNum.length; y++) {
      if (newNum[y] < newNum[i]) {
        temp = newNum[i];
        newNum[i] = newNum[y];
        newNum[y] = temp;
      }
    }
  }
  nums = newNum;
  return nums;
};
sortedSquares([-4, -1, 0, 3, 10]);
