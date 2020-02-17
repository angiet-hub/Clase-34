//Crear un programa que pida al usuario ingresar la nota un examen y mostrar en un mensaje si el examen está 
//aprobado, si debe recuperar o es un aplazo. Si la nota es mayor a 7 aprueba, si es mayor a 4 recupera y 
//si es menor a 4 es un aplazo.

const nota = Number(prompt("Ingrese cu calificación"));

const aprobado = nota > 7;
const recuperar = nota > 4;
const aplazo = nota < 4;

if (aprobado) {
    alert(`Usted aprobó`);
} else if (recuperar) {
    alert(`Usted debe recuperar`);
} else {
    alert(`Usted está aplazado`);
}