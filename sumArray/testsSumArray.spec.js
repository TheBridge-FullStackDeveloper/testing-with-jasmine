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

        it("Result is a array",()=>{
            const test = [ 6, 2, 1, 8, 10 ]; // test[0] test[1]
            expect(test[2]).toEqual(1)
            expect(test[4]).toEqual(10)
        })

        it("Should exist a variable named sumArrayMinMax ",()=>{
            expect(sumArrayMinMax).not.toBe('undefine');
        })
        it("Result loop sumArrayMinMax",()=>{
        
            expect (sumArrayMinMax).toBe(6);

        })
    describe ("Function sum Array completed",()=>{
            it("Should exist a variable named SumArray ",()=>{
                expect(sumArray).not.toBe('undefine')
            })
            it("Result loop sumArray",()=>{
                expect(sumArray).toEqual(15);
            })
        })
    describe("Should exist a function named result",()=>{
        it("Function named result",()=>{
            expect(typeof result).toEqual('function')
            expect(typeof result()).toEqual('number')
        })
        it("Compared result whith sumArray and SumArrayMinMax",()=>{
            expect(sumArray > result()).toBe(true)
            expect(result() > sumArrayMinMax).toBe(true)
        })

    })
        
    })



    // describe ("Sum Array",() => {});
        
    //     it("Should exist variable named arraySum",()=>{
    //         expect("arraySum").not.toBe(undefined)
    //     })

    //     it("arraySum should be a number",()=>{
    //         expect(typeof arraySum).toEqual("number")
    //     })

    // })  

    
})