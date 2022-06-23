let numero1: number = Number(prompt("ingrese numero1"));
let numero2: number = Number(prompt("ingrese numero2"));
let resultado: number = 0;
let indice: number = nuemro1;
let mayor: number = 0;
let menor: number = 0;
if (numero1 > numero2) {
  mayor = numero1;
  menor = numero2;
} else {
  if (numero2 > numero2) {
    mayor = numero2;
    menor = numero1;
  }
}

for (indice = menor; indice <= mayor; inidice++) {
  resultado = resultado + indice;
  console.log("resultado");
}
consolge.log("resultado");
