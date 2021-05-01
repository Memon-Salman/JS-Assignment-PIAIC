// JS chapter 21 to 30

// Task 1

// var num = Number(prompt("Enter value:"));
// num = Math.ceil(num);
// var text = "Hello world,This is Dummy Text";
// var newText = text.slice(0,num);
// var reveredText = [];
// newText = newText.split("");
// console.log(newText);
// for(var i=newText.length-1; i >=0; i--){
//     reveredText += newText[i]
// }
// console.log(reveredText)




// Task 2

var input = "cloUd naTive computinG";
input = input.toLowerCase()
let word = input.split(" ");

for(let i=0;i<word.length;i++){
    word[i] = word[i][0].toUpperCase() +word[i].substr(1)
}
input = word.join(" ")
console.log(input);



