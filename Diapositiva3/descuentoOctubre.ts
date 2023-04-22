import * as rls from "readline-sync";

let precioFinal : number = 0;
let precioProductoUno : number = 400;
let precioProductoDos : number = 600;
let descuento : number = 0;
let esOctubre : string = "octubre";

let cantidadProductoUno : number = rls.questionInt("Cantidad de producto uno: ");
let cantidadProductoDos : number = rls.questionInt("Cantidad producto dos: ");
let mes : string = rls.question("Mes en minusculas: ");

let subtotal: number = (cantidadProductoUno * precioProductoUno) + (cantidadProductoDos * precioProductoDos);
console.log("subtotal: ", subtotal);

if (mes == esOctubre) {
   descuento = subtotal * 0.15;
   precioFinal = subtotal - descuento;
   console.log("uds ahorra: $", descuento, "por haber comprado en", esOctubre, "\nel precio final es de: ", precioFinal)
} else {
    precioFinal = subtotal;
    console.log("gracias por confiar en nosotros.\nel precio final es de: $", precioFinal)
}