/*
Estructuras de Datos
Sumar Dos Arreglos
• Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario
*/

let arregloA: number[] = new Array(6);
let arregloB: number[] = new Array(6);
// El array arregloSuma)debe contener la suma de los datos de arregloA y arregloB
let arregloSuma: number[] = new Array(6);
let i: number; //variable de iteracíon

//bucle para el llenado del arreglo A
for (let i: number = 0; i < 6; i++) {
  arregloA[i] = Number(prompt("Ingrese números en arreglo A"));
}
//bucle para el llenado del arreglo B
for (let i: number = 0; i < 6; i++) {
  arregloB[i] = Number(prompt("Ingrese números en arreglo B"));
}
//bucle para  suma y llenado del arregloSuma
for (let i: number = 0; i < 6; i++) {
  arregloSuma[i] = arregloA[i] + arregloB[i];
  //se muestra la suma de A1 + B1 etc.... por consola.
  console.log(arregloSuma[i], "es la suma de:", arregloA[i], "+", arregloB[i]);
}
