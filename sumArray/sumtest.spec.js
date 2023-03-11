describe('freeCode',() => { 
    it('should exits a function name sumArray', () => {
        expect(sumArray).not.toBe(undefined)
        expect(typeof sumArray).toEqual('function')
    })
    
    it('sumArray should inludes a for loop', () => {
        expect(sumArray.toString().includes('for')).toBe(true)
    })
    it('sumArray should inludes a return 0', () => {
        expect(sumArray.toString().includes('return 0')).toBe(true)
    })
    it('compare maxNum', () => {
        expect(sumArray.toString().includes('maxNum')).toBe(true)
    })
    it('compare minNum', () => {
        expect(sumArray.toString().includes('minNum')).toBe(true)
    })
    it('sumArray should inludes a second for loop', () => {
        expect(sumArray.toString().includes('for')).toBe(true)
    })
    it('sumArray should return a number ', () => {
        expect(typeof sumArray([])).toBe('number')
    })

})
 describe('create a function sumArray2', ()=>{
    it('should exits a function name sumArray2', () => {
        expect(sumArray2).not.toBe(undefined)
        expect(typeof sumArray2).toEqual('function')
    })
    it('should includes ...',()=>{
        expect(sumArray2.toString().includes('...')).toBe(true)
    })
    it('should includes reduce method',()=>{
        expect(sumArray2.toString().includes('reduce')).toBe(true)
    })
    it('should return a number',()=>{
        expect(typeof sumArray2(Number)).tobe('number')
    })
 })