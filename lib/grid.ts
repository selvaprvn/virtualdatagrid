import { Column } from "./interfaces/column";

/**
 * @Method: Returns the test msg.
 * @Param {string}
 * @Return {string}
 */
export function getTest(str: any): string {
  return `Test : ${str}`;
}

export class DataGrid {
  columns: Column[] = [];

  private virtualElement: HTMLDivElement;
  constructor() {
    this.virtualElement = document.createElement("div");
  }

  virtualInit() {
    this.init(this.virtualElement);
  }

  init(element: HTMLElement) {
    if (!element) {
      throw new Error("element to render should be provoided");
    }
    console.log(element);
    
  }
}
