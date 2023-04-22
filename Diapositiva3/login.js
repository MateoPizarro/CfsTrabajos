"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
console.log("Bienvenido a Facebook, por favor inicie sesion.");
var nombreUsuario = rls.question("Nombre de usuario: ");
var contraseña = rls.question("Contraseña: ");
var nombreUsuarioCorrecto = "Juan";
var contraseñaCorrecta = "claveJuan";
if ((nombreUsuario == nombreUsuarioCorrecto) && (contraseña == contraseñaCorrecta)) {
    console.log("Felicitaciones inicio sesion con exito usted es", nombreUsuarioCorrecto);
}
else {
    console.log("Error al iniciar sesion");
}
