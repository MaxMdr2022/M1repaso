// Usando la recursion calcular el producto de todos los numeros de dado arreglo
// ej:
// producto([1, 2, 5]) devuelve 10

const producto = function (array) {
  //escribe aqui tu codigo

  if(array.length === 0){
    return 1;
  }

  return array.shift() * producto(array);
};

// Dado un objeto con objetos anidados utilizar la recursión para crear una función
// que devuelva true o false dependiendo si el objeto tiene o no el valor pasado por parametro
// ejemplo:
// let obj = {
  //    prop2:{value:5}     
  //     school: {
    //         hogwarts: {
      //             headmaster:{
        //               name: {
          //                 first: "Albus",
          //                 last: "Dumbledore"
          //               }
          //             }
          //         }
          //     } 



const isThere = function (obj, value){
  //escribe aqui tu codigo 

 var recursion = false; //

 for (let clave in obj){

  if(obj[clave] === value){
    return true;
  }else if(typeof obj[clave] === "object"){

    //recursion = isThere(obj[clave],value); // nose xq en vez de return lo igualaban, igual funciona asi.
    return isThere(obj[clave],value);
  }
 }
 return recursion;
};
module.exports = { producto, isThere };
