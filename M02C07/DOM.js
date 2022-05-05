var encabezado= document.querySelector("#header");
encabezado.className="estilo2";
var tituloPrincipal=document.querySelector("#header h1");


tituloPrincipal.innerHTML="<i>Titulo cambiado 2</i>";
var primerParrafo=document.querySelector(".estilo1");
primerParrafo=document.querySelector(".estilo1");
primerParrafo.innerText="Hola que tal festival";

var parrafos=document.querySelectorAll("p");
parrafos[1].className="estilo2";

for(i=0;i<parrafos.length;i++){
     parrafos[i].innerText="-----------------------------------------";
 }

//asignar el estilo1 a los elementos pares y estilo2 a los elementos impares
//de la lista del footer
var elementoLi = document.querySelectorAll("li");
for(i=0;i<elementoLi.length;i++){
    if(i%2==0){
        elementoLi[i].className="estilo1";
    }else{
        elementoLi[i].className="estilo2";
        
    }
}

//cambiar atributos de los elementos html
var link = document.querySelector("a");
console.log("link:"+ link.getAttribute("href"));
link.setAttribute("href","https://www.youtube.com");

//cargar img2 en la foto del sitio

var imagen= document.querySelector("img");
imagen.setAttribute("src","img/img2.png");

//agregar elementos html al documentop
var nuevoDiv = document.createElement("div");
nuevoDiv.innerText="nuevo div";
nuevoDiv.style.color="red";

//agregarlo a la pagina

document.body.appendChild(nuevoDiv);
//agrgar direccion al footer
var nuevoLi = document.createElement("li");
nuevoLi.innerText="Las carmelias 2025";
nuevoLi.className="estilo2";
//agragamos a la lsita
var listaUi = document.querySelector("ul");
listaUi.appendChild(nuevoLi);

//desafio agreagr un nueno elemneto al contenido que contenga
// un titulo
//un parrafo
//un link

var divContenido=document.createElement("div");
var nuevoH1=document.createElement("h1");
var nuevoP=document.createElement("p");
var nuevoA = document.createElement("a");

nuevoH1.innerText="Este es el nuevo tiulo del nuevo modulo";
nuevoH1.className="estilo2";
nuevoP.innerText=" El ministro de Hacienda dijo que las primeras definiciones sobre el mecanismo para remitir la deuda educativa se podrían conocer en el marco de la preparación del Presupuesto 2023.";
nuevoA.innerText="este es un link a emol";
nuevoA.setAttribute("href","https://www.emol.com");
document.body.appendChild(divContenido);
divContenido.appendChild(nuevoH1);
divContenido.appendChild(nuevoP);
divContenido.appendChild(nuevoA);

//eliminar elementos 

//listaUi.removeChild
