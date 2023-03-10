describe("sumArray", function() {
  it("debe devolver 0 cuando se pasa nulo", function() {
    expect(sumArray(null)).toEqual(0);
  });

  it("debe devolver 0 cuando se pasa indefinido", function() {
    expect(sumArray(undefined)).toEqual(0);
  });

  it("debe devolver 0 cuando se le pasa una matriz vacía", function() {
    expect(sumArray([])).toEqual(0);
  });

  it("debe devolver 0 cuando se le pasa un array con un elemento", function() {
    expect(sumArray([1])).toEqual(0);
  });

  it("debe devolver 0 cuando se le pasa un array con dos elementos", function() {
    expect(sumArray([1, 2])).toEqual(0);
  });

  it("debe devolver el resultado correcto cuando se pasa un array con tres o más elementos", function() {
    expect(sumArray([ 6, 2, 1, 8, 10])).toEqual(16);
    expect(sumArray([0,1,6,10,10])).toEqual(17);
    expect(sumArray([-6, -20, -1, -10, -12])).toEqual(-28);
    expect(sumArray([ -6, 20, -1, 10, -12 ])).toEqual(3);
  });
});




