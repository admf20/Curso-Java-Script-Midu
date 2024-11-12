//TODO:METODOS Y PROPIEDADES DE ARRAY
function procesarPedido(pedidos) {
 
    const cliente =  pedidos.shift() //se elimina el primer elemento del array y lo devuelve donde se almacena en const client
    pedidos.unshift("Postobon")//agrega el elemento "Postobon" en el primer indice del array
    pedidos.push(cliente) //agrega la constante cliente que es el nombre del cleinte 
    
    return pedidos
  }
  
  procesarPedido(["Andres", "Papas", "Salsa Barbikiu"])
  
  //TODO: ITERACION Y RECORRIDO DE ARRAY
  function sumarPares(numeros) {
    let i = 0
    let NumerosPar = 0
    
    while(i < numeros.length){ 
      
      if (numeros[i] % 2 === 0){ //validamos si el numero es par    
       NumerosPar += numeros[i]  //almcenamos el numero en la variable y lo sumamos con el numero que es par
      }
      i++
    }  
    return NumerosPar
  }

  //TODO: BUSQUEDA DE ARRAY CON SUS METODOS
  function acabanEnA(words) {
    return words.every(words => words.endsWith('a'));
    //el motodo every nos valida si todas las palabras ingresadas cumplen con la condicion
    //el metodo endsWith le estamos pasando como parametro que valide que todas las palabras termine en "a", el nos devuelve true o false si cumple la condicion

    /**en resumen toda la funcion, con el endsWith validamos que si terminen con la palabra "a" las palabras
       y con el every se validan si todas son true o false     
    **/
 }

 //TODO: ORDENAMIENTO DE ARRAYS EN JAVASCRIPT
 const numeros =  [5,10,2,25,7]

 numeros.sort((a, b) => { //TODO: el metodo sort ordena un arrays, pero si es necesario pasar por parametro como se van a ordenar si en acedente o decendente
   //si se retorma un valor negativo -> a va adelante de b
   //si se retorma un valor positivo -> b va adelante de a
   //si se retorna 0 -> queda en la misma posicion y no cambia 
   return a - b
 })
 
 const numbers = [5, -10, -2, -25, -7]
 function sortAbsoluteNumbers(numbers) {
    return numbers.sort((a,b) => Math.abs(a) - Math.abs(b))
 }
//en pocas palabra: "a - b" es en acendente y "b - a" en decendente 
 sortAbsoluteNumbers(numbers)

 //TODO:Transformación de Arrays en JavaScript

 const numbers2 = [1, 2, 3, 4, 5, 6, 7]

const doubleEvenNumbers = numbers.reduce((accumulator, currentNumber) => {
  const isEven = currentNumber % 2 === 0
  const doubled = currentNumber * 2
  const isGreaterThanFive = doubled > 5

  if (isEven && isGreaterThanFive) {
    return accumulator.concat(doubled)
  } else {
    return accumulator
  }
}, []) // <- el array vacío es el valor inicial

console.log(doubleEvenNumbers) // [8, 12]

//Recibes dos parámetros: una lista de palabras words y una palabra word. Primero, busca el índice de la palabra en la lista. Después, usa ese ////índice (que será un número) y devuelve todas las palabras de words que sean más largas (length) que el número del índice
//indexOf

function buscaPalabras(words, word) { 
  const Index = words.indexOf(word) //sacamos el indice de la palabra que se puso en los parametros
  
  const PalabrasMayores = words.filter((palabra) => { 
    return palabra.length > Index
  })
  return PalabrasMayores
}
const words= ["pera", "aguacate", "durazno"]
buscaPalabras(words, "durazno")

//

function matrices (matriz) {
  for (let fila = 0; fila < matriz.length; fila++) {       // Recorre cada fila
  for (let columna = 0; columna < matriz[fila].length; columna++) {  // Recorre cada elemento en la fila
    if (matriz[fila][columna] === "JS") {
      return [fila, columna];  // Retorna la posición de "JavaScript"
    }
  }
}
}

console.log(matrices(matriz))

/**
fn([ ['HTML', 'CSS', 'JS', 'PHP', 'Kotlin'], 
   ['Java', 'C++', 'Python', 'C#', 'Swift'], 
   ['Ruby', 'Rust', 'Lisp', 'Go', 'Miau'] ]
   )
**/