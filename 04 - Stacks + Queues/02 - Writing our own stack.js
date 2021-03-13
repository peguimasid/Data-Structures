class Node {
  constructor(val) {
    this.next = null
    this.val = val
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(val) {
    let newNode = new Node(val)
    if (!this.size) {
      this.first = newNode
      this.last = newNode
    } else {
      newNode.next = this.first
      this.first = newNode
    }
    return ++this.size
  }

  pop() {
    if (!this.size) return null
    let removedNode = this.first
    if (this.size === 1) {
      this.first = null
      this.last = null
    } else {
      this.first = removedNode.next
    }
    this.size--
    return removedNode.val
  }
}

let stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack.pop())
