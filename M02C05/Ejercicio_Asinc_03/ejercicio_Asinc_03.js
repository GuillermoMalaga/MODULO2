// En este ejercicio, deberás crear una Función sumArray que acepte un Arreglo de
// números y devuelva la suma de todos ellos. Usá este código para testear tu
// Función:
// sumArray([1,2,3]) // 6
// sumArray([10, 3, 10, 4]) // 27
// sumArray([-5,100]) // 95
function sumArray(arreglo){
    let result=0;
    for(i=0;i<arreglo.length;i++){
        result=result+arreglo[i];
    }
    return result;
}
//los arreglos a sumar
var arr1=[1,2,3];
var arr2=[10,3,10,4];
var arr3=[-5,100]
console.log("La suma del arreglo:[ "+arr1+"] es : "+sumArray(arr1));
console.log("La suma del arreglo:[ "+arr2+"] es : "+sumArray(arr2));
console.log("La suma del arreglo:["+arr3+"] es : "+sumArray(arr3));