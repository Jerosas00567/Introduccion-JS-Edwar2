//Jerónimo Salazar Galeano
//Desestructuración de objetos

const product = {
    productName : "sensor de humedad",
    price : 300,
    avalible : true,
}

//Aqui un ejemplo de desestructuración de objetos
const productPrice = product.price;
//const productName = product.productName;

console.log(productPrice);
console.log(product.productName);

//Para que sirve el Destructuring? Sirve para extraer los valores de un objeto.

const {price, avalible, productName} = product;

console.log(price, avalible, productName);