describe( "SumArray function", ()=>{

    it("There should be a const name customArray", () =>{
        expect( customArray ).not.toBe(undefined);
    });
    
    it("It should have a const named sumArray that includes a function", () =>{
        expect( sumArray ).not.toBe( undefined );
        expect( typeof sumArray ).toEqual('function');
    });

    
})