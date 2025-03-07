// document.addEventListener("DOMContentLoaded", () => {

let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".choice");

const guessbycomp = ()=>{
    let arr = ["stone","paper","scissor"];
    let num=Math.floor(Math.random()*3);
    return arr[num] ;

}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{


        const yourChoice=choice.getAttribute("id");
        console.log("you have selected the",yourChoice);
        const compChoice=guessbycomp();
        console.log("computer have selected the",compChoice);


        
    });

})