var _ = require('lodash')
function trip(dest,people,vehicles,price){
	this.departue='central city';
	this.destination=dest||'';
	this.passengers=[];
	this.cars=[];
	this.timeOfTravel=''
	this.carSpaces=vehicles||0;
	this.passengerSpaces=people||0;
	this.price = price || 100;
	this.code =this.departue.substring(0,2)+'-'+this.destination.substring(0,2)

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
		if(_.countBy(car.getTripArchive(), function(n){return n})[this.code] == 3){			
			car.bill({tripcode:this.code,price:(this.price/2)})
			car.setOnTrip(this.code)
			this.cars.push(car)
			console.log(this.cars)
			return true;
		}
		else{			
			car.bill({tripcode:this.code,price:this.price})
			car.setOnTrip(this.code)
			this.cars.push(car)
			return true;
		}
		
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
trip.prototype.getCars = function(){
	return this.cars;
}
trip.prototype.setprice = function(price){
	this.price = price;
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
