// programa que deixe o usuario informar o valor depositado no banco e o tempo que vai deixar guardado, e que em seguida retorne o valor de dinheiro obtido numa poupança onde o valor de juros é de 0,05% ao mes

var prompt = require("prompt-sync")();
var valor = parseInt(prompt("insira o valor depositado"));
var tempo = parseInt(prompt("insira o tempo que vai deixar guardado"));
var resultado = (0.05 / 100) * valor * tempo;
console.log(resultado);
