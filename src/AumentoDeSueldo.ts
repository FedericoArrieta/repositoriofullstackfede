/*Estructura de Control - Selección
Ejercicio – Aumento de Sueldo
• Una empresa desea premiar a sus empleados con un
aumento de sueldo. 
Sueldo Actual Sueldo con Aumento
0 - 15.000 $ 20%
15.001 - 20.000 $ 10%
20.001 - 25.000 $ 5%
Más de 25.000 $ No hay aumento
• Desarrolle un algoritmo dado el salario actual de un
empleado determine el aumento de sueldo a aplicar y
se lo muestre
*/

// ingresa el dato del sueldo
let sueldoActual: number = Number(prompt("Ingrese su suendo actual"));
// variables de aumento del nuevo sueldo
let aumento: number = 0;
// booleano de aumento (T/F)
let aumentoGral: boolean = true;
// pregunto si el sueldo esta dentro de maximo permitido.
if (sueldoActual < 25001) {
  aumento = true;
} else {
  aumento = false;
}

switch (aumento) {
  case true:
    // aqui se aplica el 20 % de aumento si el sueldo es mayor a 0 y menor a 15000
    if (0 < sueldoActual && sueldoActual <= 15000) {
      console.log(
        "Su aumento es del 20 % su nuevo sueldo es de:" +
          " " +
          sueldoActual * 1.2 +
          " " +
          "pesos"
      );
      // en caso de que el sueldo esa mayor a 15001 y menor a 20000 aqui se aplica el 10 % de aumento.
    } else if (15001 < sueldoActual && sueldoActual <= 20000) {
      console.log(
        "Su aumento es del 10 % su nuevo sueldo es de:" +
          " " +
          sueldoActual * 1.1 +
          " " +
          "pesos"
      );
      // en caso de que el sueldo esa mayor a 20001 y menor a 25001 aqui se aplica el 5 % de aumento.
    } else if (20001 < sueldoActual && sueldoActual < 25001) {
      console.log(
        "Su aumento es del 5 % su nuevo sueldo es de:" +
          " " +
          sueldoActual * 1.05 +
          " " +
          "pesos"
      );
    }

    break;
  // en caso de que el sueldo esa mayor a 25001 NO se aplica el aumento.
  case false:
    console.log(
      "Su sueldo es mayor a 25000 pesos. Usted no tiene aumento de sueldo"
    );
    break;
}
