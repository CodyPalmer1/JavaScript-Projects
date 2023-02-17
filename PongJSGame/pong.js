const gameBoard = document.querySelector('#gameBoard');
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector('#scoreText');
const resetButton = document.querySelector('#resetButton');
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = '#forestgreen';
const paddle1Color = '#FFA500';
const paddle2Color = '#4CAB9C';
const ballColor = '#CCFF00';
const BallBorderColor = '#000000';
const ballRadius = 10;
const paddleSpeed = 50;
let intervalId;
let ballSpeed = 1;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let player2Score = 0;
let paddle1 = {
    width: 25,
    height: 100,
    x: 0,
    y: 0
}
let paddle2 = {
    width: 25,
    height: 100,
    x: gameWidth - 25,
    y: gameHeight - 100
}

window.addEventListener('keydown', changeDirection);
resetButton.addEventListener('click', resetGame);
