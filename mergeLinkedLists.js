// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
      attachAfter(node){
          let next = this.next
          this.next = node
          node.next = next
      }
  }
  
  function mergeLinkedLists(headOne, headTwo) {
      let [smaller, greater] = headOne.value < headTwo.value ? [headOne,headTwo] : [headTwo,headOne]
      let result = smaller
    while(greater){
          
          console.log(`S: ${smaller.value}`)
          console.log(`B: ${greater.value}`)
          while (smaller.next && greater.value > smaller.next.value){
              smaller = smaller.next
          }
          let afterGreater = greater.next
          smaller.attachAfter(greater)
          greater = afterGreater	
          smaller = smaller.next
      }
      return result
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.mergeLinkedLists = mergeLinkedLists;
  