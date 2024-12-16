const prompt = require('prompt-sync')();
let nro1 = parseFloat (prompt("Ingrese un número: "));
let nro2 = parseFloat (prompt("Ingrese un segundo número: "));
let nro3 = parseFloat (prompt("Ingrese un tercer número: "));

if (nro1>nro2 && nro1>nro3){ console.log(`Su múmero mayor es ${nro1}`);
 }
else if (nro2>nro1 && nro2>nro3) { console.log(`Su número mayor es ${nro2}`);
  }
else if (nro1=nro2=nro3) { console.log(`Todos los números tienen el mismo valor por lo cual, todos son mayores.`);
 }  
else {console.log(`Su número mayor es ${nro3}`);
}