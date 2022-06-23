/*TP Introducción a la Programación – COMISIÓN A TDF
Hacer un programa que simule la compra que hace un cliente en un
supermercado. El cliente va tener que ingresar por teclado la
CANTIDAD de productos que va a llevar, los PRODUCTOS que va
a comprar, el PRECIO UNITARIO de cada producto y la CANTIDAD
A COMPRAR DE CADA producto.
Finalizada la compra, el programa va a mostrar por pantalla el
detalle de la compra, productos, cantidad, precio unitario y precio
total.
Dependiendo del monto comprado, el cliente participa de un sorteo:
• si compra menos de 1000 no participa por nada
• si compra mas de 3000 participa por un 0km
• si compra mas de 2000 pero menos de 3000 participa por una
moto 0k
• si compra mas de 1000 pero menos de 2000 participa un tv led
*/

// funcion de carga de la lista de artículos a comprar por el cliente
function cargarArticulos(arrayArticulos: string[]): void {
  for (let i: number = 0; i < arrayArticulos.length; i++) {
    arrayArticulos[i] = prompt(
      "ingrese artículo " + i + " al carrito de compras"
    );
  }
}
// funcion para cargar el precio de los artículos que el cliente desea comprar
function cargarPrecioArticulos(arrayPrecio: number[]): void {
  for (let i: number = 0; i < arrayPrecio.length; i++) {
    let precio: number = Number(
      prompt("ingrese el precio de " + listaArticulos[i])
    );
    while (precio <= 0) {
      precio = Number(prompt("ingrese el precio de " + listaArticulos[i]));
    }
    arrayPrecio[i] = precio;
  }
}
// funcion para cargar la cantidad de cada artículo que el cliente desea.
function cargarCantidadDeArticulos(arrayCantidadArticulos: number[]): void {
  for (let i: number = 0; i < arrayCantidadArticulos.length; i++) {
    let cantidad: number = Number(prompt("cantidad de: " + listaArticulos[i]));
    while (cantidad <= 0) {
      cantidad = Number(prompt("cantidad del artículo: " + listaArticulos[i]));
    }
    arrayCantidadArticulos[i] = cantidad;
  }
}

//funcion para calcular el precio total de la compra
function obtenerPrecioTotal(
  arrayPrecioArticulo: number[],
  arrayCantidadArticulos: number[]
): number {
  let precioTotal: number = 0;
  for (let i: number = 0; i < arrayPrecioArticulo.length; i++) {
    precioTotal =
      precioTotal +
      Number(arrayPrecioArticulo[i]) * Number(arrayCantidadArticulos[i]);
  }
  return precioTotal;
}

let cantidadDeArticulos: number = Number(
  prompt("ingrese la cantidad de artículos:")
);
let listaArticulos: string[] = new Array(cantidadDeArticulos);
let precioArticulos: number[] = new Array(cantidadDeArticulos);
let cantAComprar: number[] = new Array(cantidadDeArticulos);
let precioTotal: number = 0;

cargarArticulos(listaArticulos);
cargarPrecioArticulos(precioArticulos);
cargarCantidadDeArticulos(cantAComprar);
