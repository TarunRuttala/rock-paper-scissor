let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
const gameDraw = ()=>{
    console.log("game draw! play again!");
    msg.innerHTML = "draw! play again"
    msg.style.backgroundColor = "#081b31";

};
const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerHTML = userScore;
        console.log('you win!');
        msg.innerHTML = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else {
        compScore++;
        compScorePara.innerHTML = compScore;
        console.log('you lose!');
        msg.innerHTML= `You lost. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);
    if(userChoice === compChoice)
    {
        gameDraw();
    }
    else 
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            userWin = compChoice === "paper"?false:true;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "scissor"?false:true;
        }
        else {
            userWin = compChoice === "paper"?true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
};
choices.forEach((choice)=>{
   
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});