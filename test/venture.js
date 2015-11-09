function venture(desc){
	this.desc=desc||'';
	this.car;
	this.passengers=[];
}

venture.prototype.addPassenger = function(human){
	if(!isFull){
		this.passengers.push(human)
	}
	else{
		console.log(this.desc+' -- car full')
	}
	
}
venture.prototype.isFull =function(){
	return this.car.seats == passengers.length
}

venture.prototype.getPassengerNum = function(){
	return this.passengers.length;
}

module.exports = venture;
