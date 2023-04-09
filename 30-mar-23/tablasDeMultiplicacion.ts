/* • Diseñar un algoritmo que muestre por pantalla la tabla de 
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de 
multiplicación, el usuario también deberá ingresar dicho valor
*/
import * as rls from "readline-sync"

const inputNum : number = rls.questionInt("Ingrese el numero que desea multiplicar: ");
let inputMaxValor : number = rls.questionInt("Ingrese hasta que numero: ");
let result : number = 0;

for(let i: number = 1; i <= inputMaxValor; i++) {
    result = i * inputNum;
    console.log(inputNum, " * ", i, " = ", result)
}