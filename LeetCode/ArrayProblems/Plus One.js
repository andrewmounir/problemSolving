// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.
// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

var plusOne = function (digits) {
  // we need to concat all elements in the array into one string first
  let concatArray = digits.join("");
  // converting the string to int using BigInt to avoild losing precesion in large numbers
  concatArray = BigInt(concatArray);
  // we need to add 1
  concatArray = concatArray + BigInt(1);
  // convert back the total to Array by converting first to String
  concatArray = concatArray.toString();
  // Creating a New Array to store our result
  let newDigitsArray = [];
  // Making a for loop to push each element inside the String to our new Array
  for (let i = 0; i < concatArray.length; i++) {
    // Removing "" in other words converting each element to an int
    let c = parseInt(concatArray[i]);
    // pushing each element to the new Array
    newDigitsArray.push(c);
  }
  console.log(newDigitsArray);

  return newDigitsArray;
};
plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
