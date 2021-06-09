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

  DepthFirstSearch(vertex) {
    let list = this.adjacencyList;
    let result = [];
    let stack = [vertex];
    let visited = {};

    while (stack.length) {
      let vtx = stack.pop();
      if (!visited[vtx]) {
        result.push(vtx);
        visited[vtx] = true;
        for (let child of list[vtx]) {
          if (!visited[child]) stack.push(child);
        }
      }
    }

    return result;
  }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.DepthFirstSearch('A')); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
