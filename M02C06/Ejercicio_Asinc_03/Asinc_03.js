//Debés crear una función llamada `arregloDeObjetos` que reciba un número y una
//palabra como parámetro y devuelva un arreglo de objetos que tenga: una
//propiedad llamada como la palabra pasada por parámetro y el valor del número y
//sus anteriores.
function arregloObjetos(palabra, numero){
    //creamos una variable result
    var result=[];
    //for para cargar el arreglo
    for (let i = 0; i < numero; i++) {
        var obj={};
        obj[palabra]=i;
        result.push(obj);        
    }
    return result;
}
//probamos la funcion 

var arreglo=arregloObjetos("hola",7);
console.table(arreglo);
