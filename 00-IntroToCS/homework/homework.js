"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  // algo
  var result = 0
  for (var i = 0; i < num.length; i++) {
   result = result + num[i] * 2 ** (num.length -1 -i)
  }
  console.log(result)
  return result
  
}

function DecimalABinario(num) {
  // tu codigo aca

  var binary = ''
  while (num > 0) {
    
    binary = (num % 2) + binary
    num = Math.floor(num / 2) 
    
  }
 
  return binary

}

// No se pueden usar: 
// parseInt
// toString

console.log()


module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
