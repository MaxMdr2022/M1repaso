const { Stack, Queue } = require("../estructuras")

// Utilizando un STACK, y dado un string, invertir el orden de las palabras.
// OJO: Para este ejercicio NO se pueden usar metodos de Array.
// Deben utilizar solo los metodos provistos por la STACK
 
// Parametro:
//  (String): string con un texto cargado de palabras
 
// Salida: 
// > string con el mismo texto, el mismo orden, pero con las palabras invertidas. 

// Ejemplo:
//   Colombia Argentina: aibmoloC anitnegrA 
//   Mar Azulado oro : raM odaluzA oro


function efectoEspejo(str){  
//tu codigo aqui
var elemento= "";

for(var i=0; i<str.length; i++){

    if(str[i] === " " || i == str.length-1){

        for(var j=i; j>= 0; j--){

            if(str[i] === " "){
                i = i -1;
                j= i 
            }
            if( elemento[j] !== " "){

                elemento = elemento + str[j]
            }
            if(str[j] === " " && i !== str.length-1 || j === 0){
                elemento = elemento + " ";
            }
            if( str[j] === " " || j=== 0 ){
                j = 0
                i = i +1;
            }

        }
    }
}
return elemento;
};




module.exports = {
    efectoEspejo,
   
}