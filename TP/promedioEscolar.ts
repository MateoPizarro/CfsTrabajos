import * as rls from "readline-sync"

/* • Desarrolle un algoritmo que
permita cargar alumnos y sus
notas en los tres trimestres
• Se debe permitir obtener el
promedio anual (es decir, de sus
tres notas) de un alumno
(ingresado por el usuario)
• Luego de resolverlo, pensar en
aprovechar métodos y discutir
cómo representar la información */


const alumnos : { nombre: string; notas: number[]; }[] = [];

function cargarAlumnos(alumnos: {nombre: string; notas: number[]; }[]): void {
    const cantidadAlumnos = rls.questionInt("Ingrese la cantidad de alumnos a cargar: ");

    for (let i = 0; i < cantidadAlumnos; i++) {
        const nombre: string = rls.question(`Ingrese el nombre del alumno ${i + 1}: `);
        const notas: number[] = [];

        for (let j = 0; j < 3; j++) {
            const nota = rls.questionInt(`Ingrese la nota del ${j + 1} trimestre: `);
            if (nota >=0 && nota <=10) {
                notas.push(nota);
            } else {
                console.log("Las notas deben estar entre 0 y 10");
            }
        }

        const alumno = { nombre, notas};
        alumnos.push(alumno);
    }
}

function obtenerPromedioAnual(nombre: string, alumnos: { nombre: string; notas: number[]; }[]): number | undefined{
    for (let i = 0; i < alumnos.length; i++) {
        const alumno = alumnos[i];
        if (alumno.nombre === nombre) {
            const sumaNotas = alumno.notas[0] + alumno.notas[1] + alumno.notas[2];
            const promedioAnual = sumaNotas / 3;
            return promedioAnual; 
        }
    }
    return undefined;
}

cargarAlumnos(alumnos);

const nombreAlumnno = rls.question("Ingrese el nombre del alumno a consultar: ");
const promedioAnual = obtenerPromedioAnual(nombreAlumnno, alumnos);

if (promedioAnual !== undefined) {
    console.log(`El promedio anual de ${nombreAlumnno} es ${promedioAnual}.`);
} else {
    console.log(`No se encontro al alumno ${nombreAlumnno}.`);
}