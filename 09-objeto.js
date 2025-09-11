//Jerónimo Salazar Galeano
//Objetos en JS

const productName = "sensor de humedad";
const price = 300;
const avalible = true;

//Este es un objeto llamado product, almacena las tres variables en una sola
const product = {
    productName : "sensor de humedad",
    price : 300,
    avalible : true,
}

console.log(product);
console.log(typeof product);

console.log(typeof productName);
console.log(typeof price);
console.log(typeof avalible);

// Para acceder a las diferentes propiedades de un objeto lo hacemos de la
//siguiente manera:

console.log("El precio del producto es: " + product.price);
console.log("El nombre del producto es: " + product.productName);
console.log("El producto esta disponible?: " + product.avalible);

//Agregar propiedades al objeto
product.image = "image.jpg";

console.log(product);