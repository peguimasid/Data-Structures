class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = []
  }
}

const graph = new Graph;

graph.addVertex('A')
graph.addVertex('B')

console.log(graph)