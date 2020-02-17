//Hacer un programa que permita cambiar la contraseña de usuario. Para eso tiene que responder las tres 
//preguntas de seguridad. Si las tres preguntas son respondidas correctamente, tiene que pedir por la nueva 
//contraseña y luego mostrar un mensaje que fue cambiada. En caso de que al menos alguna pregunta fue 
//respondida incorrectamente debe mostrar un mensaje advirtiéndolo. Definir de antemano (hardcodear) 
//preguntas y respuestas.

alert('Si desea cambiar su contraseña debe responder correctamente las siguientes preguntas');

const pregunta1 = prompt("Cuál es su color preferido?");
const pregunta2 = prompt("Cuál es su ciudad de nacimiento?");
const pregunta3 = prompt("Cuál es el nombre de su abuelo?");

const respuesta1 = pregunta1 === "Azul";
const respuesta2 = pregunta2 === "Buenos Aires";
const respuesta3 = pregunta3 === "Roberto";

const correcto = respuesta1 === true && respuesta2 === true && respuesta3 === true;

if (correcto) {
    const contraseña = prompt('Ingrese su nueva contraseña');
    alert('Su contraseña fue cambiada exitosamente');
} else {
    alert('Alguna de las respuestas es incorrecta');
}
