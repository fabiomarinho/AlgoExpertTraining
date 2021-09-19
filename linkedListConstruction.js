// This is an input class. Do not edit.
class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  // Feel free to add new properties and methods to the class.
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
      
    setHead(node) {
      this.remove(node)
          node.next = this.head
          if (node.next){
              node.next.prev = node
          }else{
              this.tail = node
          }
          node.prev = null
          this.head = node
      }
  
    setTail(node) {
          this.remove(node)
          node.next = null
          node.prev = this.tail
          if (node.prev){
              node.prev.next = node
          }else{
              this.head = node
          }
          this.tail = node
    }
  
    insertBefore(node, nodeToInsert) {
          this.remove(nodeToInsert)
          if (node.prev){
              nodeToInsert.next = node
              nodeToInsert.prev = node.prev
              node.prev.next = nodeToInsert
              node.prev = nodeToInsert
          }else{
              this.setHead(nodeToInsert)
          }
      
    }
  
    insertAfter(node, nodeToInsert) {
      this.remove(nodeToInsert)
          if (node.next){
              nodeToInsert.prev = node
              nodeToInsert.next = node.next
              node.next.prev = nodeToInsert
              node.next = nodeToInsert
          }else{
              this.setTail(nodeToInsert)
          }
    }
  
    insertAtPosition(position, nodeToInsert) {
      let currentNode = this.head
          for (let pos=1 ; pos < position ; pos++){
              currentNode = currentNode.next
          }
          if (currentNode){
              this.insertBefore(currentNode, nodeToInsert)
          }else{
              this.setHead(nodeToInsert)
          }
    }
  
    removeNodesWithValue(value) {
      let currentNode = this.head
          while (currentNode){
              if (currentNode.value===value){
                  let nodeToRemove = currentNode
                  currentNode = currentNode.next
                  this.remove(nodeToRemove)
                  continue
              }
              currentNode = currentNode.next
          }
      }
      
      
    remove(node){
          if (!node) return
          if (this.head==node){
              this.head = node.next
          }
          if (this.tail==node){
              this.tail = node.prev
          }
          if (node.next){
              node.next.prev = node.prev
              if (this.head==node){
                  this.head=node.next
              }
          }
          if (node.prev){
              node.prev.next = node.next
              if (this.tail==node){
                  this.tail=node.prev
              }
          }
      }
  
      
    containsNodeWithValue(value) {
      let currentNode = this.head
          while (currentNode){
              if (currentNode.value===value) break
              currentNode = currentNode.next
          }
          return currentNode ? true : false
    }
  }
  
  // Do not edit the lines below.
  exports.Node = Node;
  exports.DoublyLinkedList = DoublyLinkedList;
  