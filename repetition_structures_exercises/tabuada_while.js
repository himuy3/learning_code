// faça um programa que peça um numero para um usuário e que então, imprima a tabuada até o 10 do numéro inserido

var prompt = require("prompt-sync")();
var resultado = 0;
var numero = parseInt(prompt("insira um numero"));
var index = 1

while ( index <= 10){
    resultado = index * numero
    index++
    console.log(resultado)
}