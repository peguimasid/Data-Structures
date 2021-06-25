class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

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

  dijkstras(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};

    let smallest;

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().val;

      if (smallest === finish) {
        let path = [];
        let curr = finish;

        while (curr) {
          path.unshift(curr);
          curr = previous[curr];
        }

        return path;
      }
      for (let neighbor of this.adjacencyList[smallest]) {
        let candidate = distances[smallest] + neighbor.weight;

        if (candidate < distances[neighbor.node]) {
          distances[neighbor.node] = candidate;
          previous[neighbor.node] = smallest;
          nodes.enqueue(neighbor.node, candidate);
        }
      }
    }
  }
}

const graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('F', 'E', 1);

console.log(graph.dijkstras('A', 'E'));
