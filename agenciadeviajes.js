//Hacer un programa que muestre al usuario una lista de destinos con precio por día por persona 
//(ofrecer 3 promos con destinos y precios distintos). Preguntarle cuál desea elegir. Una vez hecho eso, 
//preguntarle cuántas personas y cuántos días desea hospedarse. Mostrarle el precio final y preguntarle 
//si quiere editar algún dato. Si quiere hacerlo, preguntarle cuál de ellos: destino, personas o días, 
//permitirle ingresar un nuevo valor y mostrar un mensaje con las opciones y el precio actualizado.

const bariloche = Number(200);
const salta = Number(100);
const calafate = Number(350);

let destinoElegido = Number(prompt(`Los destinos en promoción son:
--Bariloche $${bariloche} por persona, por día.
--Salta $${salta} por persona, por día.
--Calafate $${calafate} por persona, por día. 
Qué opcion desea elegir?`));

let personas = Number(prompt("Cuántas personas se van a alojar?"));
let dias = Number(prompt("Por cuantos dias?")); 
let total = destinoElegido * personas * dias;

if (destinoElegido === 1) {
    total = bariloche * personas * dias;
} else if (destinoElegido === 2) {
    total = salta * personas * dias;
} else if (destinoElegido === 3) {
    total = calafate * personas * dias;
} else {
    alert("Error")
}

const confirmacion = confirm(`El precio final es de ${total}. Desea modificar algún dato?`);

if (confirmacion === true) {
    let cambio = prompt("Cuál de ellos? destino, personas o días?")
        if (cambio === "destino"){
            destinoElegido = Number(prompt("ingrese el nuevo destino"));
            alert(`El costo total de su nueva reserva es de ${total}`);
        } else if (cambio === "personas") {
            personas = Number(prompt("Cuántas personas se van a alojar?"));
            alert(`El costo total de su nueva reserva es de ${total}`);
        } else {
            dias = Number(prompt("Por cuántos dias?"));
            alert(`El costo total de su nueva reserva es de ${total}`);
        }
} else {
    alert (`Su compra fue realizada con exito`)
}
