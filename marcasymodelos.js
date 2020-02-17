//Crear un programa que ofrezca a elegir entre 3 marcas distintas para un producto. Una vez elegida la marca 
//debe ofrecer elegir entre dos modelos distintos de la marca. Finalmente debe mostrar el producto elegido. 
//Cada marca debe tener modelos distintos a los de otras marcas (no pueden tener el mismo nombre). 
//P. ej: Philip 3000, Philip 5000, Sony XA, Sony X100, etc.

const marca = prompt(`Elija entre una de estas marcas:
--Iphone
--Samsung
--Motorola`);

if (marca === "Iphone") {
    const iphone = prompt("Elija entre el modelo 7 o X");
    alert(`Usted eligió el modelo ${iphone}`);
} else if (marca === "Samsung") {
    const samsung = prompt("Elija entre el modelo Galaxy 8 o Galaxy 9");
    alert(`Usted eligió el modelo ${samsung}`);
} else if (marca === "Motorola") {
    const motorola = prompt("Elija entre el modelo S6 o S4");
    alert(`Usted eligió el modelo ${motorola}`);
}