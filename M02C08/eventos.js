// function cambiarFondo(){
//     document.body.style.backgroundColor="blue";
//     document.body.style.color=white;
// }

var boton=document.querySelector("#boton1");
//forma noob
//boton.addEventListener("click",cambiarFondo);
//forma normal
// boton.addEventListener("click",
//     function(e){
//         document.body.style.backgroundColor="black";
//         document.body.style.color="white";
//         console.log(e);
//         if(e.type=="click"){
//             alert("se hizo un click");
//         }
//     }
//     );
    //forma avanzada
    // boton.addEventListener("click",(e)=>{
    //     document.body.style.backgroundColor="black";
    //     document.body.style.color="white";
    // })
    //cambair la foto al hacer un click
    boton.addEventListener("click",
    function(e){
        //document.body.style.backgroundColor="black";
        //document.body.style.color="white";
        //console.log(e);
        
            var img10=document.querySelector("img");
            img10.setAttribute("src","img/img2.png");


        
    }
    );

    //mouseover
    
    var parrafo=document.querySelector("p");
    parrafo.addEventListener("mouseover",(e)=>{
        parrafo.style.backgroundColor="black";
        parrafo.style.color="blue";
    })
    //mouseout
    parrafo.addEventListener("mouseout",(e)=>{
        parrafo.style.backgroundColor="white";
        parrafo.style.color="black";
    })
    //
    var elementosLi = document.querySelectorAll("li");
    for (let i=0;i<elementosLi.length; i++) {
        elementosLi[i].addEventListener("mouseover",function(){
            this.style.color="red";
            
        })
   
    }

    //----------------------------------------------
    //1 cargar un eemento
    var texto=document.querySelector("#texto");
    texto.addEventListener("keydown",function(info){
        if(info.key=="a"){
            //info.preventDefault();
            alert("se escribio la letra a");
        }
    })

    //1 carar el elmento
    var botonEnviar = document.querySelector("#enviar");


