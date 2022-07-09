// faça um programa que informe se um numero é negativo ou positivo

function perguntarNumero() {
  return prompt("digite um numero")
  
}

function dizerValor(passo1){
  if (passo1 < 0) {
    console.log("é negativo") 
  }
  else{
    console.log("é positivo")
  }
}


const prompt = require("prompt-sync")();
const numero = perguntarNumero()


dizerValor(numero)