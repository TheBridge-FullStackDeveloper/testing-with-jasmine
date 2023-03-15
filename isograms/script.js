const array = [1,2,3,4,5];

function minMax (){
    let min = Math.min(...array);
    let max = Math.max(...array)

    return [min, max]
};

console.log(minMax([ 6, 2, 1, 8, 10 ]));

