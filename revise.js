let choice = Array.from(document.querySelectorAll(".choice"));
let resetBtn = document.querySelector(".reload");

let compscore = 0;
let userscore = 0;
choice.forEach((choice) => {
  choice.addEventListener("click", () => {
    let CompChoice = computerChoice();
    console.log(CompChoice, " : computer");
    let userChoice = choice.getAttribute("id");
    console.log(userChoice, ": user");
    winnerCheck(CompChoice, userChoice);
  });
});

const computerChoice = () => {
  let num = Math.floor(Math.random() * 3);
  let arr = ["stone", "paper", "scissor"];
  return arr[num];
};
const winnerCheck = (CompChoice, userChoice) => {
  if (CompChoice === userChoice) {
    document.querySelector(".msg").innerText = "Its a Tie..!!";
  } else if (
    (userChoice === "stone" && CompChoice === "paper") ||
    (userChoice === "paper" && CompChoice === "stone") ||
    (userChoice === "scissor" && CompChoice === "paper")
  ) {
    document.querySelector(".msg").innerText = "You Win..";
    userscore++;
    document.querySelector("#your-score").innerText = userscore;
  } else {
    document.querySelector(".msg").innerText = "Computer Wins..";
    compscore++;
    document.querySelector("#comp-score").innerText = compscore;
  }
};
resetBtn.addEventListener("click", () => {
  let bool = confirm("realy want to reset the game??");
  if (bool) {
    if (compscore > userscore) {
      alert("smarter always wins");
    } else if (userscore > compscore) {
      alert("Human is king");
    } else {
      alert("its a tie");
    }
    compscore = 0;
    document.querySelector("#comp-score").innerText = compscore;
    userscore = 0;
    document.querySelector("#your-score").innerText = userscore;
  }
});
