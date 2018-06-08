var Vec = function(x,y){
	this.x = x;
	this.y = y;	
}

var add = function(){
	this.x += arguments[i].x;
	this.y += arguments[i].y;
	}
	return this;
}

var multScalar = function(vec){
	var res = vec;
	for(var i = 1;i<arguments.length;i++){
	res.x *= arguments[i];
	res.y *= arguments[i];
	}
	return res;
}


 var  world = {
	grav: new Vec(0,0),
	wind: new Vec(0,0),
	airResistance: 0.9
} 

var obj = {
	position: new Vec(1,1),
	m: 5,
	v: new Vec(0,0),
	a: new Vec(0,0),
	F: new Vec(0,0),
	update: function(){
		this.F.add(workd.grav).add(world.wind);
		this.a = multScalar(this.F, 1/this.m)
		this.v.add(this.a);
		this.position.add(this.v);
		console.log(this.position.x+' '+this.position.y);
	}
}


// setTimeout(update, 500);

// function update(){
// 	obj.update();
// 	setTimeout(update, 500);
// }