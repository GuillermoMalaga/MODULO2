//ejercioc fizz fuzz2
function fizzBuzz2(palabra1,palabra2){
    var num=0;
    while(num<100){
        num++;
        if(num%3==0 && num%5==0){
            console.log(palabra1+palabra2);
        }else if(num%3==0){
            console.log(palabra1);
        }else if(num%5==0){
            console.log(palabra2);
        }else{
            console.log(num);
        }
            
    }
}
var p1=prompt("Ingrese la primera palabra");
var p2 = prompt("Ingrese la segunda palabra");
fizzBuzz2(p1,p2);

//Mejora 1 y 2
function fizzBuzz2_1(palabra1,palabra2,numero){
    var num=0;
    var resultString="";
    while(num<numero){
        num++;
        if(num%3==0 && num%5==0){
            //console.log(palabra1+palabra2);
            resultString=resultString+palabra1+palabra2+",";
        }else if(num%3==0){
            //console.log(palabra1);
            resultString=resultString+palabra1+",";
        }else if(num%5==0){
            //console.log(palabra2);
            resultString=resultString+palabra2+",";
        }else{
            //console.log(num);
            resultString=resultString+num+",";
        }
            
    }
    return resultString;
}
var p1=prompt("Ingrese la primera palabra");
var p2 = prompt("Ingrese la segunda palabra");
var n1 = prompt("Ingrese el numero hasta donde sea la cuenta");
console.log(fizzBuzz2_1(p1,p2,n1));

//Mejora 3
function fizzBuzz2_1(palabra1,palabra2,numero,n1,n2){
    var num=0;
    var resultString="";
    while(num<numero){
        num++;
        if(num%n1==0 && num%n2==0){
            //console.log(palabra1+palabra2);
            resultString=resultString+palabra1+palabra2+",";
        }else if(num%n1==0){
            //console.log(palabra1);
            resultString=resultString+palabra1+",";
        }else if(num%n2==0){
            //console.log(palabra2);
            resultString=resultString+palabra2+",";
        }else{
            //console.log(num);
            resultString=resultString+num+",";
        }
            
    }
    return resultString;
}
var p1=prompt("Ingrese la primera palabra");
var p2 = prompt("Ingrese la segunda palabra");
var nLimite = prompt("Ingrese el numero hasta donde sea la cuenta");
var num1=prompt("ingrese el primer divisor");
var num2=prompt("ingrese el segundo divisor");
console.log(fizzBuzz2_1(p1,p2,nLimite,num1,num2));

