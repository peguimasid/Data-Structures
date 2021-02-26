class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val)

    if(!this.length) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if(!this.length) return undefined

    let removedNode = this.tail

    if(this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
      removedNode.prev = null 
    }
    this.length--
    return removedNode
  }

  shift() {
    if(!this.length) return undefined

    let oldHead = this.head

    if(this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      this.head.prev = null
  
      oldHead.next = null  
    }

    this.length--

    return oldHead
  }

  unshift(val) {
    let newNode = new Node(val)

    if(!this.length) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  get(index) {
    if(index < 0 || index >= this.length) return null
    
    let middle = Math.floor(this.length / 2)
  
    let current = index > middle ? this.tail : this.head
    let counter = index > middle ? this.length - 1 : 0
  
    while(counter !== index) {
      if(index > middle) {
        current = current.prev
        counter--
      } else {
        current = current.next
        counter++
      }
    }
  
    return current
  }

  set(index, newVal) {
    let node = this.get(index)

    if(!node) return false

    node.val = newVal

    return true
  }
}

let list = new DoublyLinkedList()

list.push(1)
list.push(2) // this becomes 10
list.push(3)
list.push(4)

list.set(1, 10)

console.log(list)