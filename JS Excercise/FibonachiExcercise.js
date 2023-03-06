// create a function that prints the number of indexes inside array  that the user enter

function fibonacciGenerator (num) {
  var arrayItems = [];
  for (var i = 0; i <num; i++) {

    // make the array size same as user specified
    if (i === 0) {
        arrayItems.push(0);
    } else if (i === 1) {

      arrayItems.push(1);
    } else {
      
     var x  = arrayItems[i-2] + arrayItems[i-1] ;
      arrayItems.push(x);
                   
     
    }

    
  }
  return arrayItems;
}

console.log(fibonacciGenerator(1));

// var a = [];
// for (var o = 0; o <3; o++) {
  
//   if (o == 0) {
//     a.push(0);
    
//   }  else if (o === 1) {
//     a.push(1);
   
//   } else{
//       a[o] = a[o-2] + a[o-1];
//       a.push(a[o]);
//     console.log(o);
//    // console.log(a + " third");
//   }
  
  
// }

// console.log(a);

