describe("sumArray function", () => {
  it("should exist a variable named CustomArray and need to be a function", () => {
    expect(CustomArray).not.toBe(undefined);
    expect(typeof CustomArray).toEqual("function");
  });
  it("should be an instance of Array class", () => {
    expect(new CustomArray() instanceof Array).toBe(true);
  });

  it('should have a "sort" property and need to be a method', () => {
    const array = new CustomArray();
    expect(array.sort).not.toBe(undefined);
    expect(typeof array.sort).toEqual("function");
  });

  it('should exist a function named "sumArray"', () => {
    expect(sumArray).not.toBe(undefined);
    expect(typeof sumArray).toEqual("function");
  });

  it("should return a number", () => {
    expect(typeof sumArray()).toEqual("number");
  });

  it("should return 0 if input is null or undefined", () => {
    const array = null;

    const array2 = undefined;

    expect(sumArray(array)).toEqual(0);
    expect(sumArray(array2)).toEqual(0);
  });

  it("should return 0 if array length < 3", () => {
    const arr = [];

    const arr2 = new CustomArray();

    arr2.add(1);

    const arr3 = new CustomArray();

    arr3.add(1, 2, 3);

    expect(sumArray(arr)).toEqual(0);
    expect(sumArray(arr2)).toEqual(0);
    expect(sumArray(arr3)).toEqual(0);
  });
});

describe("sumArray2 function", () => {
  it("should exist a variable named CustomArray and need to be a function", () => {
    expect(CustomArray).not.toBe(undefined);
    expect(typeof CustomArray).toEqual("function");
  });

  it("CustomArray should be an instance of Array class", () => {
    expect(new CustomArray() instanceof Array).toBe(true);
  });

  it('CustomArray should have a "sort" property and need to be a method', () => {
    const array = new CustomArray();
    expect(array.sort).not.toBe(undefined);
    expect(typeof array.sort).toEqual("function");
  });

  it('customArray should have an "add" property and it should be a method', () => {
    const array = new CustomArray();
    expect(array.add).not.toBe(undefined);
    expect(typeof array.add).toEqual("function");
  });

  it('should exist a function named "sumArray2"', () => {
    expect(sumArray2).not.toBe(undefined);
    expect(typeof sumArray2).toEqual("function");
  });

  it('should return 0 if input is "null" or "undefined"', () => {
    const arr = null;

    const arr2 = undefined;

    expect(sumArray2(arr)).toEqual(0);
    expect(sumArray2(arr2)).toEqual(0);
  });

  it("should return 0 if input is an empty array or array.length < 3", () => {
    const arr = [];

    const arr2 = new CustomArray();

    arr2.add(1);

    const arr3 = new CustomArray();

    arr3.add(1, 2, 3);

    expect(sumArray2(arr)).toEqual(0);
    expect(sumArray2(arr2)).toEqual(0);
    expect(sumArray2(arr3)).toEqual(0);
  });

  it("should return a number", () => {
    expect(typeof sumArray2()).toEqual("number");
  });
});
