class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    const list = this.adjacencyList;
    if (!list[vertex]) list[vertex] = [];
  }

  addEdge(vertexOne, vertexTwo, weight) {
    const list = this.adjacencyList;

    list[vertexOne].push({ node: vertexTwo, weight });
    list[vertexTwo].push({ node: vertexOne, weight });
  }
}

const graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B', 10);
graph.addEdge('A', 'C', 7);
graph.addEdge('B', 'C', 2);

console.log(graph.adjacencyList);
