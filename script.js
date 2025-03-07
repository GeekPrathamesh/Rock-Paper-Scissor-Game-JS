// document.addEventListener("DOMContentLoaded", () => {

let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".choice");

const guesscomp = ()=>{
    let arr = ["rock","paper","scissor"];
    let num=Math.floor(Math.random()*3);
    return arr[num] ;


}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const choiceid=choice.getAttribute("id");
        console.log("you have selected the",choiceid);
    });

})