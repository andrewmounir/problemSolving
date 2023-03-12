//Example 1
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
//Example 2
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

var merge = function (nums1, m, nums2, n) {
  if (m === 0 && n === 0) {
    nums1 = nums1;
  }

  // m is greater than or equal 1 and n is 0
  else if (m > 0 && n === 0) {
    nums1.splice(m, nums1.length);
  }

  // m is 0 and n is greater or equal to 1
  else if (m === 0 && n > 0) {
    nums1.splice(m, nums1.length);

    nums2.map(function (num) {
      nums1.push(num);
    });
  }

  // n and m has values both arrays are not empty
  else if (n > 0 && m > 0) {
    nums1.splice(m, nums1.length);
    nums2.splice(n, nums2.length);
    nums2.map(function (num) {
      nums1.push(num);
    });

    nums1.sort(function (a, b) {
      return a - b;
    });
  }
};
