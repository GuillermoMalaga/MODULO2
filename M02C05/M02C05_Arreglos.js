var palabra="hola";
console.log(palabra.length);
console.log(palabra[0]);
console.log("la primera letra de la palabra es:"+palabra[0]);
console.log("la segunda letra de la palabra es:"+palabra[1]);
console.log("la ultima letra de la palabra es:"+palabra[3]);
var palabra2="dsfhjsldjflkdsjflksdjfklsdjfkljsdlkfjdlkfjklj"
var laroPalabra = palabra2.length-1;
console.log("La ultima letra de la palabra 2 es:"+palabra2[palabra2.length-1]);
console.log("La ultima letra de la palabra 2 es:"+palabra2[laroPalabra]);

//quier oguardar los nombres de los alumnos del curso
var alumno1="paula";
var alumno2="alexis";
var alumno3="katy";
var alumno4="sandra";
var alumno5="Fernando";
//version arreglos
let alumnos=["Paula","Alexis","Katy","Sandra","Fernando"];

console.log("La cantidad total de alumnos es:"+ alumnos.length);
console.log("El segndo alumnoes:"+alumnos[1]);
console.log("El primer alumnos es:"+alumnos[0]);
console.log("El ultmimo alumno es:"+alumnos[alumnos.length-1]);

//agregar elementos al final del arreglo
alumnos.push("Clemente");
console.table(alumnos);
//agragar dos elementos
alumnos.push("Guillermo","Alejandro");
console.table(alumnos);
//sacar el ultimo elemento cn pop
let ultimo = alumnos.pop();
console.log("El ultimo alumno es:  " + ultimo );

//sacar el primer elemento con u shift
console.log("2Antes del shift.....................");
console.table(alumnos);
let primero = alumnos.shift();
console.table(alumnos);

//indexof
var texto="mi primer index";
var posicion=texto.indexOf("p");
console.log("la pocicion del texto es:" + posicion);
console .log("la posicion del texto es:"+texto.indexOf("primer"));
console .log("la posicion del texto es:"+texto.indexOf("index"));
console .log("la posicion del texto es:"+texto.indexOf("pro"));
console .log("la posicion del texto es:"+texto.indexOf("i"));

//index of arreglos
alumnos =["Paula","Alexis","Katy","Sandra","Fernando"];
console.log("la posicion del Alexis dentro del arreglo es:"+alumnos.indexOf("Alexis"));
console.log("la posicion del Fernando dentro del arreglo es:"+alumnos.indexOf("Fernando"));
console.log("la posicion de Denis dentro del arreglo es:"+alumnos.indexOf("Denis"));
//ejemplo de indexog buscar alumno

var busqueda=prompt("Ingresa el nombre del alumno");
if(alumnos.indexOf(busqueda)>=0){
    alert("Si esta");
}else{
    alert("No esta");
}

//metodo slice
var copiaAlumnos= alumnos.slice();
var copiaParcialAlumnos=alumnos.slice(1,3);
console.log("copia------------------------");
console.table(copiaAlumnos);
console.log("copia pracial de alumnos-----------");
console.table(copiaParcialAlumnos);

//eliminar elementos desde cualquier parte
console.log("Antes de eliminar");
var Eliminados= copiaAlumnos.splice(1,3);
console.log("despues de eliminar");
console.table(Eliminados);

//Eliminar un solo elemento en una pocicion de en medio

var copiaAlumnos2= alumnos.slice();
console.log("Antes de eliminar un elemento");
console.table(copiaAlumnos);
var eliminado= copiaAlumnos2.splice(2,1);
console.log("Despues de eliminar un elemento");
console.table(copiaAlumnos2);
console.log(eliminado);

//transformar arreglo en texto
console.log(alumnos.join("-"));
var textoAlumnos="Pedro,Juan,Diego,Denis,Pablo";
var arregloAlumnos=textoAlumnos.split( ",");
console.log(arregloAlumnos);

