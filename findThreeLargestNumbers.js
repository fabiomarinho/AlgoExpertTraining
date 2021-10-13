function findThreeLargestNumbers(array) {
    let first=null
      let second=null
      let third=null
      for (number of array){
          if (third==null){
              third=number
              continue
          }
          if (third<number){
              first = second
              second = third
              third = number
              continue
          }else{
              if (second==null){
                  second = number
                  continue
              }
              if (second < number){
                  first = second
                  second = number
                  continue
              }else{
                  if (first==null){
                      first=number
                      continue
                  }
                  if (first < number){
                      first = number
                      continue
                  }
              }
          }
          
      }
      return [first , second, third]
  }
  
  // Do not edit the line below.
  exports.findThreeLargestNumbers = findThreeLargestNumbers;
  