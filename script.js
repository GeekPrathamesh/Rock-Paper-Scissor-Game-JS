// document.addEventListener("DOMContentLoaded", () => {

let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const choiceid=choice.getAttribute("id");
        console.log("you have selected the",choiceid);
    });

})