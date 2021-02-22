function add(){
    console.log(arguments);
    var sum = 0;
    {
        sum += arguments[i];
    }
    return sum;
}

console.log(add(3,4,7));
console.log(add(3, 4, 7, 10, 20));
console.log(add(3, 4 ,4));