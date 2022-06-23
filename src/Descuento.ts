/*Desarrolle un algoritmo que diga el precio de una compra 
La compra se compone del precio del producto y la cantidad
Si el cliente gasta más de $1000 debemos aplicarle un descuento del 10%
Estructura de Control – Selección Simple 
*/

//Se ingresa el precio del producto por teclado
let precioInicialProducto: number = Number(prompt("ingrese el precio"));
// Se ingresa la cantidad del producto por teclado
let cantidad: number = Number(prompt("ingrese cantidad"));
// Es el precio TOTAL del producto (sin descuento)
let precioTotal: number = precioInicialProducto * cantidad;
//Descuento del 10%
let descuentoDiezPorciento: number = 0.1;
//esto es el importe del descuento
let descuento: number = precioTotal * descuentoDiezPorciento;
//Es el precio del producto con descuento
let precioDescuento: number = precioTotal - descuento;

if (precioTotal >= 1000) {
  // muestra el precio final del producto con 10% de descuento
  console.log(
    "Por gastar mas de 1000 tiene un 10% de descuento: ",
    precioDescuento
  );
} else {
  //.muestra el precio final del producto SIN descuento
  console.log("El monto final a pagar es: ", precioTotal);
}

// Revisar para acortar el codigo y la formula del descuento.
let monto: number = dato1.value;
let cantidad: number = dato2.value;
let montoConDescuento: number = 0;
let descuento: number = 0;
let precioTotal: number = 0;
precioTotal = monto * cantidad;
if (precioTotal >= 1000) {
  descuento = (precioTotal * 10) / 100;
  montoConDescuento = precioTotal - descuento;
  console.log("Por gastar mas de 1000 tiene un 10% de descuento.");
  console.log("El monto a pagar es: " + montoConDescuento);
} else {
  console.log("No tiene descuento. El monto a pagar es: " + precioTotal);
}
