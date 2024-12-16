const prompt = require('prompt-sync')();

let numero = parseFloat(prompt("Ingerse un numero de su preferencia: "));

const rangoMinimo = -6;

const rangoMaximo = 96;

if (numero>= rangoMinimo && numero<=rangoMaximo){
    console.log(`Su numero se encuentra dentro del rango`);
}
else { console.log( `Su numero se encuentra fuera del rango`);
}