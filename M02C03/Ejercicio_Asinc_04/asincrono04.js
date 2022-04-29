var num=0;
while(num<100){
    num++;
    if(num%3==0 && num%5==0){
        console.log("FizzBuzz");
    }else if(num%3==0){
        console.log("Fizz");
    }else if(num%5==0){
        console.log("Fuzz");
    }else{
        console.log(num);
    }
        
}