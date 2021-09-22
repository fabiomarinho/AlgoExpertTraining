const VICTORY_POINTS = 3
function tournamentWinner(competitions, results) {
  // Write your code here.
	let {champion} = competitions.map((teams,index)=>{
		return results[index] ? teams[0] : teams[1]
	}).reduce((hashPoints,team)=>{
		hashPoints[team] = (hashPoints[team] || 0) + VICTORY_POINTS
		if (hashPoints[team] > hashPoints.max){
			hashPoints.max = hashPoints[team]
			hashPoints.champion = team
		}	
		return hashPoints
	},{max:0,champion:null})
	return champion
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
