// This is the class of the input linked list.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function shiftLinkedList(head, k) {
    let listTail = head
      let listLength = 1
      //O(n)
      while (listTail.next){
          listLength++
          listTail = listTail.next
      }
      let normK = k % listLength
      let offset = normK < 0 ? Math.abs(normK) : listLength - normK
      let newHead = head
      //O(2n)
      for (let i=1 ; i<offset ; i++){
          newHead = newHead.next
      }
      listTail.next = head
      head = newHead.next
      newHead.next = null
      return head
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.shiftLinkedList = shiftLinkedList;