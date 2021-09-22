//This combines two data structures (hashtable and double linked list) to construct a LRU cache optmized to search, insert and evict values with a complexity of O(1)


class ListNode{
    constructor(key,value){
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoubleLinkedList{
constructor(){
    this.head = null
    this.tail = null
}
insert(node){
    let nextNode = this.head
    node.next = nextNode
    node.prev = null
    if (nextNode){
        nextNode.prev = node
    }
    //If it is the first insertion
    if (!this.tail){
        this.tail = node
    }
    this.head = node
}
moveToHead(node){
    //Do nothing if it is already at the head
    if (this.head==node) return
    
    //Remove from linkedList
    let nextNode = node.next
    if (nextNode){
        nextNode.prev = node.prev
    }else{
        this.tail = node.prev
    }
    let prevNode = node.prev
    prevNode.next = node.next
    
    this.insert(node)
}

evict(hashTable){
    let nodeToEvict = this.tail
    this.tail = nodeToEvict.prev
    if (this.tail){
        this.tail.next = null	
    }
    nodeToEvict.next = nodeToEvict.prev = null
    delete hashTable[nodeToEvict.key]
}

}


// Do not edit the class below except for the insertKeyValuePair,
// getValueFromKey, and getMostRecentKey methods. Feel free
// to add new properties and methods to the class.
class LRUCache {
constructor(maxSize) {
this.maxSize = maxSize || 1;
    this.currentSize=0
    this.list = new DoubleLinkedList()
    this.hash = {}
}

_insert(key,value){
    //Verify if already exists
    let existing = this.hash[key]
    if (existing){
        existing.value = value
        this.list.moveToHead(existing)
    }else{
        let listNode = new ListNode(key,value)
        this.hash[key] = listNode
        this.list.insert(listNode)
        this.currentSize++
    }
}

insertKeyValuePair(key, value) {
if (this.currentSize==this.maxSize){
        //Evict last value
        this.list.evict(this.hash)
        this.currentSize--
    }
    
    this._insert(key,value)
}

getValueFromKey(key) {
// Write your code here.
    let listNode = this.hash[key]
    if (listNode){
        this.list.moveToHead(listNode)
        return listNode.value
    }
    return null
}

getMostRecentKey() {
return this.list.head && this.list.head.key
}
}

// Do not edit the line below.
exports.LRUCache = LRUCache;
