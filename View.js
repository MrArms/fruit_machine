
function View(){
	
	this.init();		
}

View.ICONS = [{name:"apple", colour:"#00ff00"},{name:"pear", "colour:#22ff22"}, {name:"plum", "colour:#ff3344"}, {name:"banana", "colour:#00ffff"},
						{name:"star", "colour:#334455"}, {name:"jack", "colour:#0044ff"}, {name:"queen", "colour:#8800DD"}]

View.GAMESTATE_INIT = "init";						
View.GAMESTATE_WAITING_FOR_INPUT = "waiting";						
View.GAMESTATE_INITIALISING_SPIN = "initiasing spin";						
View.GAMESTATE_SPINNING = "spinning";						
View.GAMESTATE_DISPLAYING_RESULT = "displaying result";		
				
View.REEL_LENGTH = 20;
View.NUMBER_REELS = 3;
View.REEL_VISIBLE_ICONS = 3;
						
View.prototype.gameState = null;						
View.prototype.reels = null;						
												
View.prototype.init = function(){
									
	this.gameState = View.GAMESTATE_INIT;		
			
	this.animate();	
}

View.prototype.initialiseReels = function(){
	
	// Need to give the reels the initial visible 3 icons for each one
	
	this.reels = [];
	
	for(var i=0; i<View.NUMBER_REELS; i++){
		
		// Gives an initial random 3 
		
	}
}

View.prototype.getReelsReadyForSpin = function(){
	
	
}

View.prototype.animate = function(){
	
	
	// start the timer for the next animation loop
	requestAnimationFrame((this.animate).bind(this));
}

