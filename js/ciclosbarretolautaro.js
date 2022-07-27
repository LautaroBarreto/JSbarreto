alert("Esta es una calculadora virtual, acepta para realizar una funcion")

let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingresa otro numero"));
let operacion = prompt("Elige la operacion: sumar, restar, multiplicar, dividir")
if (operacion === "sumar") {
    let resultadosuma = (num1 + num2);
    alert ("El resultado de la suma es: " + resultadosuma);
} else if (operacion === "restar") {
    let resultadoresta = (num1 - num2);
    alert ("El resultado de la resta es: " + resultadoresta);
} else if (operacion === "multiplicar") {
    let resultadomultiplicacion = (num1 * num2);
    alert ("El resultado de la multiplicacion es: " + resultadomultiplicacion);
}else if(operacion === "dividir") {
    let resultadodivision = (num1 / num2);
    alert ("El resultado de la division es: " + resultadodivision);
}
