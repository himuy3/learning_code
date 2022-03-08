var prompt = require("prompt-sync")();
var numero = parseInt(prompt("insira um numero"));
var resultado = 0;
var index = 0 

while (index <= numero){
    resultado = index + resultado 
    index++
    console.log(resultado)
}