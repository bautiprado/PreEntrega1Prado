function registro() {
    alert("Bienvenido a Seven Only Fútbol, te ofrecemos camisetas únicas 🙌🏻")
    alert("¡Empecemos!")
    let nombre = prompt("Ingrese su nombre completo para registrarse")
    let contraseña = prompt("Cree una contraseña para registrarse")
    alert("¡Felicidades, ya te encuentras registrado!")
}

registro()


function calcularOferta(precioInicial, descuentoPorcentaje = 20) {
    let descuento = (precioInicial * descuentoPorcentaje) / 100
    let oferta = precioInicial - descuento
    alert("El precio con un " + descuentoPorcentaje + "% de descuento es: " + oferta)
    return oferta
}

let confirmacion = true

do {
    let camiseta = (prompt("Ingrese el nombre de la camiseta que desea"))
    let precioDescuento = parseFloat(prompt("Ingrese su precio inicial para calcular el descuento"))

    let oferta = calcularOferta(precioDescuento)

    let respuesta = prompt("¿Desea ingresar otro precio para calcular?")

    if (respuesta.toLowerCase() !== 'si') {
        confirmacion = false
    }

} while (confirmacion)
