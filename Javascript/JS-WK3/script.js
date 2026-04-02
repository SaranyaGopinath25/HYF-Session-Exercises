/*
Assignment #1 - Objects
- Create Object that represents pizza that includes price, name and description
- Add an array of ingredients to the pizza object
- Add function to your object that will print out the name and list of ingredients.
*/

console.log("Assignment #1");

let pizza = {
    name : "Corny Cheese Pizza",
    price : {
        amount : 100,
        currency : "DKK"
    },
    description : "It includes thin crest with Cheese, herbs, corns"
}

let ingredients = [
    "Cheese", 
    "Oregano", 
    "Corn", 
    "ChilliFlakes"
];

// Adding ingredients array to pizza object

pizza.ingredients = ingredients;


//Add function

function getPizzaDetails(){
    console.log(`Pizza Name is ${this.name} and the ingredients is ${this.ingredients}`);
}

pizza.getPizzaDetails = getPizzaDetails;

console.log(pizza);

pizza.getPizzaDetails();

console.log("############################################");

/* Learnings:

- ?? => Nullish Coalescing operator checks for null & undefined
- Arrow function doesn't have the scope so it doesn't works on the this property

*/

// Array Destructuring

// const fruits = ["Apple", "Banana", "Mango", "Orange"];

// for(const fruit of fruits.entries()){
//     const [index, value] = fruits;
//     console.log(index, value);

// }

/*
Assignment #2 - Arrays
- Create a function to check if an element in an array
*/

// function isElementPresent (fruit) {
//     for(let fruit of fruits){
//         return fruits.find(fruit);
    
//     }
// }

// let isFound = isElementPresent();
// console.log(isFound);

const fruits = ["Apple", "Banana", "Mango", "Orange"];

function isPresent(fruit){
    const res = fruits.includes(fruit);
    console.log(res);
}

isPresent("Apple");

function isPresentInArray(element){
    console.log("Index :::::"+this.indexOf(element));
    return this.indexOf(element) > -1;
}
if(!Array.prototype.isPresentInArray){

    Array.prototype.isPresentInArray = isPresentInArray;
}
const isFound = fruits.isPresentInArray("Apple");
console.log(isFound);




//Create array of ingredients of pizza. Pick least fav of them and remove it

let pizzaIngredients = ["Cheese", "Corn", "Chicken", "Jalapeno"];
let leastFav = "Chicken";
let index = pizzaIngredients.indexOf(leastFav);
console.log(index);
const slice1 = pizzaIngredients.slice(0,index);
console.log(pizzaIngredients.slice(0,index));
const slice2 = pizzaIngredients.slice(index, pizzaIngredients.length-1);
console.log(pizzaIngredients.slice(index, pizzaIngredients.length-1));
const joinArr = slice1.concat(slice2);
console.log(joinArr);


//Create array of objects of 3 persons with name & age. Find average of the age

let peopleDetails = [
    {name : "Sarah", age : 24},
    {name : "Sam", age : 32},
    {name : "Saha", age : 16}
]

let sumOfAge  = 0;
for(let i=0; i<peopleDetails.length; i++){
    sumOfAge += peopleDetails[i].age;
}

let sum = 0;
for (let person of peopleDetails){
sum += person.age;

}
console.log(sum);
console.log(sumOfAge);






















