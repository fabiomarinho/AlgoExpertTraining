
function twoNumberSum(array, targetSum) {
    let sortedArray = array.sort((f,s)=>f-s)
      let length = sortedArray.length
      let lastIndex = length - 1
      for (let firstIndex=0 ; firstIndex<lastIndex ; ){
          let firstNumber = sortedArray[firstIndex]
          let lastNumber = sortedArray[lastIndex]
          let sum = firstNumber + lastNumber
          if (sum < targetSum){
              firstIndex++
              continue
          }else if (sum > targetSum){
              lastIndex--
              continue
          }else{
              return [firstNumber, lastNumber]
          }
          firstIndex++
          
      }
      return []
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
  