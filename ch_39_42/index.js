var courses = [];
var obtainedMarks = 0;
for(var i=0;i<5;i++){
    courses[i] = Number(prompt(`Enter course ${i+1} marks`));
    obtainedMarks += courses[i]
}
console.log("Obtained Marks: ",obtainedMarks);
var totalMarks = 500;

var perc = (obtainedMarks * 100) / totalMarks

console.log(`Percentage : ${perc}%`);

switch(true){
    case (perc >= 90 && perc <= 100):
        console.log("Grade A+")
        break;
    case (perc >= 75 && perc <= 89):
        console.log("Grade A");
        break;
    case (perc >= 60 && perc <= 74):
        console.log("Grade B");
        break;
    case (perc >= 45 && perc <= 59):
        console.log("Grade C");
        break;
    case (perc >= 30 && perc <= 44):
        console.log("Grade D");
        break;
    case (perc >= 0  && perc <= 29):
        console.log("Fail");
        break;
    default:
        console.log("Invalid Entry")
}
