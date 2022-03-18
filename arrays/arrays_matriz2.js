var prompt = require("prompt-sync")();

var matriz = [];

for (var i = 0; i < 3; i++) {
    var numeros = [];
    for (var j = 0; j < 3; j++) {
        var numero = prompt("insira um numero");
        numeros[j] = numero;
    }
    matriz[i] = numeros;
}
console.table(matriz);
