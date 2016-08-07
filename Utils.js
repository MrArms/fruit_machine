
Utils = {};

// Get a random number whilst excluding those in the excludedNumbers array
Utils.getRandomNumberExcludingSelected = function(_startNumber, _endNumber, _excludedNumbers){
	
	// Make sure we don't go into an endless loop by putting in bad parameters
	if(_startNumber > _endNumber){
		
		var temp = _endNumber;
		_endNumber = _startNumber;
		_startNumber = temp;
	}
	
	// Create new array that doesn't contain the excluded numbers
	var newArray = [];
	
	for(var i=_startNumber; i<=_endNumber; i++){
						
		if(_excludedNumbers.indexOf(i) !== -1){
			
			newArray.push(i);
		}
	}
	
	return newArray[Math.floor(Math.random() * newArray.length)];		 
}