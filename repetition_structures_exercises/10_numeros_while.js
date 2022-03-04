// faça um programa que peça 10 numeros a um usuário e que, então responda com a soma de todos eles

var prompt = require("prompt-sync")();
var resultado = 0;
var index = 0;

while (index < 10) {
  var numero = parseInt(prompt("insira 1 número"));
  resultado = resultado + numero;
  index++
}
console.log(resultado);
                                    