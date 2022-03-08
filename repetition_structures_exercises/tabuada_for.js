// faça um programa que peça um numero para um usuário e que então, imprima a tabuada até o 10 do numéro inserido

var prompt = require("prompt-sync")(); 
var resultado = 0
var numero = parseInt(prompt("insira um numero"));


for (var index = 1; index <= 10; index++){
  resultado = index * numero
  console.log(resultado)
  } 
   

  // linha 3, 4 e 5 = insiro o prompt para perguntar o valor e tenho uma variavel de resultado = 0
  // linha 8 9 = na linha do for, a var index é = 1 pq é onde o loop vai começar, sendo <= 10 onde o loop termina. Index++ vai aumentando em ordem crescente

  //linha 10 - loops. 

    /**
     * numero = 2 
    //  * 
    //  * 1 loop = var numero 2 * index 1 = 2  
    //  *2 loop = var numero 2 * index 2 = 4 
    //  3 loop = var numero 2 * index 3 = 6
    //  e assim vai indo sucetivamente */ 