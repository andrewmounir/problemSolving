// You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

// Important: The output should e returned from the function and you do not need alert, prompt or console.log. The output should match the example output exactly, including capitalisation and punctuation.

// Example Input

// ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
// Example Output

// Michael is going to buy lunch today!

// Hint

// 1. You might need to think about Array.length.

// 2. Remember that Arrays start at position 0!

//create a random number from 0 to 2

//console.log(finalRandom);
// create array and insert in it list of friends

var friends = ["Andrew", "Arsany", "Mario", "karim "];
// Create the function to select a random Payer
function chooseFriend(friends) {
  var randomNumber = Math.random() * friends.length + 1;
  var finalRandom = Math.floor(randomNumber);

  console.log(friends[finalRandom - 1] + " is going to buy lunch today!");
}
chooseFriend(friends);
// var result = Math.floor(randomNumber);

// var friends = ["Andrew","Arsany","Mario"];
// function selectPayer(friends){

// return   friends.includes(result);

// }
// var a = selectPayer(friends);
// console.log(a);
