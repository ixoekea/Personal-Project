document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("hidden1").style.display = "none";
  document.getElementById("hidden2").style.display = "none";
  document.getElementById("hidden3").style.display = "none";
  document.getElementById("hidden4").style.display = "none";
});

//Button onlick//
function locationInfo() {
  var image = document.getElementById("buttonTopic1");
  var hidden = document.getElementById("hidden1");
  if (image.src.includes("icon-plus.svg")) {
    image.src = "images/icon-minus.svg";
    hidden.style.display = "block";
  } else {
    image.src = "images/icon-plus.svg";
    hidden.style.display = "none";
  }
}

function nationalityInfo() {
  var image = document.getElementById("buttonTopic2");
  var hidden = document.getElementById("hidden2");
  if (image.src.includes("icon-plus.svg")) {
    image.src = "images/icon-minus.svg";
    hidden.style.display = "block";
  } else {
    image.src = "images/icon-plus.svg";
    hidden.style.display = "none";
  }
}

function hobbiesInfo() {
  var image = document.getElementById("buttonTopic3");
  var hidden = document.getElementById("hidden3");
  if (image.src.includes("icon-plus.svg")) {
    image.src = "images/icon-minus.svg";
    hidden.style.display = "block";
  } else {
    image.src = "images/icon-plus.svg";
    hidden.style.display = "none";
  }
}

function programInfo() {
  var image = document.getElementById("buttonTopic4");
  var hidden = document.getElementById("hidden4");
  if (image.src.includes("icon-plus.svg")) {
    image.src = "images/icon-minus.svg";
    hidden.style.display = "block";
  } else {
    image.src = "images/icon-plus.svg";
    hidden.style.display = "none";
  }
}
