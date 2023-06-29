//! Selectors

const selectionArticle = document.querySelector(".selection")

//Secilen elemanlarin tasiyicilari
const yourChoiceDiv = document.getElementById("your-choice")
const pcChoiceDiv = document.getElementById("pc-choice")

//Message
const messagePar = document.querySelector(".message")

//Score
const scoreCardSection = document.querySelector(".score-card")
const pcScoreSpan = document.querySelector("#pc-score")
const yourScoreSpan = document.querySelector("#your-score")
const domTopScore = document.querySelector("#top-score")

//Modal
const modalCardSection = document.querySelector(".modal-card")
const finalMessagePar = document.querySelector("#final-message")
const playAgainButton = document.querySelector("#play-again")

//!Variables
let userSelectImg = document.createElement("img")
let pcSelectImg = document.createElement("img")
let pcArr;
let pcRandom;

// Colors
const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";

//!Event Listeners

selectionArticle.addEventListener("click",(e)=>{
    // console.log(e.target.id);
    if(e.target.id){
        userSelectImg.src = `./assets/${e.target.id}.png`
        userSelectImg.alt= e.target.id
        yourChoiceDiv.appendChild(userSelectImg)
        createPcSelection()
    }
   
})

playAgainButton.addEventListener("click",() => {
    modalCardSection.style.display = none
    window.location.reload()
})

//!Function
const createPcSelection = () =>{
    pcArr = ["rock","paper","scissor"]
    pcRandom = pcArr[Math.floor(Math.random()*3)]
    pcSelectImg.src = `./assets/${pcRandom}.png`
    pcSelectImg.alt= pcRandom
    pcChoiceDiv.appendChild(pcSelectImg)
    calculateResult()
}

const calculateResult = () =>{
    // console.log(pcSelecting.alt);

    // Esitlik Durumu
    if(userSelectImg.alt === pcRandom){
        draw();
    }
    else {
        if (userSelectImg.alt === "rock") { pcRandom === "paper" ? youLost() : youWin();} 
        else if (userSelectImg.alt === "scissor") {pcRandom === "rock" ? youLost() : youWin();}
        else if (userSelectImg.alt === "paper") {pcRandom === "scissor" ? youLost() : youWin();}
    }

    if (pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10") {
        openModal()
    }
}
const draw = () => {
    messagePar.textContent = "Its a draw";
    scoreCardSection.style.color = YELLOW;
    messagePar.style.backgroundColor = YELLOW;
}

const youLost = () => {
    messagePar.textContent = "You Lost";
    scoreCardSection.style.color = RED;
    messagePar.style.backgroundColor = RED;
    pcScoreSpan.textContent++
}

const youWin = () => {
    messagePar.textContent = "You Win";
    scoreCardSection.style.color = GREEN;
    messagePar.style.backgroundColor = GREEN;
    yourScoreSpan.textContent++
    topScoreScheck()
}
const openModal = () => {
    modalCardSection.classList.add("show")
    if (yourScoreSpan.textContent === "10") {
        finalMessagePar.textContent = "💃 You win"
        document.querySelector(".modal").style.backgroundColor = GREEN
        playAgainButton.style.color = GREEN
    }
    else {
        finalMessagePar.textContent = "☹️ You Lost"
        document.querySelector(".modal").style.backgroundColor = RED
        playAgainButton.style.color = RED
    }
}







// Ilkel Yöntem

// const rockImg = document.getElementById("rock");
// const paperImg = document.getElementById("paper");
// const scissorImg = document.getElementById("scissor");
// const yourChoiceDiv = document.getElementById("your-choice")


// rockImg.addEventListener("click", () =>{
//     userSelecting.src = "./assets/rock.png"
//     userSelecting.alt= "./assets/rock.png"
//     yourChoiceDiv.appendChild(userSelecting)
//     yourChoiceDiv.innerHTML = ´<img src="./assets/rock.png">´
// })

// paperImg.addEventListener("click", () =>{
//     userSelecting.src = "./assets/paper.png"
//     userSelecting.alt= "./assets/paper.png"
//     yourChoiceDiv.appendChild(userSelecting)
// })

// scissorImg.addEventListener("click", () =>{
//     userSelecting.src = "./assets/scissor.png"
//     userSelecting.alt= "./assets/scissor.png"
//     yourChoiceDiv.appendChild(userSelecting)
// })