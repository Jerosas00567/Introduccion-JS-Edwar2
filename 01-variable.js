alert("estoy en hello world")
// convenciones para nombrar variables
// CamelCase
// UpperCamelCase => Se usa para nombrar las clases en JS
// lowerCamelCase => Se usa para nombras las variables en JS
// SCREAMING_SNAKE_CASE => Se usa para nombrar las variables constantes en JS
// kebab-case => Se usa para nombrar archivos multimedia en JS

// snake_case => Se usa para nombrar variables en phyton

// Train-Case => Variante del kebab-case

//Ya NO se usa var para declarar variables, actualmente se usa let
//En JS No es obligatorio indicar el tipo de variable


var product = "sensor-1";
var product2 = "sensor-2";

console.log(product);
console.log(product2);

//No se puede iniciar una variable con un guión medio 
// var -sensor = "sensor-3";

//No se puede iniciar una variable con número
// var 1sensor = "sensor-4";
var _sensor = "sensor-5";

//Si esta permitido iniciar una variable con guión bajo
console.log(_sensor);

// Crear una variable de las tres formas distintas

// var sensor10 ="sensor de lluvia "; 
// const sensor10 = "sensor de lluvia ";
let sensor10 = "sensor de lluvia";

console.log(sensor10);

//Ejemplo con var
//No me indica error por duplicidad de variables
//var sensor11 = "sensor de humedad";
//var sensor11 = "sensor de lluvia";

// console.log(sensor11);

//let No permite duplicidad al declarar variables
//let sensor12 = "sensor de velocidad";
//let sensor12 = "sensor de luz";

//No muestra error por falta de inicialización
// console.log =(userName);
// var userName= "Jerónimo";


// console.log(userName);
// let username = "Jerónimo";
// console.log = (username);

//Usando la declaración const NO de puede cambiar su valor
const maxSize = 1024;
maxSize = 2048;

console.log(maxSize);