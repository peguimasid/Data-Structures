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

  insert(val) {
    let newNode = new Node(val)

    let currentNode = this.root

    if (!this.root) {
      this.root = newNode
      return this
    } else {
      while (currentNode) {
        if (newNode.value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode
            return this
          } else {
            currentNode = currentNode.right
          }
        }

        if (newNode.value < currentNode.value) {
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
tree.insert(20)
tree.insert(5)

tree.insert(30)
tree.insert(19)

console.log(tree.root)