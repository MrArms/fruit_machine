
function Reel(){
	
	this.init();		
}	
					
Reel.prototype.initialised = null;
Reel.prototype.iconArray = null;

Reel.prototype.currentReelValue = null;
Reel.prototype.targetReelValue = null;
					
Reel.prototype.init = function(){

	this.initialised = false;
	
	this.setInitialValues();
		
	// View.REEL_LENGTH
	// View.REEL_VISIBLE_ICONS		
	
	this.initialised = true;
}

Reel.prototype.setInitialValues = function(){
						
	this.iconArray = [];
	
	for(var i=0; i<View.REEL_VISIBLE_ICONS; i++){
		
		var newIndex = Utils.getRandomNumberExcludingSelected(0, View.ICONS.length, iconArray);
		
		iconArray.push(newIndex);
	}		
	
	// Set the current target to the "middle" icon on screen
	this.currentReelValue = View.REEL_VISIBLE_ICONS - Math.floor(View.REEL_VISIBLE_ICONS*0.5);
	this.targetReelValue = this.currentReelValue;
			
	this.render();
}

Reel.prototype.createIcons = function(){
	

}	
	
Reel.prototype.render = function(){
	
	
	
}

