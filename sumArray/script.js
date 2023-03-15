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
let arr = [3,5,8,9,1,4]
function sumArray(arr) {
    
    let result=0
    let maxNum=0
    let minNum=Number.MAX_SAFE_INTEGER
    for (let i = 0; i < arr.length; i++) {
        if(!arr[i] || arr.length < 3) return 0

        if(arr[i]>maxNum){
            maxNum = arr[i]
          console.log(maxNum + ' mayor ')
        }
        if(arr[i]<minNum){
            minNum = arr[i]
          console.log(minNum + ' menor ')
        }
       
    }
    for (let j = 0; j < arr.length; j++){
       if(arr[j]!==maxNum && arr[j]!==minNum){
           result+=arr[j]
            console.log(result)
        }
    }
   return result 
}

console.log(sumArray(arr))
let arr2=[1,2,5,8]
function sumArray2(arr2){
let result=0;
let maxNum= Math.max(...arr2)

let minNum=Math.min(...arr2)
console.log(maxNum);
console.log(minNum);
//let initialValue = 0;
let bb = arr2.reduce(
  (accumulator, currentValue) =>  accumulator + currentValue, 0 
);
  result= bb - maxNum - minNum
  return result
}
console.log(sumArray2(arr2))