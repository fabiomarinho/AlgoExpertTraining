// Write your code here.
	// traverse each character from left to right
	// for each char, traverse beginning from the next index and keep going and counting while its equal
	// when not equal, returns the count.
	// Take the count and calculate the integer division and module by 9: Ex 12 => 1 and 3. 
	// The result represents how many times 9X should appear in the resulting string, whereas the
	// module operation remainder is the last occurence: 3X
    function runLengthEncoding(string) {
        const DIVIDER = 9
          let encodeChar = (counter,char)=>{
              let encodedPart = ""
              let divisionResult = Math.floor(counter / DIVIDER)
              let divisionRemainder = counter % DIVIDER
              for (let j=0 ; j<divisionResult ; j++){
                  encodedPart += `9${char}`
              }
              if (divisionRemainder){
                  encodedPart += `${divisionRemainder}${char}`
              }
              return encodedPart
          }
          
          
          let lastChar = null
          let counter = 0
          let encodedString = ""
          for (let i=0 ; i<string.length ; i++){
                  let currentChar = string[i]
                if (!lastChar || currentChar==lastChar){
                      counter++
                  }else{
                      encodedString += encodeChar(counter,lastChar)
                      counter = 1
                  }
                  lastChar = string[i]
          }
          
          encodedString += encodeChar(counter,lastChar)
                      
          return encodedString
      }
      
      // Do not edit the line below.
      exports.runLengthEncoding = runLengthEncoding;
      