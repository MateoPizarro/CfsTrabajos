import * as rls from "readline-sync"

/* Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay. */

const dim : number = rls.questionInt("Dimension del vector: ");
let num : number[] = new Array(dim);
let ceros : number = 0;
let positivos : number = 0;
let negativos : number = 0;

for (let i: number = 0; i < num.length; i++) {
    num[i] = rls.questionInt(`Ingrese el numero ${i + 1}: `);
    if (num.length === dim) {
        positivos = 0;
        negativos = 0;
        ceros = 0;
        for (let j = 0; j < dim; j++) {
            if (num[j] > 0) {
                positivos++;
            } else if (num[j] < 0) {
                negativos++;
            } else {
                ceros++;
            }
        }
    }
}

console.log(`${positivos} positivos, ${negativos} negativos y ${ceros} ceros.`);