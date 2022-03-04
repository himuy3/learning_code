// qual danganronpa vc esta jogando > capitulo >  depois que diga quem morre em qual capitulo, baseado na respost

var prompt = require("prompt-sync")();
var danganronpa = prompt("qual danganronpa voce ta jogando");
var capitulo = prompt("qual capitulo voce ta jogando");

if (danganronpa == "1") {
  if (capitulo == "1") {
    console.log("sayaka");
  }
  if (capitulo == "2") {
    console.log("chihiro");
  }
  if (capitulo == "3") {
    console.log("taka e hifumi");
  }
  if (capitulo == "4") {
    console.log("sakura");
  }
  if (capitulo == "5") {
    console.log("cadaver falso");
  }
  if (capitulo == "6") {
    console.log("junko");
  }
}

if (danganronpa == "2") {
  switch (capitulo) {
    case "1":
      console.log("imposter");
      break;
    case "2":
      console.log("mahiru");
      break;
    case "3":
      console.log("ibuki e hiyoko");
      break;
    case "4":
      console.log("nekomaru");
      break;
    case "5":
      console.log("komaeda");
      break;
    case "6":
      console.log("junko de novo");
      break;
    default:
      break;
  }
}

