class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  insert(value) {
    this.values.push(value)
    this.bubbleUp()
    return this
  }

  bubbleUp() {
    let index = this.values.length - 1
    let element = this.values[index]

    while (true) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.values[parentIndex]

      if (parent >= element || parentIndex < 0) break

      this.values[parentIndex] = element
      this.values[index] = parent

      index = parentIndex
    }
  }

  extractMax() {
    let max = this.values[0]
    let end = this.values.pop()

    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }

    return max
  }

  sinkDown() {
    let parentIndex = 0
    let element = this.values[0]

    while (true) {
      let leftChild = this.values[2 * parentIndex + 1] || null
      let rightChild = this.values[2 * parentIndex + 2] || null

      const largestChild = Math.max(leftChild, rightChild)
      const largestChildIndex = largestChild === leftChild ? 2 * parentIndex + 1 : 2 * parentIndex + 2

      if (largestChild <= element) break

      this.values[parentIndex] = largestChild
      this.values[largestChildIndex] = element

      parentIndex = largestChildIndex
    }
  }
}

let binaryHeap = new MaxBinaryHeap()

binaryHeap.insert(41)
binaryHeap.insert(39)
binaryHeap.insert(33)
binaryHeap.insert(18)
binaryHeap.insert(27)
binaryHeap.insert(12)
binaryHeap.insert(55)

console.log(binaryHeap.extractMax())
console.log(binaryHeap.extractMax())
console.log(binaryHeap.extractMax())
console.log(binaryHeap.extractMax())
console.log(binaryHeap.extractMax())
console.log(binaryHeap.extractMax())
console.log(binaryHeap.extractMax())