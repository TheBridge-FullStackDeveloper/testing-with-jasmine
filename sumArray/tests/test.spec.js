describe('sumArray tests', function() {
     
    it('should exist sumArray variable', () => {
        expect(sumArray).not.toBe(undefined)
    })
    
    it('should exist a function named sumArray', () => {
        const sumArrayType = typeof sumArray

        expect(sumArrayType).toEqual('function')
    })
   
      
    it('should return the sum of all elements except the lowest and highest values', () => {
        
       const arr = [3, 6, 2, 8, 1]
        expect(sumArray(arr)).toBe(11)
        
      })
    
})