import * as rls from "readline-sync";

console.log("Bienvenido a Facebook, por favor inicie sesion.");

let nombreUsuario : string = rls.question("Nombre de usuario: ");
let contrasena : string = rls.question("Contraseña: ");

const nombreUsuarioCorrecto : string = "Juan";
const contrasenaCorrecta : string = "claveJuan";

if ((nombreUsuario == nombreUsuarioCorrecto) && (contrasena == contrasenaCorrecta)) {
    console.log("Inicio sesion con exito usted es" ,nombreUsuarioCorrecto);
} else {
    console.log("Error al iniciar sesion")
}