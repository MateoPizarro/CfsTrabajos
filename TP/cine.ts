import * as rls from "readline-sync"

/*Diseñar un algoritmo que recorra las 
butacas de una sala de cine y determine 
cuántas butacas desocupadas hay 
• Suponga que para modelar este 
problema, se utiliza un arreglo con 
valores lógicos
• La presencia de un valor verdadero (true) en 
el arreglo indica que la butaca está ocupada
• La presencia de un valor falso (false) en el 
arreglo indica que la butaca está desocupada */

const butacas: boolean[] = [true, false, false, true, true, false, true, true, false, true];

let contadorDesocupadas = 0;

for (let i = 0; i < butacas.length; i++) {
    if (!butacas[i]) {
        contadorDesocupadas++;
    }
}

console.log(`Hay ${contadorDesocupadas} butacas desocupadas.`)