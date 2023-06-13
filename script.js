// SECTION Assigning values to variables

let newGame = document.querySelector(".newGame");
let clickToGuess = document.querySelector(".clickToGuess");
let randNumber = Math.ceil(Math.random() * 100);
console.log(randNumber);
let highScore = 0;
let highScoreHolder = 0;
let lifeLineNumber = 10;
document.querySelector(".lifeLineNumber").textContent = lifeLineNumber;
document.querySelector(".highScoreNumber").textContent = highScore;
let number;
let rangeNumber;

// !SECTION

// SECTION: setInterval for the range class. the input number updates as the range increases, vice versa

rangeNumber = setInterval(() => {
  number = Number(
    (document.querySelector("#number").value = Number(
      document.querySelector("#range").value
    ))
  );
  // console.log(number);
  document.querySelector("#range").title = number;
  document.querySelector(".progress").style.width = `${number}%`;
});

// !SECTION

// SECTION: Set the input tag for the to cancel the setInterval as soon as we click on it

document.querySelector("#number").addEventListener("click", function () {
  // console.log("clicked");
  clearInterval(rangeNumber);
});

// !SECTION

// SECTION: The guess button checks if the inputted number === random number

clickToGuess.addEventListener("click", function () {
  console.log(randNumber);
  number = Number(document.querySelector("#number").value);

  // SECTION: while the lifeline>0 the game keeps running

  if (lifeLineNumber > 1) {
    // SECTION: What happens if the inputted number === random number

    if (number === randNumber) {
      document.querySelector(
        ".yourGuess"
      ).textContent = `You guessed ${number}. Correct!!!`;
      document.querySelector(".yourGuess").style.fontSize = "2rem";
      document.querySelector(".yourGuess").style.fontWeight = "bolder";
      document.querySelector(".yourGuess").style.color = "limegreen";
      document.querySelector(".emoji").textContent = "😁";
      highScoreHolder += lifeLineNumber;
      if (highScoreHolder > highScore) {
        highScore = highScoreHolder;
      }
      document.querySelector(".highScoreNumber").textContent = `${highScore}`;

      randNumber = Math.ceil(Math.random() * 100);
      console.log(randNumber);
    }

    // !SECTION

    // SECTION: What happens if the inputted number !== a number or === 0
    else if (!number) {
      document.querySelector(".emoji").textContent = "😠";

      document.querySelector(".yourGuess").textContent = "🚫 Invalid number!";
      document.querySelector(".yourGuess").style.fontSize = "medium";
      document.querySelector(".yourGuess").style.fontWeight = "400";
      document.querySelector(".yourGuess").style.color = "black";
    }

    // !SECTION

    // SECTION: What happens if the inputted number !== random number
    else if (number !== randNumber) {
      document.querySelector(".emoji").textContent = "😔";

      --lifeLineNumber;
      document.querySelector(
        ".lifeLineNumber"
      ).textContent = ` ${lifeLineNumber}`;
      document.querySelector(
        ".yourGuess"
      ).textContent = `You guessed ${number}. 
      ${number > randNumber ? "↗️ Too High" : "↘️ Too low"}!!`;
      document.querySelector(".yourGuess").style.fontSize = "medium";
      document.querySelector(".yourGuess").style.fontWeight = "400";
      document.querySelector(".yourGuess").style.color = "black";
    }

    // !SECTION

    // NOTE: The progress bar updates with the inputted number

    progress = document.querySelector(".progress").style.width = `${number}%`;
    console.log(progress);

    // !NOTE
  }
  // !SECTION

  // SECTION: If the inputted number === 0
  else {
    document.querySelector(".lifeLineNumber").textContent = ` 0`;
    document.querySelector("h1").textContent = "Game Over 🥹";
    document.querySelector("#number").value = "Game Over";
    document.querySelector("#number").setAttribute("disabled", "");
    document.querySelector(".gameOver").style.display = "flex";
    document.querySelector(".main").style.opacity = ".2";
  }

  // !SECTION
});

// !SECTION

// SECTION: When the start new game is clicked

newGame.addEventListener("click", function () {
  document.querySelector("#number").removeAttribute("disabled", "");
  document.querySelector("#number").value = "";
  document.querySelector(".yourGuess").textContent = "Not Started";
  progress = document.querySelector(".progress").style.width = "0px";
  document.querySelector(".gameOver").style.display = "none";
  document.querySelector(".lifeLineNumber").textContent = " 10";
  document.querySelector(".main").style.opacity = "1";

  lifeLineNumber = 10;
  highScoreHolder = 0;
});

// !SECTION
