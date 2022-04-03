//https://www.hackerrank.com/challenges/find-the-running-median/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'runningMedian' function below.
 *
 * The function is expected to return a DOUBLE_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */


function runningMedian(a) {
    
    class Heap{
        constructor(heapFunc){
            this.heapFunc = heapFunc
            this.heap = []
        }
        add(value){
            this.heap.push(value)
            if (this.size > 1){
                this.currentIndex = this.lastIndex
                let result = this.heapFuncResult
                while (result){
                    this.siftUp()
                    if (this.currentIndex==0) break
                    result = this.heapFunc(this.currentValue,this.parentValue)
                }
            }
        }
        siftUp(){
            let value = this.heap[this.currentIndex]
            this.heap[this.currentIndex] = this.parentValue
            this.heap[this.parentIndex] = value
            this.currentIndex = this.parentIndex
        }
        get heapFuncResult(){
            return this.heapFunc(this.currentValue,this.parentValue)
        }
        get currentValue(){
            return this.heap[this.currentIndex]
        }
        get parentValue(){
            return this.heap[this.parentIndex]
        }        
        get parentIndex(){
            return this.getParent(this.currentIndex)
        }
        get size(){
            return this.heap.length
        }
        get lastIndex(){
            return this.size-1
        }
        getParent(index){
            return Math.floor((index-1)/2.0)
        }
        get rootValue(){
            return this.heap[0]
        }
        get leftChildIndex(){
            return this.currentIndex*2+1
        }
        get rightChildIndex(){
            return this.currentIndex*2+2
        }
        get leftChildValue(){
            return this.leftChildIndex <= this.lastIndex ? this.heap[this.leftChildIndex] : null
        }
        get rightChildValue(){
            return this.rightChildIndex <= this.lastIndex ? this.heap[this.rightChildIndex] : null
        }
        get indexToSiftDown(){
            if (this.leftChildValue){
                if (this.rightChildValue){
                    let result = this.heapFunc(this.leftChildValue,this.rightChildValue)
                    return result ? this.leftChildIndex : this.rightChildIndex
                }else{
                    return this.leftChildIndex
                }
            }
            return null
        }
        get currentHasChildren(){
            return this.currentIndex*2+1 <= this.lastIndex
        }
        
        siftDown(){
            let currVal = this.currentValue
            
            let siftDownIndex = this.indexToSiftDown
            if (this.heapFunc(currVal,this.heap[siftDownIndex])){
                return false
            }
            
            this.heap[this.currentIndex] = this.heap[siftDownIndex]
            this.heap[siftDownIndex] = currVal
            this.currentIndex = siftDownIndex
            
            return true
        }
        remove(){
            let value = this.heap.pop()
            this.heap[0] = value
            this.currentIndex = 0
            let continueSiftDown = true
            while (continueSiftDown && this.currentHasChildren){
                continueSiftDown = this.siftDown()
            }
        }
        pop(){
            let root = this.rootValue
            this.remove()
            return root
        }
    }
    
    // let minHeap = new Heap((a,b)=>a<b)
    
    // minHeap.add(12)
    // minHeap.add(4)
    // minHeap.add(5)
    // minHeap.add(3)
    // minHeap.add(8)
    // minHeap.add(7)
    // console.dir(minHeap.heap)
    // minHeap.remove()
    // console.dir(minHeap.heap)
    
    //let l = new List()
     let heaps = []
     let last = null
     let result = a.map(n=>{
         n = n+0
         if (heaps.length==0){
             heaps.push(n)
             return last = n
         }else if(heaps.length==1){
             if (n<last){
                 let heap = new Heap((a,b)=>a>b)
                 heap.add(n)
                 let heap2 = new Heap((a,b)=>a<=b) 
                 heap2.add(last)
                 heaps = [heap,heap2]
             }else{
                 let heap = new Heap((a,b)=>a>b)
                 heap.add(last)
                 let heap2 = new Heap((a,b)=>a<=b) 
                 heap2.add(n)
                 heaps = [heap,heap2]
             }
             
             return last = (n+last)/2.0
         }else{
             if (n==last){
                
                let diff = heaps[0].size - heaps[1].size
                
                heaps[(diff > 0) ? 1:0].add(n)
                
             }else{
                heaps[ (n<last) ?0:1 ].add(n)
             }
             
             let diff = heaps[0].size - heaps[1].size
             if ( Math.abs (diff) > 1 ){
                 if (diff > 0){
                     heaps[1].add(heaps[0].pop())
                 }else{
                     heaps[0].add(heaps[1].pop())
                 }
             }
             diff = heaps[0].size - heaps[1].size
             if (diff==0){
                 last = (heaps[0].rootValue + heaps[1].rootValue)/2.0
             }else{
                 last = (diff>0) ? heaps[0].rootValue : heaps[1].rootValue
             }
             return last
             
             
         }
         
     })
    
    
    return result.map(n=>n.toFixed(1))
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const aCount = parseInt(readLine().trim(), 10);

    let a = [];

    for (let i = 0; i < aCount; i++) {
        const aItem = parseInt(readLine().trim(), 10);
        a.push(aItem);
    }

    const result = runningMedian(a);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
