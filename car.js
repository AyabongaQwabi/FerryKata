function car(brand,model,registrationNum,seats){
	this.model = model || '';
	this.brand = brand || 0;
	this.seats = seats || 0;
	this.registrationNum = registrationNum || '';

}

car.prototype.getModel =function(){
	return this.model;
}

car.prototype.setModel =function(model){
	this.model=model;
}
car.prototype.setSeats =function(seats){
	this.seats=seats;
}
car.prototype.getSeats =function(){
	return this.seats;
}
car.prototype.getRegnumber = function(){
	return this.registrationNum;
}

module.exports = car;
