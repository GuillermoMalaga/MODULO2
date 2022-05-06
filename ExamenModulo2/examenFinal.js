max = 17
min = 0
const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];

function RandomWords() {
    var palabras = Math.floor(Math.random() * (max - min));
    console.log(palabras)
    return words[palabras];
}
///RandomWords()

var palabraAleatoria = RandomWords();

var time = 10;

var score = 0;

function addToDOM() {

    var palabraAleatoriaHtml = document.querySelector("h1")
    palabraAleatoria.textContent="";
    palabraAleatoria=RandomWords();
    palabraAleatoriaHtml.textContent=palabraAleatoria;
}
addToDOM();
//funcion que aumenta el score
function aumentarScore(){
    var scoreHtml=document.querySelector("#score");
    scoreHtml.textContent=score;
}
//funcion que aumenta el tiempo
function mostrarTiempoAumnetado(){
    var tiempoHtml=document.querySelector("#timeSpan");
    tiempoHtml.textContent=time;
}
//creacion del evento par ainput
var cajaTexto = document.querySelector("#text");
cajaTexto.addEventListener("keyup",(e)=>{
    if(e.key=="Enter"){        
        console.log("se presiono enter");        
        console.log(palabraAleatoria);
        console.log(cajaTexto.value);
        if(palabraAleatoria==cajaTexto.value){
            score++;
            console.log(score);
            time=time+3
            aumentarScore();
            mostrarTiempoAumnetado();
        }
        palabraAleatoria = RandomWords();
        addToDOM();
        cajaTexto.value ="";
    }
});
//funcion gameover()
function gameOver(){
    alert("El tiempo se termino");
}
//funcion para actualizar el tiempo
function actualizarTiempo(){
    time--;
    if (time === 0) {
        clearInterval(timeInterval);        
        //Aqui colocar la funcion game over
        gameOver();
    }
    mostrarTiempoAumnetado();
}
let timeInterval = setInterval(actualizarTiempo, 1000);