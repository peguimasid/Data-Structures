// GET ITEM AT SPECIFIC INDEX
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val)

    if(!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if(!this.length) return undefined
    
    let current = this.head
    let newTail = current

    while(current.next) {
      newTail = current
      current = current.next
    }
      this.tail = newTail
      newTail.next = null
      this.length--
      if(!this.length) {
        this.tail = null
        this.head = null
      }
      return current.val
  }

  shift() {
    if(!this.length) return undefined
    let removedItem = this.head
    this.head = removedItem.next
    this.length--
    if(!this.length) this.tail = null
    return removedItem
  }

  unshift(val) {
    const newNode = new Node(val)
    if(!this.length) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
  
    this.length++
    return this
  }

  get(index) {
    if(!index || index < 0 || index >= this.length) return null
    
    let current = this.head
    let counter = 0

    while(counter !== index) {
      current = current.next
      counter++
    }

    return current
  }
}

let list = new SinglyLinkedList()

list.push('zero')
list.push('one')
list.push('two')
list.push('tree')
list.push('four')

console.log(list.get())