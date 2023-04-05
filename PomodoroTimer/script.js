const timerDisplay = document.querySelector('#time-left');
const startStopBtn = document.querySelector('#start_stop');
const resetBtn = document.querySelector('#reset');
const timerLabel = document.querySelector('#timer-label');

let timeLeft = 25 * 60;
let timerInterval;
let isPaused = true;
let isSession = true;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}

function updateTimer() {
    timeLeft--;
    timerDisplay.textContent = formatTime(timeLeft);

    if (timeLeft === 0) {
        clearInterval(timerInterval);

        if (isSession) {
            timeLeft = 5 * 60;
            timerLabel.textContent = 'Break';
        } else {
            timeLeft = 25 * 60;
            timerLabel.textContent = 'Session';
        }

        isSession = !isSession;
        startTimer();
    }
}

function startTimer() {
    if (isPaused) {
        isPaused = false;
        startStopBtn.textContent = 'Pause';
        timerInterval = setInterval(updateTimer, 1000);
    } else {
        isPaused = true;
        startStopBtn.textContent = 'Start';
        clearInterval(timerInterval);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    isPaused = true;
    startStopBtn.textContent = 'Start';
    isSession = true;
    timeLeft = 25 * 60;
    timerLabel.textContent = 'Session';
    timerDisplay.textContent = formatTime(timeLeft);
}

startStopBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
