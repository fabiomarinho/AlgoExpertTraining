// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      let currentNode = this
          if (value < currentNode.value){
              if (currentNode.left){
                  currentNode.left.insert(value)
              }else{
                  currentNode.left = new BST(value)
              }
          }else{
              if (currentNode.right){
                  currentNode.right.insert(value)
              }else{
                  currentNode.right = new BST(value)
              }
          }
      return this;
    }
  
      get hasChildren(){
          return this.left || this.right
      }
      
      get hasAllChildren(){
          return this.left && this.right
      }
      
      _find(value){
          if (this.value==value){
              return this
          }else{
              if (value < this.value){
                  return this.left ? this.left._find(value) : null
              }else{
                  return this.right ? this.right._find(value) : null
              }
          }
      }
      
    contains(value) {
          let node = this._find(value)
          return node ? true : false
    }
  
      get smallest(){
          if (this.left){
              return this.left.smallest
          }else{
              return this
          }
      }
      
      
    remove(value, parentNode = null) {
          //Root case
          let currentNode = this
          while (currentNode){
              if (value < currentNode.value){
                  parentNode = currentNode
                  currentNode = currentNode.left
              }else if (value > currentNode.value){
                  parentNode = currentNode
                  currentNode = currentNode.right
              }else{
                  if (currentNode.hasAllChildren){
                          let smallestNode = currentNode.right.smallest
                          currentNode.value = smallestNode.value
                          currentNode.right.remove(currentNode.value,currentNode)
                  }else if (!parentNode){
                          if (currentNode.left){
                              currentNode.value = currentNode.left.value
                              currentNode.right = currentNode.left.right
                              currentNode.left = currentNode.left.left
                          }else	if (currentNode.right){
                              currentNode.value = currentNode.right.value
                              currentNode.left = currentNode.right.left
                              currentNode.right = currentNode.right.right
                          }else{
                              //currentNode.value = null
                          }
                  }else if (parentNode.left == currentNode){
                          parentNode.left = currentNode.left ? currentNode.left : currentNode.right
                  }else if (parentNode.right == currentNode){
                          parentNode.right = currentNode.left ? currentNode.left : currentNode.right
                  }
                  break
              }
          }
          return currentNode	
      }
  }
  
  // Do not edit the line below.
  exports.BST = BST;
  