//Start Page

//Create ‘Start Quiz’ button. 

const quizContainer = document.querySelector(".quiz-container");
const startQuiz = document.createElement("button");
startQuiz.classList.add("startBtn");
startQuiz.textContent = "Start Quiz";
quizContainer.appendChild(startQuiz);

//Set Start Quiz button to disabled
document.querySelector(".startBtn").disabled = true;

//Select name input field
const inputName = document.getElementById("input-name");

//Test validation for name input field via Start Quiz button status
inputName.addEventListener("input", function(e){
    let regex = /^[A-Za-z]+$/; //matching letters for a first name only
    
    // If name matches regex, button is enabled and user can start game
    if(inputName.value.match(regex)){
        document.querySelector(".startBtn").disabled = false;
    } 
    else {
        //Button is disabled 
        document.querySelector(".startBtn").disabled = true;
    }
});