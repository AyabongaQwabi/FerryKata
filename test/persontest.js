var assert = require('assert');
var person = require('../person');
var traveller = require('../traveller');
var car = require('../car');
var venture = require('../venture');
var FerryTrip = require('../ferryTrip');

describe('Person', function() {
  describe('getName()', function () {
    it('should return name of person', function () {
    	var coder = new person('steve gerrad')
        assert.equal('steve gerrad',coder.getName());
     
    });
  });
});

/* Traveller Tests*/
describe('Traveller', function() {
  describe('getName', function () {
    it('should return name of traveller', function () {
    	var passenger = new traveller('steve gerrad')
        assert.equal('steve gerrad',passenger.getName());
     
    });
  });
  describe('boardTrip', function () {
    it('should add traveller to ferry trip', function () {
    	var passenger = new traveller('steve gerrad')
    	var greyHound = new FerryTrip('st Lucia Wetlands Parks',10,10)
    	passenger.board(greyHound)
        assert.equal(1,greyHound.passengers.length);
     
    });
    it('should reject traveller if trip full', function () {
    	var passenger = new traveller('steve gerrad')
    	var passenger2 = new traveller('ssdsdteve gerrad')
    	var greyHound = new FerryTrip('st Lucia Wetlands Parks',1,1)
    	passenger.board(greyHound)
    	passenger2.board(greyHound)
    	assert.equal(1,greyHound.passengers.length);
     
    });
    it('should accept traveller if trip not full', function () {
    	var passenger = new traveller('steve gerrad')
    	var greyHound = new FerryTrip('st Lucia Wetlands Parks',10,10)
    	passenger.board(greyHound)
    	assert.equal(1,greyHound.passengers.length);
     
    });
  });
});


/* Car Tests */
describe('Car', function() {
  describe('getRegnumber', function () {
    it('should return registration number', function () {
    	var tourbus = new car('Mercedes','Jc101','93GH5678EC')
        assert.equal('93GH5678EC',tourbus.getRegnumber());
     
    });
  });
   describe('getModel', function () {
    it('should return model code', function () {
    	var tourbus = new car('Mercedes','Jc101','93GH5678EC')
        assert.equal('Jc101',tourbus.getModel());
     
    });
  });
   describe('setSeats', function () {
    it('should set number of seats', function () {
    	var tourbus = new car('Mercedes','Jc101','93GH5678EC')
    	tourbus.setSeats(4)
        assert.equal(4,tourbus.seats);
     
    });
  });
  describe('getSeats', function () {
    it('should return number of seats', function () {
    	var tourbus = new car('Mercedes','Jc101','93GH5678EC')
    	tourbus.setSeats(4)
        assert.equal(4,tourbus.getSeats());
     
    });
  });
});

/* venture Tests */ 
describe('venture', function() {
  describe('addPassenger', function () {
    it('should add passenger to venture', function () {
    	var familyMember1 = new traveller('steve gerrad')
    	var familyMember2 = new traveller('qwabi gerrad')

    	var qwabiFamily = new venture('Qwabi Family vacation');
    	qwabiFamily.car = new car('Mercedes','Jc101','93GH5678EC',2)
    	qwabiFamily.addPassenger(familyMember1)
    	qwabiFamily.addPassenger(familyMember2)
    	assert.equal(2,qwabiFamily.passengers.length);
     
    });
  });
  describe('isFull', function () {
    it('should return boolean of wether car is full or not', function () {
    	var familyMember1 = new traveller('steve gerrad')
    	var familyMember2 = new traveller('qwabi gerrad')

    	var qwabiFamily = new venture('Qwabi Family vacation');
    	qwabiFamily.car = new car('Mercedes','Jc101','93GH5678EC',2)
    	qwabiFamily.addPassenger(familyMember1)
    	qwabiFamily.addPassenger(familyMember2)
    	assert.equal(true,qwabiFamily.isFull());
     
    });
  });
  describe('getNumPassengers', function () {
    it('should return number of passenger', function () {
    	var familyMember1 = new traveller('steve gerrad')
    	var familyMember2 = new traveller('qwabi gerrad')

    	var qwabiFamily = new venture('Qwabi Family vacation');
    	qwabiFamily.car = new car('Mercedes','Jc101','93GH5678EC',2)
    	qwabiFamily.addPassenger(familyMember1)
    	qwabiFamily.addPassenger(familyMember2)
    	assert.equal(2,qwabiFamily.getPassengerNum());
     
    });
  });
});



/* Ferry Trip Class Tests*/
describe('FerryTrip', function() {

  describe('getDestination', function () {
    it('should return destination location of trip', function () {
    	var greyHound = new FerryTrip('st Lucia Wetlands Parks',10,10)
        assert.equal('st Lucia Wetlands Parks',greyHound.getDestination());
     
    });})
  describe('addPassenger', function () {
    it('should add passenger to trip', function () {
    	var passenger = new traveller('steve gerrad')
    	var greyHound = new FerryTrip('st Lucia Wetlands Parks',10,10)
    	greyHound.addPassenger(passenger)
        assert.equal(1,greyHound.passengers.length);

    	
     
    });})
  describe('addVenture', function () {
    it('should add venture to trip', function () {

    	var familyMember1 = new traveller('steve gerrad')
    	var familyMember2 = new traveller('qwabi gerrad')

    	var qwabiFamily = new venture('Qwabi Family vacation');
    	qwabiFamily.car = new car('Mercedes','Jc101','93GH5678EC',2)
    	qwabiFamily.addPassenger(familyMember1)
    	qwabiFamily.addPassenger(familyMember2)

    	var greyHound = new FerryTrip('st Lucia Wetlands Parks',2,1)
    	greyHound.addVenture(qwabiFamily)
        assert.equal(2,greyHound.passengers.length);
        assert.equal(1,greyHound.cars.length);
     
    });})

  describe('carSpacesLeft', function () {
    it('should return number of car spaces left on trip', function () {
    	var familyMember1 = new traveller('steve gerrad')
    	var familyMember2 = new traveller('qwabi gerrad')    	
    	var qwabiFamily = new venture('Qwabi Family vacation');
    	qwabiFamily.car = new car('Mercedes','Jc101','93GH5678EC',2)
    	qwabiFamily.addPassenger(familyMember1)
    	qwabiFamily.addPassenger(familyMember2)
    	var greyHound = new FerryTrip('st Lucia Wetlands Parks',10,10)
    	greyHound.addVenture(qwabiFamily)
        assert.equal(9,greyHound.carSpacesLeft());
     
    });})

  describe('passengerSpacesLeft', function () {
    it('should return number of passenger spaces left on trip', function () {
    	var greyHound = new FerryTrip('st Lucia Wetlands Parks',10,10)
    	greyHound.addPassenger(new traveller('Irvin Khosi'))
        assert.equal(9,greyHound.passengerSpacesLeft());
     
    });})
  describe('passenger_count', function () {
    it('should return number of passengers on board trip', function () {
    	var greyHound = new FerryTrip('st Lucia Wetlands Parks',10,10)
    	greyHound.addPassenger(new traveller('Irvin Khosi'))
        assert.equal(1,greyHound.passenger_count());
     
     
    });})
 describe('car_count', function () {
    it('should return number of passengers on board trip', function () {
    	var qwabiFamily = new venture('Qwabi Family vacation');
    	var familyMember1 = new traveller('steve gerrad')
    	var familyMember2 = new traveller('qwabi gerrad')    	

    	qwabiFamily.car = new car('Mercedes','Jc101','93GH5678EC',2)
    	qwabiFamily.addPassenger(familyMember1)
    	qwabiFamily.addPassenger(familyMember2)
    	var greyHound = new FerryTrip('st Lucia Wetlands Parks',10,10)
    	greyHound.addVenture(qwabiFamily)
        assert.equal(1,greyHound.car_count());
     
     
    });})

});
