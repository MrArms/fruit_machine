
function View(){
	
	this.init();		
}

View.SCREEN_WIDTH = null; //document.getElementById('drawing-canvas').width;
View.SCREEN_HEIGHT = null //document.getElementById('drawing-canvas').height;

/*View.ICONS = [	{name:"7", graphicsName:"7_icon", colour:"#00ff00"},{name:"banana", graphicsName:"banana_icon", "colour:#22ff22"}, 
				{name:"bar", graphicsName:"bar_icon", "colour:#ff3344"}, {name:"cherry", graphicsName:"cherry_icon", "colour:#00ffff"},
				{name:"lemon", graphicsName:"lemon_icon", "colour:#334455"}, {name:"melon", graphicsName:"melon_icon", "colour:#0044ff"}, 
				{name:"orange", graphicsName:"orange_icon", "colour:#0044ff"}, {name:"plum", graphicsName:"plum_icon", "colour:#0044ff"}]*/
				
/*View.ICON_GRAPHICS = [{'7_icon', 'graphics/7_icon.png'}, {'banana_icon', 'graphics/banana_icon.png'},{'bar_icon', 'graphics/bar_icon.png'},
				{'cherry_icon', 'graphics/cherry_icon.png'}, {'lemon_icon', 'graphics/lemon_icon.png'},
	PIXI.loader.add('melon_icon', 'graphics/melon_icon.png');
	PIXI.loader.add('orange_icon', 'graphics/orange_icon.png');
	PIXI.loader.add('plum_icon', 'graphics/plum_icon.png');];	*/


View.ICONS	 =  [	{name:"7", graphicsName:"7_icon", graphicsPath:"graphics/7_icon.png"},
					{name:"banana", graphicsName:"banana_icon", graphicsPath:"graphics/banana_icon.png"}, 
					{name:"bar", graphicsName:"bar_icon", graphicsPath:"graphics/bar_icon.png"}, 
					{name:"cherry", graphicsName:"cherry_icon", graphicsPath:"graphics/cherry_icon.png"},
					{name:"lemon", graphicsName:"lemon_icon", graphicsPath:"graphics/lemon_icon.png"}, 
					{name:"melon", graphicsName:"melon_icon", graphicsPath:"graphics/melon_icon.png"}, 
					{name:"orange", graphicsName:"orange_icon", graphicsPath:"graphics/orange_icon.png"}, 
					{name:"plum", graphicsName:"plum_icon", graphicsPath:"graphics/plum_icon.png"}]	
				

View.GAMESTATE_INIT = "init";						
View.GAMESTATE_WAITING_FOR_INPUT = "waiting";						
View.GAMESTATE_INITIALISING_SPIN = "initiasing spin";						
View.GAMESTATE_SPINNING = "spinning";						
View.GAMESTATE_DISPLAYING_RESULT = "displaying result";		
				
View.REEL_LENGTH = 20;
View.NUMBER_REELS = 3;
View.REEL_VISIBLE_ICONS = 3;

View.REEL_START_X = 50;
View.REEL_START_Y = 50;

View.REEL_X_GAP = 200;

View.RESOURCES = null;
						
View.prototype.gameState = null;						
View.prototype.reels = null;						
View.prototype.renderer = null;						
View.prototype.stage = null;						
View.prototype.resources = null;						
												
View.prototype.init = function(){
										
	View.SCREEN_WIDTH = document.getElementById('drawing-canvas').width;
	View.SCREEN_HEIGHT = document.getElementById('drawing-canvas').height;
										
	this.gameState = View.GAMESTATE_INIT;		
	
	this.renderer = new PIXI.autoDetectRenderer(View.SCREEN_WIDTH, View.SCREEN_HEIGHT, {view:document.getElementById('drawing-canvas')} );	

	// You need to create a root container that will hold the scene you want to draw.
	this.stage = new PIXI.Container();
	
	// The renderer will create a canvas element for you that you can then insert into the DOM.
	document.body.appendChild(this.renderer.view);
	
	this.loadGraphics();	
}

View.prototype.loadGraphics = function(){

	for(var i=0; i<View.ICONS.length; i++){
		
		PIXI.loader.add(View.ICONS[i].graphicsName, View.ICONS[i].graphicsPath);
	}

	/*PIXI.loader.add('7_icon', 'graphics/7_icon.png');
	PIXI.loader.add('banana_icon', 'graphics/banana_icon.png');
	PIXI.loader.add('bar_icon', 'graphics/bar_icon.png');
	PIXI.loader.add('cherry_icon', 'graphics/cherry_icon.png');
	PIXI.loader.add('lemon_icon', 'graphics/lemon_icon.png');
	PIXI.loader.add('melon_icon', 'graphics/melon_icon.png');
	PIXI.loader.add('orange_icon', 'graphics/orange_icon.png');
	PIXI.loader.add('plum_icon', 'graphics/plum_icon.png');*/
	
	PIXI.loader.load( (function (loader, resources) {
						
		console.log("Graphics loaded");
		
		View.RESOURCES = resources;
		
		this.continueInit();	
		
	}).bind(this));
}

View.prototype.continueInit = function(){
	
	this.initialiseReels();
	
	this.animate();
}

View.prototype.initialiseReels = function(){
	
	// Need to give the reels the initial visible 3 icons for each one
	
	this.reels = [];
	
	for(var i=0; i<View.NUMBER_REELS; i++){
		
		var newReel = new Reel();		
		newReel.x = View.REEL_START_X + i * View.REEL_X_GAP;		
		newReel.y = View.REEL_START_Y;				
		this.reels.push(newReel);
			
		this.stage.addChild(newReel);
	}
}

View.prototype.getReelsReadyForSpin = function(){
	
	
}

View.prototype.update = function(){
	
	// Update the reels
	for(var i=0; i<this.reels.length; i++){
		this.reels[i].update();
	}
}	
	
View.prototype.animate = function(){
	
	this.update();
	
	 // this is the main render call that makes pixi draw your container and its children.
    this.renderer.render(this.stage);
		
	// start the timer for the next animation loop
	requestAnimationFrame((this.animate).bind(this));
}

