![Heading](./Heading-ReadMe.png)
<p> The Best Movie Trivia Game is the first project I created at <a href="https://perscholas.org/courses/software-engineer/software-engineer-atlanta/">Per Scholas'</a> Software Engineer Training. The game has three rounds and consists of 18 movie questions in total. Each question has two option answers. This is the <a href= "https://th876.github.io/triviagame/">website link</a> for my game project.</p>
<hr></hr>
<h3>Game Features</h3>

<p>On the main page, the 'Start Game' button is disabled, which prompts the user to enter a name in order to play. As the user types a name, a warning message is displayed to ensure that an acceptable name format is given. What is not accepted is colored red and what is accepted is colored green. This name is later displayed on the quiz page as, for example, 'Player: Anna'.</p>

<p>The trivia quiz begins at 'Round One' where the user can hear music playing softly in the background. The user's name and score are located to the left of the screen, and an 'Exit Game' button is located directly under the question-and-answer content.<p>  

<p>The game starts when the user selects an answer option. If the user selects an incorrect answer, the answer's background becomes red, no points are given, and a 'wrong answer' sound effect is played. However, if the user selects a correct answer, the answer's background becomes green, one point is given, and a 'right answer' sound effect is played.</p>

<p>Questions switch to the next as soon as the user selects an answer. Note: Users cannot return to the previous question and answer.</p>

<p>At the end of 'Round One' and 'Round Two', the user is greeted with a pop-up message which requires decision-making—continue the game or end the game. When the pop-up message appears onscreen, the background is blurred, the background music stops and users cannot interact with the background unless they click the 'Continue' button. When the 'Continue' button is clicked, the buttons in the background are enabled, the music resumes and the background is unblurred. Also, if the user continues the game, the next round will begin and points from the previous round(s) will be transferred. However, if the user ends the game, the results page is displayed. All points the user accumulated before ending the game are calculated and displayed as a percentage. The results page also displays if the user has won or lost the game.</p>

<p>Each round has a pass mark of 83%. The user, therefore, wins the game if: </p>
  <ul>
    <li> They've scored 5/6 (83%) or more for 'Round One'.</li>
    <li> They've scored 10/12 (83%) or more for 'Round Two'.</li>
    <li> They've scored 15/18 (83%) or more for 'Round Three'.</li>
   </ul>
 
 <p>And loses, if they fall below the pass mark</p>
 
 <p>The 'Exit Game' button allows users to leave the game, and return to the start page without receiving a result. </p>
 <hr></hr>
 <h3>Technologies used:</h3>
 <ul>
  <li>Scripting/Programming languages: <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, <a href="https://en.wikipedia.org/wiki/CSS">CSS</a>, <a href="https://en.wikipedia.org/wiki/JavaScript">JavaScript</a></li>
  <li><a href="https://developer.chrome.com/docs/devtools/open/">Chrome DevTools</a></li>
  <li><a href="https://www.rd.com/article/movie-trivia-facts/">Reader’s Digest</a></li>
  <li><a href="https://www.figma.com/">Figma</a></li>
  <li><a href="https://docs.google.com/">Google Docs</a></li>
  <li><a href="https://stock.adobe.com/">Adobe Stock</a></li>
  <li><a href="https://giphy.com/">GIPHY</a></li>
  <li><a href="https://coolors.co/">Coolors</a></li>
  <li><a href="https://www.youtube.com/">YouTube</a></li>
  <li><a href="https://www.adobe.com/products/premiere/free-trial-download.html">Adobe Premiere Pro</a></li>
  <li><a href="https://www.adobe.com/products/photoshop.html">Adobe Photoshop</a></li>
  <li><a href="https://www.flaticon.com/">Flaticon</a></li>
  <li><a href="https://www.freeconvert.com/video-compressor 
">Freeconvert</a></li>
  <li><a href="https://prettier.io/">Prettier js</a></li>
  <li><a href="https://www.vhv.rs/">Vhv.rs</a></li>
  <li><a href="https://www.kapwing.com/">Kapwing</a></li>
  <li><a href="https://www.pngwing.com/">PNGWING</a></li>  
 </ul>

<hr></hr>
<h3>Planning Process</h3>
<p>Google docs was used to make note of the game's logic, objects, and features. Then, prototypes of the game's web pages were designed via Figma. The game's colors were sourced on Coolors; and since some design ideas were purely imaginative, i.e., they could not be sourced online. I, therefore, utilized Adobe PhotoShop and Premiere Pro to bring my vision to fruition.</p>

<hr></hr>
<h3>Wireframe</h3>
<img src="/Wireframe-ReadMe.png">

<hr></hr>
<h3>Installation</h3>
<p>To install this project: 
  <ol>
    <li> Go to my repository, and click on the green, drop-down 'Code' button in the upper right corner.</li> 
    <li>Under the 'Local' tab, copy the URL provided under 'Clone'.</li> 
    <li>Open Git Bash.</li> 
    <li>Type the command 'git clone' and paste the URL beside it, e.g. git clone https://github.com/your-username/your-repository</li> 
    <li>The repository is now cloned on your local computer.</li>
</ol>

<p> Another means of installation⬇️</p>
<p>Follow step 1 of the previous installation process, then: </p>
<ol>
  <li> Under the 'Local' tab, select 'Download ZIP'.</li>
  <li>After extracting (unzipping) the file, open the folder in your source-code editor.</li> 
  <li>Use Live Server/Go Live in your source code editor to start playing the game.</li>
</ol>

<hr></hr>
<h3>Challenges</h3>

<h4>Functionality Challenges</h4>
<ul>
  <li><b>Displaying the Results for Each Round</b>  I was getting two results at once until I realized that I should refrain from using a nested if statement, and use an if else if statement instead. Once this part of my code was re-written, I saw the correct results.</li>
  </br>
  <li><b>Targeting HTML elements in the DOM:</b> There were certain features I wanted to implement but found difficult to achieve. This made me realize that I had little knowledge of how to use Chrome DevTools to target the HTML elements. This frustration led me to seek help from my classmates and have since expanded my knowledge in the 'children' property, bracket and dot notation, functions, and conditionals.</li>
</br>
  <li><b>User Input/Regex:</b> Clearing the user's name from the input text field after they have exited the game and refreshed the page to play again. While I was able to clear the previous user's name from the input text field and disable the button so that it could only be enabled with the correct user input; I noticed that it was not registering the regex pattern that worked upon initially entering the game. My tutor pointed out to me that the approach I used to clear the input value contains a space, and since my regex pattern does not allow spaces, the start button would not be enabled.</li>
</br>
  <li><b>Media Formats in JavaScript:</b> Adding audio in the DOM cleared up a few misconceptions I had, for example, one cannot stop an audio file with a stop() method because it does not exist. It can be added instead with the pause() method. In addition, wanting to pause and play the audio to work in sync with my pop-up message, introduced me to the Promise object, a topic currently beyond my scope. My plan to have the audio stop when users arrive on the results page caused a Promise error which was rectified by using the setTimeout method on the function that hosts my pause audio method. I added this at the end of the function that determines the user's final points</li>
</ul>

<h4>Design Challenges</h4>
<ul>
  <li><b>Visibility vs Display:</b> Since I limited my files to one HTML, one CSS, and one JS, I found that implementing the two properties would be the best way to approach this project. However, I had little understanding of what each property does, and, for this reason, it was quite difficult to understand why the results' page was showing at the top of the quiz container. I realized, after much research, that the results page needed to have a property value of "display: none"; so that it does not take up the space that my quiz container needed; while the quiz container needed a property value of visibility = "visible"; so that it takes up all the space in the layout. Here is a great explanation of both <a href="https://www.tutorialrepublic.com/css-tutorial/css-visibility.php">visibility and display</a>. 

  This issue singled-handily caused other problems with the results page. Once the pages were given their correct properties and values, it became much easier to move forward with my design.</li>
</ul>

<hr></hr>
<h3>Credits</h3>
<p>Special thanks to my Instructor Tishana Trainor for assigning me this project to help foster a good understanding of HTML5, CSS3, and JavaScript; and my TAs Dylan Comeau and Kasper Kain for helping me understand/solve some issues I faced with the JavaScript section of my project. Many thanks also to my classmates <a href="https://github.com/tamara-703">Tamara Saadeh</a> and <a href="https://github.com/AnujaBujurge29">Anuja Bujurge</a> for taking the time to assist me whenever I needed help.</p>

<p>Overall, this project has taught me a lot about effectively planning before implementing code as this saves time and will, in the future, save money. It is clear that every aspect of a website/web application needs to be thought of. For instance, my pop-up box allows the game's backdrop to be blurred. This visually alludes to the idea that the backdrop is disabled until the user exists the pop-up message. However, the appearance of a blurred backdrop is, in actuality, pointless if all elements linked to events are not disabled. Functionality is key. This project has, therefore, not only revealed my capabilities but also my constraints and the areas I need to improve.</p>
