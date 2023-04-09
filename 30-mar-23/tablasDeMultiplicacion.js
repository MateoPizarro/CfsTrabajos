"use strict";
exports.__esModule = true;
/* • Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor
*/
var rls = require("readline-sync");
var inputNum = rls.questionInt("Ingrese el numero que desea multiplicar: ");
var inputMaxValor = rls.questionInt("Ingrese hasta que numero: ");
var result = 0;
for (var i = 1; i <= inputMaxValor; i++) {
    result = i * inputNum;
    console.log(inputNum, " * ", i, " = ", result);
}
