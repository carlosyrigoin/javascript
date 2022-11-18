// 5. Obtener la suma de los elemementos del arreglo = [500,100,200,300,200,100,600,400,800,400,500,900]

let arreglo = [500, 100, 200, 300, 200, 100, 600, 400, 800, 400, 500, 900]
let suma = 0

for (let i = 0; i < arreglo.length; i++) {
    suma = suma + arreglo[i]
}
console.log(`La suma es: ${suma}`)
