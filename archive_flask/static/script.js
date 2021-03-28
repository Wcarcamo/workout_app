// GET ADD BUTTON
var addButton = document.getElementById("add")

// APPLY WHEN USER CLICKS ON "+" 
addButton.addEventListener("click", newExercise)

// GET EXERCISE INPUTS
var inputs = document.getElementById("exercise");

function newExercise() {
	// CLONE EXERCISE 
	var clone = inputs.cloneNode(true);
  clone.id = ""
  document.getElementById("exList").appendChild(clone);  
}
