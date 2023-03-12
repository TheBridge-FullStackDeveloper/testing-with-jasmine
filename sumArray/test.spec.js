/*describe ('sumArray Kata')=> {

}*/
describe('sumArray', () => {
    it ('should be a function',() => {
        expect(typeof sumArray).toEqual('function');
    })
    it ('should return 0 when given an empty or null array', () => {
        expect(sumArray([])).toEqual(0);
        expect(sumArray(null)).toEqual(0);
    })
    it ('should return the sum of all numbers in an array', () => {
        expect(sumArray([ 6, 2, 1, 8, 10 ])).toEqual(16);
        /*let Array = [ -6, -20, -1, -10, -12];*/
        expect(sumArray([ -6, -20, -1, -10, -12 ])).toEqual(-28);
        /*let Array = [ -6, 20, -1, 10, -1];*/
        expect(sumArray([ -6, 20, -1, 10, -12 ])).toEqual(3);
    })
})



    