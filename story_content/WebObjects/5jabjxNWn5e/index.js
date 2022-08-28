var player = parent.GetPlayer();
var slidesNumber = player.GetVar("slidesNumber");
var progressImage = document.getElementById("progressImage");

try {
  var temp = localStorage.getItem("currentSlide");
  if (temp != null) {
    progressImage.src = "./assets/" + slidesNumber + "P/" + temp + ".png";
  } else {
    progressImage.src = "./assets/" + slidesNumber + "P/0.png";
  }
} catch (e) {}

function IncreaseProgress(showAnimation) {
  var currentState = progressImage.src
    .slice(progressImage.src.lastIndexOf("/") + 1, progressImage.src.length)
    .split(".")[0];

  if (parseInt(currentState) <= slidesNumber * 2 - 1) {
    currentState = parseInt(currentState) + 1;
    if (currentState % 2 && showAnimation =="R") {
      ShowAnimation();
    }

    progressImage.src =
      "./assets/" + slidesNumber + "P/" + currentState + ".png";
    localStorage.setItem("currentSlide", currentState);
  }
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
