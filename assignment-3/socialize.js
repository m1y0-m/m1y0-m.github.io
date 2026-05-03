const conversationStarters = [
"Have you started the latest season of anime yet?",
"What was the last show you watched?",
"Biggest anime hot take?",
"What manga are you currently reading?",
"Are you watching seasonals?",
"Any recommendations on what to watch next?",
"Listen to any good Vocaloid songs recently?",
"Have you been keeping your Anilist up to date?",
"What upcoming adaptations are you most excited about?",
"Any good games keeping you occupied lately?",
"What are your gachas of choice?"
];

const starterElement = document.getElementById('conversationStarter');
const newStarterBtn = document.getElementById('newStarterBtn');

function getRandomStarter() {
	const randomIndex = Math.floor(Math.random() * conversationStarters.length);
	return conversationStarters[randomIndex];
}

function updateStarter() {
	starterElement.textContent = getRandomStarter();
}

newStarterBtn.addEventListener('click', updateStarter);

updateStarter();