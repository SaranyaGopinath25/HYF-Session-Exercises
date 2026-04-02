
/* 
 If the income is between 1 and 100 DKK - the tax percentage is 20%
 If the income is between 101 and 500 DKK - the tax percentage is 35%
 If the income is above 501 DKK - the tax percentage is 55%
*/


const income = 300;
if(income >= 1 && income <= 100){
    console.log(20);
}
else if(income >= 101 && income <= 500){
    console.log(35);
}
else{
    console.log(55);
}

/*
Exercise #1
If age between 0 and 2 - free ride
If age between 3 and 18 - 15% discount
If age between 19 and 26 - 10% Discount
If age above 60  - 70% Discount
*/
console.log("Excercise #1");

const age = 45;

if(age > 0 && age <= 2){
    console.log("Free ride");

}
else if(age >= 3 && age <= 18){
    console.log("15% Discount");
}
else if(age >= 19 && age <= 26){
    console.log("10% Discount");
}
else if(age > 60){
    console.log("70% Discount");
}
else{
    console.log("no Discount");
}

/* Switch Conditions - Used only for multiple fixed options.
    Not for the condition ranges
*/ 



/*
Exercise #2
COnvert to ternary operator
*/

console.log("Exercise #2");
let a = 1;
let b= 6;

let message = (a + b < 4) ? 'Below' : 'Over';

console.table({message});
console.log({message});


let i=0;
do{
    i++;
    console.log("Do while "+i);
}while(i<3)

    let j=0
while(j<3){
     j++;
    console.log(j);
}

const students = ["A", "B", "C"];

for(let i=0; i< students.length; i++)
{
    console.log(students[i]);
}

for(let student of students){
    console.log("Loop");
    if(student === "B"){
        break;
    }
    sendEmail(student);
    console.log(student);
}

function sendEmail(student){


}


// Exercise #3

console.log("Excercise #3");

for(i=10; i>=0; i--){

    if(i == 10 || i == 0){
       let message =  (i === 10)? "OMG Started" : "Happy New Year";
       console.log(message);
       continue;
    }
    console.log(i);
}

// Exercise #4

console.log("Excercise #4");

function min(a,b){
    // return (a < b) ? a : b;
    return Math.min(a,b);
}

let minimum = min(3,4);
console.log(minimum);







