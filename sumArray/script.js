
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

function sumArray(array) {
  // Compruebe si el argumento es nulo, indefinido, una matriz vacía o un array con menos de 3 elementos
  if (!Array.isArray(array) || array.length < 3) {
    return 0;
  }

  // Encuentre los valores mínimo y máximo en el array
  let min = array[0];
  let max = array[0];
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];

    if (array[i] < min) {
      min = array[i];
    }

    if (array[i] > max) {
      max = array[i];
    }
  }

  // Resta los valores mínimo y máximo de la suma y devuelve el resultado
  return sum - min - max;
}







  
  
  
  