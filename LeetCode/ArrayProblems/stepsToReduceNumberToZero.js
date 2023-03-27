// obtain the number
// make a for loop for the number
// if number is even divide by 2
// if odd subtract 1

// Input: num = 14
// Output: 6
// Explanation:
// Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.

function stepsToZero(n) {
  var res = 0;
  for (var i = n; i >= 1; i--) {
    if (n % 2 === 0) {
      res = n / 2;
      console.log(`step ${i}) ${n} is even; divide by 2 and obtain ${res} `);
    } else if (n % 2 != 0) {
      res = n - 1;

      console.log(`step ${i}) ${n} is odd; subtract 1 and obtain ${res} `);
    }

    if (n === 1) {
      break;
    }

    n = res;
  }
}

console.log(stepsToZero(15));
