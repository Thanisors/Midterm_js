function digitalClock(time){
    let hours = Math.floor(time / 3600);
    time -= hours * 3600;

    let minute = Math.floor(time / 60);
    time -= minute * 60 ;

    
    alert(time.toLocaleTimeString());
    time = `${hours} : ${minute} : ${time}`; 
    return time;
}
console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));