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

class CustomArray extends Array {
  add(args) {
    return this.push(args);
  }

  sort(arr) {
    this.sort((a, b) => a - b);
    return this;
  }
}

function sorted(arr = []) {
  return arr.sort((a, b) => a - b);
}

function red(arr = []) {
  return arr.reduce((acc, curr) => acc + curr);
}

// función con reduce y sort

function sumArray(array) {
  if (array === null) return 0;
  if (array === undefined) return 0;
  if (array.length < 3) return 0;
  let newArr = sorted(array);
  newArr.pop();
  newArr.shift();
  console.log(newArr);
  //let arr = sorted.pop().shift();
  //console.log(arr);
  return red(newArr);
}

// función sin reduce ni sort

function sumArray2(array) {
  if (array === null) return 0;
  if (array === undefined) return 0;
  if (array.length < 3) return 0;

  let min = array[0];
  let max = array[0];

  let counterMin = 0;
  let counterMax = 0;

  let result = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== min && array[i] !== max) {
      result += array[i];
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === min) counterMin++;
    if (array[i] === max) counterMax++;
  }

  if (counterMin > 1) result += min;
  if (counterMax > 1) result += max;

  return result;
}
