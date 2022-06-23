//Ejercicio "booleano" true or false
let numeroPatente = Number(prompt("ingrese solo el número de patente"));

console.log(numeroPatente);

if (numeroPatente >= 50) {
  console.log(
    "contitune por el camino de la izquierda 'Buen viaje'",
    numeroPatente
  );
} else {
  console.log(
    "contitune por el camino de la derecha 'Buen viaje'",
    numeroPatente
  );
}
