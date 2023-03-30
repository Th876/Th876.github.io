/*-------------------------Start Page-------------------------*/

//Set Start game button to disabled
let startBtn = document.querySelector(".startBtn");
document.querySelector(".startBtn").disabled = true;

//Get start page container
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
        // console.log(playerNames);
    }
    generateQuestions();
});

// Questions & answers

//Store questions and answers; and validate answers - TESTING WITH 6 QUESTIONS FIRST
let quiz = [

    // Round One starts
    {
        question: "The code in The Matrix comes from what food recipes?",
        
        optionA: "Sushi",
        optionB: "Stir-fry", 
        answer: "option-a",
},

{
    question: "Where were The Lord of the Rings movies filmed?",

    optionA: "Iceland",
    optionB: "New Zealand",
    answer: "option-b",
},

{
    question: "Freddy Krueger wears a striped sweater that is which colors?",
    
    optionA: "Red and green",
    optionB: "Red and blue", 
    answer: "option-a",
},

{
    question: "Which of these two Marvel movies was released first?",

    optionA: "Iron Man",
    optionB: "Captain America: The First Avenger", 
    answer: "option-b",
},

{
    question: "What is the name of the camp where counselors are terrorized by a slasher in Friday the 13th?",

    optionA: "Camp Holland Lake", 
    optionB: "Camp Crystal Lake", 
    answer: "option-b",
},

{
    question: "Which singer starred alongside Steve Martin in 2006’s remake of The Pink Panther?",

    optionA: "Beyoncé", 
    optionB: "Britney Spears",
    answer: "option-a",
},

// Round Two starts

//Round Three starts
];

//Set counter for question and points
const lastQuestion = quiz.length - 1;
let questionNow = 0;
let points = 0;

//Select space for questions, answer options and points to generate 
const quesContainer = document.querySelector("#ques-container");
const quizQuestions = document.querySelector("#quiz-questions");
quesContainer.appendChild(quizQuestions);
const optionA = document.getElementById("option-a");
const optionB = document.getElementById("option-b");
let humanPoints = document.getElementById("human-points");
let humanPlayerPoints = document.querySelector("#human-player-points"); 
let humanTotalPoints = document.querySelector("#human-total-points");

//Create function to generate questions and answers
function generateQuestions() {
    //Create audio element
    // let backgroundMusic = new Audio();
    // backgroundMusic.src = " .mp3";
    // backgroundMusic.play();

    //Updates points received out of the questions that exist
    humanTotalPoints.textContent = quiz.length;

    //Generate each question in the array at this position on the page and set its text content
    quizQuestions.textContent = quiz[questionNow].question;
    
    //Set the text content of every first option (optionA)
    optionA.textContent = quiz[questionNow].optionA;

     //Set the text content of every second option (optionB)
     optionB.textContent = quiz[questionNow].optionB;
}

 generateQuestions();


       //Create function to validate answers
    optionA.addEventListener("click", function(e) {
    //if user clicks the first option and it is correct, show green border
        if(quiz[questionNow].answer === "option-a") {
            //increment points
            points++;

            // console.log(humanPoints.children); testing to see its children
            humanPoints.children[0].textContent = points;
            // console.log(points); testing to see if its incrementing
            optionA.style.border = "2px solid var(--green)";
        }  
        //if user clicks the first option and it is correct, show red border
        else {
            optionA.style.border = "2px solid var(--red)"; 
        }


       //Generate next question
       if(questionNow < lastQuestion) {
        questionNow++; 
        
        //Delay next set of questions & answers; reset border to black
        setTimeout(() => {
        optionA.style.border = "1px solid var(--black)";
        generateQuestions();
        } , 1000);
       }
        });

        optionB.addEventListener("click", function(e) {
            //if user clicks the first option and it is correct, show green border
                if(quiz[questionNow].answer === "option-b") {
                     //increment points
                    points++;
                    humanPoints.children[0].textContent = points;
                    optionB.style.border = "2px solid var(--green)"; 
               } 
               //if user clicks the first option and it is correct, show red border
               else {
                optionB.style.border = "2px solid var(--red)"; 
               }

                //Generate next question
               if(questionNow < lastQuestion) {
                questionNow++;
             
                //Delay next set of questions & answers; reset border to black
                setTimeout(() => {
                    optionB.style.border = "1px solid var(--black)";
                    generateQuestions();
                    } , 1000);
               }
                });
