let announce = document.getElementById("gameAnnouncement");
let playNumber = document.getElementById("playNumber");
let userScore = document.getElementById("userScore");
let computerScore = document.getElementById("computerScore");
let userFinScores = document.getElementById("userScores");
let computerFinScores = document.getElementById("computerScores");
let finalColor = document.getElementById("finalColor");
let restart = document.getElementById("restart");

function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
      case 1: 
         return "Rock";
         break;
      case 2:
         return "Papers";
          break;
      case 3:
          return "Scissors";    
    }  
}

 function playRound(userSelection, computerSelection){
    let userChoice = userSelection;
    if (userChoice == computerSelection){
      announce.innerText = "No winners, you both chose "+ userChoice;
      return "No winners";
    }else if(userChoice == "Rock" && computerSelection == "Scissors"){
      announce.innerText = "Winner, rock beat scissors.";
      return "won";
   }else if(userChoice == "Rock" && computerSelection == "Papers"){
      announce.innerText = "Looser, papers beat rock.";
      return "lost";
   }else if(userChoice == "Papers" && computerSelection == "Scissors"){
      announce.innerText = "Looser, papers beat rock.";
      return "lost";
   }else if(userChoice == "Scissors" && computerSelection == "Rock"){
      announce.innerText = "Looser, rock beat scissors";
       return "lost";   
   }else if(userChoice == "Scissors" && computerSelection == "Papers"){
      announce.innerText = "You won, scissors beat papers. ";
      return "won";
   }else if( userChoice == "Papers" && computerSelection == "Rock" ){
      announce.innerText = "You won, papers beat a rock. ";
      return "won";
   }else{
      announce.innerText = "Something wrong";
   }
 }

function scoreRounds(countUser, countComputer, userPick, computerPick){
     userScore.innerText = "You"+"("+userPick +"):  " + countUser;
     computerScore.innerText = "Robot"+"("+computerPick +"):  "  + countComputer
}

let userScores = 0 ;
let computerScores = 0;

function game(userSelection, gameCount){    
         let computerSelection = computerPlay();
         let countUser =  0;
         let countComputer = 0;
         let playResult = playRound(userSelection, computerSelection);
         playNumber.innerText = "Round " + (gameCount+1) + " Score: "
         switch(playResult){
             case "No winners": 
               countUser = 0;
               countComputer = 0;
               scoreRounds(countUser, countComputer, userSelection, computerSelection);
               break;
      
            case "won":
               countUser = 1; 
               countComputer = 0;
               userScores = userScores + 1 ;
               scoreRounds(countUser, countComputer, userSelection, computerSelection);
               break;
            
            case "lost":
               countUser = 0;
               countComputer = 1;
               computerScores = computerScores + 1;
               scoreRounds(countUser, countComputer, userSelection, computerSelection);

         }  
      }
 let userSelection = "";
 let gameCount = 0;
 let btn1 = document.getElementById("btn1");
 let btn2 = document.getElementById("btn2");
 let btn3 = document.getElementById("btn3");
 
 btn1.onclick = function(){
         userSelection = btn1.textContent;
         game(userSelection, gameCount);
         gameCount++;
         setColor(userScore);
         setColor(computerScore);
         endScore(gameCount);
 }
 btn2.onclick = function(){
         userSelection = btn2.textContent;
         game(userSelection, gameCount);
         gameCount++;
         setColor(userScore);
         setColor(computerScore);
         endScore(gameCount);
 }
 btn3.onclick = function(){
         userSelection = btn3.textContent;
         game(userSelection, gameCount);
         gameCount++;
         setColor(userScore);
         setColor(computerScore);
         endScore(gameCount);
 }
      
 function endScore(clickCount){
        if(clickCount > 2){
          userFinScores.innerText =  "You: " + userScores;
          computerFinScores.innerText = "Robot: " + computerScores;

        }  
        if(clickCount >= 5 ){
          btn1.disabled = true;
          btn2.disabled = true;
          btn3.disabled = true;
          btn1.classList.remove("buttonHover");
          btn2.classList.remove("buttonHover");
          btn3.classList.remove("buttonHover");
          setColor(finalColor);
          restart.classList.add("restartClick");
          restart.onclick = function(){
             console.log("ok");
            window.location.reload();
          }
        } 
 }  
 const setColor = (toColor) => {
   const ranColor = Math.floor(Math.random()*16777215).toString(16);
   toColor.style.backgroundColor = "#" + ranColor;
 }
 
 
