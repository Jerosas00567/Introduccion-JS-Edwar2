//string o cadena de texto
const sensor = "temperatura";
const sensor2 = "PH";

console.log(sensor);
console.log(sensor2);

// Esta forma  NO es tan común
const sensor3 = String("Presión");
const sensor4 = new String("Humedad");

console.log(sensor3);
console.log(sensor4);

// Para saber el tipo de dato de una variable
console.log(typeof sensor3);

let producto = ("Televisor de 32\"");
let producto2 = ("Televisor de 48\"");
console.log(producto);
console.log(producto2);

//Métodos con String 
console.log(producto2.length);


let nombre = ("Jerónimo Salazar Galeano");

console.log(nombre.length);

// Sirve para saber si una cadena de texto existe en una frase
// indexof nos muestra la posición en la que se encuentra la cadena de texto 
// Si la cadena no existe muestra un resultado menor que cero (0)
let phrase = "Aqui vamos a buscar la palabra SENA";
console.log(phrase.indexOf("SENA"));

//Hacer lo mismo de una forma más moderna, el resultado en un true or false 
let phrase2= "Aqui vamos a buscar la palabra SENA";
console.log(phrase.includes("SENA"));


