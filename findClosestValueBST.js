function findClosestValueInBst(tree, target) {
    // Write your code here.
    let nextNode = tree
    let { value } = nextNode
    let closest
    while (nextNode) {
        value = nextNode.value
        if (!closest || Math.abs(closest - target) > Math.abs(value - target)) {
            closest = value
        }
        let { left, right } = nextNode
        nextNode = (target < value) ? left : right
    }
    return closest
}

// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
