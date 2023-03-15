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

    describe ("Function minMax",()=>{
        it ("Should exist a function named minMax",()=>{
            expect (typeof minMax).toEqual("function");
        })
        it("Result is a Array",()=>{
            expect(minMax().length).toEqual(2)
        })

        it("Result",()=>{
            const test = [ 6, 2, 1, 8, 10 ]; // test[0] test[1]
            expect(test[2]).toEqual(1)
            expect(test[4]).toEqual(10)
        })
    })

    
})

