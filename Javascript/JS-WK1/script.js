
const myName = "Saranya Gopinath";
console.log(myName);

//Hoisting - Possible with var variable
// var is stored in the browser, when reads the js for first time before it executes
//First al var variables are stored with undefined 
//Then after reading all the var variable it start running the script
//Only then all the let & const variables are stored in the browser with their assignment

//Hoisting is not actually used in real time usecases.


{
    console.log(myFirstName);

    var myFirstName = "Saranya";    

    console.log(myFirstName);

}




