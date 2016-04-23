var prompt = require("prompt");

var Bus = require("./bus.js");


prompt.start();

var myBus = new Bus("Michael", "red", "full");
var myBus2 = new Bus("Michael", "green", "full");

console.log(myBus);
console.log(myBus2);

myBus.studentEntersBus("Owens","M","B",3.5,14,true,"Hey bud, let's party");
myBus2.studentEntersBus("Ruby","F","A",4.1,4,true,"Haaayyy");


console.log(myBus);
console.log(myBus2);