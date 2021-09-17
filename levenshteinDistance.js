//2-dimensional array intended for calculationg the levenshtein distance between two strings
function levenshteinDistance(str1, str2) {
  columns = ["",...str2.split("")]
	lines = ["",...str1.split("")]
	let E = [...new Array(lines.length)]
		.map((line,ix)=>[ix,...new Array(columns.length-1).fill(0)])
	E[0] = E[0].map((e,ix)=>ix)
	for (let i=1;i<lines.length;i++){
		for (let j=1;j<columns.length;j++){
			if (lines[i]===columns[j]){
				E[i][j]=E[i-1][j-1]
			}else{
				E[i][j]= 1 + Math.min(E[i][j-1],E[i-1][j-1],E[i-1][j])
			}
		}	
	}
	return E[lines.length-1][columns.length-1]
	
}

