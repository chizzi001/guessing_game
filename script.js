let newGame = document.querySelector(".newGame");
let clickToGuess = document.querySelector(".clickToGuess");

let randNumber = Math.ceil(Math.random() * 100);
let highScore = 0;
console.log(randNumber);
let lifeLine = 2;

clickToGuess.addEventListener("click", function () {
  let number = Number(document.querySelector("#number").value);
  console.log(randNumber);
  if (lifeLine > 0) {
    if (number === randNumber) {
      document.querySelector(
        ".yourGuess"
      ).textContent = `You guessed ${number}. Correct!!!`;
      highScore += lifeLine;
      document.querySelector(
        ".highScore"
      ).textContent = `HighScore: ${highScore}`;
      randNumber = Math.ceil(Math.random() * 100);
    } else if (number !== randNumber) {
      document.querySelector(".lifeLine").textContent = `LifeLine: ${lifeLine}`;
      lifeLine--;
      document.querySelector(
        ".yourGuess"
      ).textContent = `You guessed ${number}. ${
        number > randNumber ? "Too High" : "Too low"
      }!!`;
    }

    progress = document.querySelector(".progress").style.width = `${number}%`;
    console.log(progress);
  } else {
    document.querySelector("h1").textContent = "Game Over";
    document.querySelector("#number").value = "Game Over";
    document.querySelector("#number").setAttribute("disabled", "");
  }
});

newGame.addEventListener("click", function () {
  document.querySelector("#number").value = "";
  document.querySelector(".yourGuess").textContent = "Not Started";
  progress = document.querySelector(".progress").style.width = "0px";
});
