//deberas crear un arreglo llamado peliculas que tenga por cada pelicula un objeto con las siguientes 
//prpiedades:
//*titulo
//*rating
//*loHasVisto
var peli1={titulo:"Matrix",rating:"2 estrellas",viste:true};
var peli2={titulo:"Terminator",rating:"3 estrellas",viste:false};
var peli3={titulo:"Norbit",rating:"1 estrellas",viste:true};
var peli4={titulo:"Sherk",rating:"6 estrellas",viste:false};
var peli5={titulo:"hobit",rating:"4 estrellas",viste:true};
//el arreglo de pelicuñlas
var arregloPelis=[peli1,peli2,peli3,peli4,peli5];

//ahora programaos el for loop

for (let i = 0; i < arregloPelis.length; i++) {
    console.log((arregloPelis[i].viste?"Viste":"No viste")+"..."+arregloPelis[i].titulo+".."+arregloPelis[i].rating);
    
}