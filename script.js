let timerInterval;
let stopwatchInterval;
let stopwatchSeconds = 0;
let isPaused = false;

function startTimer() {
    const hoursInput = document.getElementById('hoursInput');
    const minutesInput = document.getElementById('minutesInput');
    const secondsInput = document.getElementById('secondsInput');
    const timerDisplay = document.getElementById('timerDisplay');

    let hours = parseInt(hoursInput.value);
    let minutes = parseInt(minutesInput.value);
    let seconds = parseInt(secondsInput.value);

    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) || hours < 0 || minutes < 0 || seconds < 0) {
        alert('Please enter a valid positive number for the timer.');
        return;
    }

    let timeInSeconds = hours * 3600 + minutes * 60 + seconds;

    timerInterval = setInterval(() => {
        if (!isPaused) {
            timeInSeconds--;
            if (timeInSeconds < 0) {
                clearInterval(timerInterval);
                alert('Timer completed!');
            } else {
                hours = Math.floor(timeInSeconds / 3600);
                minutes = Math.floor((timeInSeconds % 3600) / 60);
                seconds = timeInSeconds % 60;
                timerDisplay.innerText = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
            }
        }
    }, 1000);
}

function stopTimer() {
    isPaused = true;
}

function resumeTimer() {
    isPaused = false;
}

function startStopwatch() {
    stopwatchInterval = setInterval(() => {
        stopwatchSeconds++;
        displayStopwatchTime();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    stopwatchSeconds = 0;
    displayStopwatchTime();
}

function displayStopwatchTime() {
    const hours = Math.floor(stopwatchSeconds / 3600);
    const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
    const seconds = stopwatchSeconds % 60;

    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    document.getElementById('stopwatchDisplay').innerText = formattedTime;
}

function padZero(num) {
    return num < 10 ? `0${num}` : num;
}
function switchCard() {
    const timerCard = document.getElementById('timerCard');
    const stopwatchCard = document.getElementById('stopwatchCard');
    const switchButton = document.getElementById('switchButton');

    if (timerCard.style.display === 'none') {
        timerCard.style.display = 'block';
        stopwatchCard.style.display = 'none';
        switchButton.innerText = 'Switch to Stopwatch';
    } else {
        timerCard.style.display = 'none';
        stopwatchCard.style.display = 'block';
        switchButton.innerText = 'Switch to Timer';
    }
}