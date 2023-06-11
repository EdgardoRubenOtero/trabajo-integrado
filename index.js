
const precio = 200

const cantidadEntradas = document.getElementById("cantidadEntradas")

const botonCalcular = document.getElementById("botonCalcular")

const botonReset = document.getElementById("botonBorrar")

const categoria = document.getElementById("inputState")

const totalCompra = document.getElementById("totalCompra")


const nombre = document.getElementById("nombre")

const apellido = document.getElementById("apellido")

const mail = document.getElementById("mail")




function resumen() {

    if (categoria.value == "estudiante") {
        return totalCompra.innerHTML= precio * cantidadEntradas.value * 0.20
    }
    if (categoria.value == "trainee") {
        return totalCompra.innerHTML= precio * cantidadEntradas.value * 0.50
    }
    if (categoria.value == "junior") {
        return totalCompra.innerHTML= precio * cantidadEntradas.value * 0.85
    }

}

botonBorrar.addEventListener("click",()=>{
    
    totalCompra.innerHTML = 0
}) 



