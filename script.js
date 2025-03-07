// document.addEventListener("DOMContentLoaded", () => {

let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userScore = document.querySelector("#your-score");
let compScore = document.querySelector("#comp-score");

const guessbycomp = () => {
  let arr = ["stone", "paper", "scissor"];
  let num = Math.floor(Math.random() * 3);
  return arr[num];
};

const checkWinner = (yourChoice, compChoice) => {
  if (yourChoice === compChoice) {
    return "It's a Tie !!";
  } else if (
    (yourChoice === "stone" && compChoice === "paper") ||
    (yourChoice === "paper" && compChoice === "scissor") ||
    (yourChoice === "scissor" && compChoice === "stone")
  ) {
    return "You lost this Time";
  } else {
    return "Congratulations You are Winner!!";
  }
};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const yourChoice = choice.getAttribute("id");
    console.log("you have selected the", yourChoice);
    const compChoice = guessbycomp();
    console.log("computer have selected the", compChoice);

    winner = checkWinner(yourChoice, compChoice);
    console.log(winner);

    msg.innerText = checkWinner(yourChoice, compChoice);
    color();
 
    // msg.classList.remove("none");
  });
});


const color = () =>{
if(msg.innerText==="It's a Tie !!"){
    msg.classList.add("yellow");
    msg.classList.remove("green","red");
}
else if(msg.innerText==="You lost this Time"){
    msg.classList.add("red");
    msg.classList.remove("green","yellow");
    compscore+=1;
    compScore.innerText=(compscore);
}
else{
    msg.classList.add("green");
    msg.classList.remove("red","yellow");
    userscore+=1;
    userScore.innerText=(userscore);
}
}


function reloadPage() {
    location.reload(); // Reloads the current page
  }