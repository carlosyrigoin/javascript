/* 4. Dada una lista L, escribir un programa que cree una nueva lista sin los elementos duplicados. Utilice operador in o not in.
    Si la lista es [500,100,200,300,200,100,600,400,800,400,500,900] el programa debe crear una nueva lista que
    contenga [500, 100, 200, 300, 600, 400, 800, 900]*/

let lista = [500, 100, 200, 300, 200, 100, 600, 400, 800, 400, 500, 900]
let nueva_lista = []
for (let i = 0; i < lista.length; i++) {
    if (nueva_lista.includes(lista[i]) == false) {
        nueva_lista.push(lista[i])
    }
}

console.log(nueva_lista)