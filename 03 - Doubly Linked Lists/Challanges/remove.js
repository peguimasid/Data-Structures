class Node{
  constructor(val){
      this.val = val
      this.next = null;      
      this.prev = null;      
  }
}

class DoublyLinkedList{
  constructor(val){
      this.head = null;
      this.tail = null;
      this.length = 0;
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
  remove(index){
      if(index < 0 || index >= this.length) return undefined;
      
      let removedNode = this.head;
      let counter = 0;
      
      while(counter !== index) {
          removedNode = removedNode.next;
          counter++;
      }
      
      let previousNode = removedNode.prev;
      let nextNode = removedNode.next;
      
      previousNode.next = nextNode;
      nextNode.prev = previousNode;
      
      this.length--;
      return removedNode
  }
}

list = new DoublyLinkedList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)

// list.remove(4)

console.log(list.remove(2))