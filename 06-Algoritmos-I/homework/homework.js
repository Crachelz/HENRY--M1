'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos


  //factorear = factorizar : descomponer un número en números primos.
  // Tu código:
  var arr = [1]
  let divisor= 2 // -> primer numero factoriable

  while(num !== 1){
    if (num % divisor === 0) { 
      arr.push(divisor);
      num = num/divisor 
    } else {
      divisor++
    }
  }
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

    //[7, 5, 3, 9, 1]

  let swap = true;
  while (swap) {
    swap = false
    for (let i = 0; i <array.length-1; i++){
      if(array[i] > array[i + 1]){
        let aux = array[i]
        array[i] = array[i + 1]
        array[i +1] = aux
        swap = true
      }
    }
  }
  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 1; i < array.length; i++){
    var x = i - 1;
    var aux = array[i]; // elemento a insertar
    while(x >= 0 && array[x] > aux){
      array[x + 1] = array[x];
      x = x - 1;
    }
    array[x + 1] = aux;
  }
  return array
 
 

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

/*   for(let i = 0; i < array.length; i++){
    let minimo = i;
    for (let j =  i + 1; j < array.length; j ++) {
      if(array[j] < array[minimo]) {
        minimo = j;

      }
    }
    if(minimo !== i) {
      let aux = array[i];
      array[i] = array[minimo];
      array[minimo] =aux;
    }

  }
  return array */
  for (let i =0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++){
      if(array[min] > array[j]){
        min = j;
      }
    }
    if (min !== i){
      let aux= array[i];
      array[i] = array[min];
      array[min] = aux;
    } 
  }
  return array
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
