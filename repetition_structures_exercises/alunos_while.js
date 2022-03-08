var prompt = require("prompt-sync")();
var alunos = 3;
var resultado_final = 0;
var index = 1;

while (index <= 3) {
  var prova = parseInt(prompt("nota da prova"));
  var trabalho = parseInt(prompt("nota do trabalho"));
  var tarefas = parseInt(prompt("nota das tarefas"));
  var notas = (prova + trabalho + tarefas) / 3;
  var resultado_final = notas + resultado_final;
  index++;
  console.log(resultado_final);
}
console.log(resultado_final / 3);
