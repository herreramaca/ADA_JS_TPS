// Ejercicio 3:
//Declara dos variables booleanas condicion1 y condicion2. Pide al
//usuario que ingrese dos valores booleanos (true o false) y muestra el
//resultado de diversas combinaciones lógicas.

const prompt = require('prompt-sync')();
let valor_bool1 = prompt ("Ingrese un valor booleano (true o false): ");
let valor_bool2 = prompt ("Ingrese otro valor booleano (true o false): ");

console.log(`Con el OPERADOR AND (&&)`);
if (valor_bool1 && valor_bool2) {
    console.log(`Su valor es TRUE`);}
else if (valor_bool1 && valor_bool2){
    console.log(`Su valor es FALSE`);}
else if (valor_bool1 && valor_bool2){
    console.log(`Su valor es FALSE`);}
else {   console.log(`Su valor es TRUE`);}


// esto me estreso (TnT)