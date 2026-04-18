const seatZones = document.querySelectorAll(".seat-zone");

seatZones.forEach(zone => {
	zone.addEventListener("click", function () {
		const nextPage = this.dataset.page;
		window.location.href = nextPage;
	});
});

const steps = document.querySelectorAll(".questionBox");
const nextButtons = document.querySelectorAll(".next");
const backButtons = document.querySelectorAll(".back");
const questionsGrid = document.querySelector(".questionsGrid");
const submitButtonArea = document.querySelector(".button-area");

let currentStep = 0;

if (backButtons[0]) backButtons[0].style.display = "none";

function updateStepVisibility() {
	backButtons.forEach((btn, idx) => {
		if (idx === currentStep) {
			btn.style.display = idx === 0 ? "none" : "inline-block";
		} else {
			btn.style.display = "none";
		}
	});
}

nextButtons.forEach(button => {
  button.addEventListener("click", () => {
    const currentInputs = steps[currentStep].querySelectorAll("input[type = 'radio']");
    const checked = [...currentInputs].some(input => input.checked);

    if (!checked) {
      alert("Please answer the question before continuing.");
      return;
    }

    if (currentStep + 1 === steps.length) {
      // Capture the height of the active question box BEFORE hiding it
      const activeBox = document.querySelector(".questionBox.active");
      const buttonArea = document.querySelector(".questionsGrid .button-area");
      if (activeBox && buttonArea) {
        const boxHeight = activeBox.offsetHeight;
        buttonArea.style.minHeight = boxHeight + "px";
      }
      
      questionsGrid.classList.add("complete");
      return;
    }
    
    steps[currentStep].classList.remove("active");
    currentStep++;
    steps[currentStep].classList.add("active");
    updateStepVisibility();
  });
});

backButtons.forEach(button => {
	button.addEventListener("click", () => {
		if (currentStep === 0) return;
		
		steps[currentStep].classList.remove("active");
		currentStep--;
		steps[currentStep].classList.add("active");
		updateStepVisibility();
	});
});

const quiz1 = document.getElementById("activityQuiz1");

if (quiz1) {
	quiz1.addEventListener("submit", function(event) {
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
	  }
	  
	  if (work.value == "lot") {
		  scores.homework += 3;
		  scores.projector += 1;
	  } else if (work.value == "little") {
		  scores.boardgame += 2;
		  scores.socializing += 1;
	  } else if (work.value == "no") {
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
		projector: "projector.html",
		boardgame: "boardgame.html",
		socializing: "socializing.html"
	  };

	  window.location.href = pages[topActivity];
	});
	
}


const quiz2 = document.getElementById("activityQuiz2");

if (quiz2) {
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
		scores.PCgame += 2;
		scores.homework += 2;
	  } else if (mood.value === "relaxed") {
		scores.PCgame += 2;
		scores.socializing += 3;
	  } else if (mood.value === "happy") {
		scores.PCgame += 3;
		scores.socializing += 2;
	  } else if (mood.value === "upset") {
		scores.homework += 2;
		scores.PCgame += 4;
	  }
	  
	  if (work.value == "lot") {
		  scores.homework += 3;
		  scores.PCgame += 1;
	  } else if (work.value == "little") {
		  scores.PCgame += 2;
		  scores.socializing += 1;
	  } else if (work.value == "no") {
		  scores.PCgame += 3;
		  scores.socializing += 3;
	  }
	  
	  if (energy.value == "lot") {
		  scores.PCgame += 3;
		  scores.socializing += 2;
	  } else if (energy.value == "tired") {
		  scores.PCgame += 2;
		  scores.homework += 1;
	  } else if (energy.value == "soso") {
			scores.PCgame += 1;
			scores.socializing += 1;
	  }
	  
	  if (time.value == "plenty") {
		  scores.socializing += 2;
		  scores.PCgame += 3;
	  } else if (time.value == "little") {
		  scores.socializing += 2;
		  scores.homework += 2;
	  } else if (time.value == "decent") {
		  scores.PCgame += 2;
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
}


const quiz3 = document.getElementById("activityQuiz3");

if (quiz3) {
	quiz3.addEventListener("submit", function(event) {
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
		scores.projector += 2;
		scores.homework += 1;
	  } else if (mood.value === "relaxed") {
		scores.projector += 3;
		scores.socializing += 2;
	  } else if (mood.value === "happy") {
		scores.projector += 2;
		scores.socializing += 2;
	  } else if (mood.value === "upset") {
		scores.homework += 3;
		scores.projector += 1;
	  }
	  
	  if (work.value == "lot") {
		  scores.homework += 3;
		  scores.projector += 1;
	  } else if (work.value == "little") {
		  scores.projector += 2;
		  scores.socializing += 1;
	  } else if (work.value == "no") {
		  scores.projector += 3;
		  scores.socializing += 3;
	  }
	  
	  if (energy.value == "lot") {
		  scores.projector += 2;
		  scores.socializing += 3;
	  } else if (energy.value == "tired") {
		  scores.projector += 2;
		  scores.homework += 1;
	  } else if (energy.value == "soso") {
			scores.socializing += 1;
			scores.projector += 1;
	  }
	  
	  if (time.value == "plenty") {
		  scores.projector += 3;
		  scores.socializing += 2;
	  } else if (time.value == "little") {
		  scores.homework += 2;
		  scores.projector += 2;
	  } else if (time.value == "decent") {
		  scores.projector += 2;
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
}



const quiz4 = document.getElementById("activityQuiz4");

if (quiz4) {
	document.getElementById("activityQuiz4").addEventListener("submit", function(event) {
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
		scores.PCgame += 2;
		scores.projector += 2;
	  } else if (mood.value === "happy") {
		scores.projector += 1;
		scores.socializing += 2;
	  } else if (mood.value === "upset") {
		scores.projector += 3;
		scores.PCgame += 1;
	  }
	  
	  if (work.value == "lot") {
		  scores.homework += 3;
		  scores.projector += 1;
	  } else if (work.value == "little") {
		  scores.PCgame += 2;
		  scores.socializing += 1;
	  } else if (work.value == "no") {
		  scores.projector += 3;
		  scores.socializing += 3;
	  }
	  
	  if (energy.value == "lot") {
		  scores.PCgame += 3;
		  scores.socializing += 2;
	  } else if (energy.value == "tired") {
		  scores.projector += 2;
		  scores.PCgame += 1;
	  } else if (energy.value == "soso") {
			scores.socializing += 1;
			scores.projector += 1;
	  }
	  
	  if (time.value == "plenty") {
		  scores.projector += 3;
		  scores.PCgame += 2;
	  } else if (time.value == "little") {
		  scores.socializing += 2;
		  scores.projector += 2;
	  } else if (time.value == "decent") {
		  scores.PCgame += 2;
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
}

const quiz6 = document.getElementById("activityQuiz6");

if (quiz6) {
	document.getElementById("activityQuiz6").addEventListener("submit", function(event) {
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
		scores.homework += 3;
		scores.PCgame += 1;
	  } else if (mood.value === "relaxed") {
		scores.projector += 3;
		scores.socializing += 2;
	  } else if (mood.value === "happy") {
		scores.projector += 2;
		scores.socializing += 2;
	  } else if (mood.value === "upset") {
		scores.projector += 3;
		scores.PCgame += 1;
	  }
	  
	  if (work.value == "lot") {
		  scores.homework += 3;
		  scores.projector += 1;
	  } else if (work.value == "little") {
		  scores.projector += 2;
		  scores.socializing += 1;
	  } else if (work.value == "no") {
		  scores.PCgame += 3;
		  scores.socializing += 3;
	  }
	  
	  if (energy.value == "lot") {
		  scores.PCgame += 3;
		  scores.socializing += 2;
	  } else if (energy.value == "tired") {
		  scores.projector += 2;
		  scores.homework += 2;
	  } else if (energy.value == "soso") {
			scores.homework += 1;
			scores.projector += 1;
	  }
	  
	  if (time.value == "plenty") {
		  scores.socializing += 3;
		  scores.PCgame += 2;
	  } else if (time.value == "little") {
		  scores.homework += 2;
		  scores.projector += 2;
	  } else if (time.value == "decent") {
		  scores.homework += 2;
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
}

const quiz5 = document.getElementById("activityQuiz5");

if (quiz5) {
	document.getElementById("activityQuiz5").addEventListener("submit", function(event) {
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
		scores.projector += 1;
		scores.socializing += 3;
	  } else if (mood.value === "happy") {
		scores.projector += 2;
		scores.socializing += 3;
	  } else if (mood.value === "upset") {
		scores.projector += 3;
		scores.homework += 1;
	  }
	  
	  if (work.value == "lot") {
		  scores.homework += 3;
		  scores.projector += 1;
	  } else if (work.value == "little") {
		  scores.projector += 2;
		  scores.socializing += 1;
	  } else if (work.value == "no") {
		  scores.projector += 3;
		  scores.socializing += 3;
	  }
	  
	  if (energy.value == "lot") {
		  scores.projector += 2;
		  scores.socializing += 3;
	  } else if (energy.value == "tired") {
		  scores.projector += 2;
		  scores.homework += 1;
	  } else if (energy.value == "soso") {
			scores.socializing += 1;
			scores.projector += 1;
	  }
	  
	  if (time.value == "plenty") {
		  scores.socializing += 2;
		  scores.projector += 3;
	  } else if (time.value == "little") {
		  scores.socializing += 1;
		  scores.projector += 1;
	  } else if (time.value == "decent") {
		  scores.homework += 2;
		  scores.socializing += 1;
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
}

const quiz7 = document.getElementById("activityQuiz7");

if (quiz7) {
	document.getElementById("activityQuiz7").addEventListener("submit", function(event) {
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
		scores.PCgame += 2;
		scores.homework += 1;
	  } else if (mood.value === "relaxed") {
		scores.boardgame += 1;
		scores.socializing += 3;
	  } else if (mood.value === "happy") {
		scores.boardgame += 2;
		scores.PCgame += 2;
	  } else if (mood.value === "upset") {
		scores.PCgame += 1;
		scores.homework += 2;
	  }
	  
	  if (work.value == "lot") {
		  scores.homework += 3;
		  scores.PCgame += 1;
	  } else if (work.value == "little") {
		  scores.homework += 2;
		  scores.PCgame += 1;
	  } else if (work.value == "no") {
		  scores.PCgame += 3;
		  scores.boardgame += 3;
	  }
	  
	  if (energy.value == "lot") {
		  scores.boardgame += 3;
		  scores.PCgame += 2;
	  } else if (energy.value == "tired") {
		  scores.PCgame += 1;
		  scores.homework += 2;
	  } else if (energy.value == "soso") {
			scores.PCgame += 1;
			scores.homework += 1;
	  }
	  
	  if (time.value == "plenty") {
		  scores.boardgame += 3;
		  scores.PCgame += 2;
	  } else if (time.value == "little") {
		  scores.homework += 2;
		  scores.PCgame += 1;
	  } else if (time.value == "decent") {
		  scores.PCgame += 2;
		  scores.boardgame += 1;
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
}