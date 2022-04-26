var edad = 43;
var decada = 10;
console.log("hola mundo");
var resp=prompt("hola como estas?");
alert(resp);

var edad=43;
var decada = 10;

edad = decada;
edad = decada + 5;
edad = edad + 1; 
edad = decada*5; 
edad = decada*6+20; 
edad = (decada*6)+20; 
edad = decada*(6+20);
//---------------------------------------------------------------------------------------------------
//variables texto
var nombre = "Denis";
var apellido = "Pacheco";
var nombreCompleto = nombre + " " + apellido;
//--------------------------------------------------------------------------------------------------
//variables  booleanas
var sinceridad = true;
var maldad = false;
var calculo = 5 < 4; //e false
//------------------------------------------------------------------------------------------------
//contantes qu eno cambia
const valor = 10;
const PI = 3.1416;
//-------------------------------------------------------------------------------------------------
//funciones de consoloa
console.log("hey mundo soy un programa");
var anioActual = 2022;
console.log("el año actual es "+ anioActual);

var pago = 10000;
console.log(pago);
pago=60000;
console.log(pago);
pago=50000;
console.log(pago);
//EJERCICIOS--------------------------------------------------

//-------------------------------------------------------------------------------------------------
//ejercicio 1 - preguntar como estas y devolver respuesta al usuario
//var respuesta = prompt("cómo estás");
//alert("la respuesta fue: " +respuesta );
//console.log("la respuesta del usuario fue:" + respuesta);
//ejercicio 2 - preguntar el año de nacimiento y devolver la edad
var AnioNacimiento = prompt("Que año naciste");
var edad =  2022 - AnioNacimiento;
var mayorEdad = Number(AnioNacimiento) +18;
alert("Tu edad es:"  +  edad);
alert("Cumpliste 18 años en: " + mayorEdad);
alert("Ahora los ejercicios asincronicos");
//Ejercicio asincronico parte 1

var edad = prompt("ingrese su edad");
var vida = edad * 365;
alert("Viviste "+vida+ " dias.")
alert("segundo ejercicio asincronico");
var edad = prompt("¿Cual es tu edad?")
// Edad maxima de vida.
var edadXvivir = prompt("¿Tu edad maxima de vida?");
var snack = prompt("¿Cual es tu snack favorito?");
var comer = prompt("¿Cuanto comerias por día?");
var restovida = edadXvivir - edad;
var snacktodalavida = (restovida * 365) * comer;
var precio;
var gastototal;

alert("Deberas tener "+ snacktodalavida +" ... "+ snack + " para que te alcancen todos "+edadXvivir+ " años.");

precio = prompt("¿Cual es el precio?");
gastototal = snacktodalavida * precio;
alert("Compraras $"+gastototal+" en snacks por el resto de tu vida.");


