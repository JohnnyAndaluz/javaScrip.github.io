let num_1;
let num_2;
let num_3;
num_1=prompt("Ingrese el primer numero");
num_2=prompt("Ingrese el segundo numero");
num_3=prompt("Ingrese el tercer numero");
document.write(`El primer numero ingresado es ${num_1}. <br>`);
document.write(`El segundo numero ingresado es ${num_2} <br>`);
document.write(`El tercer numero ingresado es ${num_3} <br>`);

if(num_1>num_2 && num_1>num_3)
{
   document.write(`El numero mayor es ${num_1} <br>`);
   document.write(`El numero menor es ${num_3} <br>`);
}
else
{   
   if(num_2>num_1 && num_2>num_3){
      document.write(`El numero mayor es ${num_2} <br>`);
      document.write(`El numero menor es ${num_1} <br>`);
   }
   else{
      document.write(`El numero mayor es ${num_2} <br>`);
      document.write(`El numero menor es ${num_3} <br>`);
   }
}
if (num_1 === num_2 || num_1 === num_3 || num_2 === num_3 || num_1 < 0 || num_2 < 0 || num_3 < 0) {
   alert("Los números deben ser distintos y positivos");
}



