/*
Ejercicio: Potencias
• Realice un programa que devuelva la potencia de un número.
• La base y el exponente deben ser ingresados por teclado.
• Sólo deben admitirse exponentes mayores o iguales a cero.
• Recuerde que el resultado de un numero elevado a 0 es 1.
• Separe la lógica de calcular la potencia utilizando métodos.
*/

function calculoPotencia() {
  //Función cálculo axuliar de potenciación.
  if (numExponente === 0) {
    resultado = 1;
  } else {
    resultado = numBase ** numExponente;
  }
  console.log(
    "El resultado de:",
    numBase,
    "elevado a",
    numExponente,
    "es igual a:",
    resultado
  );
}
// Ingresar numeros por consola (numbase = Número Base y numExponente = Exponente o potencia)
let numBase: number = Number(prompt("Ingrese numero base"));
let numExponente: number = Number(prompt("Ingrese numero exponente"));
let resultado: number = 0;

if (numExponente >= 0) {
  calculoPotencia(); // llamo a la función cálculo de potenciación.
} else {
  console.log("La operación es invalida o la potencia es erronea");
}
