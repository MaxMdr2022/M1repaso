const { Queue } = require("../estructuras")
// Implementar la función controlAcces: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola 

var controlAcces = function(queue, event){
  // Tu código aca:
  let nombres = [];
  
  for(var i=0; i<queue.array.length; i++){
    for(var j=i+1; j<queue.array.length; j++){

      if(queue.array[i]["ticket"].number === queue.array[j]["ticket"].number && queue.array[i]["ticket"]["event"] === queue.array[j]["ticket"]["event"]){

        queue.array.splice(j,1);
        
      }
    }

  }

  for (var i=0; i < queue.array.length; i++){
      // tengo que recorrer el array que tiene todos los objetos y preguntar si esa persona(obeto) cumple con los requisitos 
      // cada i va a ser una persona, entonces esas preguntas las hago aca dentro del for.
      // en caso de no cumplir con alguna condicion, como la saco? con splice.
      // queue.array.splice(i,1);
      //tengo que pushear en un arreglo los nombres y el numero de ticket, si ese numero de ticket coincide con otro 
      // saco a ese elemento del queue.array ( a esa persona)
    if(queue.array[i]["age"] < 18){

      queue.array.splice(i,1);
      i=i-1

    }else if(queue.array[i]["ticket"]["event"] !== event ){

      queue.array.splice(i,1);
      i=i-1
    }else{

      nombres.push(queue.array[i]["fullname"]);
    }
  }
  // console.log("----------------------------------------------------dsdsdsd-----------")
  // console.log(queue.array[0]["ticket"].number);
  // console.log(queue.array.length)
  return nombres;

};
      

  

module.exports = {
  controlAcces,
   
}