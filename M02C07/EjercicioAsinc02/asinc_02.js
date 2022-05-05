var nuevoTitulo = document.querySelector("h1");
nuevoTitulo.innerHTML="Este es un nuevo parrafo por que fue cambiado por el titulo de la pagina que se recarga primro pero luego estar a recargada y cambiado";

//creacion de un nuevo parrafo
var parrafoNuevo=document.createElement("p");
//insertamo texto en la variable del nuevo parrafo
parrafoNuevo.innerHTML="este es el segundo parrafo insertado en el body del hatml para el bootcamp que se lleva a cabo en Chile.";
//Insertamos al body el nuevo parrafo creado
document.body.appendChild(parrafoNuevo);
