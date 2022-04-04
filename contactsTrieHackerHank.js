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
 * Complete the 'contacts' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts 2D_STRING_ARRAY queries as parameter.
 */

function contacts(queries) {
    let ADD = Symbol.for("add")
    let FIND = Symbol.for("find")
    let data = []
    let results = []
    
    class Trie{
        constructor(){
            this.children = {}
            this.endOfWord = false
            this.occurences = 1
        }
        insert(value){
            if (!value) return
            let arrayChars = [...value].reverse()
            this.addChars(arrayChars)
        }
        addChars(arrayChars){
            if (!arrayChars.length) {
                this.endOfWord = true
                return
            }
            let char = arrayChars.pop()
            let child = this.children[char]
            if (!child){
                child = new Trie()
                this.children[char] = child    
            }else{
                child.occurences += 1
            }
            child.addChars(arrayChars)
        }
        getOccurences(search){
            let arraySearch = [...search].reverse()
            return this.searchArray(arraySearch)
        }
        searchArray(arraySearch){
            if (!arraySearch.length) {
                return this.occurences
            }
            let char = arraySearch.pop()
            let child = this.children[char]
            
            return (!child) ? 0 : child.searchArray(arraySearch)
        }
    }
    
    let trie = new Trie();
    queries.forEach((query)=>{
        let queryObject = parseQuery(query)
        if (queryObject.action===ADD){
            trie.insert(queryObject.value)
        }else{
            results.push(trie.getOccurences(queryObject.value))
        }
    })
    
    return results
    
    function parseQuery(arrQuery){
        return {
            "action": arrQuery[0]==="add" ? ADD : FIND,
            "value": arrQuery[1]
        }
    }
    
    
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const queriesRows = parseInt(readLine().trim(), 10);

    let queries = Array(queriesRows);

    for (let i = 0; i < queriesRows; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ');
    }

    const result = contacts(queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
