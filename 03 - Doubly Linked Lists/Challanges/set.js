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
  set(index, newVal){
      if(index < 0 || index >= this.length) return false
      
      let node = this.head;
      
      let counter = 0;
      
      while(counter !== index) {
          node = node.next
          counter++
      }
      node.val = newVal
      return true
  }
}
