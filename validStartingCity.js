function validStartingCity(distances, fuel, mpg) {
  
	let {ixMin} = fuel
		.reduce((state,curr,ix)=>{
			if (ix==0) return state
			
			state.gasLeft += fuel[ix-1]*mpg - distances[ix - 1]
			
			if (state.gasLeft<state.min){
				state.min = state.gasLeft
				state.ixMin = ix
			}
			
			return state
			
		},{min:0, gasLeft:0, ixMin:0})
	
  return ixMin;
}

// Do not edit the line below.
exports.validStartingCity = validStartingCity;
