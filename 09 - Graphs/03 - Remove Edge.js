class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertexOne, vertexTwo) {
    this.adjacencyList[vertexOne].push(vertexTwo);
    this.adjacencyList[vertexTwo].push(vertexOne);
  }

  removeEdge(vertexOne, vertexTwo) {
    this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(
      (edge) => edge !== vertexTwo
    );

    this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(
      (edge) => edge !== vertexOne
    );
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "D");
graph.addEdge("B", "C");
graph.addEdge("D", "C");

graph.removeEdge("B", "C");

console.log(graph);
