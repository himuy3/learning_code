// usuario digite um (1 ) nome e que procure no array anterior, o que ele digitou, se tiver diz que o valor tá lá/achou o valor, se

var prompt = require("prompt-sync")();
var nomes = [];

for (let index = 0; index < 10; index++) {
  var nome = prompt("insira 1 nome");
  nomes[index] = nome;
}


var procurar = prompt('escreva um nome para ver se está no array')

for (var index = 0; index < nomes.length; index++) {
  if (nomes[index] === procurar) {
    console.log("achou");
  } else{
      console.log('nao achou')
  }
} 
