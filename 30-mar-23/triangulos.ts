import * as rls from "readline-sync"

function calcularAreaTriangulo(base: number, altura: number): number {
    return (base * altura) / 2;
}

let base: number = 1;
let altura: number = 2;

while (base <=7) {
    const area = calcularAreaTriangulo(base, altura);
    console.log("El area del triangulo con base ", base,"y altura", altura,"es: ", area);

    base++;
    altura += 2;
}