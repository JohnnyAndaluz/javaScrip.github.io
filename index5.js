let cantidad_1 = 0;
let cantidad_2 = 0;
let cantidad_3 = 0;
for (let f = 1; f <= 4; f++) {
    let lado1 = parseInt(prompt('Ingrese primer lado:'));
    let lado2 = parseInt(prompt('Ingrese segundo lado:'));
    let lado3 = parseInt(prompt('Ingrese tercer lado:'));
    if (lado1 == lado2 && lado1 == lado3) {
        document.write('Triángulo Equilatero.<br>');
        cant1++;
    } else {
        if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
            document.write('Triángulo Escalenoi.<br>');
            cant2++;
        } else {
            document.write('Triángulo Isósceles.<br>');
            cant3++;
        }
    }
}
document.write('<br>');
document.write('Triángulos Equiláteros ingrsados:' + cantidad_1 + '<br>');
document.write('Triángulos Escalenos ingresados:' + cantidad_2 + '<br>');
document.write('Triángulos Isósceles ingresados:' + cantidad_3 + '<br>');
if (cant1 < cant2 && cant1 < cant3) {
    document.write('Se ingresaron menos triángulos Equiláteros');
} else {
    if (cant2 < cant3) {
        document.write('Se ingresaron menos triángulos Escalenosisósceles');
    } else {
        document.write('Se ingresaron menos triángulos Isósceles');
    }
}

