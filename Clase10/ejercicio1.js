const prompt = require('prompt-sync')();
let edad = parseFloat (prompt ("Ingrese su edad: "));
let peso = parseFloat (prompt ("Ingrese su peso en kg: "));
console.log(`Usted tiene tiene ${edad} años y pesa ${peso} kg.`);
