function dizerValor() {
    return prompt("digite o valor")
}

function dizerTempo(){
    return prompt("diga o tempo")
}

function calculoJuros(valor, tempo){
    let resultado = (0.05 / 100) * valor * tempo
    console.log(resultado);
    
}

const prompt = require("prompt-sync")();
let valor = dizerValor()
let tempo = dizerTempo()
calculoJuros(valor, tempo)

