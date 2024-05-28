let guesses = document.getElementById("number_of_guess");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrong = document.getElementById("wrong");

let answer = Math.floor(Math.random()*100)+ 1;
console.log(answer);

btn.addEventListener("click", () =>{
    guessesNumber();
})

let numberOfGuesses = 0 ;
const time = 5000;

function guessesNumber(){
    if(input.value < 1 || input.value > 100 || isNaN(input.value)){
        wrong.innerHTML = "Enter a number between 1 and 100";
    }
    else{
        numberOfGuesses ++;
        guesses.innerHTML = `Number of Guesses: ` + numberOfGuesses;
        if (input.value > answer){
            wrong.innerHTML = "You Guessed to High" ;
            input.value = "";
        }
        else if(input.value < answer){
            wrong.innerHTML = "You Guessed to low" ;
            input.value = "";
        }
        else{
            wrong.innerHTML = "Congratulation you guessed the right number"
            btn.disabled = true;
            setTimeout(()=>{
                restartGame();
            }, time)
        }
    }

    function restartGame(){
        wrong.innerHTML = '';
        numberOfGuesses = 0;
        guesses.innerHTML = `Number of Guesses: ` + numberOfGuesses;
        answer =  Math.floor(Math.random()*100)+ 1;
        input.value = "";
        btn.disabled = false;
    }

    

}
