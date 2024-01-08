const expect = chai.expect;

describe("productOfLargestTwo", function () {
  it("should return the number 966 when given [4, 8, 15, 16, 23, 42]", function () {
    const arr = [4, 8, 15, 16, 23, 42];

    const result = productOfLargestTwo(arr);

    expect(result).to.eql(966);
  });

  it("should return the number 2 when given [-10, -5, -2, -15, -1, -33, -88, -100]", function () {
    const arr = [-10, -5, -2, -15, -1, -33, -88, -100];

    const result = productOfLargestTwo(arr);

    expect(result).to.eql(2);
  });
});
