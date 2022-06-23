/*Métodos
Ejercicio: Divisores
• Implemente un método llamado cantidadDeDivisores que
reciba un número entero y devuelva la cantidad de divisores
Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8,
16, por lo que la respuesta debería ser 5
Re-utilice el método esMultiplo implementado para el ejercicio
anterior*/

function cantidadDeDivisores(numero: number): number {
  // funcion de cantidad
  let cantidad: number = 0;
  let divisor: number;
  //Reutilizacion de metodo esMultiplo
  for (divisor = 0; divisor <= numero; divisor++) {
    if (numero % divisor === 0) {
      cantidad++;
    }
  }
  return cantidad;
}

let numero: number = Number(prompt("ingrese su numero"));
let divisores: number = cantidadDeDivisores(numero);
console.log("El número", numero, "tiene ", divisores, "divisores.");
