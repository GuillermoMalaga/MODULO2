//ejercicio que detecta si el valor ingresado es un num
// var numero = prompt("Ingrese un numero");
// var cuadrado = numero*numero;
// if(numero==0){
//     alert("es el numero cero");
// }else{
//     alert("el numero es diferente de cero");
// }

//ciclos
console.log("El bus esta vacio");
var contador=0;
while(contador<=20){
    console.log("un nuevo pasajero se ha subido");
    contador = contador +1;
    console.log("hay"+contador+"pasajeros en el bus");
    console.log("-----------------------------------");
}
console.log("el bus esta lleno, hora de partir");
//el desafio ciclo para pedir numeros hasta que el usuario ingres un cero y entregar lasuma
alert("este es el desafio");
var contador=0;
var numero=1;
numero = prompt("Ingrese un numero");
while(numero!=0){
 numero = Number(prompt("ingrese un numero o cero para salir"));
 contador = contador+numero;
};
alert("la suma es"+contador)
//otro ejercicio
var palabra="";
palabra =prompt("Ingrese palabra");
while(palabra!="chau"){
    palabra = prompt("ingrese palabra");
    if(palabra=="hola"){
        alert("Hola que tal");
    }else if(palabra=="chao"){
        alert("adios");
    }else{
        alert("no entiendo")
    }
}
alert("fin");

//promedio de notas
var sumaNotas=0;
var contadorNotas=0;
var nota;
while(nota!=0){
    nota=Number(promt("Ingrese una nota cero para salir"));
    if(nota!=0){
        sumaNotas+=nota;
        contadorNotas++;
    }
}
var promedio = sumaNotas/contadorNotas;
alert("promedio=" + promedio);

//funciones matematicas

console.log(Math.PI);
console.log(Math.E);
console.log(Math.random());
console.log(Ma)
