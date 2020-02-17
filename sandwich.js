//Crear un programa que pregunte al usuario paso por paso qué opciones desea elegir para armar su pedido. 
//En caso de que no se elija una opción válida en cualquier paso debe mostrar un mensaje alertando que el 
//pedido saldrá incompleto. Mostrar al final un mensaje con el pedido resultante. Debe preguntar:

    //Tipo de pan: blanco, negro, integral
    //Ingrediente 1: tomate, lechuga, pimiento
    //Ingrediente 2: cebolla, aceituna, pepino
    //Aderezos: mostaza, mayonesa, picante
    //Gaseosa: Coca Cola, Pepsi, Sprite

const pan = prompt(`Tipo de pan:
--blanco
--negro
--integral`);

const ingrediente1 = prompt(`Elija una opcion
--tomate
--lechuga
--pimiento`);

const ingrediente2 = prompt(`Elija una opcion:
--cebolla
--aceituna
--pepino`);

const aderezos = prompt(`Ingrese el aderezo elegido:
--mostaza
--mayonesa
--picante`);

const gaseosa = prompt(`Selecciones la gaseosa:
--coca cola
--pepsi
--sprite`);

const opcionPan = pan === "blanco" || pan === "negro" || pan === "integral";
const opcionIngrediente1 = ingrediente1 === "tomate" || ingrediente1 === "lechuga" || ingrediente1 === "pimiento";
const opcionIngrediente2 = ingrediente2 === "cebolla" || ingrediente2 === "aceituna" || ingrediente2 === "pepino";
const opcionAderezo = aderezos === "mostaza" || aderezos === "mayonesa" || aderezos === "picante";
const opcionGaseosa = gaseosa === "coca cola" || gaseosa === "pepsi" || gaseosa === "sprite";
 
if (opcionPan && opcionIngrediente1 && opcionIngrediente2 && opcionAderezo && opcionGaseosa) {
        alert(`Su pedido es: pan ${pan}, ${ingrediente1}, ${ingrediente2}, ${aderezos} y ${gaseosa}.`);
} else {
    alert(`Su pedido saldrá incompleto`)
}