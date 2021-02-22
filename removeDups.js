/*function removeDups(text) {
    var x,len=text.length,out=[],obj={};
   
    for (x=0; x<len; x++) {
      obj[text [x]]=0;
    }
    for (x in obj) {
      out.unshift(x); 
    }
    return out;
  }*/
  function removeDups(value){
    let x = [];
   
    value.forEach(value => {
        if(!x.includes(value)){ //includes เช็คว่ามีมั้ย
            x.push(value)  // push เอาเข้า
        }
    });
    return x; 
 }

    console.log(removeDups([1,0,1,0]))
    console.log(removeDups(["The","big","cat"]))
    console.log(removeDups(["John","Taylor","John"]))
