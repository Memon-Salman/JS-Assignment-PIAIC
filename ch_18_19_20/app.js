// CHAPTER 18,19,20

var courses = [];
for(let i=0;i<5;i++){
    courses[i] = prompt(`Enter course ${i+1} name:`);
}
alert(courses);

for(let i=0;i<courses.length;i++){
    courses[i] = prompt(courses[i],courses[i])
}
console.log(courses)





