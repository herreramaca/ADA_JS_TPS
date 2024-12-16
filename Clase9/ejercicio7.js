const prompt = require('prompt-sync')();
let peso = parseFloat (prompt("Por favor ingrese su peso en Kg, para convertirlo en libras: "));
console.log(`Su peso en lb (libras) es de ${peso*2.20462}.`);
