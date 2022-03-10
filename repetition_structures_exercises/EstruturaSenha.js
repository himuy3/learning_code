var prompt = require("prompt-sync")();


acertou = false
while (!acertou){
    var senha = prompt("insira uma senha");
    if( senha == 'himuy3'){
        console.log('acertou')
        acertou = true
    }
}

 