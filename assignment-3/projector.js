const randomBtn = document.getElementById('randomLinkBtn');

const links = [
	"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
	"https://youtu.be/lv1M-a8baCQ?si=kMQnXPbAI_Ld1a2F",
	"https://youtu.be/LWHwJMGP9Rw?si=uWd-RrYDW6VpjVyL",
	"https://www.youtube.com/watch?v=c7Zr4CdiyaY",
	"https://www.youtube.com/watch?v=xuue-s8qM8w",
	"https://youtu.be/G_LnMgcnNAs?si=H5B4pM62-DraXQLA",
	"https://youtu.be/t118vPoMrag?si=ubA4AeFMZMtnXlPn",
	"https://youtu.be/ML-iqXrCS0A?si=j5ypMcbzEl-qjby8",
	"https://youtu.be/LTulvuXrS_E?si=GGro5ryaMwYtFXpa",
	"https://youtu.be/fm3O1gKq7Os?si=6az4G2aIDoYEaJQY",
	"https://youtu.be/wOcCu31oi7Q?si=sCR1p0sbw1ouaPq-",
	"https://youtu.be/RqBDz8dOWeA?si=34eYOvnlVVsW02Tn",
	"https://youtu.be/0BIm5TNTe9U?si=qMOtuFWrqZm7DFfx",
	"https://youtu.be/28OS2hpekBM?si=7GoYu5d7M9Hldbc6",
	"https://youtu.be/Af9nqVCKb-o?si=Y5vv57ChfmQSNjju",
	"https://youtu.be/5S5iZZEtTkg?si=Ted-2QGAc7ganmI7",
	"https://youtu.be/HwAPLk_sQ3w?si=IvXsCDs9AZ0Vt_38"
];

function openRandomLink() {
	const randomIndex = Math.floor(Math.random() * links.length);
	const selectedUrl = links[randomIndex];
	window.open(selectedUrl, '_blank');
}

randomBtn.addEventListener('click', openRandomLink);