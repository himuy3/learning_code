// calcule o imc da pessoa e diga qual a situaçao do corpo dela de acordo com a tabela do imc (desnutrido, peso normal, obeso etc)

var prompt = require("prompt-sync")();
var altura = prompt("diga sua altura");
var peso = prompt("diga seu peso");
altura = parseInt(altura) / 100;

var imc = parseInt(peso) / (altura * altura);
console.log(imc);

if (imc < 18.5) {
  console.log("Magreza");
}
if ((imc > 18.5 && imc < 24.9)) {
  console.log("Normal");
}
if ((imc > 25.1 && imc < 29.9)) {
  console.log("Sobrepeso");
}
if (imc > 30.1) {
  console.log("Obesidade");
}
