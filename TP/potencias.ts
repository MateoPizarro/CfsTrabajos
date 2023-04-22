import * as rls from "readline-sync"

function calcularPotencia(base: number, exponente: number): number {
    if (exponente < 0) {
        console.log("El exponente debe ser mayor o igual a 0.");
    }
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado = resultado * base;
    }
    return resultado;
}

const base: number = rls.questionInt("Ingrese la base: ");
const exponente : number = rls.questionInt("Ingrese el exponente: ");

const resultado : number = calcularPotencia(base, exponente);
console.log("El resultado es:", resultado);