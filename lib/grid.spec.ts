import { DataGrid } from ".";
import { expect } from "chai";
import "mocha";

describe("DataGrid", () => {
  it("should create dtagrid", () => {
    const result = new DataGrid();
    expect(result).to.not.be.null;
  });
});
