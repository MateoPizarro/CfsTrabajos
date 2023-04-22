import * as rls from "readline-sync";

console.log("Bienvenido a la montaña rusa, veamos su altura.")
let alturaPersona: number = rls.questionFloat("Ingrese su altura: ");

if (alturaPersona >= 1.30) {
    console.log("Pase puede subirse a la montaña rusa, usted mide: ", alturaPersona);
} else {
    console.log("No puede subirse a la montaña rusa, usted mide: ", alturaPersona)
}