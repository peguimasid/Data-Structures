class Node {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority)
    this.values.push(newNode)
    this.bubbleUp()
    return this
  }

  bubbleUp() {
    let index = this.values.length - 1
    let element = this.values[index]

    while (true) {
      let parentIndex = Math.floor((index - 1) / 2)

      if (parentIndex < 0) break

      let parent = this.values[parentIndex]

      if (parent.priority <= element.priority) break

      this.values[parentIndex] = element
      this.values[index] = parent

      index = parentIndex
    }
  }

  dequeue() {
    let min = this.values[0]
    let end = this.values.pop()

    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }

    return min
  }

  sinkDown() {
    let index = 0
    const lenght = this.values.length
    let element = this.values[0]

    while (true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let leftChild
      let rightChild
      let swap = null

      if (leftChildIndex < lenght) {
        leftChild = this.values[leftChildIndex]
        if (leftChild.priority < element.priority) swap = leftChildIndex
      }

      if (rightChildIndex < lenght) {
        rightChild = this.values[rightChildIndex]
        if ((!swap && rightChild.priority < element.priority) ||
          (swap && rightChild.priority < leftChild.priority)) swap = rightChildIndex
      }

      if (!swap) break

      this.values[index] = this.values[swap]
      this.values[swap] = element
      index = swap
    }
  }
}

let priorityQueue = new PriorityQueue()

priorityQueue.enqueue(20, 3)
priorityQueue.enqueue(30, 5)
priorityQueue.enqueue(40, 2)
priorityQueue.enqueue(10, 1)
priorityQueue.enqueue(50, 4)

console.log(priorityQueue.dequeue())

console.log(priorityQueue)
