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

const pq = new PriorityQueue();

pq.enqueue('A', 4);
pq.enqueue('B', 5);
pq.enqueue('C', 2);
pq.enqueue('D', 3);

console.log(pq);
