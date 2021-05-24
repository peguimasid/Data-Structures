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

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
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

graph.removeVertex("B");

console.log(graph);
