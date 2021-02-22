function simplePair(num , num1){
    
  for(i = 0 ; i < num.length ; i++){
      for(j = i + 1 ; j < num.length ; j++){
         if(num[i] * num[j] == num1){
             return [num[i] , num[j]]
         }         
      }

  }
  return null;
}

console.log(simplePair([1,2,3,] ,3));
console.log(simplePair([1,2,3] , 6));
console.log(simplePair([1,2,3,] ,9));