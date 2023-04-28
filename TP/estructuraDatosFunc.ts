import * as rls from "readline-sync"

/* Con metodos: 
Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay. */

const dim : number = rls.questionInt("Dimension del vector: ");
let num : number[] = new Array(dim);

function cargarArrNum(arr: number[]): void {
    if (!arr.length) return;
    console.log('Inicia carga de arreglo');
    for (let i: number = 0; i < arr.length; i++) {
      arr[i] = rls.questionInt(`Ingrese el numero ${i + 1}: `);
    }
    console.log('Arreglo cargado');
}

function contadorNum(numbers: number[]) {
    let positivos : number = 0;
    let negativos : number = 0;
    let ceros : number = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positivos++;
        } else if (numbers[i] < 0) {
            negativos++;
        } else {
            ceros++;
        }
    }
    console.log(`${positivos} positivos, ${negativos} negativos y ${ceros} ceros.`)
}

cargarArrNum(num);
contadorNum(num);