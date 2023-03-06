// creating object
var bellboy1 = {
  name: "Andrew",
  age: 31,
  work: "FullStack dev",
  language: ["english", "Arabic"],
  sayHi: function(){
return ("hello");
  } 
};

console.log(bellboy1);

// creating a function constructor

function EmployeeProfile(name, age, work, language) {
  this.name = name;
  this.age = age;
  this.work = work;
  this.language = language;
  this.sayHi = function () {
    return (this.name + " says Hello");
  };
}
// creating a new object from the function constructor
var emp1 = new EmployeeProfile("Andrew", 30, true, ["english", "Arabic"]);
var emp2 = new EmployeeProfile("Mark", 25, true, ["english", "Arabic"]);

console.log(emp1.name);
console.log(emp1.language[1]);
console.log(bellboy1.sayHi());
console.log(emp1.sayHi());
console.log(emp2.sayHi());
