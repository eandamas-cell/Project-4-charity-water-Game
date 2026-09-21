// Water Quest Game

const startButton = document.getElementById("start-button");
const waterCan = document.getElementById("water-can");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const feedback = document.getElementById("feedback");
const startMessage = document.getElementById("start-message");
const gameBoard = document.getElementById("game-board");

let score = 0;
let timeLeft = 30;
let gameRunning = false;
let timer;

// Hide water can before game starts
waterCan.style.display = "none";

// Start game
startButton.addEventListener("click", startGame);

function startGame() {
  score = 0;
  timeLeft = 30;
  gameRunning = true;

  scoreDisplay.textContent = score;
  timerDisplay.textContent = timeLeft;

  startMessage.style.display = "none";
  waterCan.style.display = "block";

  feedback.textContent = "Find the water can!";

  moveWaterCan();

  timer = setInterval(function () {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

// Player clicks the water can
waterCan.addEventListener("click", function () {
  if (gameRunning) {
    score++;
    scoreDisplay.textContent = score;

    feedback.textContent = "Great! You collected clean water!";

    moveWaterCan();
  }
});

// Move water can to random location
function moveWaterCan() {
  const maxX = gameBoard.clientWidth - waterCan.offsetWidth;
  const maxY = gameBoard.clientHeight - waterCan.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  waterCan.style.left = randomX + "px";
  waterCan.style.top = randomY + "px";
}

// End game
function endGame() {
  gameRunning = false;

  clearInterval(timer);

  waterCan.style.display = "none";

  feedback.textContent =
    "Time's up! You collected " + score + " water cans.";

  startMessage.style.display = "block";
  startButton.textContent = "Play Again";
}
