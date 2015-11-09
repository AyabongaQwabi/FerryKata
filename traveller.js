var person = require('./person')

function traveller(name){
	this.init(name);
}
traveller.prototype = new person();
traveller.prototype.board = function(trip){
	if(trip.addPassenger(this)){
		return 'success'
	}
	else{
		return 'failure'
	}
}
module.exports = traveller;