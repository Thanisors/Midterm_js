function sumTwoSmallestNums(num){
 num = num.sort((a,b) => a-b);
 let calc = [];
   for(let i = 0 ; i < num.length ; i++){
       if(num[i] > 0){
           calc.push(num[i]);
       }
   }

 return calc[0] + calc[1];
}

console.log(sumTwoSmallestNums([19 , 5 , 42 , 2 , 77]));
console.log(sumTwoSmallestNums([10 , 343445353 , 3453445 , 3453545353453]));
console.log(sumTwoSmallestNums([2 , 9 , 6 , -1]));
console.log(sumTwoSmallestNums([879 , 953 , 694 , -847 , 342 , 221 , -91 , -723 , 791 , -587]));
console.log(sumTwoSmallestNums([3683 , 2902 , 3951 , -475 , 1617 , -2385]));