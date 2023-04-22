import * as rls from "readline-sync"

function esMultiplo(dividendo: number, divisor: number): boolean {
    return dividendo % divisor === 0;
}

function cantidadDeDivisores(numero: number): number {
    let contador = 0;
    for (let i = 1; i <= numero; i++) {
        if (esMultiplo(numero, i)) {
            contador++;
        }
    }
    return contador;
}

const numero : number = rls.questionInt("Ingrese un numero: ");
const cantidad = cantidadDeDivisores(numero);
console.log("El numero", numero, "tiene", cantidad, "divisores.");