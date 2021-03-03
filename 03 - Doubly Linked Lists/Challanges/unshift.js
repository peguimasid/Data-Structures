class Node{
  constructor(val){
      this.val = val;
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
  unshift(val){
      var newNode = new Node(val);
      if (this.head === null) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.head.prev = newNode;
          newNode.next = this.head;
          this.head = newNode;
      }
      
      this.length++;
      return this;
  }
}
