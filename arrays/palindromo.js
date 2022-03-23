var palindromo = "agua";
var assist = palindromo.length - 1;
var flag = false;

for (var i = 0; i < palindromo.length; i++) {
    var pal1 = palindromo[i];
    var assist2 = assist - i 
    for (var j = assist; j >= 0; j--) {
        var pal2 = palindromo[j];
        if (assist2 == j && pal1 !== pal2) {
            flag = true;
        }
    }
}
if (flag) {
    console.log("n é palindromo");
} else {
    console.log("é palindromo");
}
