class BST{
	constructor(value){
		this.value = value
		this.countLeft = 0
	}
	insert(bst){
		let lessThan = bst.value < this.value
		if (!lessThan){
			let valueToSum = bst.value == this.value ? 0 : 1
			if (!this.right){
				this.right = bst
				return valueToSum + this.countLeft
			}else{
				return valueToSum + this.countLeft + this.right.insert(bst)
			}
		}else{
			this.countLeft += 1
			console.log(`this.countLeft: ${this.countLeft}`)
			if (!this.left){
				this.left = bst
				return 0
			}else{
				return this.left.insert(bst)
			}
		}
	}
}

function rightSmallerThan(array) {
  let rootBST = null
	let result = []
	for (let i=array.length-1 ; i >= 0 ; i--){
		let elm = array[i]
		let bst = new BST(elm)
		console.log(`Inserindo ${elm}`)
		if (!rootBST){
			rootBST = bst
			result.push(bst.countLeft)
		}else{
			result.push(rootBST.insert(bst))
		}
	}
	return result.reverse()
	// Write your code here.
}

// Do not edit the line below.
exports.rightSmallerThan = rightSmallerThan;
