//Initialization
let gameSeq = [];
let userSeq = [];
let started = false;
let btns = ["yellow","red","green","purple"];
let leval = 0;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let highestLeval = 0;
//Logic = keyboard
document.addEventListener("keypress", function(event){
    if(started== false && event.key =="Enter"){
        console.log("The game is Started");
        started == true;
        levalUp();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levalUp(){
    userSeq = [];
    leval++;
    console.log(leval);
    h2.innerText= `leval ${leval}`;
    //highest Score
    highestScores();
    //choosing Random Number
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randButton = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randButton);
   
}



function checkAns(idx){
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levalUp, 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Press ENTER to start again <br>Your Score is ${leval} <b></b><br>`;

        reset();
    }
}
function btnPress(){
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".box");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false; 
    gameSeq = []; 
    userSeq = [];
    leval = 0;
}
function highestScores(){
    if (leval > highestLeval) {
        highestLeval = leval;
        h3.innerText = `Your Highest Score is ${highestLeval}`;
    }
}
