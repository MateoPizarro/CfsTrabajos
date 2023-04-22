import * as rls from "readline-sync"

function esMultiplo(dividendo: number, divisor: number): boolean {
    if (dividendo % divisor === 0) {
        return true;
    } else {
        return false;
    }
}

const dividendo : number = rls.questionInt("Ingrese el dividendo: ")
const divisor : number = rls.questionInt("Ingrese el divisor: ");
const resultado = esMultiplo(dividendo, divisor);
console.log("¿" ,dividendo ,"es multiplo de", divisor, "?", resultado);