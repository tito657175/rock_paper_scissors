// strings for shorthand writing later
let win = "Congrats, U won this round!";
let loose = "Sorry, you lost this round.";
let tie = "Tie, try again.";
let invalid = "Invalid entry ya fu, try rock, paper or scissors. Game is not case sensitive, don't worry.";
let final_result = '';
let total_ties = 0;
let total_wins = 0;
let total_looses = 0;
let total_invalid = 0;


function gameStart(input){
    document.getElementById("Messages").innerHTML = input;
    console.log('user input is: ' + input);
    console.log('computer choice is: ' + getComputerChoice());
    return combineChoices(getComputerChoice(),input)
}

// game function that returns counted results
    // for (count = 1; count < 4; count++) {
        //function that gets computer choice
        function getComputerChoice(computerChoice) {
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
            console.log("this is combined choice function: " + comp + ' ' + user);
            let together = comp + ' ' + user;
            console.log(together);
            gameResults(together);
        }

        // let together = getComputerChoice() + " " + reachingOut();
        
        //game selector function start
        function gameResults(together) {
        if (together == 'rock rock' 
            || together == 'paper paper' 
            || together == 'scissors scissors'){
            total_ties++;
            console.log(tie);
            final_results();
        } else if (together == "rock paper" 
            || together == "paper scissors" 
            || together == "scissors rock"){
            total_wins++;
            console.log(win);
            final_results();
        } else if (together == "rock scissors" 
            || together == "paper rock" 
            || together == "scissors paper"){
            total_looses++;
            console.log(loose);
            final_results();
        } else {
            total_invalid++;
            final_results();
        }
        }
// }

// display results
// let results = "The computer picked " + getComputerChoice() + " and you picked " + start() + ". " + gameResults();
// console.log(results);

//console.log("End Of Round " + count);
//console.log("--------------------------");

//return results to user
// alert(results);

//Collect all results here
/* document.write(results);
document.write("<br> End Of Round " + count + ". <br><br>");
*/

/* Final Count
document.write("Total times you tied: " + total_ties + "<br>");
document.write("Total times you won: " + total_wins + "<br>");
document.write("Total times you lost: " + total_looses + "<br>");
document.write("Total times you screwed up the text: " + total_invalid + "<br><br>");
*/

function final_results() {
    if (total_wins > total_looses) {
        final_result = "You did it, you won the game! <br>You won with " + total_wins + " wins " + " to " + total_looses + " losses.";
        return console.log(final_result);
    } else if (total_looses > total_wins) {
        final_result = "You lost the game, sorry. <br>You lost with " + total_wins + " wins " + " to " + total_looses + " losses.";
        return console.log(final_result);
    } else if (total_wins == total_looses) {
        final_result = "You tied, there is no winner this time.<br> You tied with " + total_wins + " wins " + " to " + total_looses + " losses.";
        return console.log(final_result);
    }
}

// console.log(final_results());
// document.write(final_results());
