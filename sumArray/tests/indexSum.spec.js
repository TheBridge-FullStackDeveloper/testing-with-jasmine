describe( "SumArray function", ()=>{

    it("There should be a const name customArray", () =>{
        expect( customArray ).not.toBe(undefined);
    })
    
    it("It should have a const named sumArray that includes a function", () =>{
        expect( sumArray ).not.toBe( undefined );
        expect( typeof sumArray ).toEqual('function');
    })

    it("Need a variable named numMax", () =>{
        expect( numMax ).toBe(0);
    })

    it("Need a variable named numMin", () =>{
        expect( numMin ).toBe(0);
    })

    it("Need a variable named res for results", () =>{
        expect( compare ).toBe(0);
    })

    it("It should have a for loop into the sumArray", () =>{
        expect(sumArray.toString().includes('for')).toBe(true) 
    })

    
})