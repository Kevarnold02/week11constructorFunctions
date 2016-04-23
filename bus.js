var Student = require("./student.js");

var Bus = function (driverName,color,gas){

this.studentsOnTheBus = [];
this.driverName = driverName;
this.color = color;
this.gas = gas;

this.studentEntersBus = function (n, g, gr, GPA, d, s, c){
  this.studentsOnTheBus.push(new Student(n, g, gr, GPA, d, s, c));
}

}


module.exports = Bus;

// var Dud = require('./dud.js'); // this takes in the constructor function on lines 1-3 from dud.js

// var PartyBus = function(driveName, startLocation, destination) { //function PartyBus() would also work.
// 	this.duds = [];
// 	this.driveName = driveName;
// 	this.startLocation = startLocation;
// 	this.destination = destination;
// 	this.addDud = function(g, n, r) {
// 		this.duds.push(new Dud(g, n, r));
// 	}
// }

// var theGronkBus = new PartyBus();
// theGronkBus.addDud('male');
// theGronkBus.addDud('male');
// theGronkBus.addDud('male');
// theGronkBus.addDud('male');
// theGronkBus.addDud('male');
// theGronkBus.addDud('female');
// theGronkBus.addDud('female');
// theGronkBus.addDud('female');
// theGronkBus.addDud('female');


// module.exports = PartyBus;