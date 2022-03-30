function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
      case 1: 
         return "rock";
         break;
      case 2:
         return "papers";
          break;
      case 3:
          return "scissors";    
    }  
 }
 function playRound(userSelection, computerSelection){
    let userChoice = userSelection.toLowerCase();
    if ( userChoice == computerSelection ){
       console.log("No winners, you both chose " + userChoice);
       return "No winners";
    }else if( userChoice == "rock" && computerSelection == "scissors"){
       console.log("You won, a rock beats scissors.");
       return "won";
    }else if( userChoice == "scissors" && computerSelection == "papers" ){
       console.log("You won, scissors beats papers.");
       return "won";
    }else if( userChoice == "papers" && computerSelection == "rock" ){
       console.log("You won, papers beat a rock.");
       return "won";
    }else {
      console.log("You are a looser, " + userChoice + " is defeated by "+ computerSelection);
      return "lost";
    }
 }
 //console.log(playRound(userSelection, computerSelection));
 function scoreRounds(countUser, countComputer){
     console.log("Your Score....: " + countUser );
     console.log("Computer Score: " + countComputer);
 }

 function game(){    
      let userScores = 0 ;
      let computerScores = 0;
      for(let i = 0; i < 5; i++){
         let userSelection = prompt("Enter your arm: ","Rock, Scissors, Paper");
         let computerSelection = computerPlay();
         let countUser =  0;
         let countComputer = 0;
         let playResult = playRound(userSelection, computerSelection);
         //console.log(playResult);
         console.log("***** The play number " + (i+1) + " score: *****");
         switch(playResult){
             case "No winners": 
               countUser = 0;
               countComputer = 0;
               scoreRounds(countUser, countComputer);
               break;
      
            case "won":
               countUser = 1; 
               countComputer = 0;
               userScores = userScores + 1 ;
               scoreRounds(countUser, countComputer);
               break;
            
            case "lost":
               countUser = 0;
               countComputer = 1;
               computerScores = computerScores + 1;
               scoreRounds(countUser, countComputer);
         }  
      }
      console.log("*** Total Scores ***");
      console.log("User....: " + userScores);
      console.log("Computer: " + computerScores);
 }
 game();