
// Given an array arr of integers, check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

//Example 1:
// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]

//Example 2
// Input: arr = [3,1,7,11]
// Output: false
// Explanation: There is no i and j that satisfy the conditions.

var checkIfExist = function (arr) {
  var output = false;
  for (var i = 0; i < arr.length; i++) {
    for(var j=0; j<arr.length; j++){
     
        if (arr[i] === arr[j] * 2 ) {
          while(i!=j){
            output = true;
            return output;
          }
    }
    
    }
  }
  return output;
};
var a = checkIfExist([-2,0,10,-19,4,6,-8]);
console.log(a);

//[-2,0,10,-19,4,6,-8]