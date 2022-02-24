//  calcule a média de um aluno baseado em prova, trabalho, tarefas, de 0 a 100 cada uma e pegue a media entre as 3 e retorne o resultado. 60 < = reprovado | acima = aprovado | maior que 90 =

var prompt = require("prompt-sync")();

var prova = parseInt(prompt("nota da prova"));
var trabalho = parseInt(prompt("nota do trabalho"));
var tarefas = parseInt(prompt("nota das tarefas"));
var resultado = (prova + trabalho + tarefas) / 3;
console.log(resultado);

if (resultado < 60) {
  console.log("reprovado");
}
if (resultado >= 60 && resultado < 90) {
  console.log("aprovado");
}
if (resultado >= 90) {
  console.log("merece um premio");
}
