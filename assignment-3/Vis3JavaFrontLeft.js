document.getElementById("activityQuiz").addEventListener("submit", function(event) {
  event.preventDefault();

  const mood = document.querySelector('input[name = "mood"]:checked');
  const mood = document.querySelector('input[name = "work"]:checked');
  const energy = document.querySelector('input[name = "energy"]:checked');
  const time = document.querySelector('input[name = "time"]:checked');
  
  if (!mood || !work || !energy || !time) {
    alert("Oops! You need to answer each question so we can properly decide your activity!");
    return;
  }

const scores = {
    reading: 0,
    discussion: 0,
    projector: 0,
    game: 0
  };