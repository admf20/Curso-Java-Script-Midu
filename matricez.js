const matriz = [
    ['HTML', 'CSS', 'JS', 'PHP', 'Kotlin'], 
       ['Java', 'C++', 'Python', 'C#', 'Swift'], 
       ['Ruby', 'Rust', 'Lisp', 'Go', 'Miau'] 
  ];
  
function matrices (matriz) {
      for (let fila = 0; fila < matriz.length; fila++) {       // Recorre cada fila
      for (let columna = 0; columna < matriz[fila].length; columna++) {  // Recorre cada elemento en la fila
        if (matriz[fila][columna] === "Pyssthon") {
          return [fila, columna];  // Retorna la posición de "JavaScript"
        }
      }
    }
    return [-1, -1];
  }
  
  console.log(matrices(matriz))