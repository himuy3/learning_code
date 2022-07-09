let resultado = 0;

const prompt = require("prompt-sync")();
function dizerProva() {
    return parseInt(prompt("digite a nota da prova"));
}

function dizerTrabalho() {
    return parseInt(prompt("digite a nota do trabalho"));
}

function dizerTarefas() {
    return parseInt(prompt("digite a nota das tarefas"));
}

function dizerNotas(prova, trabalho, tarefa) {
    return (prova + trabalho + tarefa) / 3;
}

for (let index = 0; index < 3; index++) {
    let prova = dizerProva();
    let trabalho = dizerTrabalho();
    let tarefas = dizerTarefas();
    let notas = dizerNotas(prova, trabalho, tarefas);
    resultado = resultado + notas;
}
console.log(`o resultado da turma foi ${resultado}`);
