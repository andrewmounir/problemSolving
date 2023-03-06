function bmiCalculator(weight,height){
// write down the formula with inputs given by the user to calculate the bmi
var result = weight / Math.pow(height,2);

return result;
}



// formula bmi= weight/height^2

// testing code 
var bmi = bmiCalculator(65, 1.8); 
console.log(bmi);