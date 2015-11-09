function venture(desc){
	this.desc=desc||'';
	this.car;
	this.passengers=[];
}


venture.prototype.addPassenger = function(human){
	if(!this.isFull()){
		this.passengers.push(human)
	}
	else{
		console.log('\t\t'+this.desc+' -- car full')
	}
	
}
venture.prototype.isFull =function(){
	return this.car.seats == this.passengers.length
}

venture.prototype.getPassengerNum = function(){
	return this.passengers.length;
}

venture.prototype.getPassengers = function(){
	return this.passengers;
}

venture.prototype.getCar = function(){
	return this.car;
}
module.exports = venture;
