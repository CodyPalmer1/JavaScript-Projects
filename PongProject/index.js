// Get the canvas and context
var canvas = document.getElementById("gameBoard");
var ctx = canvas.getContext("2d");

// Create the ball and paddles
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

// Create the scores
var score1 = 0;
var score2 = 0;

// Draw the game
function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the ball
    ctx.fillStyle = "white";
    ctx.fillRect(ball.x, ball.y, 20, 20);

    // Draw the paddles
    ctx.fillStyle = "red";
    ctx.fillRect(paddle1.x, paddle1.y, 100, 20);

    ctx.fillStyle = "blue";
    ctx.fillRect(paddle2.x, paddle2.y, 100, 20);

    // Check for collisions with the walls
    if (ball.x < 0 || ball.x > canvas.width) {
        ball.dx *= -1;
    }

    if (ball.y < 0 || ball.y > canvas.height) {
        ball.dy *= -1;
    }

    // Check for collisions with the paddles
    if (ball.x < paddle1.x + 50 && ball.y > paddle1.y && ball.y < paddle1.y + 20) {
        ball.dx *= -1;
    }

    if (ball.x > paddle2.x - 50 && ball.y > paddle2.y && ball.y < paddle2.y + 20) {
        ball.dx *= -1;
    }

    // Update the ball's position
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Check for a winner
    if (ball.x < 0) {
        score2++;
        ball.x = 300;
        ball.y = 200;
    } else if (ball.x > canvas.width) {
        score1++;
        ball.x = 300;
        ball.y = 200;
    }

    // Request a redraw
    requestAnimationFrame(draw);
}

// Start the game
window.addEventListener("load", draw);
