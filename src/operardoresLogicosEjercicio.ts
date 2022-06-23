// Ejercicio Operadores lógicos || Disyuncion; almenos una es verdadera

let numeroA: number = Number(prompt("ingrese el numero A"));

if (numeroA % 2 === 0 || numeroA > 10) {
  console.log("verdadero", numeroA); // se cumple una de las 2 condiciones
} else {
  console.log("Falso", numeroA); // se cumple una de las 2 condiciones
}

// Ejercicio Operadores lógicos ! NEGACION
if (!true) {
  console.log("verdadero NEGADO");
} else {
  console.log("Falso NEGADO");


/// Ejercicio Operadores lógicos && "se cumple 2 o mas condiciones"
let AB: number = Number(prompt("ingrese el numero elegido"));
// si es mayor a 100 y es PAR es verdadero
if (AB > 100 && AB % 2 === 0) {
  console.log("Ha ganado, reclame su premio", AB); //Verdaredo
  // si es mayor o menor a 100 y es IMPAR es verdadero
} else {
  console.log("su numero no salio afortunado", AB); //Falso
}
