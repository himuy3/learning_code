// pegue 10 usuarios e retornar o 5 e 6 nome

var prompt = require("prompt-sync")();
var nomes = [];

for (let index = 0; index < 10; index++) {
  var nome = prompt("insira 1 nome");
  nomes[index] = nome;
}
console.log(nomes[4]);
console.log(nomes[5]);
