//Start Page

//Set Start Quiz button to disabled
let startBtn = document.querySelector(".startBtn");
document.querySelector(".startBtn").disabled = true;

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

//Load new page of questions and answers in the same tab when start button is clicked. 
startBtn.addEventListener("click", function(e){
    window.open("quizques.html", "_self");
});
