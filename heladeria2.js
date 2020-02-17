
//Crear un programa que pregunte al usuario cuántos kilos de helado va a comprar y mostrar en un mensaje la 
//cantidad de sabores disponibles según la opción elegida. Opciones:
    //1/4kg: 2 sabores.
    //1/2kg: 3 sabores.
    //3/4kg: 4 sabores.
    //1kg: 5 sabores.
//Luego, permitirle ingresar la cantidad de sabores correspondientes por separado y mostrar al finalizar un 
//mensaje con la cantidad de kg y los gustos escogidos.

const kilos = prompt("Ingrese la cantidad deseada");

const cuarto = kilos === "1/4";
const medio = kilos === "1/2";
const tresCuartos = kilos === "3/4";
const unKilo = kilos === "1";

if(cuarto) {
    alert('Usted puede elegir 2 sabores');
    const sabor1 = prompt('Ingrese un sabor');
    const sabor2 = prompt('Ingrese un sabor');
    alert(`Usted eligió 1/4kg, y los sabores son ${sabor1} y ${sabor2}`);
    
} else if(medio) {
    alert('Usted puede elegir 3 sabores');
    const sabor1 = prompt('Ingrese un sabor');
    const sabor2 = prompt('Ingrese un sabor');
    const sabor3 = prompt('Ingrese un sabor');
    alert(`Usted eligió 1/2kg, y los sabores son ${sabor1}, ${sabor2} y ${sabor3}`);

} else if (tresCuartos) {
    alert('Usted puede elegir 4 sabores');
    const sabor1 = prompt('Ingrese un sabor');
    const sabor2 = prompt('Ingrese un sabor');
    const sabor3 = prompt('Ingrese un sabor');
    const sabor4 = prompt('Ingrese un sabor');
    alert(`Usted eligió 3/4kg, y los sabores son ${sabor1}, ${sabor2}, ${sabor3} y ${sabor4}`);
} else {
    alert('Usted puede elegir 5 sabores');
    const sabor1 = prompt('Ingrese un sabor');
    const sabor2 = prompt('Ingrese un sabor');
    const sabor3 = prompt('Ingrese un sabor');
    const sabor4 = prompt('Ingrese un sabor');
    const sabor5 = prompt('Ingrese un sabor');
    alert(`Usted eligió 1 kg, y los sabores son ${sabor1}, ${sabor2}, ${sabor3}, ${sabor4} y ${sabor5}`);
}
