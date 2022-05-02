'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.head = null;
}

function Node(value){
    this.value = value; 
    this.next = null; 
}

LinkedList.prototype.add = function(value) {

  var node = new Node(value);
  var current = this.head;    

  if(!current) { //si la head no tiene nada, que le agregue el nodo y la retorne
          this.head= node; 
          return node;
      }

  while(current.next){ //mientras la head tenga algo, el var current va a ser la propiedad next del nodo
      current = current.next;
  }
  current.next = node; //si no hay nada en head, el next va a ser un nodo
  return node
}

LinkedList.prototype.remove = function(){
  let current = this.head
  if(current=== null) return null; //remove deberia retornar null si la lista esta vacia
  else if(current && !current.next){ //el head deberia ser null cuando se sacan todos los nodos
    let aux = this.head.value
    this.head = null; 
    return aux;
  }
  // head -->1 -->2 -->3 -->4 -->500-->null
  while(current.next.next){ //Mientras tenga un next.next, 
    current = current.next; //avanzo
  } 
  //llegue al 4
  // No entra en el while (next.next(500.next = null) NO tiene un valor. tengo que guardarme 
  //el valor del current.next(4.next =500 ) y asignarle null  )
  let deletedNode = current.next.value; //500
  current.next = null; // borro 500
  return deletedNode; //devuelvo 500
}

LinkedList.prototype.search = function(value){
  if(this.head === null) return null; //remove deberia retornar null si la lista esta vacia
  let current = this.head;
  while(current){//avanzo mientras exista 
    if (current.value === value) return current.value
    else if (typeof value === 'function') {
      if(value(current.value)){ // <--Aplica la funcion que recibio por parametro y si el resultado es el value, retorna true
        return current.value // ej: arg = function(value) {value*2}
      }
    }
  current = current.next;
  }
  return null;
}

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {

  this.buckets = Array(35);
  this.numBuckets = this.buckets.length;


}
HashTable.prototype.hash = function(key1) {
    let total = 0
    for (var i = 0; i < key1.length; i++) {
      total +=  key1.charCodeAt(i)
    }
    return total % this.numBuckets;
  }


HashTable.prototype.set = function(key1, val1){
  if(typeof key1 !== 'string') throw  TypeError('key1 must be a string')
  var saveKey = this.hash(key1)

  if(this.buckets[saveKey] === undefined){
    this.buckets[saveKey] = {}
  }   
   this.buckets[saveKey][key1] = val1;
}

HashTable.prototype.get = function(key1){
  let getVal = this.hash(key1)
  return this.buckets[getVal][key1];
}

HashTable.prototype.hasKey = function(key1){
  let getVal = this.hash(key1)
  return this.buckets[getVal].hasOwnProperty(key1)

}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
