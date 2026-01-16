import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

export function helloWorld() {
  return d3.max([4, 5, 6], (d) => d);
}
