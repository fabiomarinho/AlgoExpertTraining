//Using a Stack for O(N)

function largestRectangleUnderSkyline(buildings) {
    let maxArea = 0
      let stack = []
      let builds = [...buildings,0]
      for (let i=0 ; i < builds.length+1;i++){
          let height = builds[i]
          while(stack.length && builds[stack[stack.length-1]] >= height) {
              let pillarHeight = builds[ stack.pop() ]
              let width = !stack.length ? i : i - stack[stack.length-1] - 1
              maxArea = Math.max(width * pillarHeight, maxArea)
          }
          stack.push(i)
      }
      
    return maxArea;
  }
  
  
  // Do not edit the line below.
  exports.largestRectangleUnderSkyline = largestRectangleUnderSkyline;
  