function dibuLinea() {
  // realizar una linea de 40 guiones dentro de la calculadora funcion
  let linea: string = "-";
  for (let i: number = 0; i <= 40; i++) {
    linea = linea + "-";
  }
  console.log(linea);
}

//ingreso de numeros en consola (num1 = Número 1 y num2 = Número 2)
let num1: number = Number(prompt("ingresar 1 numero"));
let num2: number = Number(prompt("ingresar 2 numero"));
let opcion: number = Number(
  prompt(
    "ingresar 1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir, cualquier otra tecla para salir"
  )
);
//va a mostrar el resultado de la operación que elija
let resultado: number = 0;

switch (opcion) {
  // suma de números
  case 1:
    resultado = num1 + num2;
    // llamo a la función Linea
    Linea();
    console.log("El resultado de la operación (suma) es:", resultado);
    Linea();
    break;
  case 2:
    // resta de los números
    resultado = num1 - num2;
    Linea();
    console.log("El resultado de la operación (resta) es:", resultado);
    Linea();
    break;
  case 3:
    // multiplicación de los números
    resultado = num1 * num2;
    Linea();
    console.log("El resultado de la operación (multiplicación) es:", resultado);
    Linea();
    break;
  case 4:
    // división de los números
    resultado = num1 / num2;
    Linea();
    console.log("El resultado de la operación (división) es:", resultado);
    Linea();
    break;
  default:
    console.log("la operación No es válida");
}
