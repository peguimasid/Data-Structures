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
      let newNode = new Node(val);
      if(this.length === 0) {
          this.tail = newNode;
          this.head = newNode;
      } else {
          newNode.prev = this.tail;
          
          this.tail.next = newNode;
          this.tail = newNode;
      }
      
      this.length++;
      return this;
  }
  
}
