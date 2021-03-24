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
      currentNode = this.root
    } else {
      while (currentNode !== null) {
        if (newNode.value > currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = newNode
            return newNode
          } else {
            currentNode = currentNode.right
          }
        } else {
          if (currentNode.left === null) {
            currentNode.left = newNode
            return newNode
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