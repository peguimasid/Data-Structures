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
}

let binaryHeap = new MaxBinaryHeap()

binaryHeap.insert(100)
binaryHeap.insert(90)
binaryHeap.insert(80)
binaryHeap.insert(70)
binaryHeap.insert(110)

console.log(binaryHeap)