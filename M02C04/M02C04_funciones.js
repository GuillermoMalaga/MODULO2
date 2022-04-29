function miPrimeraFuncion(){
    alert("Soy una funcio");
}


// miPrimeraFuncion();
// miPrimeraFuncion();
// miPrimeraFuncion();
// miPrimeraFuncion();

// console.log("coumpleaños feliz");
// console.log("coumpleaños feliz");
// console.log("coumpleaños feliz");
// console.log("te desamos a ti");
// console.log("que los cumplas feliz");

function happyBirdday(){
 console.log("coumpleaños feliz");
 console.log("coumpleaños feliz");
 console.log("coumpleaños feliz");
 console.log("te desamos a ti");
 console.log("que los cumplas feliz");
    
}
happyBirdday();

function happyBirthdayConNombre(Nombre){
    console.log("coumpleaños feliz"+Nombre);
    console.log("coumpleaños feliz");
    console.log("coumpleaños feliz");
    console.log("te desamos a ti");
    console.log("que los cumplas feliz"+Nombre);
}
happyBirthdayConNombre("Guillermo");

//FUNCION DE POTENCIA DE UN NUmero
function potencia(base,exp){
    let contador=0;
    let total=1;
    while(contador<exp){
       total=total*base;
       contador++;
    }
    return total;
}
console.log(potencia(2,3));
// alcanse de las variav