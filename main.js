/*-------------------------Start Page-------------------------*/

//Set Start game button to disabled
let startBtn = document.querySelector(".startBtn");
document.querySelector(".startBtn").disabled = true;

//get start page container
let startContainer = document.querySelector("#start-container");

//Hide quiz page
let quizContainer = document.querySelector("#quiz-container");
quizContainer.style.visibility = "hidden";

//Select name input field
const inputName = document.getElementById("input-name");

//Test validation for name input field via Start Quiz button status
inputName.addEventListener("input", function(e){
    let regex = /^[A-Za-z]+$/; //matching letters for a first name only
    
    // If name matches regex, button is enabled and user can start game
    if(inputName.value.match(regex)){
        document.querySelector(".startBtn").disabled = false;
        //call a function here that makes button load to new page?
    } 
    else {
        //Button is disabled 
        document.querySelector(".startBtn").disabled = true;
    }
});

//Display Quiz page when Start game button is clicked 
startBtn.addEventListener("click", function(e){
    startContainer.remove();
    quizContainer.style.visibility = "visible";
});


/*-------------------------Quiz Page-------------------------*/
//Get input (user's name) and display on quiz game page
startBtn.addEventListener("click", function(e){ 
    if(inputName.value !== " ") {
        let name = document.querySelector(".player1")
        name.textContent = "Player 1: " + inputName.value;
        quizContainer.appendChild(name);
    }
});
