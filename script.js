let newGame = document.querySelector(".newGame");
let clickToGuess = document.querySelector(".clickToGuess");

// document.querySelector("#number").value = range;

let randNumber = Math.ceil(Math.random() * 100);
console.log(randNumber);
let highScore = 0;
let highScoreHolder = 0;
let lifeLineNumber = 10;
document.querySelector(".lifeLineNumber").textContent = lifeLineNumber;
document.querySelector(".highScoreNumber").textContent = highScore;
let number;
// let range;

setInterval(() => {
  number = Number(
    (document.querySelector("#number").value = Number(
      document.querySelector("#range").value
    ))
  );
  // console.log(number);
  document.querySelector("#range").title = number;
  document.querySelector(".progress").style.width = `${number}%`;
});

clickToGuess.addEventListener("click", function () {
  console.log(randNumber);

  if (lifeLineNumber > 1) {
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
    } else if (!number) {
      document.querySelector(".emoji").textContent = "😠";

      document.querySelector(".yourGuess").textContent = "🚫 No number!";
      document.querySelector(".yourGuess").style.fontSize = "medium";
      document.querySelector(".yourGuess").style.fontWeight = "400";
      document.querySelector(".yourGuess").style.color = "black";
    } else if (number !== randNumber) {
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

    progress = document.querySelector(".progress").style.width = `${number}%`;
    console.log(progress);
  } else {
    document.querySelector(".lifeLineNumber").textContent = ` 0`;
    document.querySelector("h1").textContent = "Game Over 🥹";
    document.querySelector("#number").value = "Game Over";
    document.querySelector("#number").setAttribute("disabled", "");
    document.querySelector(".gameOver").style.display = "flex";
    document.querySelector(".main").style.opacity = ".2";
  }
});

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
