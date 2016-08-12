
/*Icon.TEXTURES = [	{name:"7", graphicsName:"7_icon"},{name:"banana", graphicsName:"banana_icon"}, 
					{name:"bar", graphicsName:"bar_icon"}, {name:"cherry", graphicsName:"cherry_icon"},
					{name:"lemon", graphicsName:"lemon_icon"}, {name:"melon", graphicsName:"melon_icon"}, 
					{name:"orange", graphicsName:"orange_icon"}, {name:"plum", graphicsName:"plum_icon"}]*/


function Icon(_index){

	PIXI.DisplayObjectContainer.call(this);

	this.index = _index;
	
	//var graphicsName = Icon.TEXTURES[this.index].graphicsName;
	var graphicsName = View.ICONS[this.index].graphicsName;
	
	if(graphicsName)	{
		this.sprite = new PIXI.Sprite(View.RESOURCES[graphicsName].texture);
		this.addChild(this.sprite);
	}
	else
		console.log("Error. Graphics name not found");
	
	this.init();		
}	

Icon.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );
Icon.prototype.constructor = Icon;
					
Icon.prototype.index = null;
Icon.prototype.colour = null;

Icon.prototype.init = function(){

	  	
}

Icon.prototype.getIndex = function(){
	
	return this.index;
	
}


