function nodeDepths(root) {
    // Write your code here.
      // Root distance is 0.
      // We have to sum 1 (level => 0+1).
      // Given n the number of children
      // Then, we should return the sum: d(root) + n*(d(root)+1) + recursive returned values
      let recNodeDepths = (node,nodeLevel) => {
          let myLevel = nodeLevel + 1
          let sum = 0
          for (let child of [node.left,node.right]){
              if (child){
                  sum += myLevel + recNodeDepths(child,myLevel)
              }
          }
          return sum
      }
      return recNodeDepths(root,0)
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.nodeDepths = nodeDepths;
  