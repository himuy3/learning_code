// faça um programa que calcule a soma dos primeiros 50 números pares

var numeros = 50;
var soma = 0;
var resultado = 0

for (index = 1; index <= numeros; index++) {
    resultado = index % 2 
    if (resultado == 0) { 
    soma = soma + index
    console.log(soma);
  }
}










/**
 * 1 loop: soma = 0  e index = 1, o resultado vai dar 1
 * 2 loop: soma = 1 e index = 2, o resultado vai dar 3
 * 3 loop: soma = 3 e index = 3, o resultado vai dar 6 etc...
 */
