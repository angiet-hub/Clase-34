//Crear un programa que pida al usuario ingresar su año de nacimiento y mostrar en un mensaje a que generación 
//pertenece (baby boomer, gen y, millenial, centennial, o ninguna de ellas).

const nacimiento = Number(prompt("Ingrese su año de nacimiento"));

const centennial = nacimiento >= 1994;
const millenial = nacimiento >= 1981 && nacimiento < 1994;
const genX = nacimiento >= 1969 && nacimiento < 1981;
const babyBoomer = nacimiento >= 1946 && nacimiento < 1969;

if (centennial) {
    alert("Usted pertenece a la generación centennial");
} else if (millenial) {
    alert("Usted pertenece a la generacion millenial");
} else if (genX) {
    alert("Usted pertenece a la generacion X");
} else if (babyBoomer) {
    alert("Usted pertenece a la generacion Baby Boomer");
} else {
    alert("Usted pertenece a la generacion silent");
}