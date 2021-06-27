class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];

    while (true) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (parentIndex < 0) break;

      let parent = this.values[parentIndex];

      if (parent.priority <= element.priority) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;

      index = parentIndex;
    }
  }

  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    let index = 0;
    const lenght = this.values.length;
    let element = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild;
      let rightChild;
      let swap = null;

      if (leftChildIndex < lenght) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) swap = leftChildIndex;
      }

      if (rightChildIndex < lenght) {
        rightChild = this.values[rightChildIndex];
        if (
          (!swap && rightChild.priority < element.priority) ||
          (swap && rightChild.priority < leftChild.priority)
        )
          swap = rightChildIndex;
      }

      if (!swap) break;

      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
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
