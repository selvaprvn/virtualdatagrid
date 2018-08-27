import React, { Component } from "react";
import { DataGrid as VDataGrid } from "virtualdatagrid";

class DataGrid extends Component {
  columns = [
    {
      field: "test",
      header: "Test"
    },
    {
      field: "test1",
      header: "Test1"
    }
  ];
  constructor(props) {
    super(props);

    this.gridDiv = null;

    this.setGridRef = element => {
      this.gridDiv = element;
    };
    this.grid = new VDataGrid();
    this.grid.columns = this.columns;
  }
  componentDidMount() {
    // autofocus the input on mount
    this.grid.init(this.gridDiv);
  }

  render() {
    return (
      <div className="data-grid" ref={this.setGridRef}>
        Not Rendered Data {new Date().toISOString()}
      </div>
    );
  }
}

export default DataGrid;
