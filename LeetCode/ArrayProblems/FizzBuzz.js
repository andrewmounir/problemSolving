// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true


// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

var fizzbuzzArray = [];
function fizzbuzz(n){

for( var i = 1; i<=n; i++){

if(i%5===0 && i%3===0){

    fizzbuzzArray.push("fizzbuzz");
}
else if(i%3===0){
    fizzbuzzArray.push("fizz");

}
else if(i%5===0){
    fizzbuzzArray.push("buzz");

}
else{
    fizzbuzzArray.push(`${i}`);

}
    
}
return fizzbuzzArray;

    }

 console.log(fizzbuzz(30));

// const fizzBuzz = (n) => {
//     let res = []

//     for (let i = 1; i <= n; i++){
//         let string = ''
//         if (i % 3 === 0) string += 'Fizz'
//         if (i % 5 === 0) string += 'Buzz'

//         if (string === '') string += i
//         res.push(string)
//     }


//     return res
// };

// var a = fizzBuzz(15);
// console.log(a);