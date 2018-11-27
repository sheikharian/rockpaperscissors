// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

$("#shoot").click(function(){
    
    var inputVal = $("#input").val();
    $("#userChoice").html(inputVal);
    2
    var computer = Math.random();
    if(1 > computer > 0.7){
        $("#computerChoice").text("Rock");
    }
    else if(0.6 > computer > 0.5){
        $("#computerChoice").text("Paper");
    }
    else if(0.4 > computer){
        $("#computerChoice").text("Scissors");
    }
    
    console.log("#result");
   if (inputVal === "Paper" && 1 > computer > 0.7) {
        $("#result").text("You Are Winnerr!");
    } 
    else if (inputVal === "Paper" && 0.4 > computer === "Scissors") {
        $("#result").text("You Lose.");
    }
    else if (inputVal === "Paper" && 0.6 > computer > 0.5 === "Paper") {
        $("#result").text("A Tie! Try Again.");
    }
    else if (inputVal === "Rock" && 1 > computer > 0.7 === "Rock") {
        $("#result").text("A Tie! Try Again.");
    } 
    else if (inputVal === 0.4 > computer === "Scissors") {
        $("#result").text("You Are Winnerr!");
    }
    else if (inputVal === "Rock" && 0.6 > computer > 0.5 === "Paper") {
        $("#result").text("You Lose.");
    }
    else if (inputVal === "Scissors" && 1 > computer > 0.7 === "Rock") {
        $("#result").text("You Lose.");
    } 
    else if (inputVal === "Scissors" && 0.4 > computer === "Scissors") {
        $("#result").text("A Tie! Try Again.");
    }
    else if (inputVal === "Scissors" && 0.6 > computer > 0.5 === "Paper") {
        $("#result").text("You Are Winnerr!");
    }
});