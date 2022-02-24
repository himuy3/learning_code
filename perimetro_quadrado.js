var prompt = require("prompt-sync")();
//faça um programa que entre com um numero e com esse numero calcule o valor da área e do perimetro de um quadrado

//criei uma variavel para perguntar ao usuario qualquer numero para calcular a area de um quadrado
var lado = prompt('escreva um numero para calcular a area de um quadrado')
// calcular os lados de um quadrado 
// Lado * Lado 

//mostrando qual o valor do lado
console.log('valor do lado: ', lado)

//esta calculando (multiplicando) a variavel lado para calcular a area do quadrado e atribuindo o valor
var area = parseInt(lado)* parseInt(lado)

//mostrando o valor da area 
console.log('valor da area: ', area)

//calcular o perimetro sendo o valor do lado = 5

// atribuindo o valor que é resultado de um calculo de todos os lados
var perimetro = parseInt(lado) * 4

// mostra qual o valor da variavel perimetro
console.log('valor do perimetro: ', perimetro)