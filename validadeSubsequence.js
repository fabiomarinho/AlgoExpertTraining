function isValidSubsequence(array, sequence) {
  
	let indexArray = 0
	let indexSequence = 0
	let foundFlag = true
	while ( indexSequence < sequence.length ){
		let sequenceValue = sequence[indexSequence]
		let sequenceValueFound = false
		while ( indexArray < array.length){
			let arrayValue = array[indexArray]
			if (arrayValue===sequenceValue){
				indexArray++
				sequenceValueFound = true
				console.log(sequenceValue)
				break
			}
			indexArray++
		}
		if (!sequenceValueFound){
			foundFlag = false
			break
		}
		indexSequence++
		
		
	}
	console.log(indexArray,indexSequence)
	return foundFlag
	
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
