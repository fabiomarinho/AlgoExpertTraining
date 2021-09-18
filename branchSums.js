// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    // Write your code here.
    let array = []
    branchSumsHelper(root, 0, array)
    return array
}

function branchSumsHelper(node, value, array) {
    let newValue = node.value + value
    if (!node.left && !node.right) {
        array.push(newValue)
        return
    }
    if (node.left) {
        branchSumsHelper(node.left, newValue, array)
    }
    if (node.right) {
        branchSumsHelper(node.right, newValue, array)
    }
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
