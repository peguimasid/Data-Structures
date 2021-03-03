class Node{
  constructor(val){
      this.val = val;
      this.next = null;      
      this.prev = null;      
  }
}

class DoublyLinkedList{
  constructor(){
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
  shift() {
      if(!this.length) return undefined;
      
      let oldHead = this.head;
      
      if(this.length === 1) {
          this.head = null;
          this.tail = null;
      } else {
          this.head = this.head.next;
          this.head.prev = null;
          
          oldHead.next = null;
      }
      
      this.length--;
      return oldHead;
  }
}
