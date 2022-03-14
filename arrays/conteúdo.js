//declaração de um array
var numeros = [];

//um loop que insere os numeros do index dentro de um array
for (var index = 0; index < 10; index++) {
    //atribui o valor da variavel index, no array numeros no slot com valor index
    numeros[index] = index;
}
//valor esperado [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numeros);



//um loop que imprime os dados de um array, de acordo com o valor do index
for (var index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
}
//valor esperado 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 (separadamente, sem estar num array)



//um loop que imprime os dados de um array, de acordo com o valor do index, porém somente se o valor que esta guardado no array
//for maior que 5
for (var index = 0; index < numeros.length; index++) {
    if (numeros[index] > 5) {
        console.log(numeros[index]);
    }
}
//valor esperado 6, 7, 8, 9 (separadamente, sem estar num array)



//declaração da variavel soma
var soma = 0;
//um loop que soma os dados de um array, de acordo com o valor do index, porém somente somará se o valor
//que está guardado no array, for um numero impar
for (var index = 0; index < numeros.length; index++) {
    if (numeros[index] % 2) {
        soma = soma + numeros[index];
    }
}
//valor esperado 25 (soma de 1 + 3 + 5 + 7 + 9)
console.log(soma);