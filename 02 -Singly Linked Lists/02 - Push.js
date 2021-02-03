// ADD ITEM IN END
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
}

let list = new SinglyLinkedList()

list.push('hi')
list.push('there')
list.push('my')
// list.push('friend')

console.log(list)

// tail before>>> Node { val: 'hi', next: null }
// tail middle>>> Node { val: 'hi', next: Node { val: 'there', next: null } }
// tail after>>> Node { val: 'there', next: null }

// HEAD after>>> Node { val: 'hi', next: Node { val: 'there', next: null } }

// tail before>>> Node { val: 'there', next: null }
// tail middle>>> Node { val: 'there', next: Node { val: 'my', next: null } }
// tail after>>> Node { val: 'my', next: null }

// HEAD after>>> Node { val: 'hi', next: Node { val: 'there', next: Node { val: 'my', next: null } } }