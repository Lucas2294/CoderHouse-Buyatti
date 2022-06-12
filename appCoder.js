let localGuar = null



let mensajeRespuesta = document.getElementById("msjRespuesta")
let btnCategoriaForm = document.getElementById("btnCategoriaForm")
btnCategoriaForm.addEventListener("click", botonCalcular)

function botonCalcular() {
    event.preventDefault()
    let nombre = document.getElementById("selecNombre").value
    let categoria = document.getElementById("selecCategoria").value
    let fechas = document.getElementById("selecFechas").value
    if (categoria == 1 || categoria == 2 || categoria == 3) {
        if (fechas >= 1 || fechas <= 12) {
            respuesta(categoria, fechas, nombre)
        }
    } else {
        
        mensajeRespuesta.className = "mensajeAgregadoIncorrecto"
        mensajeRespuesta.innerHTML = "Ingresaste una categoría incorrecta. Prueba de nuevo"
    }


}




function respuesta(categoria, fechas, nombre) {



        let precio = null
        // if (categoria == 1) {
        //     precio = 200 * fechas;
        // } else if (categoria == 2) {
        //     precio = 100 * fechas;
        // } else if (categoria == 3) {
        //     precio = 50 * fechas;
        // }

        categoria == 1 ? precio = 200 * fechas : 
        categoria == 2 ? precio = 100 * fechas : precio = 50 * fechas;



        let p1 = new PilotoC(nombre, categoria, fechas, precio)
        mensajeRespuesta.className = "mensajeAgregado"

        const {
            nombre: nombreP,
            categoria: categoriaP,
            fechas: fechasP,
            precioPagar: precioPagarP
        } = p1

        mensajeRespuesta.innerHTML = `${nombreP}, si querés correr en la categoría ${categoriaP} durante ${fechasP} fechas, deberás pagar $${precioPagarP}`

        p1Parseado = JSON.stringify(p1)
        localStorage.setItem('pilotoStorage', p1Parseado)

        localGuar = JSON.parse(localStorage.getItem("pilotoStorage"))
    } 


class PilotoC {
    constructor(nombre, categoriaCorrer, fechasCorrer, precioPagar) {
        this.nombre = nombre;
        this.categoria = categoriaCorrer;
        this.fechas = fechasCorrer;
        this.precioPagar = precioPagar;
    }
}

let cartelLocal = () => {
    
    if (localStorage.length > 0) {
        localGuar = JSON.parse(localStorage.getItem("pilotoStorage"))

        mensajeRespuesta.className = "mensajeAgregado";
        mensajeRespuesta.innerHTML = `${localGuar.nombre}, si querés correr en la categoría ${localGuar.categoria} durante ${localGuar.fechas} fechas, deberás pagar $${localGuar.precioPagar}`;
    }
}

window.onload = cartelLocal