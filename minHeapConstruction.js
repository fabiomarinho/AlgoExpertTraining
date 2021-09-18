// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
        this.currentIndex = null
    }

    get parentNodes() {
        let maxParentIndex = Math.floor((this.heap.length - 1) / 2)
        return [...new Array(maxParentIndex + 1)].map((e, i) => i).reverse()
    }

    get lastHeapIndex() {
        return this.heap.length - 1
    }

    buildHeap(array) {
        this.heap = array;
        let parentIndexes = this.parentNodes
        for (let parentIndex of parentIndexes) {
            this.currentIndex = parentIndex
            this.siftDown()
        }
        return this.heap;
    }

    siftDown() {
        let myIndex = this.currentIndex
        let currentValue = this.heap[myIndex]
        let firstChildValue = this.heap[myIndex * 2 + 1]
        let secondChildValue = this.heap[myIndex * 2 + 2]
        if (!firstChildValue && !secondChildValue) return;
        let min = Math.min(firstChildValue || secondChildValue, secondChildValue || firstChildValue)

        if (currentValue > min) {
            let childIndex = min === firstChildValue ? myIndex * 2 + 1 : myIndex * 2 + 2
            let childValue = this.heap[childIndex]
            this.heap[childIndex] = currentValue
            this.heap[myIndex] = childValue
            this.currentIndex = childIndex
            this.siftDown()
        }
        this.currentIndex = myIndex
    }

    siftUp() {
        let myIndex = this.currentIndex
        let currentValue = this.heap[myIndex]
        let rootIndex = Math.floor((myIndex - 1) / 2)
        let rootValue = this.heap[rootIndex]
        if (!rootValue) return;

        if (rootValue > currentValue) {
            this.heap[rootIndex] = currentValue
            this.heap[myIndex] = rootValue
            this.currentIndex = rootIndex
            this.siftUp()
        }
        this.currentIndex = myIndex
    }

    peek() {
        return this.heap[0]
    }

    remove() {
        let ret = this.heap[0]
        this.heap[0] = this.heap[this.lastHeapIndex]
        this.currentIndex = 0
        this.siftDown()
        return ret
    }

    insert(value) {
        this.heap.push(value)
        this.currentIndex = this.lastHeapIndex
        this.siftUp()
    }
}

// Do not edit the line below.
exports.MinHeap = MinHeap;
