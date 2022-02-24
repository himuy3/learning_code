// faça um programa que informe se um numero é negativo ou positivo

var prompt = require("prompt-sync")();
var numero = prompt("escreva um numero pra saber se é positivo ou negativo");

if (numero < 0) {
  console.log("negativo");
} else {
  console.log("positivo");
}

