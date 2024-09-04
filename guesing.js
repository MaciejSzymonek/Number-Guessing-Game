

const minNUm = 1;
const maxNum = 50;
const answer = math.floor(math.random() * (maxNum - minNum + 1));

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt('guess a number between ${minNum} - ${maxNum}');
    guess = Number(guess);
   
    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }
    else if (guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }

    running = false;
}