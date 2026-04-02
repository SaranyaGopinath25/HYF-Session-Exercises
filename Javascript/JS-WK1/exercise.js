// Variable Exercises
//#1
let greeting = "Hello World!!";

//------------------------------------------------------

//#2
let age = 20;

age = 21;

//------------------------------------------------------

//#3
const PI = 3.14;

//------------------------------------------------------

//#4
let a = 5;
let b = 10;

console.log("BEFORE reassigning - Value of a : "+a+" Value of b : "+b);
b=b-a;
a=b+a;

console.log("AFTER reassigning - Value of a : "+a+" Value of b : "+b);

//------------------------------------------------------

//#5
let num1 = 8;
let num2 = 12;

let sum = num1 + num2;

console.log("SUM of 2 numbers is "+sum);

//------------------------------------------------------


//#6 & #8
const myName = "Saranya Gopinath";
console.log(myName.length);

console.log(myName[0]);

let len = myName.length - 1;
console.log(myName[len]);

//------------------------------------------------------


//#7
let myArray = ["Sara","Sam", "Saha", 1 , 2, 3, true, false, true];
console.log(myArray.length);
console.log(myArray.lastIndexOf(true));
console.log(myArray.splice(3));
console.log(myArray.push(5))
console.log(myArray);

console.log(myArray[4]);

//------------------------------------------------------

//Object


const user = {
    name: "Anna",
    age: 32,
    gaveConsent : true,
    subjects : ["sci", "maths", "CS"]
}

console.log(user.subjects[1])

//------------------------------------------------------

//Primitive Datatypes
//String, number, boolean


//Reference Type - Objects & Arrays

//Objects are not primitive type they are refernce type so we can reassign a value in object not the whole object can be reassigned

//Objects live in the special box called HEAP
//Here the reference is the constant not the values

// user = {
//     name: "Sarah",
//     age:34,
//     gaveConsent:true
// }

// console.log(user); //Throws an error " Assignment to constant variable. - TypeError"

user.age = 24;
console.log(user)

// We can reassign the values inside not the reference of the Object.

//Check in console whether is truthy or falsy
// !!NaN, !!null, !!undefined, !![]

