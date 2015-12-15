function car(brand,model,registrationNum,seats){
	this.model = model || '';
	this.brand = brand || 0;
	this.seats = seats || 0;
	this.registrationNum = registrationNum || '';
	this.tripArchive =[];
	this.bills = [];
	this.color='grey';
}

car.prototype.getModel =function(){
	return this.model;
}

car.prototype.setModel =function(model){
	this.model=model;
}
car.prototype.setColor =function(color){
	this.color=color;
}
car.prototype.setSeats =function(seats){
	this.seats=seats;
}
car.prototype.getSeats =function(){
	return this.seats;
}
car.prototype.getColor =function(){
	return this.color;
}
car.prototype.getRegnumber = function(){
	return this.registrationNum;
}
car.prototype.bill = function(bill){
	this.bills.push(bill);
}
car.prototype.payBill = function(trip){	
	
	var billIndex;	
	for(var i=0;i<this.bills.length;i++){
		var bill = this.bills[i];		
		if(bill.tripcode == trip.tripcode){
				billIndex = i;				
				break;
			}
	}	
	
	if(billIndex != undefined){
		this.bills[billIndex].price -= trip.price		
		if(this.bills[billIndex].price==0){			
			this.bills.splice(billIndex,billIndex+1)			
		}		
		return true; 
	}
	else{
		return false;
	}
	
	
}
car.prototype.setOnTrip = function(tripcode){
	this.tripArchive.push(tripcode);
}
car.prototype.getTripArchive = function(){
	return this.tripArchive;
}
module.exports = car;
