choices = document.querySelectorAll(".choice");
message = document.querySelector(".msg");

let userScore = document.querySelector("#your-score");
let compScore = document.querySelector("#comp-score");
let reload=document.querySelector(".reload");

let userscore = 0;
let compscore = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let playerVal = choice.getAttribute("id");
    // console.log(playerVal);
    let compVal = autochoice();
    checkWinner(playerVal, compVal);
  });
});

const autochoice = () => {
  let arr = ["stone", "paper", "scissor"];
  let num = Math.floor(Math.random() * 3);
  return arr[num];
};

const checkWinner = (playerVal, compVal) => {
  if (playerVal === compVal) {
    console.log("its a tie");
    message.innerText = "It's a Tie !!";
  } else if (
    (playerVal === "stone" && compVal === "paper") ||
    (playerVal === "paper" && compVal === "scissor") ||
    (playerVal === "scissor" && compVal === "stone")
  ) {
    message.innerText = "You lose";
    compscore++;
    compScore.innerText=compscore;
    
  } else {
    message.innerText = "You are Winner!!";
    userscore++;
    userScore.innerText=userscore;
  }
};

reload.addEventListener("click",()=>{
    if (userscore>compscore){
        alert("You are the winner of this round");
            userscore = 0;
    compscore = 0;
    userScore.innerText="0";
    compScore.innerText="0";
    }
    else if(userscore=== compscore){
        alert("its a tie for this round");
            userscore = 0;
    compscore = 0;
    userScore.innerText="0";
    compScore.innerText="0";
    }
    else{
        alert("Computer is the best!!")
            userscore = 0;
    compscore = 0;
    userScore.innerText="0";
    compScore.innerText="0";
    }

    // userscore = 0;
    // compscore = 0;
    // userScore.innerText="0";
    // compScore.innerText="0";
   
})
