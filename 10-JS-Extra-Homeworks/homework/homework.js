// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array = [];
  for(var clave in objeto) {
    var subArray = [clave, objeto[clave]]
    array.push(subArray);
  }
  return array;
}


function numberOfCharacters(string) { 
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  //string = 'abcdad'
  var caracteres = string.split(''); //caracteres = ['a', 'b', 'c', 'd', 'a', 'd']
  var obj = {};
  for (var i = 0; i < caracteres.length; i++) {
    if (obj[caracteres[i]]) {     
      obj[caracteres[i]]++;        
    } else {
      obj[caracteres[i]] = 1;
    }
  }
  return obj; 
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  //s='hoLA'
  var resultado = []; 
  var minusculas = [];
  var mayusculas = [];
  var letras = s.split(''); //letras = ['h', 'o', 'L', 'A']
  for(var i = 0; i < letras.length; i++) {
    if(letras[i] === letras[i].toUpperCase()) {
      mayusculas.push(letras[i]);
    } else {
      minusculas.push(letras[i]);
    }
  }
  resultado = mayusculas.concat(minusculas).join('');
  return resultado;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  //str = 'The Henry'
  var array = str.split(' '); //array = ['The', 'Henry']
  var resultado = [];
  for(var i = 0; i < array.length; i++) {
    resultado.push(array[i].split('').reverse().join('')) //resultado = ['e', 'h', 'T']
  }
  return resultado.join(' ')
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  //numero = 292
  var izqADer = numero.toString().split('')         //izqADer = ['2', '9', '2']
  var DerAIzq = [];
  for(var i = 0; i < izqADer.length; i++) {
    DerAIzq.unshift(izqADer[i]);                     //DerAIzq = ['2','9','2']
  }
  return izqADer.join('') === DerAIzq.join('') ? 'Es capicua' : 'No es capicua'
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  //cadena = 'plural'
  var resultado = [];
  var array = cadena.split(''); //array = ['p', 'l', 'u', 'r', 'a', 'l']
  for(var i = 0; i < array.length; i++) {
    if(array[i] !== 'a' && array[i] !== 'b' && array[i] !== 'c') {
      resultado.push(array[i])                                       
    }
  }
  return resultado.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for(var j = 0; j < arr.length; j++) {
    for(var i = 0; i < arr.length -1; i++) {
      if(arr[i].length > arr[i + 1].length) {
        var aux = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = aux;
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var interseccion = [];
  for(var i = 0; i < arreglo1.length; i++) {
    if(arreglo2.indexOf(arreglo1[i]) !== -1) {
      interseccion.push(arreglo1[i])
    }
  }
  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

