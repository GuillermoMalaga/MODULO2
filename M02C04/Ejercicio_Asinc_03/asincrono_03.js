//funcion de contas hasta
function contarDeA_n(contar_de_a,contar_hasta){
    var total=1;
    if(contar_de_a<contar_hasta){
        while(total<=contar_hasta){
            console.log(total);
            total=total+contar_de_a;
        }
    }
}
var num1=parseInt(prompt("Ingrese el primer numero"));
var num2=parseInt(prompt("Ingrese el segundo numero"));
contarDeA_n(num1,num2);