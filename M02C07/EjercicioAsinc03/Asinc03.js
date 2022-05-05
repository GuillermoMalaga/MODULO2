//creamos la variable para el div
var nuevoDiv=document.querySelector("div");
//le agregamos una clase de estilos con claaslist
nuevoDiv.classList.add("square");
//ahora obtenemos los estilos y los guardamos en una variable
var estilosDiv=nuevoDiv.classList;
//mostramos por consola el valor de la variable y sera la lista de clases del div.
console.log("los estilos del div son:"+estilosDiv);