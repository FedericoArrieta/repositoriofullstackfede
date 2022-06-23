function esDivisor(numero: number, i: number): number {
  //funcion es divisor o no.
  let i: number = 1; //variable de iteración ("contador")
  while (i <= numero) {
    //
    if (numero % i === 0) {
      //mod de divisor
      i++;
    }
    return i; // retorna los valores que son divisores de numero:
    //"posoble problema: ¿la funcion toma el utimo numero divisor?"
  }
}

function cantidadDeDivisores(numero: number): number {
  // funcion de cantidad
  let cantidad: number = 0;
  let divisor: number;
  for (cantidad = 0; cantidad < numero; cantidad++) {
    if (esDivisor(numero, divisor)) {
      cantidad++;
    }
  }
  return cantidad;
}

let numero: number = Number(prompt("ingrese su numero"));
let divisores: number = cantidadDeDivisores(numero);
console.log("El número", numero, "tiene ", divisores, "divisores.");
