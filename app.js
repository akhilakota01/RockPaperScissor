let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
            const userChoice=choice.getAttribute("id");
            palyGame(userChoice)
    })
})
 

const genCompChoice=()=>{
    const options=["rock","paper","scissors"]
    const randIdx=Math.floor(Math.random() * 3);            /*math.random generates decimal numbers randomly between 0-1 ..by multiplyinf with 3 we get between 0-2 
                                                             and by using floor we can remove the decimal places.thus we can generate random Indexes*/
    return options[randIdx];                                        
}

const palyGame=(userChoice)=>{
    
    const compChoice=genCompChoice();
    
    let userWin=true;
    
    if(userChoice===compChoice)
    {
          drawGame();
    }
    else
    {
       
       if (userChoice==="rock")
        {      //compchoice can be paper or scissor
            userWin  =    compChoice === "paper"? false : true
       }
       else if(userChoice==="paper")
       {           //compchoice can be rock or scissor
           userWin  =    compChoice === "scissor"? false : true
       }
       else
       {          //compchoice can be paper or scissor
            userWin  =    compChoice === "rock"? false : true
       }
       showWinner(userWin,userChoice,compChoice);
    }
    
}

const drawGame=()=>{
    msg.innerText="It's a draw! Play Again"
    msg.style.backgroundColor="#081b31"
}

const showWinner=(userWin,userChoice,compChoice)=>{
     if(userWin){
        userScore++;
        userScorePara.innerText=userScore
        msg.innerText=`you Win!  Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
     }
     else{
        compScore++;
        compScorePara.innerText=compScore
        msg.innerText=`you lose. ${compChoice} beats  your ${userChoice}`
        msg.style.backgroundColor="red"
     }
}