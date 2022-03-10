var prompt = require("prompt-sync")();
var danganronpa = prompt("qual danganronpa voce ta jogando");
var capitulo = prompt("qual capitulo voce ta jogando");

erro = true;
while (erro) {
  var assassino = prompt("quem matou");

  if (danganronpa == "1") {
    switch (capitulo) {
      case "1":
        console.log("sayaka");
        if (assassino == "leon") {
          erro = false;
          console.log("voce acertou");
        }
        break;
      case "2":
        console.log("chihiro");
        if (assassino == "mondo") {
          erro = false;
          console.log("voce acertou");
        }
        break;
      case "3":
        console.log("taka e hifumi");
        if (asassino == "celestia") {
          erro = false;
          console.log("voce acertou");
        }
        break;
      case "4":
        console.log("sakura");
        if (assassino == "suicidio") {
          erro = false;
          console.log("voce acertou");
        }
        break;
      case "5":
        console.log("cadaver falso");
        if (assassino == "junko") {
          erro = false;
          console.log("voce acertou");
        }
        break;
      default:
        break;
    }
  }

  if (danganronpa == "2") {
    switch (capitulo) {
      case "1":
        console.log("imposter");
        if (assassino == "teruteru") {
          erro = false;
          console.log("voce acertou");
        }
        break;
      case "2":
        console.log("mahiru");
        if (asassino == "peko") {
          erro = false;
          console.log("voce acertou");
        }
        break;
      case "3":
        console.log("ibuki e hiyoko");
        if (asassino == "mikan") {
          erro = false;
          console.log("voce acertou");
        }
        break;
      case "4":
        console.log("nekomaru");
        if (assassino == "gundham") {
          erro = false;
          console.log("voce acertou");
        }
        break;
      case "5":
        console.log("komaeda");
        if (asssassino == "chiaki") {
          erro = false;
          console.log("voce acertou");
        }
        break;
      default:
        break;
    }
  }
}
