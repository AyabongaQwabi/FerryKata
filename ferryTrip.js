function trip(dest,people,vehicles){
	this.departue='central city';
	this.destination=dest||'';
	this.passengers=[];
	this.cars=[];
	this.timeOfTravel=''
	this.carSpaces=vehicles||0;
	this.passengerSpaces=people||0;
	this.cost=0;

}

trip.prototype.addPassenger = function(human){
	if(!this.isFull()){
		this.passengers.push(human)
		return true;
	}
	else{
		return false;
	}
	
}
trip.prototype.addCar = function(car){
	if(!this.CarSpaceFull()){
		this.cars.push(car)
		return true;
	}
	else{
		return false;
	}
	
}
trip.prototype.addVenture = function(venture){
	if(!this.isFull() && !this.CarSpaceFull()){
		var self=this;
		this.addCar(venture.getCar())
		venture.getPassengers().forEach(function(passenger){
			if(!self.addPassenger(passenger)){
				
				throw new Error('Venture Passengers too many .Exceed passenger space left.');
			}
		})
		return true;


	}
	else{

		return false;
	}
	
}
trip.prototype.getDestination = function(){
	return this.destination;
}
trip.prototype.isFull =function(){
	return this.passengerSpaces == this.passengers.length
}
trip.prototype.CarSpaceFull =function(){
	return this.carSpaces == this.cars.length
}
trip.prototype.passenger_count = function(){
	return this.passengers.length;
}
trip.prototype.car_count = function(){
	return this.cars.length;
}
trip.prototype.passengerSpacesLeft = function(){
	return this.passengerSpaces-this.passengers.length;
}
trip.prototype.carSpacesLeft = function(){
	return this.carSpaces-this.cars.length;
}

module.exports = trip;
