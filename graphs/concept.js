class Graph {
  constructor() {
    Object.assign(this, { list: new Map() });
  }

  addVertex(v1) {
    if (!this.list.has(v1)) {
      this.list.set(v1, new Array());
    }

    return this.list;
  }

  addEdge(v1, v2) {
    if (this.list.has(v1) && this.list.has(v2)) {
      this.list.get(v1).push(v2);
      this.list.get(v2).push(v1);
    }

    return this;
  }
}

// for weighted grap

class WeightedGraph extends Graph {
  constructor() {
    super();
  }

  /**
   *
   * @param {vertex1} v1
   * @param {vertex2} v2
   * @param {vertex3} weight
   */

  addEdge(v1, v2, weight) {
    this.list.has(v1) ? this.list.get(v1).push({ node: v2, weight }) : null;
    this.list.has(v2) ? this.list.get(v2).push({ node: v1, weight }) : null;

    return this;
  }
}

const wg = new WeightedGraph();

const veritces = ['A', 'B', 'C', 'D'];

for(let v of veritces) {
    wg.addVertex(v);
}

// now adding the edges
