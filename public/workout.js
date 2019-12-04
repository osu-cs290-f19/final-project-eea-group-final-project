


var allBtn = document.getElementById("all");
var chestBtn = document.getElementById("chest");
var bicepsBtn = document.getElementById("biceps");
var tricepsBtn = document.getElementById("triceps");
var backBtn = document.getElementById("back");
var legsBtn = document.getElementById("legs");
var quadsBtn = document.getElementById("quads");
var hamstringsBtn = document.getElementById("hamstrings");
var calfsBtn = document.getElementById("calfs");
filterSelection("all");

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
  var movement =this.value;
  filterSelection(movement);
  console.log("== movement:", movement);
}

function filterSelection(c) {

  var x, i;
  x = document.getElementsByClassName("workout");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    removeWorkout(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addWorkout(x[i], "show");
  }
}

// Show filtered elements
function addWorkout(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeWorkout(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("filterBtn");
var btns = btnContainer.getElementsByTagName("button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
