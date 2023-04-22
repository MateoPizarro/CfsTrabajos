import * as rls from "readline-sync";

let sueldoActual : number = rls.questionInt("Sueldo actual: ");
let aumento : number = 0;
let sueldoConAumento : number = 0;

if (sueldoActual <= 15000 ) {
    aumento = sueldoActual * 0.20;
    sueldoConAumento = sueldoActual + aumento;
    console.log ("Su aumento de sueldo es del: ", aumento, "\nSu nuevo sueldo es: ", sueldoConAumento)
} else if (sueldoActual <= 20000) {
    aumento = sueldoActual * 0.15;
    sueldoConAumento = sueldoActual + aumento;
    console.log ("Su aumento de sueldo es del: ", aumento, "\nSu nuevo sueldo es: ", sueldoConAumento)
} else if (sueldoActual <= 25000) {
    aumento = sueldoActual * 0.10;
    sueldoConAumento = sueldoActual + aumento;
    console.log ("Su aumento de sueldo es del: ", aumento, "\nSu nuevo sueldo es: ", sueldoConAumento)
} else {
    console.log ("Su aumento de sueldo es del: ", aumento, "\nSu sueldo se mantiene en: ", sueldoActual)
}