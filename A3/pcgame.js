const gameTitleElem = document.getElementById('gameTitle');
const gameDescElem = document.getElementById('gameDesc');
const randomBtn = document.getElementById('randomGameBtn');

const games = [
	{ title: "Slay the Spire", desc: "Deck-building card game roguelike." },
	{ title: "Minecraft", desc: "Endless opportunity 3D sandbox game." },
	{ title: "Celeste", desc: "Tough platformer about overcoming challenges." },
	{ title: "Terraria", desc: "An exploration sandbox game." },
	{ title: "Oxygen Not Included", desc: "Survival space exploration simulator." },
	{ title: "Limbus Company", desc: "Story rich turn based combat gacha." },
	{ title: "The Coffin of Andy and Leyley", desc: "Controversial psychological horror point and cick story game." },
	{ title: "Touhou Project", desc: "Notoriously difficult 2D bullet hell games." },
	{ title: "Hollow Knight", desc: "Highly acclaimed 2D metroidvania game." },
	{ title: "Fran Bow", desc: "Highly acclaimed point and click psychological horror game." },
	{ title: "Ball x Pit", desc: "Fantasy themed brick breaking roguelite game." },
	{ title: "Library of Ruina", desc: "Story rich, turn based deck building simulation game." }
];

function getRandomGame() {
	const randomIndex = Math.floor(Math.random() * games.length);
	return games[randomIndex];
}

function updateGame() {
	const game = getRandomGame();
	gameTitleElem.textContent = game.title;
	gameDescElem.textContent = game.desc;
}

randomBtn.addEventListener('click', updateGame);

updateGame();