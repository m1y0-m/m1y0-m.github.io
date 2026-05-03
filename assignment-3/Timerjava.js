let workDuration = 25 * 60;
let breakDuration = 5 * 60;
let currentTime = workDuration;
let isWorkSession = true;
let timerInterval = null;
let isRunning = false;

const timerDisplay = document.getElementById('timerDisplay');
const sessionLabel = document.getElementById('sessionLabel');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(seconds) {
	const mins = Math.floor(seconds / 60);
	const secs = seconds % 60;
	return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateDisplay() {
	timerDisplay.textContent = formatTime(currentTime);
}

function switchSession() {
	if (isWorkSession) {
		isWorkSession = false;
		currentTime = breakDuration;
		sessionLabel.textContent = "Break Time!";
		sessionLabel.style.color = "#b35900";
		alert("Work session done, time for a break!");
	} else {
		isWorkSession = true;
		currentTime = workDuration;
		sessionLabel.textContent = "Work Time";
		sessionLabel.style.color = "#006622";
		alert("Break Over! Time for more work!");
	}
	updateDisplay();
}

function tick() {
	if (currentTime > 0) {
		currentTime--;
		updateDisplay();
	}
	if (currentTime == 0) {
		clearInterval(timerInterval);
		isRunning = false;
		switchSession();
	}
}

function startTimer() {
	if (isRunning) return;
	if (currentTime === 0) {
		if (isWorkSession) currentTime = workDuration;
		else currentTime = breakDuration;
		updateDisplay();
	}
	timerInterval = setInterval(tick, 1000);
	isRunning = true;
}

function pauseTimer() {
	clearInterval(timerInterval);
	isRunning = false;
}

function resetTimer() {
	pauseTimer();
	if (isWorkSession) {
		currentTime = workDuration;
	} else {
		currentTime = breakDuration;
	}
	updateDisplay();
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();