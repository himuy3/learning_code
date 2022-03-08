//faça um programa que peça um numero pra um usuário, e então retorne a soma de todos os números até o número que o usuário escolheu (ex: (5) 1 + 2 + 3 + 4 + 5 = 15)

var prompt = require("prompt-sync")();
var resultado = 0;
var numero = parseInt(prompt("insira um número"));

for (var index = 0; index <= numero; index++) {
  resultado = resultado + index;
  console.log(resultado);
}



// var prompt = require("prompt-sync")();
// var numero = parseInt(prompt("insira um número"))
// var resultado = numero

// for (var index = 0; index <= numero; index++){
//     resultado = numero
//     console.log(resultado)
// }
