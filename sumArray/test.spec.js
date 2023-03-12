describe("sumArray test", () => {
    it("should exist and should be a function", () => {
        expect(sumArray).not.toBe(undefined);
        expect(typeof sumArray).toBe("function");
    })

    it("should return a number", () => {
        expect(typeof sumArray()).toEqual("number");
    })

    it("should return 0 if array is null or undefined", () => {
        const array = null;
        expect(sumArray(array)).toEqual(0);

        const arr = undefined;
        expect(sumArray(arr)).toEqual(0);
    })

    it("should return 0 if the lenght of the array is less than 3", () => {
        const array = [1, 2];
        expect(sumArray(array)).toEqual(0);
    })

    it("should return the result of adding all the values, except the lowest and highest", () => {
        let array = [1,2,3,4,5];
        expect(sumArray(array)).toEqual(9);
    })
})

describe("deleteMinAndMax test", () => {
    it("should modify the array, deleting the lowest and highest values", () => {
        let array = [1,2,3,4,5];
        deleteMinAndMax(array);
        let arr = [2,3,4];
        expect(array).toEqual(arr);
    })
})