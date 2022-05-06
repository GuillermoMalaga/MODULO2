var textoC = document.querySelector("input");
var colores=[["red","rojo"],["white","blanco"],["green","verde"],["black","negro"],["yello","amarillo"]];
//console.log(colorcaja);
textoC.addEventListener("keydown",(e)=>{
    //console.log(e.key);
    if(e.key=="Enter"){
        let colorcaja = textoC.value;
        console.log(colorcaja);
        for (let i = 0; i< colores.length; i++) {
          if(colorcaja==colores[i][1]){
              document.body.style.backgroundColor=colores[i][0];
              console.log(colores[i]);
          }        
        }
    }else if(){
        
    }
})