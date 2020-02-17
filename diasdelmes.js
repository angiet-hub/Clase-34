//Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene.

const pregunta = prompt("Ingrese un mes");
const mes29 = pregunta === 'Febrero';
const mes30 = pregunta === 'Abril' || pregunta === 'Junio' || pregunta === 'Septiembre' || pregunta === 'Noviembre';
const mes31 = pregunta === 'Enero' || pregunta === 'Marzo' || pregunta === 'Mayo' || pregunta === 'Julio' ||
            pregunta === 'Agosto' || pregunta === 'Octubre' || pregunta === 'Diciembre';

if (mes29) {
    alert(`El mes ingresa tiene 29 días;`)
} else if (mes30) {
    alert(`El mes ingresado tiene 30 días;`)
} else {
    alert(`El mes ingresado tiene 31 días;`)
}