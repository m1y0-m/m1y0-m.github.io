const coinResult = document.getElementById('coinResult');
const flipBtn = document.getElementById('flipBtn');
const historyContainer = document.getElementById('coinHistory');

let history = [];

function updateHistoryDisplay() {
	const spans = historyContainer.querySelectorAll('span');
	spans.forEach(span => span.remove());
	
	if (history.length == 0) {
		const emptySpan =  document.createElement('span');
		emptySpan.textContent = '-';
		historyContainer.appendChild(emptySpan);
	} else {
		history.forEach(result => {
			const span = document.createElement('span');
			span.textContent = result;
			historyContainer.appendChild(span);
		});
	}
}

function addToHistory(result) {
	history.unshift(result);
	if (history.length > 5) history.pop();
	updateHistoryDisplay();
}

function flipCoin() {
	flipBtn.disabled = true;
	
	coinResult.classList.add('flipping');
	
	setTimeout(() => {
		const isHeads = Math.random() < 0.5;
		const result = isHeads ? 'HEADS' : 'TAILS';
		const emoji =  isHeads ? 'Heads' : 'Tails';
		coinResult.textContent = emoji;
		
		coinResult.classList.remove('flipping');
		
		addToHistory(result);
		
		flipBtn.disabled = false;
	}, 300)
}

coinResult.textContent = ' ';

flipBtn.addEventListener('click', flipCoin);