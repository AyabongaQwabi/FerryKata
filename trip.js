function Trip(dest,people,vehicles){
	this.departue='central city';
	this.destination=dest||'';
	this.passengers=[];
	this.cars=[];
	this.timeOfTravel=''
	this.carSpaces=vehicles||0;
	this.passengersSpaces=people||0;
	this.cost=0;

}

Trip.prototype.addPassenger = function(human){
	if(!isFull){
		this.passengers.push(human)
	}
	else{
		console.log(this.dest+' -- Trip full')
	}
	
}
Trip.prototype.isFull =function(){
	return this.passengersSpaces == passengers.length
}

Trip.prototype.getPassengerNum = function(){
	return this.passengers.length;
}

module.exports = Trip;
