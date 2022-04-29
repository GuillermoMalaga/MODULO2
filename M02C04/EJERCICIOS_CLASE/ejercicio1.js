//ejercicio guia 2.1
function triplicador(numero){
    return 3*numero;
}
console.log("El triple de 5 es :"+triplicador(5));

function multDosNumeros(numero1,numero2){
    return numero1*numero2;
}
console.log("El triple de 5 es :"+multDosNumeros(5,6));

//FUNCION COMPARACION DE DOS NUMERO
function comparar(num1,num2){
    if(num1>num2){
        return num1;
    }else if(num2>num1){
        return num2;
    }else{
        return 0;
    }
}
//calculo de perimetro de un triangulo
function perimetrotriangulo(lado1,lado2,lado3){
    return lado1+lado2+lado3;
}

//factorial de un n jumero
function factorial(num){
    let total=1;
    cont=num;
    while(cont>1){
        total=total*cont;
        cont--;
    }
    return total;
}

console.log("el factorial de 6 es: "+factorial(6));