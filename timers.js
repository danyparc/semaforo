/** Ejercio Semáforo.(15min.)
 * 1. Crear una función que imprima el 
 * color válido de un semáforo cada vez que sea 
 * llamada. El retorno o impresión de esta función 
 * debe cumplir con la secuencia lógica de un semáforo
 * Ejemplo: Si comienza en VERDE, luego debe imprimir AMARILLO, 
 * luego ROJO y volver a VERDE la 4ta vez que se ejecuta
*/

let COLORES = ['ROJO', 'AMARILLO', 'VERDE']

const semaforoLuz = function (){
  let color = COLORES.pop()
  console.log(color)
  if (COLORES.length === 0){
    COLORES = ['ROJO', 'AMARILLO', 'VERDE']
  }
  return color
}

// for(let i=0; i < 17; i++){
//   semaforoLuz()
// }

// const timeoutId = setTimeout(semaforoLuz, 500)
// clearTimeout(timeoutId)
let identificador = setInterval(semaforoLuz, 3000)
// let identificador2 = setInterval(semaforoLuz, 3000)
console.log(identificador);
// clearInterval(intervalId) <-- Detiene el setInterval
