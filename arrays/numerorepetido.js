var teste = [2, 2, 4, 1, 5, 4, 3, 4, 2, 3];

for (var i = 0; i < teste.length; i++) {
    var teste1 = teste[i];
    for (var j = 0; j < teste.length; j++) {
        var teste2 = teste[j];
        if (i !== j && teste1 === teste2) {
            console.log(`${i} é igual a ${j}`);
        } else {
            console.log(`${i} não é igual ${j}`);
        }
    }
}
