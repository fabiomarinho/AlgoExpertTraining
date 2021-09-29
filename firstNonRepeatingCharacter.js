function firstNonRepeatingCharacter(string) {
    let hash = string.split('').reduce((hash,e)=>{
          hash[e] = hash[e] ? hash[e]+1 : 1
          return hash
      },{})
      
      for (let ix=0 ; ix<string.length ; ix++){
          let char = string[ix]
          if (hash[char]==1) return ix 
      }
      return -1;
  }
  
  // Do not edit the line below.
  exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
  