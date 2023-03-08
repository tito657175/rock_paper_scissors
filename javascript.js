// strings for shorthand writing later
let win = "Congrats, U won this round!";
let loose = "Sorry, you lost this round.";
let tie = "Tie, try again.";
let invalid = "Invalid entry ya fu, try rock, paper or scissors. Game is not case sensitive, don't worry.";
let userQuestion = "Select Rock, Paper or Scissors";
let userSelection = "nothing yet";
let total_ties = 0;
let total_wins = 0;
let total_looses = 0;
let total_invalid = 0;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// Respond to corresponding button click
rock.addEventListener('click',function(userSelection) {
    userSelection = 'rock';
    console.log(userSelection);
});
paper.addEventListener('click',function(e) {
    userSelection = 'paper';
    console.log(userSelection);
});
scissors.addEventListener('click',function(e) {
    userSelection = 'scissors';
    console.log(userSelection);
});

// game function that returns counted results
function startGame(userSelection){
    if (userSelection !== "nothing yet"){
        for (count = 1; count < 4; count++) {
            let randomNumber = Math.random();
            //function that gets computer choice
            function getComputerChoice(computerChoice) {
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
        
            //turns function choice into variable
            let computerChoice = getComputerChoice();
            // shows computer choice
            console.log("computer picks: " + computerChoice);
            
            //single variable comparison string
            let together = computerChoice + " " + userSelection;
            
            function gameSelection() {
            if (userSelection == computerChoice){
                total_ties++;
                return tie;
            } else if (together == "rock paper" 
                || together == "paper scissors" 
                || together == "scissors rock"){
                total_wins++;
                return win;
            } else if (together == "rock scissors" 
                || together == "paper rock" 
                || together == "scissors paper"){
                total_looses++;
                return loose;
            } else {
                total_invalid++;
                return invalid;
            }
        }
    }
    
}
}
for (count = 1; count < 4; count++) {
    let randomNumber = Math.random();
    //function that gets computer choice
    function getComputerChoice(computerChoice) {
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

    //turns function choice into variable
    let computerChoice = getComputerChoice();
    // shows computer choice
    console.log("computer picks: " + computerChoice);
    
    //single variable comparison string
    let together = computerChoice + " " + userSelection;
    
    function gameSelection() {
    if (userSelection == computerChoice){
        total_ties++;
        return tie;
    } else if (together == "rock paper" 
        || together == "paper scissors" 
        || together == "scissors rock"){
        total_wins++;
        return win;
    } else if (together == "rock scissors" 
        || together == "paper rock" 
        || together == "scissors paper"){
        total_looses++;
        return loose;
    } else {
        total_invalid++;
        return invalid;
    }
}

    //turns function into string
    let gameResults = gameSelection();
    console.log("The computer picked " + computerChoice + " and you picked " + userSelection);
    console.log(gameResults);

    // display results to html
    let results = "The computer picked " + computerChoice + " and you picked " + userSelection + ". " + gameResults;
    
    console.log("End Of Round " + count);
    console.log("--------------------------");

//return results to user
// alert(results);

//Collect all results here
document.write(results);
document.write("<br> End Of Round " + count + ". <br><br>");
}

//Final Count
document.write("Total times you tied: " + total_ties + "<br>");
document.write("Total times you won: " + total_wins + "<br>");
document.write("Total times you lost: " + total_looses + "<br>");
document.write("Total times you screwed up the text: " + total_invalid + "<br><br>");

function final_results() {
if (total_wins > total_looses) {
    return final_result = "You did it, you won the game! <br>You won with " + total_wins + " wins " + " to " + total_looses + " losses.";
} else if (total_looses > total_wins) {
    return final_result = "You lost the game, sorry. <br>You lost with " + total_wins + " wins " + " to " + total_looses + " losses.";
} else if (total_wins == total_looses) {
    return final_result = "You tied, there is no winner this time.<br> You tied with " + total_wins + " wins " + " to " + total_looses + " losses.";
}
}
// console.log(final_results());
document.write(final_results());
