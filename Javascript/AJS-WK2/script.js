
// Callback Function & ForEach Method

// NOTE ::: We can make arrays and object as const but we can change the values inside it. We just can't reassign the whole array or object to a new value.

// =============================================================================================

// ForEach Method
//================

const array = [1,2,3,4,5];

const newArr = [];

const doubleEle = array.forEach(double);

console.log(newArr);

function double(item){
    return newArr.push(item * 2);
}

// =============================================================================================

// Map Method
//============

const mapArr = array.map(doubleMap);

function doubleMap(item){
    return item*2;
}

console.log(mapArr);

// =============================================================================================

// Filter Method
//===============

function odd(item){
    return item % 2 !== 0;
}


const oddArr = array.filter(odd);
console.log(oddArr);

// =============================================================================================

// Exercise : 1
//===============

function createGreeting(name, callback){
    return callback(name);
}

function formalGreeting(name){
    return `Hello ${name}, how are you?`;
}

function casualGreeting(name){
    return `Hey ${name}, what's up?`;
}

console.log(createGreeting("Saranya", casualGreeting));
console.log(createGreeting("Ahmad", formalGreeting));

// =============================================================================================

// CallbackFactory -- > Returns a function by calling a function

// =============================================================================================

// setTimeout Function

const first = () => console.log("first");
const second = () => setTimeout(logSecond,500);
const third = () => console.log("third");
const fourth = () => console.log("fourth");
const fifth = () => console.log("fifth");

function logSecond(){
    console.log("Second");
}

first();
second();
third();
fourth();
fifth();

// Synchronous & Asynchronous Functions

// Exercise 1
/*
1. Click counter
Create an index.html file with two buttons and a place to show the count.

When the first button is clicked, show 0. The next time show 1, then 2, etc.

Clicking the second button should use the same counter and update the same display.


*/



const button1 = document.getElementById("counter1");
const button2 = document.getElementById("counter2");

let counter = -1;


button1.addEventListener("click", incrementCounter);
button2.addEventListener("click", incrementCounter);

function incrementCounter() {
    console.log("CLicked :::: "+counter);
    counter++;
    const display = document.getElementById("display");
    display.textContent = counter;

}


/*
Exercise 2
2. Delay clicker
Create a button with the text "Log in 3 seconds" and an area where you can show a message.

When the button is clicked, wait 3 seconds and then show the text: "This text was delayed by 3 seconds".

*/

const logButton = document.getElementById("logButton")

logButton.addEventListener("click", setTimeout(logInDelay,3000));

function logInDelay(){
    const text = "This text was delayed by 3 seconds";
    const logger = document.getElementById("logger");
    logger.textContent = text;
}


/*
Exercise :3 
3. Page onload
Create a callback function (as a variable) that shows "DOM fully loaded and parsed".

This callback should run when the DOM is fully loaded. Search for how to run code when the DOM is ready (e.g. "DOM ready" or "page load event").

*/

document.addEventListener("DOMContentLoaded",callbackFunction);

function callbackFunction(){
    console.log("DOM fully loaded and parsed");
}

/*
Exercise :4

4. Mouse position
Create a handler that shows the x,y coordinates of the mouse (e.g. update a paragraph or a fixed div as the user moves the mouse).

*/

document.addEventListener("mousemove", (event) => {
    calculateMousePointer(event);
});

function calculateMousePointer(event){
    console.log("Mouse event");
    const X = event.clientX;
    const Y = event.clientY;
    console.log(`Mouse position: ${X}, ${Y}`);
    const mouseX = document.getElementById("mouseX");
    const mouseY = document.getElementById("mouseY");
    mouseX.value = X;
    mouseY.value = Y;
}


/*
Exercise : 5

5. Mouse position online tool
Imagine an online tool where businesses see where their users' mouse is most of the time, to check if their design works well.

Write JS that, after 30 seconds, computes the average x and y position of the user's mouse and displays it.

*/

document.addEventListener("mousemove", (event) => {
    setTimeout(() => {  
    displayPointer(event)}, 3000);
});


function displayPointer(event){
    console.log("Display mouse position");
    const Xaxis = event.clientX;
    const Yaxis = event.clientY;
    console.log(`Mouse position: ${Xaxis}, ${Yaxis}`);
    const mousePointerDisplay = document.getElementById("mousePointer");
    mousePointerDisplay.textContent = `Mouse position : ${Xaxis}, ${Yaxis}`
}

