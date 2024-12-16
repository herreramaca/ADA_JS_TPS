const prompt = require('prompt-sync')();
let edad = parseFloat (prompt("Por favor ingrese su edad actual: "));

if (edad > 18){ console.log(`Usted es mayor de edad, puede entrar.`);
 }
else if (edad >= 18){ console.log(`Usted tiene la edad justa para entrar.`);
 }
else {console.log(`Usted es menor de edad, lamentablemente no puede ingresar.`);
}