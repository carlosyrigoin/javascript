const   bonificacion = 5/100
/*1. Una empresa ha decidido dar una bonificacion del 5 % al empleado cuyo tiempo de servicio sea superior a 3 años.
        Escribir un programa que reciba por teclado el monto del salario y los años de servicio e imprima la cantidad neta de la
bonificacion.*/

let monto_salario = +prompt("Ingrese el monto del salario")
let anios_servicio = +prompt("Ingrese los años de servicio")

if (anios_servicio > 3) {
    let cantidad_neta = monto_salario + (monto_salario * bonificacion)
    alert(`La cantidad neta de la bonificación es: ${cantidad_neta} `)
}else{
    alert(`El tiempo de servicio no supera los 3 años`)
}