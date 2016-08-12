
function Reel(){
	
	PIXI.DisplayObjectContainer.call(this);
	
	this.init();		
}	

Reel.ICON_Y_GAP = 160;

Reel.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );
Reel.prototype.constructor = Reel;
					
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
		
		var newIndex = Utils.getRandomNumberExcludingSelected(0, View.ICONS.length - 1, this.iconArray);
		
		var newIcon = new Icon(newIndex);
		
		newIcon.x = 0;
		newIcon.y = (View.REEL_VISIBLE_ICONS - i - 1) * Reel.ICON_Y_GAP;
						
		this.iconArray.push(newIcon);
		
		this.addChild(newIcon);
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
	
Reel.prototype.update = function(){
	
	
	
}

