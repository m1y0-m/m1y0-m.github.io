document.getElementById("activityQuiz").addEventListener("submit", function(event) {
  event.preventDefault();

  const mood = document.querySelector('input[name="mood"]:checked');
  const energy = document.querySelector('input[name="energy"]:checked');
  const group = document.querySelector('input[name="group"]:checked');
  const interest = document.querySelector('input[name="interest"]:checked');
  const time = document.querySelector('input[name="time"]:checked');

  if (!mood || !energy || !group || !interest || !time) {
    alert("Please answer every question before continuing.");
    return;
  }

  const scores = {
    reading: 0,
    discussion: 0,
    projector: 0,
    game: 0
  };

  /* Mood */
  if (mood.value === "quiet") {
    scores.reading += 3;
    scores.discussion += 1;
  } else if (mood.value === "social") {
    scores.discussion += 3;
    scores.game += 2;
  } else if (mood.value === "creative") {
    scores.projector += 2;
    scores.discussion += 2;
  } else if (mood.value === "playful") {
    scores.game += 3;
    scores.projector += 1;
  }

  /* Energy */
  if (energy.value === "low") {
    scores.reading += 3;
  } else if (energy.value === "medium") {
    scores.discussion += 2;
    scores.projector += 1;
  } else if (energy.value === "high") {
    scores.game += 3;
    scores.projector += 1;
  }

  /* Group */
  if (group.value === "alone") {
    scores.reading += 3;
    scores.projector += 1;
  } else if (group.value === "smallgroup") {
    scores.discussion += 3;
    scores.projector += 1;
  } else if (group.value === "biggroup") {
    scores.game += 3;
    scores.projector += 2;
  }

  /* Interest */
  if (interest.value === "reading") {
    scores.reading += 4;
  } else if (interest.value === "planning") {
    scores.discussion += 4;
  } else if (interest.value === "watching") {
    scores.projector += 4;
  } else if (interest.value === "game") {
    scores.game += 4;
  }

  /* Time */
  if (time.value === "short") {
    scores.reading += 1;
    scores.game += 1;
  } else if (time.value === "medium") {
    scores.discussion += 2;
    scores.projector += 2;
  } else if (time.value === "long") {
    scores.projector += 2;
    scores.reading += 1;
  }

  let topActivity = "reading";
  let highestScore = scores.reading;

  for (let activity in scores) {
    if (scores[activity] > highestScore) {
      highestScore = scores[activity];
      topActivity = activity;
    }
  }

  const pages = {
    reading: "reading.html",
    discussion: "discussion.html",
    projector: "projector.html",
    game: "game.html"
  };

  window.location.href = pages[topActivity];
});