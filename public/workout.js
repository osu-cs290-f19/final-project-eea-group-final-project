


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

// function to create a post on the myworkouts page.
function savePost() {
  var sectionMy = document.getElementById('myWorkouts');
  var workoutSection = document.createElement('div');
  workoutSection.classList.add('workout');
  workoutSection.dataset.movement = movement;
  workoutSection.dataset.time = time;
  sectionMy.appendChild(workoutSection);

  var workoutContents = document.createElement('div');
  workoutContents.classList.add('workout-contents');
  workoutSection.appendChild(workoutContents);

  var imgContainerDiv = document.createElement('div');
  imgContainerDiv.classList.add('workout-image');
  workoutContents.appendChild(imgContainerDiv);

  var sellPhoto = document.createElement('img');
  sellPhoto.src = postUrl;
  sellPhoto.alt = postName;
  imgContainerDiv.appendChild(sellPhoto);

  var createInfoContainer = document.createElement('div');
  createInfoContainer.classList.add('post-info-container');
  createPostContentsDiv.appendChild(createInfoContainer);

  var sellTitle = document.createElement('a');
  sellTitle.href = "#";
  sellTitle.classList.add('post-title');
  sellTitle.textContent = postName;
  createInfoContainer.appendChild(sellTitle);

  var sellPrice = document.createElement('span');
  sellPrice.classList.add('post-price');
  sellPrice.textContent = "$" + postPrice;
  createInfoContainer.appendChild(sellPrice);

  var sellCity = document.createElement('span');
  sellCity.classList.add('post-city');
  sellCity.textContent = "(" + postCity + ")";
  createInfoContainer.appendChild(sellCity);

}

//Add workout to My Program

function saveWorkouts(){
  var workouts = document.getElementsByClassName("workout");

  var section = document.getElementById('workouts')

  var workout = document.createElement('div')
  workout.classList.add('workout')
  workout.setAttribute('data-movement', data.movement)
  workout.setAttribute('data-time', data.time)
  section.appendChild(post)

  var workoutContents = document.createElement('div')
  workoutContents.classList.add('workout-contents')
  post.appendChild(workoutContents)

  var workoutImage = document.createElement('div')
  workoutImage.classList.add('workout-image')
  postContents.appendChild(workoutImage)

  var img = document.createElement('img')
  img.setAttribute('src', data.url)
  img.setAttribute('alt', data.description)
  imageContainer.appendChild(img)

}

var addWorkout = document.getElementById("addBtn");
addWorkout.addEventListener("click", saveWorkouts);
