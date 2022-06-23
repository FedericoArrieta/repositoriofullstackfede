/*Estructuras de Control
Cantidad y Distribución de Positivos
• Leer valores del usuario hasta que introduzca un 0
• El usuario puede introducir valores numéricos, tanto
positivos como negativos
• Contar la cantidad de valores introducidos que sean
mayores a 0 y el porcentaje de positivos respecto del total
*/

let cantNumTotal: number = 0; // suma el total de los numeros ingresados
let cantNumPositivos: number = 0; // suma el total de numeros > mayor a 0 = Positivos
let porcentajeNumPositivos: number = 0; // calculo del porcentaje de numeros positivos

let numero = Number(prompt("ingrese numero (CERO para cortar)")); // Ingresar numeros por consola

while (numero !== 0) {
  if (numero > 0) {
    // b) detecta si el numero es positivo o no.
    cantNumPositivos++; // c) suma los numeros positivos
  }
  cantNumTotal++; // d) suma el total de numeros ingresados
  // e) contunuar ingresado numeros numeros hasta que se ingrese el "0" (cero)
  numero = Number(prompt("ingrese numero"));
}
// f) cálculo del porcentaje de positivos respecto del total
if (cantNumTotal > 0) {
  porcentajeNumPositivos = (cantNumPositivos / cantNumTotal) * 100;

  console.log(
    "positivos:",
    cantNumPositivos,
    "es el ",
    porcentajeNumPositivos,
    "% del total"
  );
}
