describe('sumArray kata',() => {
    it('shoult exit a variable named sumArray',()=>{
      expect(sumArray).not.toBe(undefined) 
    })
    it('shoult be a function',()=>{
    expect(typeof sumArray).toEqual('function')
    })
    it('if the array is "null" it should return 0   ',()=>{
      const arr = null
      expect(sumArray(arr)).toEqual(0)
    })
    it('if the array is a "undefined" it should return 0',()=>{
      const arr = undefined
      expect(sumArray(arr)).toEqual(0)
    })
    it('if the "array.length" has element return 0',()=>{
      const arr =[1,2]
      expect(sumArray(arr)).toEqual(0)
    })
  

   it('has to return the array of "3 or more elements"',()=>{
      expect(sumArray([ 6, 2, 1, 8, 10 ])).toEqual(16)
      expect(sumArray([ 0, 1, 6, 10, 10 ])).toEqual(17)
      expect(sumArray([ -6, -20, -1, -10, -12 ])).toEqual(-28)
      expect(sumArray([ -6, 20, -1, 10, -12 ])).toEqual(3)
    })
    
})
