var _name = prompt("Enter your name")
var dobDate = parseInt(prompt("Enter dob date"));
var dobMonth = parseInt(prompt("Enter dob month"))
var dobYear = parseInt(prompt("Enter dob year"))

var dob = new Date(`${dobMonth} ${dobDate}, ${dobYear}`)

var cuurentDate = new Date();

var dobMili = dob.getTime()
var todayMili = cuurentDate.getTime()

var diff = todayMili - dobMili;

var diffYear = Math.floor(diff/(1000*60*60*24*30*12))
var diffMonth = Math.floor(diff/(1000*60*60*24*30))
var diffDays = Math.floor(diff/(1000*60*60*24))
var diffHours = Math.floor(diff/(1000*60*60))


console.log(`Hello ${_name} Good Morning`);
console.log(`Your DOB is ${dob}`)
console.log(`You are ${diffYear} Years old`);
console.log(`Your Age in Month ${diffMonth} `);
console.log(`Your age in Days ${diffDays} `);
console.log(`Your age in Hours ${diffHours}`);
