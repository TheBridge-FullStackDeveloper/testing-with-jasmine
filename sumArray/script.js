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
const array = [1, 2, 3, 4, 5];

function minMax() {
    let min = Math.min(...array);
    let max = Math.max(...array)

    return [min, max]
};
    let arrayMinMax = minMax(array);
    console.log(arrayMinMax);

            let sumArrayMinMax = 0;
            for (let i = 0; i < arrayMinMax.length; i++) {
            sumArrayMinMax += arrayMinMax[i]
            };

let sumArray = 0;
for(let i= 0; i< array.length;i++){
    sumArray += array[i]
}

function result (array,array){
    return sumArray - sumArrayMinMax;
}

result();





