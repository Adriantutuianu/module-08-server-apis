const expect = chai.expect;

describe("camelCase", function () {
  it("should return 'helloWorld' when given 'Hello World'", function () {
    const str = "Hello World";

    const result = camelCase(str);

    expect(result).to.eql("helloWorld");
  });

  it("should return 'theRainInSpainFallsMainlyOnThePlain' when given 'The rain in spain falls mainly on the plain'", function () {
    const str = "The rain in spain falls mainly on the plain";

    const result = camelCase(str);

    expect(result).to.eql("theRainInSpainFallsMainlyOnThePlain");
  });
});
