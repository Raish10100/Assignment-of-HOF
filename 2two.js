/*Random Number genrator with Delay and progress indication */
/*The goal of this program is to generate a random number after a delay of 3 seconds,and store the delay in a variable
so can be modified.The program displays a message every second indicating the time remaining until the random 
number is generated and then outputs the generated number. */


const delayInSeconds = 3 ;
var remainingTime = delayInSeconds
console.log(`Starting countdown for ${remainingTime} seconds...`);

function countDown(){
    if(remainingTime > 0){
        console.log(`Time remaining: ${remainingTime} seconds`);
        remainingTime--;
        setTimeout(countDown,1000);
    }else{
        var randomNumber = Math.floor(Math.random() * 100)
    console.log(`Random number generated: ${randomNumber}`);
    }
}

setTimeout(countDown,1000)