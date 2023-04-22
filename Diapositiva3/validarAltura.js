"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
console.log("Bienvenido a la montaña rusa, veamos su altura.");
var alturaPersona = rls.questionFloat("Ingrese su altura: ");
if (alturaPersona >= 1.30) {
    console.log("Pase puede subirse a la montaña rusa, usted mide: ", alturaPersona);
}
else {
    console.log("No puede subirse a la montaña rusa, usted mide: ", alturaPersona);
}
