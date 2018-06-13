const toAlternatingCase = require("../algo");
const expect = require("chai").expect;

describe("Algo Test:", () => {
  it("should be a function", () => {
    expect(toAlternatingCase).to.be.a("function");
  });

  it("should solve 'hello world' => 'HELLO WORLD'", () => {
    expect(toAlternatingCase("hello world")).to.be.equal("HELLO WORLD");
  });

  it("should solve 'HE_LLO WO_RLD' => 'hello world'", () => {
    expect(toAlternatingCase("HE_LLO WO_RLD")).to.be.equal("hello world");
  });

  it("should solve 'hello WORLD' => 'HELLO world'", () => {
    expect(toAlternatingCase("hello WORLD")).to.be.equal("HELLO world");
  });

  it("should solve 'HeLLo WoRLD' => 'hEllO wOrld'", () => {
    expect(toAlternatingCase("HeLLo WoRLD")).to.be.equal("hEllO wOrld");
  });

  it("should solve '12345' => null", () => {
    expect(toAlternatingCase("12345")).to.be.null;
  });
});
