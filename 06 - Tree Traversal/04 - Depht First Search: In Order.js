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

  find(value) {
    if (!this.root) return undefined

    let currentNode = this.root

    while (true) {
      if (value === currentNode.value) return currentNode
      if (value > currentNode.value) {
        if (!currentNode.right) return undefined
        currentNode = currentNode.right
      }
      if (value < currentNode.value) {
        if (!currentNode.left) return undefined
        currentNode = currentNode.left
      }
    }
  }

  contains(value) {
    if (!this.root) return false

    let currentNode = this.root

    while (true) {
      if (value === currentNode.value) return true
      if (value > currentNode.value) {
        if (!currentNode.right) return false
        currentNode = currentNode.right
      }
      if (value < currentNode.value) {
        if (!currentNode.left) return false
        currentNode = currentNode.left
      }
    }
  }

  DepthFirstSearchInOrder() {
    let result = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      result.push(node.value)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)

    return result
  }
}

let tree = new BinarySearchTree()

tree.insert(10)
tree.insert(6)
tree.insert(15)

tree.insert(3)
tree.insert(8)

tree.insert(20)

console.log(tree.DepthFirstSearchInOrder())

