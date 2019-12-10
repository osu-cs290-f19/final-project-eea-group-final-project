



var allBtn = document.getElementById("all");
var chestBtn = document.getElementById("chest");
var bicepsBtn = document.getElementById("biceps");
var tricepsBtn = document.getElementById("triceps");
var backBtn = document.getElementById("back");
var legsBtn = document.getElementById("legs");
var quadsBtn = document.getElementById("quads");
var hamstringsBtn = document.getElementById("hamstrings");
var calfsBtn = document.getElementById("calfs");
//filterSelection("all");

allBtn.addEventListener("click", filterMovement);
chestBtn.addEventListener("click", filterMovement);
bicepsBtn.addEventListener("click", filterMovement);
tricepsBtn.addEventListener("click", filterMovement);
backBtn.addEventListener("click", filterMovement);
legsBtn.addEventListener("click", filterMovement);
quadsBtn.addEventListener("click", filterMovement);
hamstringsBtn.addEventListener("click", filterMovement);
calfsBtn.addEventListener("click", filterMovement);

function filterMovement(){
  var current = document.getElementsByClassName("active");
  var movement = this.value;
  if (movement === "all") {
    movement = "";
  }
  filterSelection(movement);
}

function filterSelection(movement) {
  var workouts = document.getElementsByClassName("workout");
  for (var i = 0; i < workouts.length; i++) {
    var muscle = workouts[i].getAttribute('data-movement');
    if(muscle.includes(movement)) {
      workouts[i].style.display = "";
    } else {
      workouts[i].style.display = "none";
    }
  }
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("filterBtn");
var btns = btnContainer.getElementsByTagName("button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var active = document.getElementsByClassName("active");
    active[0].className = active[0].className.replace(" active", "");
    this.className += " active";
  });
}
