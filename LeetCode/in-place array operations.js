function squareEvenIndex(arr) {
  // two approaches one to create a new array and modify it once creating.
  
  var newarr = arr.map(function (element, index) {
    if (index % 2 === 0) {
      element = Math.pow(element, 2);
    }
    return element;
  });

  console.log(newarr);
}

squareEvenIndex([9, -2, -9, 11, 56, -12, -3]);


// other approach modify original array.
function squareEvenIndex2(arr) {
    // two approaches one to create a new array and modify it once creating.
    
    arr.forEach(function(element,index){
if(index %2===0){
    element = Math.pow(element,2);
}
        
return arr;
    });


  }
  
squareEvenIndex([9, -2, -9, 11, 56, -12, -3]);
squareEvenIndex2([9, -2, -9, 11, 56, -12, -3]);