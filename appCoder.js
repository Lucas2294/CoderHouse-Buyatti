// window.onload = function () {
//     console.log("function called...");
//     alert("Bienvenido, si quieres correr contesta las siguientes preguntas!")
//     let nombre = prompt("Ingrese su nombre")
//     let categoria = prompt("Cual categoría quieres correr?")
//     if (categoria == 1 || categoria == 2 || categoria == 3) {
//         let cantFechas = prompt("Cuantas fechas quieres correr? Máximo 12")
//         if (cantFechas >= 1 && cantFechas <= 12) {
//             respuesta(categoria, cantFechas, nombre)
//         } else alert("Introdujiste un dato erroneo")
//     }
//   }




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
        let mensajeRespuesta = document.getElementById("msjRespuesta")
        mensajeRespuesta.className = "mensajeAgregadoIncorrecto"
        mensajeRespuesta.innerHTML = "Ingresaste una categoría incorrecta. Prueba de nuevo"
    }


}











  function respuesta(categoria, fechas, nombre) {
      let precio = null
      let mensajeRespuesta = document.getElementById("msjRespuesta")
      if (categoria == 1) {
          precio = 200 * fechas;
      } else if (categoria == 2) {
         precio = 100 * fechas;
      } else if (categoria == 3) {
        precio = 50 * fechas;
      }

      console.log(precio);

      let p1 = new PilotoC(nombre, categoria, fechas, precio)
      console.log(p1);
      mensajeRespuesta.className = "mensajeAgregado"

      mensajeRespuesta.innerHTML = `${p1.nombre}, si querés correr en la categoría ${p1.categoria} durante ${p1.fechas} fechas, deberás pagar $${p1.precioPagar}`
  }



class PilotoC {
constructor(nombre, categoriaCorrer, fechasCorrer, precioPagar) {
    this.nombre = nombre;
    this.categoria = categoriaCorrer;
    this.fechas = fechasCorrer;
    this.precioPagar = precioPagar;
}
}
