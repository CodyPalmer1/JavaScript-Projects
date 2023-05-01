let gameContent = '';

function displayGameContent() {
    const gameContainer = document.getElementById('game-container');
    const [heading, paragraph, option1Btn, option2Btn, resetBtn] = gameContainer.children;
    heading.innerText = gameContent.heading;
    paragraph.innerText = gameContent.text;
    option1Btn.innerText = gameContent.option1;
    option1Btn.disabled = gameContent.option1 === '';
    option2Btn.innerText = gameContent.option2;
    option2Btn.disabled = gameContent.option2 === '';
    resetBtn.style.display = gameContent.reset ? 'block' : 'none';
}

function startGame() {
    gameContent = {
        heading: 'Escape Room Game',
        text: 'You wake up in a dark, barley-lit room with no memory of who you are or how you got here. There are other people here with you who also have no memory. After talking with them, you learn that there is no way out. However, you notice a hall that leads away from the room. What do you do?',
        option1: 'Explore the hall',
        option2: 'Stay in the room',
        reset: false
    };
    displayGameContent();

    document.addEventListener('keydown', function(event) {
        if (event.key === '1' && !document.getElementById('option1').disabled) {
            exploreHall();
        } else if (event.key === '2' && !document.getElementById('option2').disabled) {
            stayInRoom();
        }
    });

    document.getElementById('option1').addEventListener('click', exploreHall);
    document.getElementById('option2').addEventListener('click', stayInRoom);
    document.getElementById('reset-btn').addEventListener('click', startGame);
}

function exploreHall() {
    gameContent = {
        heading: 'Exploring the Hall',
        text: 'You decide to explore the hall. It winds and turns, with many left and right options. After walking for what feels like an eternity, you find yourself back in the room where you started. What do you do now?',
        option1: 'Explore the hall again',
        option2: 'Try to find clues or a way to get out of the room other than the hall.',
        reset: false
    };
    displayGameContent();

    function exploreHallAgain() {

    }

    document.addEventListener('keydown', function(event) {
        if (event.key === '1' && !document.getElementById('option1').disabled) {
            exploreHallAgain();
        } else if (event.key === '2' && !document.getElementById('option2').disabled) {
            tryToEscape();
        }
    });

    document.getElementById('option1').addEventListener('click', exploreHallAgain);
    document.getElementById('option2').addEventListener('click', tryToEscape);
}

function stayInRoom() {
    gameContent = {
        heading: 'Staying in the Room',
        text: 'You decide to stay in the room and try to figure out how to escape. However, after searching the room thoroughly, you find no clues or items that could help you escape. What do you do now?',
        option1: 'Explore the hall',
        option2: 'Try to escape through the window',
        reset: false
    };
    displayGameContent();

    document.addEventListener('keydown', function(event) {
        if (event.key === '1' && !document.getElementById('option1').disabled) {
            exploreHall();
        } else if (event.key === '2' && !document.getElementById('option2').disabled) {
            tryToEscape();
        }
    });

    document.getElementById('option1').addEventListener('click', exploreHall);
    document.getElementById('option2').addEventListener('click', tryToEscape);
}

