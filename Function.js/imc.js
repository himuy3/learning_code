// calcule o imc da pessoa e diga qual a situaçao do corpo dela de acordo com a tabela do imc (desnutrido, peso normal, obeso etc)
function dizerIMC(imc1) {
    if (imc1 < 18.5) {
        console.log("Magreza");
    }
    if (imc1 > 18.5 && imc1 < 24.9) {
        console.log("Normal");
    }
    if (imc1 > 25.1 && imc1 < 29.9) {
        console.log("Sobrepeso");
    }
    if (imc1 > 30.1) {
        console.log("Obesidade");
    }
    console.log(imc);
}

function dizerAltura() {
    return prompt("diga sua altura");
}

function dizerPeso() {
    return prompt("diga seu peso");
}

function calculoIMC(altura, peso) {
    altura = parseInt(altura) / 100;
    return parseInt(peso) / (altura * altura);
}

const prompt = require("prompt-sync")();
let altura = dizerAltura();
let peso = dizerPeso();
const imc = calculoIMC(altura, peso);

dizerIMC(imc);
