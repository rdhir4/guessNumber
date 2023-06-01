"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "👍Correct Number";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

//All  the audio files required

var audio1 = new Audio("win1.wav");
var audio2 = new Audio("MMMhhmm.mp3");
var audio3 = new Audio("loser1.mpeg");

//highscore
let highScore = 0;

//generate the number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Starting score
let score = 20;

//for checking the number if it matches the number or not
document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess);

  if (!guess) {
    // if there is not any number
    document.querySelector(".message").textContent =
      "Please enter a number";
    audio.play();
  } else if (guess == secretNumber) {
    // if the guessed number matches the number
    document.querySelector(".message").textContent = "👍Correct Number";
    audio1.play();
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess < secretNumber) {
    // if the guessed number is less than the number
    if (score > 0) {
      document.querySelector(".message").textContent = "TOO LOW!";
      audio2.play();
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🤥You lost";
       document.querySelector("body").style.backgroundColor = "#DB3E3E";
        audio3.play();
    }
  } else if (guess > secretNumber) {
    // if the guesses number is larger than the number
    if (score > 0) {
      document.querySelector(".message").textContent = "TOO HIGH!";
      audio2.play();
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🤥You lost";
       document.querySelector("body").style.backgroundColor = "#DB3E3E";
        audio3.play();
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").style.width = "15rem";
});
