//crear una web con un formulario donde agreguen:
//un campo de texto para el nombre
//un boton para agregar familiar, y cuando se presione
//se agregue un campo de texto extra (para el nombre del familiar)
//al final un botón enviar, para que revise si no hay ningun campo de
//texto vacío

var input11=document.createElement("input");
input11.type="text";
var divForm=document.querySelector("#formulario");
divForm.appendChild(input11);