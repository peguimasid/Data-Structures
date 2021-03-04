class Node {
  constructor(val){
      this.val = val;
      this.prev = null;
      this.next = null;
  }
}


class DoublyLinkedList {
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  push(val) {
      var node = new Node(val);
      if (this.head === null) {
          this.head = node;
          this.tail = this.head;
          this.length++;
      } else {
          this.tail.next = node;
          node.prev = this.tail;
          this.tail = node;
          this.length++;
       }
      return this;
  }
  get(index) {
      if(index < 0 || index >= this.length) return null
      
      let node = this.head
      let counter = 0
      
      while(counter !== index) {
          node = node.next
          counter++
      }
      
      return node
  }
  insert(index, val){
      let newNode = new Node(val)
      
      let foundNode = this.get(index)
          
      if(!foundNode) return false
      
      let previousNode = foundNode.prev
      let nextNode = foundNode.next
      
      newNode.next = foundNode, foundNode.prev = newNode
      newNode.prev = previousNode, previousNode.next = newNode
      
      this.length++
      return true
  }
  remove(index, val){
      let removedNode = this.get(index)
      
      if(!removedNode) return undefined
      
      let previousNode = removedNode.prev
      let nextNode = removedNode.next
      
      previouNode.next = removedNode.next
      nextNode.prev = removedNode.prev
      
      this.length--
      return removedNode
  }
}