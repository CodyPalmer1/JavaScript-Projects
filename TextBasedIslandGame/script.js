var gameText = document.getElementById("game-text");
var userInput = document.getElementById("user-input");
var gameContainer = document.getElementById("game-container");

var playerLocation = "beach";

function processUserInput() {
    var input = userInput.value.toLowerCase().trim();
    var outputText = "";

    // Process user input based on the current player location
    switch (playerLocation) {
        case "beach":
            if (input === "explore") {
                outputText = "You find a boat. Do you want to go to the island?";
            } else {
                outputText = "You can explore the area.";
            }
            break;
        case "island":
            if (input === "explore") {
                outputText = "You discover a treasure chest!";
            } else if (input === "go back") {
                outputText = "You return to the beach.";
                playerLocation = "beach";
            } else {
                outputText = "You can explore the island or go back.";
            }
            break;
        default:
            outputText = "Invalid command.";
    }

    gameText.textContent = outputText;
    userInput.value = "";
}
