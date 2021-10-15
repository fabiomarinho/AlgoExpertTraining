function subarraySort(array) {
    let last = null
      let max = null
      let min = null
      let flagOutOfOrder = false
      for (let i=0 ; i < array.length ; i++){
          let number = array[i]
          if (last==null || number >= last){
              //correct order
              if (flagOutOfOrder){
                  min = (min==null || number<min) ? number : min
                  max = (max==null || number>max) ? number : max	
                  flagOutOfOrder = false	
              }
              
          }else{
              flagOutOfOrder = true
              min = (min==null || number<min) ? number : min
              max = (max==null || last>max) ? last : max
          }
          last = number
      }
      
      let i1=-1,i2=-1
      if (min==null) return [i1,i2]
      
      let i1found=false
      
      for (let i=0 ; i < array.length ; i++){
          let number = array[i]
          if (min < number && !i1found){
              i1 = i
              i1found = true
          }
          if (max > number){
              i2 = i
          }
      }
      return [i1,i2]
  }
  
  // Do not edit the line below.
  exports.subarraySort = subarraySort;
  