//  JS chapter 35 to 38


var input = prompt("Enter String");
input = input.toLowerCase();
function capitalize(){
    let word = input.split(" ");
    for(let i=0;i<word.length;i++){
        word[i] = word[i][0].toUpperCase() +word[i].substr(1)
    }
    input = word.join(" ")
    return input;
}
var getCapitalize = capitalize()
console.log(getCapitalize);



// Second Assignment

let num = Number(prompt("Enter number"));
let result = 1;

function factorail(num){
    for(var i=num; i>0; i--){
        result = i*result;
       
    }
    return result;
}

let fac = factorail(num);

 console.log(fac);