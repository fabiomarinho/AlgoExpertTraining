function smallestSubstringContaining(bigString, smallString) {
    let hashSmallString = smallString
                 .split("")
                 .reduce( (h,e) => h[e] && (h[e]+=1) && h || (h[e]=1) && h,{})
      let hashBigString = {}, candidate = {value:""}, l=-1,r=-1,smallStringKeys = Object.keys(hashSmallString);
      let fcnIncrementBigStringHash = r => hashBigString[bigString[r]] && (hashBigString[bigString[r]]+=1) || (hashBigString[bigString[r]] = 1)
      let fcnDecrementBigStringHash = l => hashBigString[bigString[l]] && hashBigString[bigString[l]]--
      let fcnSubstringOK = () => smallStringKeys.every(e=>hashBigString[e] && hashBigString[e]>=hashSmallString[e])
      while (true){
          while(r<bigString.length-1){
             if (!hashSmallString[bigString[++r]]){ // If the symbol does not exist in the small string hash, go for the next loop
              continue
              }
             fcnIncrementBigStringHash(r) //Adds symbol to the bigStringHash
             
             //Stops if it reached the maximum size or if the bigStringHash comprises the smallStringHash amounts
             if (fcnSubstringOK() || r==bigString.length-1) break 
             
          }
          while (fcnSubstringOK()){ //while the bigStringHash comprises the smallStringHash amounts
              //Registers a candidate string
              let newCandidateString = bigString.substring(l,r+1)
              if (!candidate.length || newCandidateString.length < candidate.length){
                     candidate = {length:newCandidateString.length,value:newCandidateString} 
              }
              fcnDecrementBigStringHash(l++) // Update the BigStringHash concerning the left end and move l pointer one step right
          }
          if (r==bigString.length-1) break //Breaks if the right pointer r reaches the end of the big string
      }
     return candidate.value;
 }
 
 // Do not edit the line below.
 exports.smallestSubstringContaining = smallestSubstringContaining;
 