class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = []
  }

  addEdge(vertexOne, vertexTwo) {
    this.adjacencyList[vertexOne].push(vertexTwo)
    this.adjacencyList[vertexTwo].push(vertexOne)
  }
}

const graph = new Graph;

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')

graph.addEdge('A', 'D')

console.log(graph)