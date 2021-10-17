function searchInSortedMatrix(matrix, target) {
    let [height,width] = [matrix.length-1,matrix[0].length-1]
      let [rowIndex,colIndex] = [0,0]
      let pivot = matrix[0][0]
      
      for (let ix=0 ;  ; ix++ ){
          rowIndex = Math.min(ix,height)
          colIndex = Math.min(ix,width)
          pivot = matrix[rowIndex][colIndex]
          if (pivot>=target || ix > height && ix > width){
              break;
          }
      }
      if (pivot==target) return [rowIndex,colIndex]
      
      if ( pivot > target ){
          for (let ix=rowIndex-1 ; ix >=0; ix--){
              let value = matrix[ix][colIndex]
              if (value==target) return [ix,colIndex]
              if (value < target) {
                  //Search in column
                  for (let col=colIndex+1 ; col < width; col++ ){
                      value = matrix[ix][col]
                      if (value==target) return [ix,col]
                  }
                  break
              }
          }
          for (let ix=colIndex-1 ; ix >=0; ix--){
              let value = matrix[rowIndex][ix]
              if (value==target) return [rowIndex,ix]
              if (value < target) {
                  //Search in row
                  for (let row=rowIndex+1 ; row < height; row++){
                      value = matrix[row][ix]
                      if (value==target) return [row,ix]
                  }
                  break
              }
          }
      }
      return [-1,-1]
  }
  
  // Do not edit the line below.
  exports.searchInSortedMatrix = searchInSortedMatrix;
  