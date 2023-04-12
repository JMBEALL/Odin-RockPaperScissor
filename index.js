function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*3)+1
    // console.log(compChoice)
    if(compChoice === 1){
        return "ROCK";
    } else if (compChoice === 2){
        return "PAPER"
    } else if(compChoice === 3){
        return "SCISSOR"
    }

}

// getComputerChoice()

function getPlayerChoice(){
    let playerChoice = prompt("Do you pick ROCK, PAPER , or SCISSOR?")

playerChoice = playerChoice.toLowerCase();
// if(playerChoice !== "rock" || playerChoice !== "paper" || playerChoice !== "scissor"){
//     playerChoice = prompt("Please choose rock, paper, or scissors! :)")
// }
return playerChoice
// console.log(playerChoice)
}

// playerChoice()

function playRound(func1, func2){
    let compChoice = getComputerChoice().toLowerCase();
    let playerChoice = getPlayerChoice();

    console.log("Computer Choice: ",compChoice)
    console.log("Player Choice: " ,playerChoice);

    if(compChoice === playerChoice ){
        alert("TIE!")
        return "TIE!"
    } else if (compChoice === "rock" && playerChoice === "paper"){
        return "Player won!"
    } else if (compChoice === "rock" && playerChoice === "scissor"){
        return "Computer won!"
    } else if (compChoice === "paper" && playerChoice === "rock"){
        return "Computer won!"
    } else if (compChoice === "paper" && playerChoice === "scissor"){
        return "Player won!"
    } else if (compChoice === "scissor" && playerChoice === "rock"){
        return "Player won!"
    } else if (compChoice === "scissor" && playerChoice === "paper"){
        return "Computer won!"
    } 

}



function game(){
   let compScore = 0;
   let playerScore = 0;
   
   for (let i = 0 ; i<=4 ; i++){
    let winner = playRound(getComputerChoice,getPlayerChoice);
    if(winner === "Computer won!"){
        compScore++
        console.log("Computer won!", "Computer Score: ", compScore)
    } else if( winner === "Player won!"){
        playerScore++
        
        console.log("Player won!", "Player Score: ", playerScore)
    } else if ( winner === "TIE!"){
        
        console.log("TIEEEEEEEE! ;)")
        console.log("Computer Score: ", compScore)
        console.log("Player Score: ", playerScore)
    }
   }
   console.log(" Final Computer Score: ",  compScore);
   console.log(" Final Player Score: ", playerScore)

   if(compScore > playerScore){
    console.log(`Computer won. Computer had a score of ${compScore} while player had a score of ${playerScore}`)
   } else if(playerScore>compScore){
    console.log(`Player won. Player had a score of ${playerScore} while the computer had a score of ${compScore}`)
   } else if (compScore === playerScore){
    console.log(`Good game. However, it ended in a TIE! Player had a score of ${playerScore} while the computer had a score of ${compScore}. Better luck next time!`)
   }
}

game();