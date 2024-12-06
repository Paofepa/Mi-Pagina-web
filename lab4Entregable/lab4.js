let num1 = '';
let num2 = '';
let operacion ='';

function menu(){
    operacion = prompt(`/nCalculadora Basica'
    1    -SUMA 
    2    -RESTA 
    3    - MULTIPLICACION 
    4    -DIVISION
    0    -SALIR 

         Elija una opcion:`);

         if(operacion === '1' || operacion === '2'  || operacion === '3'  || operacion === '4'){
            capturarDatos();
            menu;
         }
        if(operacion === '0'  || operacion === null){
            alert('fin de la operacion' );

        }
        else {
            alert('opcion No valida');
            menu();
        }
}
function capturarDatos(){
    let num1, num2;
    while(isNaN(num1)){//isNAN pregunta.
       num1 = prompt('ingrese el pimer numero'); 
    }
while(isNaN(num2)){
    num2 = prompt('ingrese el segundo numero:');
}
realizarOperacion(num1,num2,operacion)

}

function realizarOperacion (num1,num2, operacion){
    if (operacion == '1'){ //suma
        alert(`el resultado de la SUMA es: ${num1 + num2}`);
}
else if(operacion == '2'){ //resta
    alert(`el resultado de la RESTA es:  ${num1 - num2}`);
}
else if(operacion =='3'){//mutiplicacion
    alert(`elresultado de la multiplicacion es: ${num1 * num2}`);
    }
    else if (operacion == '4'){//ivision
        if(num1 !== 0){
            alert(`el resultado de la division es: ${ num1 / num2}`);
        }
        
    }
    else
    alert('Obcion no valida. No se admite division x o');

}

menu()