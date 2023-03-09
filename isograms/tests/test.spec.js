describe("Is arraySum Kats",()=>{
    it ("Should exist a variable named array ",()=>{
        expect("array").not.toBe(undefined)
    })

    it ("Should be a array",()=>{
        expect(array instanceof Array).toEqual(true);
    })

    it("items should be numbers",()=>{
        expect(typeof array['length']).toEqual("number");
    })

})