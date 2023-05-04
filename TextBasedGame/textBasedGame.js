function exploreHallAgain() {
    const attempts = gameContent.attempts ? gameContent.attempts + 1 : 1;
    let text;
    let option1;
    let option2;
    let option3;
    let option4;
    let reset = false;

    switch (attempts) {
        case 2:
            text = 'You explore the hall once again. It feels familiar, but you can\'t remember which turns you\'ve taken before. After walking for some time, you find yourself back in the room where you started. What do you do now?';
            option1 = 'Explore the hall again';
            option2 = 'Try to escape through the window';
            option3 = 'Check the walls for any hidden clues';
            option4 = 'Try to break down the door';
            break;
        case 3:
            text = 'You explore the hall again, taking different turns this time. The twists and turns start to feel like a maze. Eventually, you find yourself back in the room where you started. What do you do now?';
            option1 = 'Explore the hall again';
            option2 = 'Try to escape through the window';
            option3 = 'Examine the floor for any clues';
            option4 = 'Try to break down the door';
            break;
        case 4:
            text = 'You explore the hall once again, taking turns you haven\'t taken before. As you walk, you notice something on the ground. It\'s a key! You pick it up and continue down the hall. After some time, you find yourself back in the room where you started. What do you do now?';
            option1 = 'Explore the hall again';
            option2 = 'Try to escape through the door';
            option3 = '';
            option4 = '';
            reset = true;
            break;
        default:
            text = 'You explore the hall once again, taking different turns each time. After walking for what feels like an eternity, you find yourself back in the room where you started. What do you do now?';
            option1 = 'Explore the hall again';
            option2 = 'Try to escape through the window';
            option3 = '';
            option4 = '';
            break;
    }

    setOptions({
        heading: 'Exploring the Hall',
        text,
        option1,
        option2,
        option3,
        option4,
        reset,
        attempts
    });
}

function setOptions(param) {
    
}

function tryToEscape() {
    const attempts = gameContent.attempts ? gameContent.attempts + 1 : 1;
    let text;
    let option1;
    let option2;
    let option3;
    let option4;
    let reset = false;

    switch (attempts) {
        case 2:
            text = 'You walk towards the window and try to open it. It won\'t budge. What do you do now?';
            option1 = 'Try to open the window again';
            option2 = 'Explore the hall';
            option3 = 'Check the walls for any hidden clues';
            option4 = 'Try to break down the door';
            break;
        case 3:
            text = 'You try to open the window again, but it still won\'t budge. You start to feel frustrated. What do you do now?';
            option1 = 'Try to open the window again';
            option2 = 'Explore the hall';
            option3 = 'Examine the floor for any clues';
            option4 = 'Try to break down the door';
            break;
        case 2:
            text = 'You walk towards the window and try to open it. It won\'t budge. What do you do now?';
            option1 = 'Try to open the window again';
            option2 = 'Explore the hall';
            option3 = 'Check the walls for any hidden clues';
            option4 = 'Try to break down the door';
            break;
        case 3:
            text = 'You try to open the window again, but it still won\'t budge. You start to feel frustrated. What do you do now?';
            option1 = 'Try to open the window again';
            option2 = 'Explore the hall';
            option3 = 'Examine the floor for any clues';
            option4 = 'Try to break down the door';
            break;
        case 4:
            text = 'You walk towards the door and try to open it. To your surprise, it opens easily. You rush out of the room and into the hallway. You\'re finally free!';
            option1 = '';
            option2 = '';
            option3 = '';
            option4 = '';
            reset = true;
            break;
        default:
            text = 'You walk towards the window and try to open it. It won\'t budge. What do you do now?';
            option1 = 'Try to open the window again';
            option2 = 'Explore the hall';
            option3 = '';
            option4 = '';
            break;
    }

    setOptions({
        heading: 'Trying to Escape',
        text,
        option1,
        option2,
        option3,
        option4,
        reset,
        attempts
    });
}






