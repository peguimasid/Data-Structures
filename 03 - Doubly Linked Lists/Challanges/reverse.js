class Node{
  constructor(val){
      this.val = val
      this.next = null;      
      this.prev = null;      
  }
}

class DoublyLinkedList{
  constructor(val){
     this.head = null
     this.tail = null
     this.length = 0
  }
  push(val){
      var node = new Node(val);
      if (this.head === null) {
          this.head = node;
          this.tail = this.head;
      } else {
          this.tail.next = node;
          node.prev = this.tail;
          this.tail = node;
      }
      this.length++;
      return this;
  }
  get(index){
      if(index < 0 || index >= this.lenght) return null
      
      let foundNode = this.head
      let counter = 0
      
      while(index !== counter) {
          foundNode = foundNode.next
          counter++
      }
      
      return foundNode
  }

  reverse() {
    let temp = this.head
    this.head = this.tail
    this.tail = temp

    let current = this.head

    while(current.prev) {
      let temp = current.prev
      current.prev = current.next
      current.next = temp
    
      current = current.next
    }

    let currentTail = this.tail

    while(currentTail.next) {
      let temp = currentTail.next
      currentTail.next = currentTail.prev
      currentTail.prev = temp

      currentTail = currentTail.prev
    }

    return this
  }
}

let list = new DoublyLinkedList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)

console.log(list.reverse())