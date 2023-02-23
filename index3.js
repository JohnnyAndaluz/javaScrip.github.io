let peso;
let altura;
let imc = 0;
peso = prompt("Ingrese su peso");
altura = prompt("Ingrese su altura");
imc = (peso / Math.pow(altura,2));
imc = Math.round(imc ,2);
if (imc < 16) {
    document.write(`Usted tiene criterio de ingreso ${imc}`);
}
if (imc > 16 && imc <= 16.9) {
    document.write(`Usted tiene infra peso ${imc} `);
}
if (imc > 17 && imc <= 18.4) {
    document.write(`Usted tiene bajo peso ${imc}`);
}
if (imc > 18.5 && imc <= 24.9) {
    document.write(`Usted tiene peso normal ${imc}`);
}
if (imc > 25 && imc <= 29.9) {
    document.write(`Usted tiene sobrepeso ${imc} obesidad nivel 1`);
}
if (imc > 30 && imc <= 34.9) {
    document.write(`Usted tiene obesidad premórbida ${imc} obecidad nivel 2`);
}
if (imc > 40 && imc <= 45) {
    document.write(`Usted tiene obesidad mórbida ${imc} obecidad nivel 3`);
}
if (imc > 45) {
    document.write(`Usted tiene obesidad hipermórbida ${imc} obecidad nivel 4`);
}


