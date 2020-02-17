//Crear un programa que pida al usuario ingresar un numero y mostrar en un mensaje si el valor ingresado es par 
//o impar.

const numero = Number(prompt("Ingrese un numero"));

if (numero % 2 === 0) {
    alert('El numero es par');
} else {
    alert('El numero es impar');
}