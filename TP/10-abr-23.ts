import * as rls from 'readline-sync';

// esto imprime el texto original
let texto: string = rls.question("ingrese el texto a evaluar: ");
console.log("texto original: ", texto);

// aca sacamos los espacios en blanco y almacenamos en nueva variable, tmb imprimimos por consola
const textoSinEspacios = texto.replace(/\s/g, '');
console.log("texto sin espacios: ", textoSinEspacios);

// aca convertimos todos los caracteres a minusculas, almacenamos en nueva variable,
// tmb imprimimos por consola

const textoMinuscula = textoSinEspacios.toLowerCase();
console.log("texto en minuscula: ", textoMinuscula);

// aca se limpian los caracteres especiales y almacenamos en nueva variable,
// tmb imprimimos por consola
const textoSinCaracteresEspeciales = textoMinuscula
    .replace(/[áàäâ]/g, 'a')
    .replace(/[éèëê]/g, 'e')
    .replace(/[íìïî]/g, 'i')
    .replace(/[óòöô]/g, 'o')
    .replace(/[úùüû]/g, 'u');

console.log("texto limpio: ", textoSinCaracteresEspeciales);

// ahora vamos a invertir la cadena de texto a traves de metodo hecho por nosotros revertirTexto
// compuesto por otros metodos split + reverse + join

function revertirTexto(cadenaDeTexto: string): string {
    return cadenaDeTexto.split('').reverse().join('');
}

const textoInvertido = revertirTexto(textoSinCaracteresEspeciales);
console.log("texto invertido: ", textoInvertido);

console.log("texto invertido: ", revertirTexto(textoSinCaracteresEspeciales))

// Comprobar si la cadena de texto sin diacríticos es igual a la cadena invertida.
const VerificarPalindromo = textoSinCaracteresEspeciales === textoInvertido;
console.log("verificar que el texto limpio sea igual al invertido: ", VerificarPalindromo);

// Loggear un mensaje indicando si la cadena de texto es un palíndromo.
if (VerificarPalindromo) {
    console.log(`El texto introducido, '${texto}', es un palíndromo.`);
} else {
    console.log(`El texto introducido, '${texto}', no es un palíndromo.`);
}