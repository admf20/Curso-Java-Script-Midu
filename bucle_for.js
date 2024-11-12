
function BucleWhile () {
  
let cuentaAtras = 10 

while(cuentaAtras > 0){
  cuentaAtras = cuentaAtras - 1
  console.log(cuentaAtras + " Segundos")
}
}

function For () {
  for(let number = 10; number >= 0; number--){
    if(number === 0){
      console.log("Despeguee 🚀")
    }else{
      console.log("Falta " +number+ " segundos") 
    }
  }
}

function ForUnidado () {

  for (let i = 0, j = 5; i < 5; i++, j--) {
    console.log(i, j);
  }
  
  for (let i = 1; i <= 3; i++) {
    //console.log(i + " primero")
    for (let j = 1; j <= 3; j++) { //tiene que llegar hasta el 3 para salir, como tambien se resetea 
      //console.log(j + " segundo")
      const resultado = i * j
      console.log(i + ' x ' + j + ' = ' + resultado)
    }
  }
}
