var n1 = prompt("Escribe un número");
var i;
var primer = true;
for (i = 2; i < n1 / 2; i++) {
    if (n1 % i === 0) {
        primer = false;
    }
}
if (primer) {
    document.write("El numero" +n1 + " es numero primo");
} else {
    document.write("El numero" +n1 + " no es numero primo");
}

