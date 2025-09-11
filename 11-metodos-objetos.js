//Jerónimo Salazar Galeano
//Metodos para los objetos
//Con esta línea de codigo garantizo buenas practicas
"use strict"

const product = {
    productName : "sensor de humedad",
    price : 300,
    avalible : true,
}

const speedMax = 80;
// speedMax = 70;
console.log(speedMax);

//Aunque el objeto product este declarado como constante permite agregar propiedas.
product.quantity = 10;
console.log(product);

//Con el metódo o función freeze bloqueamos el objeto para que no se puedan agregar mas propiedades, eliminarlas o modificiarlas.
// Object.freeze(product);

// Si usamos el metodo seal no podemos agregar ni eliminar pero si se puede editar o modificar una propiedas
Object.seal(product);

// Vamos  a agregar una nueva propiedad color.
// product.color = "red";

// Forma para saber si un objeto esta bloqueado
// console.log("El documento esta bloqueado: " + Object.isFrozen(product));

let response; 
if (Object.isFrozen(product)) {
    response ="si";
}else{  
    response ="No";
}

console.log("¿El objeto esta bloqueado?:" + response);

// Eliminar una propiedad de un objeto
//delete product.price;
//console.log(product);

// Modificar o editar las propiedas de un objeto
product.productName = "Sensor de PH";
console.log(product);

// Saber si un objeto esta sellado 
console.log("El objeto esta sellado: " + Object.isSealed(product));