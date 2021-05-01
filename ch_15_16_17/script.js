// CHAPTER 15,16,17

// Task : TODO

var courses = [];
var course1 = prompt("Enter course 1 name:");
var course2 = prompt("Enter course 2 name:");
var course3 = prompt("Enter course 3 name:");
var course4 = prompt("Enter course 4 name:");
var course5 = prompt("Enter course 5 name:");

courses.push(course1,course2,course3,course4,course5);
alert(courses);

course1 = prompt(course1,courses[0]);
course2 = prompt(course2,courses[1]);
course3 = prompt(course3,courses[2]);
course4 = prompt(course4,courses[3]);
course5 = prompt(course5,courses[4]);


courses.splice(0,5,course1,course2,course3,course4,course5)

console.log(courses)


