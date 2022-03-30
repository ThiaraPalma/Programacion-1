function calcular_area()
{
  const number1 = parseInt(prompt ('Ingrese b1'));
  const number2 = parseInt(prompt ('Ingrese b2'));
  const number3 = parseInt(prompt ('Ingrse valor de h'));
  const resultado = ((number1 + number2) * number3) / 2
  return resultado
}
function mostrar()
{
 const respuesta = calcular_area()
 alert(respuesta)
}