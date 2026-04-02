
// Asynchronous Function to fetch data from the API

/*
Rules :
 - Don't go deeper more than one level
 - Always return a promise from then
 - Always end the chaining with catch
*/

/*
Callback hell is avoided by the "async & await" keywords
Use the try catch block instead of the catch in the old promise
*/

// Async/Await example
try{
    const response = await fetch("https://example.org");
    const data = await response.json();
    console.log(data);
}
catch(error){
    console.error("Error in fetching the data");
}


// Exercise :1

// Create a promise that resolves after 4 seconds. 
// Use this promise to show the text hello on the page after 4 seconds.

function sayHello(){
    console.log("Say Hello!!");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hello");
        }, 4000);
        resolve();
    })


}
sayHello();

function sayHelloWithDelay(){
    console.log("Say Hello with delay!!");
    try{
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hello after 4 seconds");
        }, 4000);
        resolve();
    })
    }
    catch(error){
        console.error("Error in fetching the data");
    }

}
sayHelloWithDelay();


// Exercise :2 
    
//Now make the promise fail by rejecting it with an error message instead of resolving it, and show the error message on the page.


function delay(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 1) {
      reject(new Error("Invalid time"));
    } else {
      setTimeout(() => resolve(), ms);
    }
  });
}

async function showHello() {
  try {
    await delay(4000);
    // await delay(0);
    console.log("Hello in ms");
  } catch (err) {
    console.error("Error:", err);
  }
}

await showHello();



// Exercise :3
/*Using promises

fetch yes or no from this api: https://yesno.wtf/api. Show the answer on the page.

Try fetching a url that rejects e.g. https://knajskdskj.jasdk. Show the error message on the page.
*/

// Type:1 - Async/Await Function

async function showYesOrNo(){
    try{
        const resp = await fetch("https://yesno.wtf/api");
        const data = await resp.json();
        console.log("DATA :::: "+data.answer);
    }
    catch(err){
        console.error("Error in fetching data:", err);
    }

}

await showYesOrNo();

async function showYesOrNoWithError(){

    try{
        const res = await fetch("https://knajskdskj.jasdk");
        const data = await res.json();
        console.log("Error :::: "+data);

    }
    catch(err){
        console.error("Error in fetching data", err);
    }

}

await showYesOrNoWithError();


//Type : 2 -  Promise Chaining 

fetch("https://yesno.wtf/api")
    .then((response) => response.json())
    .then((data) => console.log("DATA in Promise Chaining :::: "+data.answer))
    .catch((err) => console.error("Error in fetching data", err));

fetch("https://knajskdskj.jasdk")
    .then((response) => response.json())
    .then((data) => console.log("DATA :::: "+data))
    .catch((err) => console.error("Error in fetching data", err));


// Exercise : 5
// Using Async/Await



async function fetchAstronauts(){
    try{
        const astronauts = await fetch("http://api.open-notify.org/astros.json");
        const data = await astronauts.json();
        console.log("Astronauts ::::: "+data.message);
    }
    catch(err){
        console.error("Error in fetching the astronauts", err);
    }
}

await fetchAstronauts();

async function fetchMovies(){
    try{
        const moviesList = await fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json");
        const data = await moviesList.json();
        const movies = data.map((d) => d.title);
        console.log("Astronauts ::::: "+movies);
    }
    catch(err){
        console.error("Error in fetching the astronauts", err);
    }
}

await fetchMovies();


// Exercise :6 
/* 
Get the JSONPlaceholder user and the movies at the same time. Show the movies and the battery status on the page when the related promises have resolved.
*/


async function showBatteryStatus(){
    try{
        const battery = await navigator.getBattery();
        console.log("Battery Level :::: "+battery.level);
        document.getElementById("level").textContent = battery.level * 100;
    }
    catch(err){
        console.error("Error in getting the battery status", err);
    }
}

await showBatteryStatus();

async function getAstrosAndMovies(){
    try{
        const astronautPromise =  fetch("http://api.open-notify.org/astros.json");

        const moviesPromise =  fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json");

        const battery = await navigator.getBattery();
        console.log("Battery Level :::: "+battery.level);
        const batteryLevel = battery.level;
        document.getElementById("level").textContent = battery.level * 100;

        const [batteryData, astronauts, movies] = await Promise.all([batteryLevel, (await astronautPromise).json(), (await moviesPromise).json()]);
        console.log("Astronauts :::: "+JSON.stringify(astronauts));
        console.log("Movies :::: "+JSON.stringify(movies));
        console.log("Battery Level :::: "+batteryData);

}
    catch(err){
        console.error("Error in fetching Astros & Movies ", err);
    }
}

await getAstrosAndMovies();


/*
Exercise :7
Call Stack
 
Expected Output :
1
3
5
6
8
7
2
4

*/

(async function () {
    console.log(1);
    setTimeout(() => console.log(2), 0) 
    await Promise.resolve().then(() => console.log(3))
    setTimeout(() => console.log(4), 0)
    console.log(5)
    await Promise.resolve().then(() => console.log(6))
    Promise.reject().catch(() => console.log(7))
    console.log(8)
})()







