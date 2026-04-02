
/*
Exercise 1:
Print number 1 to 20  whether the number is odd or even
*/

function printNumbers(){

    console.log("Exercise #1");

    for(let i=0; i<= 20; i++){
        if(i%2 === 0){
            console.log(`${i} is an even number`);
        }
        else{
            console.log(`${i} is an odd number`);
        }

    }
}

printNumbers();

console.log("*****************************************************************************");

/*
Exercise #2
Fibonacci Sequence
0 + 1 = 1
1 

0 1 1 2 3 5 8 13 21
Fn = F(n-1)+F(n-2)
Return the previous number in the sequence

*/


//function to create a fibonacci sequence upto n numbers
function createFibonacciSeq(n){

    console.log("Exercise #2");

    let fibSeq = [0, 1];
    for(let i=2; i<n; i++){
    
        let nextNum = fibSeq[i-1] + fibSeq[i-2];
        if(nextNum < n){

            fibSeq.push(nextNum);
        }
    }
    return fibSeq;
}

console.log(createFibonacciSeq(10));

console.log("*****************************************************************************");

/*
Exercise : #3

*/

(async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json(); // Extracting data as a JSON Object from the response
    // console.log(data);
    
    let result = processTODOInformation(data)
    console.log(result);
})();

// TODO:name your function another name!
/*
1. Unique userIds
2. Number of Completed & Uncompleted tasks
3. Title of UserId 10
*/

function processTODOInformation(data){

    // do work

    const result={
        uniqueUserIDs : [],
        completedTasks : 0,
        uncompletedTasks : 0,
        userIdTitles : []
    }

    /*
    // completedTasks = data.filter(userData => userData.completed).length;
    // uncompletedTasks = data.filter(userData => !userData.completed).length;

    Use "set" instead of "includes"
    const uniqueId = new Set();
    uniqueId.add(userData.userId); 


    */

    for(let userData of data){

        // Get Unique userIds
        if(!result.uniqueUserIDs.includes(userData.userId)){
            result.uniqueUserIDs.push(userData.userId);
        }
        // Get number of Completed Tasks
        if(userData.completed) {
          result.completedTasks = result.completedTasks + 1  
        } 
        // Get number of Uncompleted Tasks
        else{
            result.uncompletedTasks = result.uncompletedTasks + 1;
        }
        // Get the Titles of UserId 10
        if(userData.userId === 10){
            result.userIdTitles.push(userData.title);
        }
    }
    return result;
    
}
