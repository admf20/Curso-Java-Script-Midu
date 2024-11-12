// PRIMERO 
function getRamdomNumber(){
    const numero_uno = Math.random()
    
    const numero_dos = numero_uno * 10
    console.log(numero_dos)
    
    const numero_tres = Math.floor(numero_dos)

    const numero_cuatro = numero_tres + 1
    
    return numero_cuatro
  }
  
  getRamdomNumber()


//DIEFRENCIA DE LOS PARAMETROS Y ARGUMENTOS - SEGUNDO
  function cocinarMicroondas(plato, tiempo, potencia){
    if(plato === '🐥' && tiempo === 1 && potencia == 5){
      return '🍗'
    }
    
    if(plato === '🥚' && tiempo === 2 && potencia == 10){
      return '🍳'
    }
    
    return '✖️ Plato no soportado'
  }
  
  cocinarMicroondas('🐥', 1, 5)
  cocinarMicroondas('🌭', 1, 5)
  cocinarMicroondas(2, 10, '🥚')
/** 
NOTA: las diferencias de los parametros y argumentos, es que en los parametros tengo que poner el orden de los 
parametros bien para identificalors, como en la linea 28, si no es asi saldra error en la funcion, ejemplo linea 29 y a 
diferencia de los argementos no importa el orden el entiende lo que recibe y no habra error
*/


//TODO: que es una "function expression" TERCERO
 /**
  * Es una funcion que se almacena  en una constante, pero existe un comportamiento particular por el "Hoisting".
  * 1. Cuando yo hago una function normal con la palabra function, sin importar el orden no sale error ya que siempre va 
  * alcenamar en memoria la funcion.
  * 2. Cuando una funcion se guarda en una constante o varible que es lo mismo, si es importante el orden ya que sale eror porque 
  * aca si no guarda el espacio de memoria 
  */

 // esto es una function expression
const sum = function (a, b) {
    return a + b
  }
  
  // esto es una declaración de función
  function sum(a, b) {
    return a + b
  }

//TODO: aca no sale error porque en java script almecena el espacio en memoria por la palabra reservada "function"
sum(1, 2) // 3

function sum(a, b) {
  return a + b
}

T//TODO: aca si sale error porque no almecena el espacio en memoria porque esta almecenada en un costante 

sum(1, 2) // ❌ ReferenceError: sum is not defined

const sum = function (a, b) {
  return a + b
}

// funciones flecha -- CUATRO
const miFuncionFlecha = () => {
    // código a ejecutar
  }

//TODO: una de las de ventajas de las funciones flecha es el return implicito ya que se puede hacer todo en una sola linea 
// Declaración de función regular
function sumar(a, b) {
    return a + b
  }
  
  // Función flecha
  const sumarFlechaa = (a, b) => {
    return a + b
  }
  
  // Función flecha con return implícito
  const sumarFlecha = (a, b) => a + b


/**funciones recursivas -- CINCO
TODO: en pocas palabras es utilizar la misma funcion que se creo pero, teniendo su limite o condicion para que no sea 
infinita, en este caso la linea 103**/
function factorial (n){
    if(n === 0 || n === 1){
     return 1 
    }else {
      console.log(n)
      return n * factorial(n -1)
    }
  }
  
  factorial(5)

//otro ejemplo de funcion recursiva
function textoPantalla(n){
    if (n === 1 || n === 20){
      return 'No se puede imprimir mas ✖️'
    }
    console.log("se esta imprimiendo por el console.log, estas cantidades "+ n)
    textoPantalla(n + 1)
  }
  
  textoPantalla(2)

