// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    // Write your code here.
      let sumFunction = (remainder,node1,node2)=>{
          let value1 = node1 && node1.value || 0
          let value2 = node2 && node2.value || 0
          let sum = remainder + value1 + value2
          if (node1 || node2 || remainder){
              let newRemainder = Math.floor ( sum / 10 )
              let quocient = sum % 10
              let linkedList = new LinkedList(quocient)
              linkedList.next = sumFunction(newRemainder,node1 && node1.next,node2 && node2.next)
              return linkedList
          }else{
              return null
          }
      }
    
    return sumFunction(0,linkedListOne,linkedListTwo);
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.sumOfLinkedLists = sumOfLinkedLists;
  