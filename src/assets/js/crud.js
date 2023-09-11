import {
  crearPrediccion
} from '../../db/firebase.js'
import { 
  serverTimestamp
  }
from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js"
import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.7.27/+esm'

// let fechaActual = new Date();
// //let anio = fechaActual.getFullYear();
// //let mes = fechaActual.getMonth() + 1; // Los meses se indexan desde 0 (enero) hasta 11 (diciembre)
// let dia = fechaActual.getDate();
// let hora = fechaActual.getHours();
// let minutos = fechaActual.getMinutes();

const btnRegistrarPrediccion = document.getElementById("btn-prediccion");
const btnSalir = document.getElementById("salir")

// PRIMERA RONDA 
const paraguay_peru = document.getElementById("paraguay-peru") 
const peru_paraguay = document.getElementById("peru-paraguay") 

//SEGUNDA RONDA
const peru_brasil = document.getElementById("peru-brasil") 
const brasil_peru = document.getElementById("brasil-peru") 

//TERCERA RONDA
const chile_peru = document.getElementById("chile-peru")
const peru_chile = document.getElementById("peru-chile")

//CUARTA RONDA
const peru_argentina = document.getElementById("peru-argentina")
const argentina_peru = document.getElementById("argentina-peru")

//QUINTA RONDA
const bolivia_peru = document.getElementById("bolivia-peru")
const peru_bolivia = document.getElementById("peru-bolivia")

//SEXTA RONDA
const peru_venezuela = document.getElementById("peru-venezuela")
const venezuela_peru = document.getElementById("venezuela-peru")


btnSalir.onclick = function(){
  localStorage.removeItem("DNI")
  location.href = "../../index.html"
}

let dni = localStorage.getItem("DNI");
if(!dni){
   location.href = "../../index.html"
}

// BLOQUEANDO ELEMENTOS 

//BLOQUEO PRIMERA FECHA
peru_paraguay.disabled = "true"
peru_paraguay.style.background = "#ccc"

paraguay_peru.disabled = "true"
paraguay_peru.style.background = "#ccc"

//BLOQUEO SEGUNDA FECHA
//peru_brasil.disabled = "true"
//peru_brasil.style.background = "#ccc"

//brasil_peru.disabled = "true"
//brasil_peru.style.background = "#ccc"

//BLOQUEO TERCERA FECHA
chile_peru.disabled = "true"
chile_peru.style.background = "#ccc"


peru_chile.disabled = "true"
peru_chile.style.background = "#ccc"


//BLOQUEO CUARTA FECHA
peru_argentina.disabled = "true"
peru_argentina.style.background = "#ccc"

argentina_peru.disabled = "true"
argentina_peru.style.background = "#ccc"

//BLOQUEO QUINTA FECHA
bolivia_peru.disabled = "true"
bolivia_peru.style.background = "#ccc"

peru_bolivia.disabled = "true"
peru_bolivia.style.background = "#ccc"

//BLOQUEO SEXTA FECHA
peru_venezuela.disabled = "true"
peru_venezuela.style.background = "#ccc"

venezuela_peru.disabled = "true"
venezuela_peru.style.background = "#ccc"


btnRegistrarPrediccion.onclick = async function(){
 
    let fechaActual = new Date();
    let fechaLimite = new Date("2023-09-12T20:30:00");
    

    
    if(fechaActual>=fechaLimite){
        Swal.fire({
            icon: 'error',
            title: 'Predicciones Cerradas',
            text: 'Mejor suerte para la próxima'
          })
        return;
    }


    
   const objetoPrediccion = {
         dni: localStorage.getItem("DNI"),
         fecha: serverTimestamp(),
         marcadorPeru: peru_brasil.value,         
         marcadorBrasil: brasil_peru.value
   }

    btnRegistrarPrediccion.disabled = "true"
    btnRegistrarPrediccion.style.opacity = "0.3" 
    
    await crearPrediccion(objetoPrediccion,"predicciones2")
    
    
    Swal.fire(
        'Predicción Registrada',
        ' ',
        'success'
      )

      btnRegistrarPrediccion.disabled = "false"
      btnRegistrarPrediccion.style.opacity = "1" 
      
}

// obtenerPredicciones(localStorage.getItem("DNI"))


// async function obtenerPredicciones(dni){
//       await leerDatos("predicciones",(predicciones)=>{
//             predicciones.docs.forEach(prediccion => {
//                 if(prediccion.data().dni == dni){
//                     console.log(prediccion.data());
//                 }
//             });;
//       })
// }

// let dataParaguayPeru =  obtenerResultados("paraguay-peru")

// console.log(dataParaguayPeru);

// async function obtenerResultados(partido){
//      await leerDatos("resultados",(resultados)=>{
//           resultados.docs.forEach(resultado=>{
//               if(resultado.data().Partido == partido){
//                  return resultado.data()
//               }
//           })
//      })
// }


