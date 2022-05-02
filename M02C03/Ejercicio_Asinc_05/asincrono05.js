var usuario="";
var max=3;
var min=0;
var maquina=Math.floor(Math.random() * (max - min) + min);
if(maquina==0){
    
}
usuario=prompt("Ingrese su opcion por favor:")
console.log("La opcion de la maquina es:  "+maquina);
console.log("La opcion del usuario es: "+ usuario);
//1 es piedra 
//2 es papel
//3 es tijera

if(usuario=="piedra"){
    if(maquina==2){
        //gana la maquina
        console.log("Gano la maquina");
    }else if(maquina==3){
        //gana el usuario
        console.log("Gano el usuario");
    }else{
        //empatados
        console.log("Quedaron empatados");
    }
}else if(usuario=="papel"){
    if(maquina==1){
        //gana el usuario
        console.log("Gano el usuario");
    }else if(maquina==3){
        //gana la maquina
        console.log("Gano la maquina");
    }else{
        //empatados
        console.log("Quedan empatados");
    }
}else if(usuario=="tijera"){
    if(maquina==1){
        //gana la maquina
        console.log("Gana la maquina");
    }else if(maquina==2){
        //gana el usuario
        console.log("Gana el usuario");
    }else{
        //empatados
        console.log("Quedan empatados");
    }
}