const { LinkedList, Node } = require("../estructuras")
  //agregar el metodo size al prototipo de LinkedList.
  // Este metodo deberia retornar la cantidad de elementos de la lista
LinkedList.prototype.size=function(){
    
  return this.len;
  //----------------
  // if(!this.head){
  //   return 0;
  // }else if(!this.head.next){
  //   return 1;
  // }
  // var current = this.head;
  // while(current){

  //   current = current.next;
  //   return 1 + size();
  // }
}


// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista 
//enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [3]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [1]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
// Tu código aca:

// no cambiar los nodos sino sus valores, los nodos los dejo talcual, lo que cambio son los valores, el this.head.value
// que es 5, le doy el valor de 4. 
  var previus = this.head;
  var current = previus.next;
  var cambios =0;
  while(cambios !== -1){

    if(!current.next && cambios > 0){ // si current llego al final y hubo cambios que vuelva al head para hacer un repaso
      
      cambios=0;
      var previus = this.head; 
      var current = previus.next;

    }else if (!current.next && cambios === 0){// si llego al final y no hubo cambios es que ya estan los nodos ordenados.
      cambios = -1;
    }
    //          ejemplo H[1]-->[3]-->[2]-->[5]-->[4]-->null

    if(previus.value < current.value){
      // hacemos el cambio de valor de los primeros dos nodos 

      var auxCurrent = current.value; // guardo el valor 3
      current.value = previus.value; // al segundo nodo le doy el valor del head =1 
      previus.value=auxCurrent; // al head le doy el valor 3 guardado en aux.

      cambios++;             // y me queda H[3]-->[1]-->[2]-->[5]-->[4]-->null, ahora vuelve current y prev saltan 
    }                      //  a los nodos  [1]-->[2], prev al 1 y current 2, y hacen el cambio
    //muevo a previus y a current un nodo a delante 
    //H[3]-->[1]-->[2]-->[5]-->[4]--null
    //       pre    current

    if(current.next){  // hago este if xq si llega al final y current.next = null da error. 
      previus = current;
      current = current.next;  // entonces si curren.nex es null que no haga el salto y suba a los ifs de arriba
    }
        
  }
};


//agregar el metodo insert al prototipo de LinkedList.
// Este metodo deberia recibir una posicion y un valor
// agregar el valor en la posicion indicada
//tomar el head como posicion 1  
  
    
LinkedList.prototype.insert = function(data,pos) {
//pos:   1	    2       3 
//     H[32]-->[12]-->[54]-->null

var nuevoNodo = new Node(data);// creo un nuevo nodo con el valor pasado por parametro
var current = this.head;
var posicion = 2;

if(pos === 1){// si quiero agregar el nodo en la pos 1 osea el head
  this.head = nuevoNodo; // el nuevo head va a ser el nodo que cree
  nuevoNodo.next = current; // el next del nuevo nodo va a ser toda la lista 
  this.len ++;     // estoy agregando un nodo nuevo sumo el length
  return;
}
while(current.next){// mientras el next de current no sea null
// ATENTO que estoy parado con current una posicion atras que el conteo, primera vuelta estoy en el head y conteo va por el 2
  if(pos === posicion){ // si la posicion es la misma que la que pasan por parametro
    var aux = current.next; // guardo toda la lista a partir de la posicion que quiero agregar el nuevo nodo 
    current.next = nuevoNodo;// en esa posicion meto el nodo nuevo (hasta aca el nodo nuevo tiene como next=null)
    nuevoNodo.next = aux; // ahora cambio el null por toda la lista que guarde en aux
    this.len++;            // estoy agregando un nodo nuevo, sumo el length.
  }                   // en caso de que la posicion no era esa
  posicion++;        // sumo uno a la posicion 
  current = current.next; // salto al siguiente nodo
}

}
  




module.exports={
  LinkedList
}



