// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
    let head = linkedList
      while (linkedList){
          let nextItem = linkedList.next
          if (!nextItem) break
          if (nextItem && linkedList.value==nextItem.value){
              linkedList.next = nextItem.next
              nextItem.next = null
          }else{
              linkedList = nextItem
          }
          
      }
    return head;
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
  