/* • Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo */
import * as rls from "readline-sync"

let inputNum : number = 1;
let maximo: number = 0;

while (inputNum != 0) {
    inputNum = rls.questionFloat("Ingrese un numero (0 para salir): ");
      
      if(maximo <= inputNum) {
        maximo = inputNum
      }
}

console.log ("El maximo de los valores que se introdujeron es: ", maximo)