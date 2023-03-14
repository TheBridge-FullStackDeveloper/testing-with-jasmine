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
 * Datos para pruebas: input           | ouput
 * sumArray(null)                      | 0
 * sumArray([ ])                       | 0
 * sumArray([ 3 ])                     | 0
 * sumArray([ 3, 5 ])                  | 0
 * sumArray([ 6, 2, 1, 8, 10 ])        | 16
 * sumArray([ 0, 1, 6, 10, 10 ])       | 17
 * sumArray([ -6, -20, -1, -10, -12 ]) | -28
 * sumArray([ -6, 20, -1, 10, -12 ])   | 3
 */

// const customArray = [6, 2, 1, 8, 10];

let numMax  = 0;
let numMin  = 0;
let compare = 0;
let addit   = 0;

const sumArray = (array) => {

    if( array === null || array === undefined || array.length === 1 || array.length === 2 ) {
        return 0;
    }

    for( let i=0; i < array.length; i++ ){
        // console.log(i);
        compare += array[i];
    }

    addit = ( compare - numMax ) - numMin;

    return compare;

}

sumArray( customArray );