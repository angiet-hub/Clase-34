//Crear un programa que pida al usuario ingresar una letra y mostrar en un mensaje a qué grupo pertenece.

    //grupo A = {a, e, i, o ,u}
    //grupo B = {b, c, d, f, g}
    //grupo C = {h, j, k , l, m}
    //grupo D = {n, p, q, r}
    //grupo E = {s, t, v, w, x, y, z}


const letra = prompt("Ingrese una letra");

const grupoA = letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u";
const grupoB = letra === "b" || letra === "c" || letra === "d" || letra === "f" || letra === "g";
const grupoC = letra === "h" || letra === "j" || letra === "k" || letra === "l" || letra === "m";
const grupoD = letra === "n" || letra === "p" || letra === "q" || letra === "r";
const grupoE = letra === "s" || letra === "t" || letra === "v" || letra === "w" || letra === "x" || letra === "y" 
|| letra === "z";

if (grupoA) {
    alert(`La letra ingresada pertenece al grupo A`);
} else if (grupoB) {
    alert(`La letra ingresada pertenece al grupo B`);
} else if (grupoC) {
    alert(`La letra ingresada pertenece al grupo C`);
} else if (grupoD) {
    alert(`La letra ingresada pertenece al grupo D`);
} else if (grupoE) {
    alert(`La letra ingresada pertenece al grupo E`);
} else {
    alert(`EL caracter ingresado es invalido`)
}