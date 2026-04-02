
const array = [1, 2, 3, 4, 5];

function loopArray(arr) {
    for (const item of arr) {
        console.log(item);
    }
}

loopArray(array);
 function loop(arr,fun)
    {        for (const item of arr) {
        fun(item);
    }
    }

    array.forEach(display);

    // array.forEach((item) => double(item));
array.forEach(()=>double);


function display(item){
    console.log(item);
}

function double(item){
    return item * 2;
}




// loop(array,display);
// loop(array,double(2));

//Transform the array to double array



function doubleItem(arr,fun){
    const doubleArray = [];
    
    for (const item of arr) {
        doubleArray.push(fun(item));
    }
    console.log(doubleArray);
}

doubleItem(array,double);


// create a function takes an array and filters through an array without another function without using array.filter

function filterArray(arr, fun) {
    const filteredArray = [];
    
    for (const item of arr) {
        if (fun(item)) {
            filteredArray.push(item);
        }
    }
    return filteredArray;
}

function isEven(num) {
    return num % 2 === 0;
}

const evenNumbers = filterArray(array, isEven);
console.log(evenNumbers);


const playerExperience = [
    {
        name: "John",
        experience: 5
    },
    {
        name: "Jane",
        experience: 3
    },
    {
        name: "Doe",
        experience: 8
    }
];

function displayPlayersName(){
    for(const player of playerExperience){
        console.log(player.name);
    }
}

function filterPlayersByExperience(players, filterCondition) {
    const playerNames = [];
    for(const player of players){
        playerNames.push(filterCondition(player));
    }
    return playerNames;
}

// console.log(filterPlayersByExperience(players,displayPlayersName))

const newArray = playerExperience.map((player) => {
    player.experience += 1;
    return player;
})

console.log(newArray);

function manualFilter(arr,callBackFn){
    const newArray = arr.map(callBackFn);
    console.log(newArray);
}

function manualFilter(arr,callBackFn){
    const newArray = [];
    for(const item of arr){
        const result = callBackFn(item);
        if(result){
            newArray.push(result);
        }
    }
    console.log(newArray);
}

function checkExperience(player){
    if(player.experience > 6){
        return true;
    }
    return false;
}

function filterByExp(player){
   if( player.experience > 6){
        return player;
   }
   return null;
}

manualFilter(playerExperience,filterByExp);


function squareOrSquareRoot(array) {
  const result = array.map((item) => {
    console.log("Item ::::: "+item);
    return Math.sqrt(item);
  })
  console.log("Output ::::: "+result);
  return result;  
}

squareOrSquareRoot([1, 2, 3, 4, 5]);

function removeEveryOther(arr){
  //your code here
  const newArr = [];
  for(let i=0; i < arr.length; i+=2){
    newArr.push(arr[i]);
  }
  console.log("Output ::::: "+newArr);
  return newArr;
}

removeEveryOther(['Hello', 'Goodbye', 'Hello Again']);


