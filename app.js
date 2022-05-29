

cargarJSON();

class Piloto {
    constructor(nombre, puntos, puesto, localidad) {
        this.nombre = nombre;
        this.puntos = puntos;
        this.puesto = puesto;
        this.localidad = localidad;
    }
}

// Variables doc
const pUno = document.querySelector("#pPodioUno");
const pDos = document.querySelector("#pPodioDos");
const pTres = document.querySelector("#pPodioTres");
const todos = document.querySelector("#todos");
const numeroUno = document.querySelector("#nombrePrimero")
let pilotoUno = "";
let pilotoDos = "";
let pilotoTres = "";
 let imagPrimero = "";
 let imagSegundo = "";
 let imagTercero = "";


class APP {
    cargarPuestos() {

    }
}



// FUNCION CAMBIAR IMAGEN DINAMICAMENTE
// function changeImage(asd){
//     document.getElementById('imgPrimero').style.backgroundImage = "url(" + asd + ")";
//   }

//   const imagen = "img/SL-072519-21910-20.jpg";

//   changeImage(imagen)



// FUNCION CAMBIAR IMAGEN HOVER DINAMICAMENTE
  document.getElementById("imgPrimero").addEventListener("mouseover", function() {
    document.getElementById("imgPrimero").style.backgroundImage = imagPrimero;
  }, false);

  document.getElementById("imgPrimero").addEventListener("mouseout", function() {
    document.getElementById("imgPrimero").style.backgroundImage = "";
 }, false);

 document.getElementById("imgSegundo").addEventListener("mouseover", function() {
    document.getElementById("imgSegundo").style.backgroundImage = imagSegundo;
  }, false);

  document.getElementById("imgSegundo").addEventListener("mouseout", function() {
    document.getElementById("imgSegundo").style.backgroundImage = "";
 }, false);

 document.getElementById("imgTercero").addEventListener("mouseover", function() {
    document.getElementById("imgTercero").style.backgroundImage = imagTercero;
  }, false);

  document.getElementById("imgTercero").addEventListener("mouseout", function() {
    document.getElementById("imgTercero").style.backgroundImage = "";
 }, false);





//  CARGAR PUESTOS
const podio = document.querySelector(".secPuestos")
 function cargarJSON() {
    let fragment = document.createDocumentFragment();
    fetch('competidor.json')
        .then(res => res.json() )
        .then(data => {
            // Ordenar el arreglo de objetos de menor a mayor segun el puesto
            data.sort(function (a, b) {
                return (a.puesto - b.puesto)
            });
            // console.log(data);

            // data.forEach(piloto => {
            //     let div = document.createElement("div");
            //     div.classList.add("puestos")
            //     div.innerHTML = `
                
            //     <div class="puesto">${piloto.puesto}</div>
            //     <p class="nombrePuesto">${piloto.nombre}</p>
            //     <div class="puntosPuesto">${piloto.puntos}</div>
                
            //     `;
            //     fragment.appendChild(div)
            //     if (piloto.puesto === 1) {
            //         imagPrimero = piloto.imagen;
            //         pUno.innerHTML = piloto.nombre;
            //     } else if(piloto.puesto === 2){
            //         imagSegundo = piloto.imagen;
            //         pDos.innerHTML = piloto.nombre;
            //     }
            // });
            
            data.forEach(arreglo);


            
            function arreglo(piloto, index) {
                 let div = document.createElement("div");
                 div.classList.add("puestos")
                 div.innerHTML = `
                
                 <div class="puesto">${piloto.puesto}</div>
                 <p class="nombrePuesto">${piloto.nombre}</p>
                 <div class="puntosPuesto">${piloto.puntos}</div>
                
                 `;
                 fragment.appendChild(div)
                 if (piloto.puesto === 1) {
                     imagPrimero = piloto.imagen;
                     pUno.innerHTML = piloto.nombre;
                     pilotoUno = piloto;
                 } else if(piloto.puesto === 2){
                     imagSegundo = piloto.imagen;
                     pDos.innerHTML = piloto.nombre;
                     pilotoDos = piloto;
                 } else if(piloto.puesto === 3) {
                    imagTercero = piloto.imagen;
                    pTres.innerHTML = piloto.nombre;
                    pilotoTres = piloto;
                 }
            }


            
            podio.appendChild(fragment)
            
        })
        .catch(error => console.log(error) )
}

