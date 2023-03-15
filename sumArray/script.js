/**
 * Devuelve la suma de todos los número de un array recibido por argumentos, excluye de la suma el valor más bajo y el más alto
 * Si recibimos null, undefined, array vacío o un array con un número o dos número, deberá devolverse 0
 *
 * OBLIGATORIO: USA TESTS!
 *
 * Hazlo de dos maneras distintas:
 * 1- Como quieras
 * 2- Sin el método de Array "sort" ni con "reduce"
 *
 * Datos para pruebas: input | ouput
 * sumArray(null) | 0
 * sumArray([ ]) | 0
 * sumArray([ 3 ]) | 0
 * sumArray([ 3, 5 ]) | 0
 * sumArray([ 6, 2, 1, 8, 10 ]) | 16
 * sumArray([ 0, 1, 6, 10, 10 ]) | 17
 * sumArray([ -6, -20, -1, -10, -12 ]) | -28
 * sumArray([ -6, 20, -1, 10, -12 ]) | 3
 */


//------- Prueba 1 ------//
function sumArray(array) {
   
  return array
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

arr.shift()
arr.pop()

console.log(arr)


const result = arr.reduce((a, b) => a + b, 0);
console.log(result); 


  //------- Prueba 2 ------//


 function sumArray(array){
    let counter = 0
    let min 
    let max 
  
  
    for(let i=0;i<array.length; i++){
        if (array[i]>max || max===undefined){
            max = array[i]
        }
        if (array[i]<min || min===undefined){
            min = array[i]
        }
    }
  minIndex = array.indexOf(min)
  array.splice(minIndex,1)
  maxIndex = array.indexOf(max)
  array.splice(maxIndex,1)
  
  for(let i=0;i<array.length; i++){

    counter += array[i]
    
  }
  return counter
}

console.log(sumArray([1,27,3,42]))


  



