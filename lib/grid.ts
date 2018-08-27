import { Column } from "./interfaces/column";

// /**
//  * @Method: Returns the test msg.
//  * @Param {string}
//  * @Return {string}
//  */
// export function getTest(str: any): string {
//   return `Test : ${str}`;
// }

class Utils {
  static createElement(tagName: string): HTMLElement {
    const elemnet: HTMLElement = document.createElement(tagName);
    return elemnet;
  }
}

export class BaseDataGrid {
  columns: Column[] = [];

  private virtualElement: HTMLElement;
  constructor() {
    this.virtualElement = Utils.createElement("div");
  }

  virtualInit() {
    this.init(this.virtualElement);
  }

  init(element: HTMLElement) {
    if (!element) {
      throw new Error("element to render should be provoided");
    }
    console.log(element);
    element.innerHTML = "";
    element.appendChild(this.createColumn());
  }

  createColumn() {
    const columnDiv = Utils.createElement("div");
    this.columns.forEach(col => {
      const column = Utils.createElement("div");
      column.innerHTML = col.header;
      columnDiv.appendChild(column);
      console.log("column", col);
    });
    return columnDiv;
  }
}
