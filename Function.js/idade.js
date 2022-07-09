//programa q deixe o usuario informar uma idade e retorne se é criança (0-10)/cunny (10-13) /adolescente (14-18) /adulto (19-60)/idoso (60+)

function perguntarIdade(){
  return prompt("digite uma idade")
}

function dizerIdade(mugio3){

  if (mugio3 <= 10) {
    console.log("criança");
  }
  if (mugio3 > 10 && idade <= 13) {
    console.log("cunny");
  }
  if (mugio3 > 13 && idade <= 18) {
    console.log("adolescente");
  }
  if (mugio3 > 18 && idade <= 60) {
    console.log("adulto");
  }
  if (mugio3 > 60) {
    console.log("idoso");
  }
}

const prompt = require("prompt-sync")();
const idade = perguntarIdade()

dizerIdade(idade)