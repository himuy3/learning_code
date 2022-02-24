//programa q deixe o usuario informar uma idade e retorne se é criança (0-10)/cunny (10-13) /adolescente (14-18) /adulto (19-60)/idoso (60+)

var prompt = require("prompt-sync")();
var idade = prompt("informe uma idade válida");

if (idade <= 10) {
  console.log("criança");
}
if (idade > 10 && idade <= 13) {
  console.log("cunny");
}
if (idade > 13 && idade <= 18) {
  console.log("adolescente");
}
if (idade > 18 && idade <= 60) {
  console.log("adulto");
}
if (idade > 60) {
  console.log("idoso");
}
