// All strings for shorthand writing later and to hold counts
const win = "Congrats, you won this round!";
const loose = "Sorry, you lost this round.";
const tie = "Tie, try again.";
let invalid = "Invalid entry ya fu, try rock, paper or scissors. Game is not case sensitive, don't worry.";
let currentRound = ''
let playerChoice = '';
let final_result = '';
let computerChoice = '';
let total_ties = 0;
let total_wins = 0;
let total_looses = 0;
let total_invalid = 0;


function gameStart(input){
    playerChoice = input;
    console.log('user input is: ' + playerChoice);
    console.log('computer choice is: ' + getComputerChoice());
    combineChoices(getComputerChoice(),playerChoice);

}

// game function that returns counted results
    // for (count = 1; count < 4; count++) {
        //function that gets computer choice
        function getComputerChoice() {
            let randomNumber = Math.random();
            if (randomNumber <= .33){
                computerChoice = "rock";
                return computerChoice;
            } else if ( randomNumber >.33 && randomNumber <.63) {
                computerChoice = "paper";
                return computerChoice;
            } else {computerChoice = "scissors";
                return computerChoice;
            }
        }
        
        //single variable comparison string
        function combineChoices(comp,user){
            let together = comp + ' ' + user;
            gameResults(together);
        }
        
        //game selector function start
        function gameResults(together) {
        if (together == 'rock rock' 
            || together == 'paper paper' 
            || together == 'scissors scissors'){
            currentRound = tie;
            total_ties++;
            final_results();
        } else if (together == "rock paper" 
            || together == "paper scissors" 
            || together == "scissors rock"){
            currentRound = win;
            total_wins++;
            final_results();
        } else if (together == "rock scissors" 
            || together == "paper rock" 
            || together == "scissors paper"){
            currentRound = loose;
            total_looses++;
            console.log(loose);
            final_results();
        } else {
            total_invalid++;
            final_results();
        }
        }
// }

function final_results() {
    if (total_wins > total_looses) {
        final_result = "You did it, you are winning the game overall! You are winning with " 
        + total_wins + " wins" + " to " + total_looses + " losses and " + total_ties + " total times tied.";
        console.log(final_result);
        displayStuff();
    } else if (total_looses > total_wins) {
        final_result = "You are losing the game so far. You are loosing with " 
        + total_wins + " wins" + " to " + total_looses + " losses and " + total_ties + " total times tied.";
        console.log(final_result);
        displayStuff();
    } else if (total_wins == total_looses) {
        final_result = "You are tied, there is no winner right now. You are tied with " 
        + total_wins + " wins" + " to " + total_looses + " losses and " + total_ties + " total times tied.";
        console.log(final_result);
        displayStuff();
    }
}

function displayStuff(){
    document.getElementById("playerChoice").innerHTML = 'You Chose ' + capitalizeWord(playerChoice);
    document.getElementById("computerChoice").innerHTML = 'The Computer Picked ' + capitalizeWord(computerChoice);
    document.getElementById("currentRound").innerHTML = 'Results of this round are: ' + currentRound;
    document.getElementById("score").innerHTML = final_result;
}

function capitalizeWord (word){
    let newWord = word.charAt(0).toUpperCase()+ word.slice(1);
    return newWord;
}
