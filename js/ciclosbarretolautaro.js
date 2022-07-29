alert("Esta es una calculadora virtual, acepta para ver el menu")


let option = prompt(`Ingrese una opcion:
                        \n1. Realizar una operacion.
                        \n2. Despedirse de la calculadora virtual.
                        \n3. Salir del menu.`
                    )

while(option != '3'){
    switch (option) {
        case '1':
            alert(operacion);
            break;
        case '2':
            alert("Adios Usuario");
            break;
        default:
            break;
    }
    option = prompt(`Ingrese una opcion:
                        \n1. Realizar otra operacion.
                        \n2. Despedirse de la calculadora virtual.
                        \n3. Salir del menu`
                        )
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
}

