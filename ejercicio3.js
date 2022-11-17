/* 3. Escribir un codigo que permita calcular un descuento basado en las siguientes reglas o consideraciones:
Mas de 10 años de experiencia, 5% de descuento. 11 hasta 20
Mas de 20 años de experiencia, 17% de descuento. 21 hasta 25
Si es mas de 25 años de experiencia y varon, 20% de descuento. 26 años a más
Si es mas de 25 años de experiencia y mujer, 23% de descuento.  */

const dsc1 = 5, dsc2 = 17, dsc3 = 20, dsc4 = 23

let anios = +prompt("Ingrese los años de experiencia: ")
let genero = prompt("Ingrese su genero (varon o mujer): ")

if (anios > 10 && anios < 21) {
    alert(`Su descuento es: ${dsc1}%`)
} else if (anios > 20 && anios < 26) {
    alert(`Su descuento es: ${dsc2}%`)
} else if (anios > 25 && genero == "varon") {
    alert(`Su descuento es: ${dsc3}%`)
} else if (anios > 25 && genero == "mujer") {
    alert(`Su descuento es: ${dsc4}%`)
}