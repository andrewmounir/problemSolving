
function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
  // we need to substract 90 from the age given by the user 
  var remainingYears = 90 - age;
  // result will convert it to days , weeks , month
  var days = remainingYears*365;
  var weeks = remainingYears * 52;
  var months = remainingYears * 12;
  console.log("you have "+ days + " days" + "," + weeks +" weeks"+ " , and " + months + ", months left")
}
lifeInWeeks(51);