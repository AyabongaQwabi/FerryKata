function person(){
	this.name = '';
	this.birthYear = 0;
	this.age=0;
}

person.prototype.init = function(name){
	this.name=name;
}
person.prototype.getName =function(){
	return this.name;
}

person.prototype.getAge = function(){
	return this.age;
}

module.exports = person;
