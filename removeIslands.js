function removeIslands(matrix) {
	let height = matrix.length;
	let width = height ? matrix[0].length : 0;
  let deepSearch = (coords)=>{
		//Verify if the coordinates are valid
		let [x,y] = [coords[0],coords[1]];
		if (x < 0 || x >= width || y < 0 || y >= height){
			return;
		}
		if (matrix[y][x]==1){
			matrix[y][x] = 2;
			
			[[x-1,y],[x,y-1],
			 [x+1,y],[x,y+1]].forEach(c=>deepSearch(c));
		}
	}
	if (height){
		[0,height-1].forEach(line=>{
			matrix[line].forEach((e,ix)=> {
				if (e==1){
					deepSearch([ix,line]);
				}
			})	
		});
		
		[0,width-1].forEach(column=>{
			matrix.map(arr=>arr[column]).forEach((e,ix)=> {
				if (e==1){
					deepSearch([column,ix]);
				}
			})	
		});
		
		for (let i=0 ; i < height ; i++){
		 	for (let j=0 ; j < width ; j++){
		 		matrix[i][j] = matrix[i][j]==2 ? 1 : 0;
		 	}	
		}
	}
	return matrix;
}

// Do not edit the line below.
exports.removeIslands = removeIslands;
