// On load "Squat" is selected as default
document.body.onload = selectExercise (document.getElementById("Squat"));

// function to select the exercise
function selectExercise(id) {
  document.getElementById("exercise").innerHTML = id.id;  
  var x = document.querySelectorAll("div#exercises > button");
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#0A4158";
  }
  id.style.backgroundColor = "#FF9636";

  if (window.matchMedia("(max-width: 768px)").matches) {
    menuToggle();
  }
}

// Menu button appears when window is less than 
function menuToggle() {
  var x = document.getElementById("exercises");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Add responsiveness to menu between sidebar & toggled menu
responsive();
window.addEventListener("resize", responsive);

function responsive() {
  var x = window.matchMedia("(min-width: 768px)");
  var menu = document.getElementById("exercises")
  if(x.matches){
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}
