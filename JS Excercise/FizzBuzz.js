// we need to have an array to increment on
var fizzArray = [];

// need to create a variable to be added each time we do the function so each time we have a new number
var x = 1;

// we need to increment on the array by making a function
function addToArray() {
  // we need to check if x is divisible by 3 then it print fizz

  if (x % 3 === 0 && x % 5 === 0) {
    x++;
    return fizzArray.push("FizzBuzz");
  }
  if (x % 3 === 0) {
    x++;
    return fizzArray.push("Fizz");
  }
  if (x % 5 === 0) {
    x++;

    return fizzArray.push("Buzz");
  }

  fizzArray.push(x);
  x++;
  // console.log(x);
  console.log(fizzArray);
}

// testing the code

addToArray();
addToArray();
addToArray();
addToArray();
addToArray();
addToArray();
addToArray();
addToArray();
addToArray();
addToArray();
addToArray();
addToArray();
addToArray();
addToArray();
addToArray();
addToArray();
addToArray();
addToArray();
addToArray();
addToArray();
addToArray();
addToArray();
addToArray();
addToArray();
