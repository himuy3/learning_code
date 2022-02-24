//faça um programa que o usuario possa entrar com numero de total hits do osu e o numero de playcount e calcule o numero de hits por play

var prompt = require("prompt-sync")();
var hits = prompt("número de total hits");

var playcount = prompt("numero playcount");

var hits_por_play = parseInt(hits) / parseInt(playcount);
console.log(hits_por_play);

// se o usuario tiver menos de 200 hits por play, diga que ele está dando muito retry no console

if (hits_por_play <= 200) {
  console.log("voce esta dando muito retry");
} else {
  console.log("voce esta indo bem");
}
