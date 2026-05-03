const seatZones = document.querySelectorAll(".seat-zone");

seatZones.forEach(zone => {
	zone.addEventListener("click", function () {
		const nextPage = this.dataset.page;
		window.location.href = nextPage;
	});
});


document.getElementById("activityQuiz2").addEventListener("submit", function(event) {
  event.preventDefault();

  const mood = document.querySelector('input[name = "mood"]:checked');
  const work = document.querySelector('input[name = "work"]:checked');
  const energy = document.querySelector('input[name = "energy"]:checked');
  const time = document.querySelector('input[name = "time"]:checked');
  
  if (!mood || !work || !energy || !time) {
    alert("Oops! You need to answer each question so we can properly decide your activity!");
    return;
  }

const scores = {
    homework: 0,
    boardgame: 0,
    projector: 0,
    PCgame: 0,
	socializing: 0
  };
  
  if (mood.value === "stressed") {
    scores.socializing += 3;
    scores.homework += 1;
  } else if (mood.value === "relaxed") {
    scores.boardgame += 3;
    scores.socializing += 2;
  } else if (mood.value === "happy") {
    scores.boardgame += 2;
    scores.socializing += 2;
  } else if (mood.value === "upset") {
    scores.projector += 3;
    scores.PCgame += 1;
  }
  
  if (work.value == "lot") {
	  scores.homework += 3;
	  scores.projector += 1;
  } else if (mood.value == "little") {
	  scores.boardgame += 2;
	  scores.socializing += 1;
  } else if (mood.value == "no") {
	  scores.boardgame += 3;
	  scores.socializing += 3;
  }
  
  if (energy.value == "lot") {
	  scores.boardgame += 3;
	  scores.socializing +=2;
  } else if (energy.value == "tired") {
	  scores.projector += 2;
	  scores.homework += 1;
  } else if (energy.value == "soso") {
		scores.boardgame += 1;
		scores.projector += 1;
  }
  
  if (time.value == "plenty") {
	  scores.boardgame += 3;
	  scores.PCgame += 2;
  } else if (time.value == "little") {
	  scores.socializing += 2;
	  scores.projector += 2;
  } else if (time.value == "decent") {
	  scores.boardgame += 2;
	  scores.socializing += 2;
  }
  
  
  let topActivity = "boardgame";
  let highestScore = scores.boardgame;

  for (let activity in scores) {
    if (scores[activity] > highestScore) {
      highestScore = scores[activity];
      topActivity = activity;
    }
  }

  const pages = {
    homework: "homework.html",
    PCgame: "PCgame.html",
    projector: "projector.html",
    boardgame: "boardgame.html",
	socializing: "socializing.html"
  };

  window.location.href = pages[topActivity];
});