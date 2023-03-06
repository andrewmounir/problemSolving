var array = [];
for (var H = 0; H <10; H++) {
  
  if (H === 0) {
    array.push(0);
    
  }  else if (H === 1) {
    array.push(1);
   
  } else{
    console.log(H);
    array.push(array[H]);
    array[H] = array[H-2] + array[H-1]; 
    console.log(array);
   
  }
  
  
}

console.log(array);