import * as rls from "readline-sync";

let number1 : number = rls.questionInt("Ingrese un numero entero: ");

let division : number = number1 % 2;

if (division == 0){
    console.log ("El numero es par")
} else {
    console.log("El numero es impar")
}