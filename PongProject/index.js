var gameBoard = document.getElementById("gameBoard");
var ctx = gameBoard.getContext("2d");

var ball = {
    x: 300,
    y: 200,
    dx: 5,
    dy: 5
};

var paddle1 = {
    x: 100,
    y: 200
};

var paddle2 = {
    x: 500,
    y: 200
};

var score1 = 0;
var score2 = 0;