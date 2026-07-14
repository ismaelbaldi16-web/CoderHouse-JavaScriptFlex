alert("INGRESAR");
let ingresarUsuario = "";
let ingresarContrasena = "";
const comprobarUsuario = function(usua,pass)
{
    let usuario = "Uruguayo";
    let contrasena = "1234";

    if(usuario === usua && contrasena === pass)
    {
        return true;
    }
    alert("DATOS INCORRECTOS.");
    return false;
}
do
{
    ingresarUsuario = prompt("Ingresar usuario : ");
    ingresarContrasena = prompt("Ingresar contraseña : ");
}while(!comprobarUsuario(ingresarUsuario,ingresarContrasena))

alert("CALCULADORA");
let numUno = parseFloat(prompt("Valor uno : " ));
let numDos = parseFloat(prompt("Valor dos : " ));
while(Number.isNaN(numUno) || Number.isNaN(numDos))
{
    alert("Numeros invalidos. Intente nuevamente!");
    numUno = parseFloat(prompt("Valor uno : "));
    numDos = parseFloat(prompt("Valor dos : " ));
}
let operador = parseInt(prompt("ELEGIR OPERACION :\n1- SUMAR\n2- RESTA\n3- MULTIPLICACION\n4- DIVISION"));
while(Number.isNaN(operador) || operador < 1 || operador > 4)
{
   alert("Error al elegir operador.Opciones entre el 1 y el 4.INTENTE NUEVAMENTE")
   operador = parseInt(prompt("ELEGIR OPERACION :\n1- SUMAR\n2- RESTA\n3- MULTIPLICACION\n4- DIVISION")); 
}
function operacion(valorUno,valorDos,operador)
{
    switch(operador)
    {
        case  1: return valorUno + valorDos;
        case  2: return valorUno - valorDos;
        case  3: return valorUno * valorDos;
        case  4: if(valorDos == 0)
                  {
                    return NaN
                  }
                  return valorUno / valorDos;
        default:return NaN;
    }
}
const resultado = operacion(numUno,numDos,operador);
const aumentarVeinte = (valor)=> valor * 1.20;
if(Number.isNaN(resultado))
{
    alert("NO SE PUEDE DIVIDIR ENTRE 0")
}
else
{
    const simbolos =["+","-","*","/"]
    alert(`${numUno} ${simbolos[operador-1]} ${numDos} = ${resultado}`);
    const aumento = aumentarVeinte(resultado);
    alert(`${resultado} aumento un 20%. Valor con el aumento : ${aumento}`)
}