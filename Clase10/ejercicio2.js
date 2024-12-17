const prompt = require('prompt-sync')();
let nombre = prompt ("Ingrese su nombre completo por favor: ");
let edad = parseFloat (prompt("Ingrese su edad: "));
let peso = parseFloat (prompt("Ingrese su peso en kg: "));
console.log(`Estimado `+ `` + nombre + `` + ` de edad de ` + `` + edad + `` + ` su peso es de ` + `` + peso );
