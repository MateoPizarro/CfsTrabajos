"use strict";
// Ejercicios de operadores logicos (IF, ELSE)
exports.__esModule = true;
var readlineSync = require("readline-sync");
var edadUsuario = readlineSync.questionInt("Por favor indique la edad del usuario: ");
// condicional sin accion 2 (solo uso de IF)
if (edadUsuario >= 18) {
    console.log("el usuario es mayor de edad");
}
// condicional con accion 2 (uso de IF + ELSE)
if (edadUsuario >= 18) {
    console.log("el usuario es mayor de edad");
}
else {
    console.log("el usuario es menor de edad");
}
console.log("ultima linea del programa");
// Ejercicio aplicar descuento
var precioFinal;
var precioProductoUno = 200;
var precioProductoDos = 350;
var subtotal = 0;
var valorDescuento = 0;
var cantidadProductoUno = readlineSync.questionInt("cantidad de producto 1 que compró el usuario: ");
var cantidadProductoDos = readlineSync.questionInt("cantidad de producto 2 que compró el usuario: ");
subtotal = (cantidadProductoUno * precioProductoUno) + (cantidadProductoDos * precioProductoDos);
console.log("cantidad producto 1: ", cantidadProductoUno, "\ncantidad de producto 2: ", cantidadProductoDos, "\nsubtotal: ", subtotal);
if (subtotal > 1000) {
    valorDescuento = subtotal * 0.1;
    precioFinal = (subtotal - valorDescuento);
    console.log("uds ahorra: $", valorDescuento, "por haber comprado mas de $1000 \nel precio final es de: ", precioFinal);
}
else {
    precioFinal = subtotal;
    console.log("gracias por confiar en nosotros.\nel precio final es de: $", precioFinal);
}
// uso de condiciones multiples
var tengoMuchaPlata = false;
var esFinDeSemana = true;
var meSobranUnosPesos = true;
var estaLloviendo = false;
//  condiciones para salir de joda :
// 1 - tiene que ser fin de semana Y me tienen que sobrar unos pesos Y no tiene que estar lloviendo.
// 2 - Salvo que me sobre mucha plata y no este lloviendo
if ((esFinDeSemana && meSobranUnosPesos && !estaLloviendo) || (tengoMuchaPlata && !estaLloviendo)) {
    console.log("hoy salgo de joda");
}
else {
    console.log("lamentablemente hoy no salgo");
}
