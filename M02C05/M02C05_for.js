let arrego=[];
for(var i=0;i<10;i++){
    console.log("El valor de i es:"+i);
}
//ciclo que no empuieza en cero

for(i=5;i<10;i++){
    console.log("El valkor de i es "+i);
}
console.log("------------------------");
//ciclo qu eavanza de dos en dos
for(i=0;i<10;i+=2){
    console.log("El valor de i es:"+i);
}
console.log("------------------------");
//ciclo que decrementa
for(i=10;i>0;i--){
    console.log("El valor de i es:"+i);
}
console.log("--------------------------");
var letras="abcdefghi";
for(i=0;i<letras.length;i++){
    console.log(letras[i]);
}

//contar voxales
var palabra="Hola copmo estas festival";
var contadorVocales=0;
for(i=0;i<palabra.length;i++){
    if(palabra[i]=="a"||palabra[i]=="e"||palabra[i]=="i"||palabra[i]=="o"||palabra[i]=="u"){
        contadorVocales++;
    }
}
console.log("la cantidad de vocales es:"+contadorVocales);
//letras en la posicion par
var nuevaPalabra="";
for(i=0;i<palabra.length;i++){
    if(i%2==0){
        nuevaPalabra+=palabra[i];
    }
}
console.log(palabra);
console.log(nuevaPalabra);
//generar el arreglño al reves

palabra="Hola que tal";
var resultado=[];
for(i=palabra.length-1;i>=0;i--){
    console.log(palabra[i]);
    resultado.push(palabra[i]);
}
console.log(resultado);

// lo mismo pero dentro de un afuncion
function darVuelta(arreglo){
    var resultado=[];
for(i=arreglo.length-1;i>=0;i--){
    //console.log(palabra[i]);
    resultado.push(palabra[i]);
}
return resultado;
    
}
console.log(darVuelta("hola comop estas"));

function darVuelta2(arreglo){
    let resultado=[]:
    for(i=0;i<arreglo.length;i++){
        resultado.unshift(arreglo[i]);
    }
    return resultado;
}