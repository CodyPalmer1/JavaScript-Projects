const timerDisplay = document.querySelector('#time-left');
const startStopBtn = document.querySelector('#start_stop');
const resetBtn = document.querySelector('#reset');
const timerLabel = document.querySelector('#timer-label');

let timeLeft, timerInterval, isPaused, isSession;

// set initial time to 25 minutes
timeLeft = 25 * 60;

// set the timer label to "Session"
timerLabel.textContent = 'Session';

function startTimer() {
    // if the timer is running, pause it
    if (isPaused === false) {
        clearInterval(timerInterval);
        isPaused = true;
        startStopBtn.textContent = 'Start';
        return;
    }

    // otherwise, start the timer
    isPaused = false;
    startStopBtn.textContent = 'Pause';

    timerInterval = setInterval(() => {
        timeLeft--;

        // update the display with the remaining time
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        // if the timer has run out, switch to the next mode
        if (timeLeft === 0) {
            clearInterval(timerInterval);

            if (isSession === true) {
                isSession = false;
                timeLeft = 5 * 60;
                timerLabel.textContent = 'Break';
            } else {
                isSession = true;
                timeLeft = 25 * 60;
                timerLabel.textContent = 'Session';
            }

            startTimer();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    isPaused = true;
    startStopBtn.textContent = 'Start';
    isSession = true;
    timeLeft = 25 * 60;
    timerLabel.textContent = 'Session';
    timerDisplay.textContent = '25:00';
}

startStopBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
