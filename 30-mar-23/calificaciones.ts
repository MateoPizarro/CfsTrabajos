/*Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%

Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía

Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno) */
import * as rls from "readline-sync"

let nombreAlumnno: string = rls.question("Ingrese el nombre del alumno(o una cadena vacia para terminar): ");
let promedio: number = 0;

while(nombreAlumnno !== "") {
    let partePractica: number = rls.questionInt("Ingrese la nota de la parte practica(entre 0 y 10): ");
    let parteProblemas: number = rls.questionInt("Ingrese la nota de la parte de problemas(entre 0 y 10): ");
    let parteTeorica: number = rls.questionInt("Ingrese la nota de la parte teorica(entre 0 y 10): ");

    if (partePractica >= 0 && partePractica <=10 && parteProblemas >=0 && parteProblemas <=10 && parteTeorica >=0 && parteTeorica <=10) {
        promedio = (partePractica * 0.1) + (parteProblemas * 0.5) + (parteTeorica * 0.4);
        console.log("La nota final de ", nombreAlumnno, "es: ", promedio);
    } else {
        console.log("Las notas deben estar entre 0 y 10");
    }
    nombreAlumnno = rls.question("Ingrese el nombre del alumno(o una cadena vacia para terminar: ")
}