// Chapter 10-14

// Task 1: Calculator

var num1 = parseInt(prompt("Enter 1st Value:"));
var num2 = parseInt(prompt("Enter 2nd Value:"));
var opt = prompt("Enter Operator:");
var result;

if(opt === '+'){
    result = num1 + num2;
    alert(`${num1}  ${opt}  ${num2} = ${result}`);
}
else if(opt === '-'){
    result = num1 - num2;
    alert(`${num1}  ${opt}  ${num2} = ${result}`);
}
else if(opt === '*'){
    result = num1 * num2;
    alert(`${num1}  ${opt}  ${num2} = ${result}`);
}
else if(opt === '/'){
    result = num1 / num2;
    alert(`${num1}  ${opt}  ${num2} = ${result}`);
}
else if(opt === '%'){
    result = num1 % num2;
    alert(`${num1}  ${opt}  ${num2} = ${result}`);
}
else{
    alert("Invalid");
}


// Task 2 : Percentage Calculator

var sub1 = parseInt(prompt("Enter Math Marks:"));
var sub2 = parseInt(prompt("Enter Science Marks:"));
var sub3 = parseInt(prompt("Enter English Marks:"));
var sub4 = parseInt(prompt("Enter Paksitan Studies Marks:"));
var sub5 = parseInt(prompt("Enter Islamiyat Marks:"));
var totalMarks = 500;
var perc = 0;

var obtainedMarks = sub1 + sub2 + sub3 + sub4 + sub5;

perc = (obtainedMarks * 100)/totalMarks;

alert("Percentage : "+perc);