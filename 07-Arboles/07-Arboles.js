const { BinarySearchTree } = require("../estructuras")

// En el prototipo de BinarySearchTree crear la funcion search que debe recibir un parametro y buscarlo en el arbol
// si lo encuentra, debe retornar el nodo. En caso contrario retornar el mensaje correspondiente.
// Ejemplo      (10)          
//             /     \
//          (7)     (12)       
//         /  \      /  \
//      (2)  (9)  (11)  (15)   
BinarySearchTree.prototype.search= function(value){
   
    if(!this.value){   //si el valor del primer nodo (o nodo donde estoy parado) es null
        return "no se encontró el valor";
    }
    if(value === this.value){ // si el valor del primer nodo es igual al que pasan por parametro
        return this.value        // lo retorno
    }
    if(value < this.value){  // si el valor pasado por parametro es menor al valor del primer nodo (o nodo donde estoy parado) 

        if(this.left){      // si el nodo que esta a la izq no es null
           return this.left.search(value); // recursion, invoco a la funcion con el nodo de la izq, osea que cuando suba al primer if voy a estar parado en el nodo izq
        }else{                          // si el nodo izq es null, quiere decir que no esta el valor
            return "no se encontró el valor";
        }
    }
    if(value > this.value){// lo mismo pero pregunta si el valor es mayor que el nodo donde este parado, si es asi

        if(this.right){ // y el nodo que esta a la derecha no es null
           return this.right.search(value);// con recursion me paro en el nodo derecho y pregunto en los ifs de arriva si el valor de este nodo es el que pasan por parametro
        }else{
           return "no se encontró el valor";
        }
    }
}


// En el prototipo de BinarySearchTree crear la funcion height que debe retornar la altura del mismo (cantidad de niveles)
// Ejemplo      (10)           ----> nivel 0
//             /     \
//          (7)     (12)       ----> nivel 1
//         /  \      /  \
//      (2)   (9)  (11)  (15)   ----> nivel 2


BinarySearchTree.prototype.height= function(nivel =0){
 
    if( !this.left && !this.right){
        return nivel;     // si el nodo nivel 0 no tiene L ni R retornamos solo ese nivel.
    }else{

        var nivelL; // conteo de niveles, este cuenta los niveles del lado Izq
        var nivelR; //  cuenta los niveles del lado der

        if(!this.left){  // si left es null
            nivelL = nivel; // el lado Izq va a tener 0 niveles 
        }else{             // si no es null

            nivelL = this.left.height(nivel + 1); // por recursion le sumo uno y guardo ese valor en nivel izquierdo
        }

        if(!this.right){   // lo mismo pero del lado derecho
            nivelR = nivel;
        }else{

            nivelR = this.right.height(nivel +1);
        }

        nivel = Math.max(nivelL, nivelR); // math.max selecciona el numero mas alto de las dos variables  
    }
    return nivel;
}

module.exports={
    BinarySearchTree
}