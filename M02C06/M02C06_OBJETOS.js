var miArreglo5=[];
//definir n arreglo deobjetos represente a una persona
var arregloPersona=[
    {rut:"23465714-3",nombre:"guillermo",apellido:"perez"},
    {rut:"65346248-3",nombre:"Bruno",apellido:"fuenzalida"},
    {rut:"78452359-4",nombre:"Alejandra",apellido:"Ruiz"}
];
//console.log(arregloPersona[1].apellido);

var auto={marca:"mazda",
        modelo:"2020",
        anio:2020,
        color:"azul"    
}
//recocreee y escribe los identificaoes de las propíedades
for(let o in auto){
    //console.log(o);
}
//recocreee y escribe los identificaoes de las propíedades
for(let o in auto){
    console.log(o+":"+auto[o]);
}
//crear un objeto pokemon que contenga las propiedades que lo deefinen:
//numero
//nombre
//tipo:arreglo
//2 ataques:funciones
var pokemon={
    numero:2,
    nombre:"picachu",
    tipo:["mostruo","espacial","alienigena"],
    ataques:[function(){console.log("lanza fuego");},function(){console.log("Hipnotizador")}]
}