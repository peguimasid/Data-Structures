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
}

let tree = new BinarySearchTree()

tree.root = new Node(10)
tree.root.right = new Node(20)
tree.root.left = new Node(5)

console.log(tree)