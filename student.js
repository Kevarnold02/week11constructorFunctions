
var prompt = require('prompt');

var Student = function (name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){

this.name = name;
this.gender = gender;
this.grade = grade;
this.GPA = GPA;
this.detentions = detentions;
this.sleepingInClass =sleepingInClass;
this.catchPhrase = catchPhrase;

var canStudentHaveFun = function(detentions, GPA){
    if(detentions<10 && GPA >= 2){
      console.log("Can have fun!");
    }

}


}

module.exports = Student;

// var prompt = require('prompt');

// var Students = function(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase) {
// 	this.name = name;
// 	this.gender = gender;
// 	this.grade = grade;
// 	this.GPA = GPA;
// 	this.detentions = detentions;
// 	this.sleepingInClass = sleepingInClass;
// 	this.catchPhrase = catchPhrase;
// 	this.canStudentsHaveFun = function() {
// 		if ((detentions < 10) && (GPA > 2)) {
// 			console.log("student can have fun!!")
// 		} else {
// 			console.log("student cannot have fun")
// 		}
// 	}
// }

// 	prompt.get(['name', 'gender', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result){
// 		console.log(result);
// 		var s = new Students(result.name, result.gender, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase)
// 		console.log("this is me " + JSON.stringify(s));
// 		s.canStudentsHaveFun();
// 	});
