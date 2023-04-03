/*-------------------------Start Page-------------------------*/

//Set Start game button to disabled
let startBtn = document.querySelector(".startBtn");
document.querySelector(".startBtn").disabled = true;

//Select start page container
let startContainer = document.querySelector("#start-container");

//Select footer
let footer = document.querySelector("footer");

//Select background video
let videoBkground = document.querySelector(".vid-background");

//Select name input field
const inputName = document.getElementById("input-name");

//Center input text & placeholder on start page
inputName.style.textAlign = "center";

//Test validation for name input field via Start Quiz button status
inputName.addEventListener("input", function (e) {
  //matching letters for a first name with or without hyphen & no space
  let regex = /^[a-zA-Z]+(-[a-zA-Z]+)?$/;

  // If name matches regex, button is enabled and user can start game
  if (inputName.value.match(regex)) {
    document.querySelector(".startBtn").disabled = false;
  } else {
    //Button is disabled
    document.querySelector(".startBtn").disabled = true;
  }
});

//Display Quiz page when Start game button is clicked
startBtn.addEventListener("click", function (e) {
  startContainer.style.visibility = "hidden";
  quizContainer.style.visibility = "visible";
  videoBkground.style.visibility = "hidden";
  hidePopUp();
});

/*-------------------------Quiz Questions and Answers-------------------------*/
//Get input (user's name) and display on quiz game page
startBtn.addEventListener("click", function (e) {
  if (inputName.value !== " ") {
    let name = document.querySelector(".player-name");
    name.textContent = "Player: " + inputName.value;
  }
  generateQuestions();
  quizMusic();
});

// Questions, Answer Options and validated answers
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
    question:
      "What is the name of the camp where counelosrs are terrorized by a slasher in Friday the 13th?",

    optionA: "Camp Holland Lake",
    optionB: "Camp Crystal Lake",
    answer: "option-b",
  },

  {
    question:
      "Which singer starred alongside Steve Martin in 2006’s remake of The Pink Panther?",

    optionA: "Beyoncé",
    optionB: "Britney Spears",
    answer: "option-a",
  },

  // Round Two starts

  {
    question: "In Mean Girls, Cady moves to Illinois from which continent?",

    optionA: "Africa ",
    optionB: "Asia",
    answer: "option-a",
  },

  {
    question:
      "Which professional athlete was considered for the lead in The Terminator?",

    optionA: "Mike Tyson",
    optionB: "O.J. Simpson",
    answer: "option-b",
  },

  {
    question: "Which Star Wars characters appear in Indiana Jones?",

    optionA: "R2-D2 and C-3PO",
    optionB: "Luke Skywalker and Princess Leia",
    answer: "option-a",
  },

  {
    question:
      "In The Ring, how long do people have to live after they watch a cursed videotape?",

    optionA: "Seven days",
    optionB: "Five days",
    answer: "option-a",
  },

  {
    question: "What was Tyler Perry’s first movie as Madea?",

    optionA: "Diary of a Mad Black Woman",
    optionB: "Madea Goes to Jail",
    answer: "option-a",
  },

  {
    question: "What is the name of Jessie’s horse in Toy Story 2?",

    optionA: "Gallop",
    optionB: "Bullseye",
    answer: "option-b",
  },

  //Round Three starts
  {
    question: "What item is in every Fight Club scene?",

    optionA: "Coca-Cola",
    optionB: "Starbucks cup",
    answer: "option-b",
  },

  {
    question: "Which actor hasn’t played Spider-Man?",

    optionA: "Tobey Maguire",
    optionB: "Topher Grace",
    answer: "option-b",
  },

  {
    question:
      "What word completes this famous quote from Jerry McGuire: “Show me the ____.",

    optionA: "Proof",
    optionB: "Money",
    answer: "option-b",
  },

  {
    question: "Rocky famously runs up the steps of which building in Rocky? ",

    optionA: "The Philadelphia Museum of Art",
    optionB: "Philadelphia City Hall",
    answer: "option-a",
  },

  {
    question:
      "Which two actors starred in the 2012 movie adaptation of 21 Jump Street?",

    optionA: "Seth Rogen and James Franco",
    optionB: "Jonah Hill and Channing Tatum",
    answer: "option-b",
  },

  {
    question:
      "Which country does Forrest Gump travel to as part of the All-American Ping-Pong Team?",

    optionA: "China",
    optionB: "Vietnam",
    answer: "option-a",
  },
  //
];

//background music variable
let backgroundMusic = new Audio();

//Play background music function
function quizMusic() {
  backgroundMusic.src = "/Th876.github.io/audio/gameBackgroundSound.mp3";
  backgroundMusic.play();
  backgroundMusic.loop = true;
}

//Stop background music function
function pauseMusic() {
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;
}

//Generate round titles when start button is clicked
startBtn.addEventListener("click", function (e) {
  if (questionNow <= 7) {
    roundTitle.textContent = "Round One";
    // console.log("Round One");
  } else if (questionNow <= 14) {
    roundTitle.textContent = "Round Two";
    // console.log("Round Two");
  } else {
    roundTitle.textContent = "Round Three";
    // console.log("Round Three");
  }
});

//Select space for questions, answer options and points to generate
const quesContainer = document.querySelector("#ques-container");
const quizQuestions = document.querySelector("#quiz-questions");
quesContainer.appendChild(quizQuestions);
const optionA = document.querySelector("#option-a");
const optionB = document.querySelector("#option-b");
let userPoints = document.querySelector("#user-points");
let playerPointsEarned = document.querySelector("#player-points-earned");
let totalPoints = document.querySelector("#total-points");
let roundTitle = document.querySelector(".round-title");
const exitGame = document.querySelector(".exit-game-btn");
const quizBtn = document.querySelector(".quiz-btn");
const continueBtn = document.querySelector(".continue-btn");

//Set counter for question and points
const lastQuestion = quiz.length - 1;
let questionNow = 0; //current question
let points = 0; //user points earned

/*-------------------------Results Page Part 1-------------------------*/
let resultsPage = document.querySelector("#results-page");
resultsPage.style.display = "none";


function showResults() {
  setTimeout(() => {
    hidePopUp();
    hideQuizPage();
    unBlur();
    resultsPage.style.display = "block";
    finalPoints();
  }, 1000); //this timer is for the LAST question so users can see points earned before final percentage score
}

/*-------------------------Results Page Part 2-------------------------*/
let loseMsg = document.querySelector(".lose-msg");
let winMsg = document.querySelector(".win-msg");
let newPoints;

//Calculate points in percentage and display if user wins or loses.
function finalPoints() {
  if (questionNow == 6 && points >= 5) {
    newPoints = Math.round((points / 6) * 100);
    winMsg.textContent = "You Won with " + newPoints + "%";
    //Append points to results page
    resultsPage.appendChild(winMsg);
  } else if (questionNow == 6 && points < 5) {
    newPoints = Math.round((points / 6) * 100);
    loseMsg.textContent = "You Lose with " + newPoints + "%";
    //Append points to results page
    resultsPage.appendChild(loseMsg);
  } else if (questionNow == 12 && points >= 10) {
    newPoints = Math.round((points / 12) * 100);
    winMsg.textContent = "You Won! with " + newPoints + "%";
    //Append points to results page
    resultsPage.appendChild(winMsg);
  } else if (questionNow == 12 && points < 10) {
    newPoints = Math.round((points / 12) * 100);
    loseMsg.textContent = "You Lose with " + newPoints + "%";
    //Append points to results page
    resultsPage.appendChild(loseMsg);
  } else if (questionNow == 18 && points >= 15) {
    newPoints = Math.round((points / 18) * 100);
    winMsg.textContent = "You Won! with " + newPoints + "%";
    //Append points to results page
    resultsPage.appendChild(winMsg);
  } else if (questionNow == 18 && points < 15) {
    newPoints = Math.round((points / 18) * 100);
    loseMsg.textContent = "You Lose with " + newPoints + "%";
    //Append points to results page
    resultsPage.appendChild(loseMsg);
  }
//To prevent promise error use setTimeout on pauseMusic()
  setTimeout(function() {
    pauseMusic();
  }, 150);
}

/*-------------------------Quiz Page-------------------------*/
//Generate questions and answers
function generateQuestions() {
  //Updates points received out of the questions that exist
  totalPoints.textContent = quiz.length;

  //If user reaches the last question, they're directed to the results page
  if (questionNow == 18) {
    showResults();
  }

  //Generate each question in the array at this position on the page and set its text content
  quizQuestions.textContent = quiz[questionNow].question;

  //Set the text content of every first option (optionA)
  optionA.textContent = quiz[questionNow].optionA;

  //Set the text content of every second option (optionB)
  optionB.textContent = quiz[questionNow].optionB;
}

generateQuestions();

//Validate first answer options
optionA.addEventListener("click", function (e) {
  //if user clicks the first option and it is correct, show green border
  if (quiz[questionNow].answer === "option-a") {
    //increment points
    points++;

    //increments user's points earned
    console.log(userPoints.children);
    userPoints.children[0].textContent = points;
    console.log(points);
    optionA.style.backgroundColor = "var(--green)";
    optionA.style.color = "var(--white)";
    rightAnswer();
  }
  //if user clicks the first option and it is correct, show red border
  else {
    optionA.style.backgroundColor = "var(--red)";
    optionA.style.color = "var(--white)";
    wrongAnswer();
  }

  //Generate next question
  if (questionNow < quiz.length) {
    questionNow++;

    checkRound();

    //Delay next set of questions & answers; reset border to black
    setTimeout(() => {
      optionA.style.backgroundColor = "transparent";
      optionA.style.color = "var(--black)";
      generateQuestions();
    }, 1000);
  }
});

//Validate second answer options
optionB.addEventListener("click", function (e) {
  //if user clicks the first option and it is correct, show green border
  if (quiz[questionNow].answer === "option-b") {
    //increment points
    points++;
    userPoints.children[0].textContent = points;
    optionB.style.backgroundColor = "var(--green)";
    optionB.style.color = "var(--white)";
    rightAnswer();
  }

  //if user clicks the first option and it is correct, show red border
  else {
    optionB.style.backgroundColor = "var(--red)";
    optionB.style.color = "var(--white)";
    wrongAnswer();
  }

  //Generate next question
  if (questionNow < quiz.length) {
    questionNow++;

    checkRound();

    //Delay next set of questions & answers; reset border to black
    setTimeout(() => {
      optionB.style.backgroundColor = "transparent";
      optionB.style.color = "var(--black)";
      generateQuestions();
    }, 1000);
  }
});

/*-------------------------Pop Up Box Features-------------------------*/
//Hide pop up box at the start of the game
let popUp = document.querySelector("#pop-up");

function hidePopUp() {
  popUp.style.visibility = "hidden";
  optionA.disabled = false;
  optionA.style.cursor = "pointer";
  optionB.disabled = false;
  optionB.style.cursor = "pointer";
  exitGame.disabled = false;
  exitGame.style.cursor = "pointer";
}
hidePopUp();

//Show pop up after first and second round. Disable quiz answer option buttons and exit game button
function showPopUp() {
  popUp.style.visibility = "visible";
  pauseMusic();
  optionA.disabled = true;
  optionA.style.cursor = "not-allowed";
  optionB.disabled = true;
  optionB.style.cursor = "not-allowed";
  exitGame.disabled = true;
  exitGame.style.cursor = "not-allowed";
}

//Blur page
function blur() {
  quizContainer.style.filter = "blur(3px)";
  footer.style.filter = "blur(3px)";
}

//Unblur page
function unBlur() {
  quizContainer.style.filter = "none";
  footer.style.filter = "none";
  //music plays when quiz is unblurred and pop up is hidden
  quizMusic();
}

//Continue button event listener that resumes quiz
continueBtn.addEventListener("click", function (e) {
  hidePopUp();
  unBlur();
});

//Timely insert pop up after rounds one and two; and apply different colors to each round
function checkRound() {
  setTimeout(() => {
    if (questionNow == 0) {
      roundTitle.textContent = "Round One";
      // console.log("Round One");
    } else if (questionNow == 6) {
      showPopUp();
      blur();
      roundTitle.textContent = "Round Two";
      roundTitle.style.color = "var(--dusk)";
      // console.log("Round Two");
    } else if (questionNow == 12) {
      showPopUp();
      blur();
      roundTitle.textContent = "Round Three";
      roundTitle.style.color = "var(--orangesicle)";
      // console.log("Round Three");
    }
  }, 1000);
}

//Button sound for right answers chosen
function rightAnswer() {
  let right = new Audio();
  right.src = "/Th876.github.io/audio/correct-point.mp3";
  right.play();
}

//Button sound for wrong answers chosen
function wrongAnswer() {
  let wrong = new Audio();
  wrong.src = "/Th876.github.io/audio/wrong-point.mp3";
  wrong.play();
}

//Hide quiz page
let quizContainer = document.querySelector("#quiz-container");
function hideQuizPage() {
  quizContainer.style.display = "none"; //this allows the quiz page to not show on the results page
}

// hideQuizPage();

//Reset page
function resetPage() {
  window.location.reload();
}

//Exit game button event listener that leaves the quiz page and goes to the start page
exitGame.addEventListener("click", function (e) {
  startContainer.style.visibility = "visible";
  videoBkground.style.visibility = "visible";
  inputName.value = "";
  startBtn.disabled = true;
  hideQuizPage();
  pauseMusic();
  resetPage();
});

let endGameBtn = document.querySelector(".endgame-btn");

//End game button. Users are directed to results page when endGame button is clicked. End Game button is provided after round one and round two.
endGameBtn.addEventListener("click", function (e) {
  showResults();
});
