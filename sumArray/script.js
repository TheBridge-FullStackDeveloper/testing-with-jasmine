/**
 * Devuelve la addition de todos los número de un array recibido por argumentos, excluye de la addition el valor más bajo y el más alto
 * Si recibimos null, undefined, array vacío o un array con un número o dos número, deberá devolverse 0
 *
 * OBLIGATORIO: USA TESTS!
 *
 * Hazlo de dos maneras distintas:
 * 1- Como quieras
 * 2- Sin el método de Array "sort" ni con "reduce"
 *
 * Datos para pruebas: input | ouput
 * additionrray(null) | 0
 * additionrray([ ]) | 0
 * additionrray([ 3 ]) | 0
 * additionrray([ 3, 5 ]) | 0
 * additionrray([ 6, 2, 1, 8, 10 ]) | 16
 * additionrray([ 0, 1, 6, 10, 10 ]) | 17
 * additionrray([ -6, -20, -1, -10, -12 ]) | -28
 * additionrray([ -6, 20, -1, 10, -12 ]) | 3
 *
 */



function sumArray(array){
    if(array === undefined || array === null || array.length < 3){
        return 0;
    } else {
        deleteMinAndMax(array);
        let addition = 0;
        for(let i=0;i<array.length;i++){
            addition += array[i];
        }

        return addition;
    }
}


function deleteMinAndMax(array){
    let highestValue;
    let lowestValue;

    for(let i=0;i<array.length;i++){
        if(array[i] > highestValue || highestValue === undefined){
            highestValue = array[i];
        }

        if(array[i] < lowestValue || lowestValue === undefined){
            lowestValue = array[i];
        }
    }

    const indexHighest = array.indexOf(highestValue);
    array.splice(indexHighest, 1);
    const indexLowest = array.indexOf(lowestValue);
    array.splice(indexLowest, 1);
}


/* function sumArray(array) {

    if(array === undefined || array === null || array.length < 3){
        return 0;
    } else {
        let highestValue;
        let lowestValue;
    
        for(let i=0;i<array.length;i++){
            if(array[i] > highestValue || highestValue === undefined){
                highestValue = array[i];
            }
    
            if(array[i] < lowestValue || lowestValue === undefined){
                lowestValue = array[i];
            }
        }
    
        const indexHighest = array.indexOf(highestValue);
        array.splice(indexHighest, 1);
        const indexLowest = array.indexOf(lowestValue);
        array.splice(indexLowest, 1);
    
        let addition = 0;
        for(let i=0;i<array.length;i++){
            addition += array[i];
        }
    
        return addition;
    }
} */


