//Ejercicio de descuento

//Precio inicial del producto
let numero1: number = Number(prompt("ingrese el precio"));

//Descuento 10%
let numero2: number = 0.1;

//El importe del descuento es
let descuento: number = numero1 * numero2;

//muestro el descuento del 10%
console.log(" Importe descontado ", descuento);

//calculo resultado
let resultado: number = numero1 - descuento;

//imprimo resultado en consola
console.log("el precio final es: ", resultado);
