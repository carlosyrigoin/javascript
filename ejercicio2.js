/* Escriba un programa que reciba un numero n ingresado por teclado por el usuario e imprima la tabla de multiplicar de
    n desde 1 hasta 100. Además, mostrar la suma total de las multiplicaciones*/

let num = +prompt("Ingrese un número: ")
let suma = 0

for (let i = 1; i <= 100; i++) {
    multiplicacion = num * i
    console.log(`${num} * ${i} = ${multiplicacion}`)
    suma = suma + multiplicacion
}
console.log(`La suma total de las multiplicaciones es:  ${suma}`)