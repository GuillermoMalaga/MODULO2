// ejercicio 03
alert("Ejercicio Asincronico 03");
var num=prompt("Ingrese un numero");
if(num%2==0){
    alert("El numero: "+num+" es par.");
}else{
    alert("El numero: "+num+" es impar.");
};
//ejercicio 04 parte 1
alert("Ejercico Asincronico 04 Parte 1");
var edad=prompt("Ingrese su edad si es mujer");
if(edad>60){
    alert("usted ya es una jubilada");
}else{
    alert("Usted es menor para jubilarse");
};
//ejercicio 04 parte 2
alert("Ejercico Asincronico 04 parte 2");
var sexo = prompt("Es usted Hombre o mujer?");
if(sexo=="hombre"){
    //si es hombre
    var edadh=prompt("Ingrese su edad");
    if(edadh>65){
        alert("usted ya es una jubilado");
    }else{
        alert("Usted es menor para jubilarse");
    }
}else{
    //si es mujer
    var edadm=prompt("Ingrese su edad");
    if(edadm>60){
        alert("usted ya es una jubilada");
    }else{
        alert("Usted es menor para jubilarse");
    }
}

//bonus
