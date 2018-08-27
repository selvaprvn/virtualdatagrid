import { getTest } from ".";
import { expect } from "chai";
import "mocha";

describe("Test function", () => {
  it("should return test world", () => {
    const result = getTest("world!");
    expect(result).to.equal("Test : world!");
  });
});
