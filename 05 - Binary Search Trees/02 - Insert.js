class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    let newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
      return this
    } else {
      let currentNode = this.root

      while (currentNode) {
        if (value === currentNode.value) return undefined
        if (value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode
            return this
          } else {
            currentNode = currentNode.right
          }
        }

        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode
            return this
          } else {
            currentNode = currentNode.left
          }
        }
      }
    }
  }
}

let tree = new BinarySearchTree()

tree.insert(10)
tree.insert(13)
tree.insert(5)

tree.insert(2)
tree.insert(7)

tree.insert(11)
tree.insert(16)

console.log(tree.root)