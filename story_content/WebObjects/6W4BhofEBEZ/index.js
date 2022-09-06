var player = parent.GetPlayer();
var slidesNumber = player.GetVar("slidesNumber");
var progressImage = document.getElementById("progressImage");

var temp = localStorage.getItem("currentSlide");

window.onload = function () {
  if (temp == 0 || temp == slidesNumber * 2 - 1) {
    progressImage.src = "./assets/" + slidesNumber + "P/" + temp + ".png";
  } else if (temp >= 0) {
    progressImage.src =
      "./assets/" + slidesNumber + "P/" + (parseInt(temp) + 1) + ".png";
  }
};

function IncreaseProgress(showAnimation) {
  var currentState = progressImage.src
    .slice(progressImage.src.lastIndexOf("/") + 1, progressImage.src.length)
    .split(".")[0];

  currentState = parseInt(currentState) + 1;
  if (showAnimation == "R") {
    ShowAnimation();
  }
  progressImage.src = "./assets/" + slidesNumber + "P/" + currentState + ".png";
  localStorage.setItem("currentSlide", currentState);
}

function ShowAnimation() {
  document.getElementsByClassName("imga-container")[0].style.display = "block";
  document.getElementsByClassName("imgJaC-container")[0].style.display = "none";
  setTimeout(() => {
    document.getElementsByClassName("imga-container")[0].style.display = "none";
    document.getElementsByClassName("imgJaC-container")[0].style.display =
      "block";
    document.getElementById("animationImage").src = "";
  }, 1000);
}
