describe( "SumArray function", ()=>{

    // it("There should be a const name customArray", () =>{
    //     expect( customArray ).not.toBe(undefined);
    // })
    
    it("It should have a const named sumArray that includes a function", () =>{
        expect( sumArray ).not.toBe( undefined );
        expect( typeof sumArray ).toEqual('function');
    })

    it("Should initialice a variable named numMax", () =>{
        expect( numMax ).toBe(0);
    })

    it("Should initialice a variable named numMin", () =>{
        expect( numMin ).toBe(0);
    })

    it("Need a variable named compare for results", () =>{
        expect( compare ).toBe(0);
    })

    it("Need a variable named addit to make the addition for results", () =>{
        expect( addit ).toBe(0);
    })

    it("It should have a for loop into the sumArray", () =>{
        expect(sumArray.toString().includes('for')).toBe(true) 
    })

    it("If array is null, i have to return 0", () =>{
        const array = null;
        expect( sumArray(array) ).toEqual(0)
    })
    
    it("If array is undefined, i have to return 0", () =>{
        const array = undefined;
        expect( sumArray(array) ).toEqual(0)
    })

    it("If i get only one element i must return 0", () => {
        const array = [0]
        expect( sumArray(array) ).toEqual(0);
    })

    it("If i get only 2 element i must return 0", () => {
        const array = [ 0,1 ]
        expect( sumArray(array) ).toEqual(0);
    })

    it("Now i check each array given in the kata to evaluate and apply my funtion", () => {

        expect( sumArray( [ 6, 2, 1, 8, 10  ])).toEqual(16)
        expect( sumArray( [ 0, 1, 6, 10, 10 ])).toEqual(17)
        expect( sumArray( [ -6, -20, -1, -10, -12 ])).toEqual(-28)
        expect( sumArray( [ -6, 20, -1, 10, -12 ]  )).toEqual(3)

    })

    
})