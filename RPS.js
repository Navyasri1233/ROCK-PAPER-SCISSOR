let usrscr=0;
let compscr=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscrPara=document.querySelector("#user-score");
const compscrPara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    let options=["rock","paper","scissor"]
    const rndmIdx=Math.floor(Math.random()*3);
    return options[rndmIdx];
}

const drawGame=()=>{
   msg.innerText="Its a Draw game,try again";
   msg.style.backgroundColor="blue";

}
const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        msg.innerText=`you won!!! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"
        usrscr++;
        userscrPara.innerText=usrscr;
    }else{
        msg .innerText=`you lost :( . ${compChoice} beats your ${userchoice}`
        msg.style.backgroundColor="red"
        compscr++;
        compscrPara.innerText=compscr;
    }
}

const playGame=(userchoice)=>{
    //generate computer choice
    const compChoice=genCompChoice();

    if(userchoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userchoice==="rock"){
            //scissor or paper
           userWin= compChoice==="paper"? false:true
        }else if(userchoice==="paper"){
            //scissor or rock
           userWin= compChoice==="scissor"? false:true
        }else{
            //paper or rock 
            userWin= compChoice==="rock"?false:true
        }
        showWinner(userWin, userchoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    playGame(userchoice);
    })
});