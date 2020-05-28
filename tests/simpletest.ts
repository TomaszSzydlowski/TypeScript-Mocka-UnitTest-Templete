import { expect } from "chai";
import { multiplication } from "../src/simple";

describe("Sample test", function () {
  it("Basic sample", function () {
    expect(multiplication(2, 3)).to.equal(6);
  });
});
