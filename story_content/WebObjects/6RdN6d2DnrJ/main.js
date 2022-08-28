let canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth - 70;
let ctx = canvas.getContext("2d");
ctx.lineWidth = 5;
let prevX = null;
let prevY = null;
let draw = false;
let erase = false;
let mode = "pen";
let fillBg = false;
let clrs = document.querySelectorAll(".clr");
let toggleItems = document.querySelectorAll(".toggle");
clrs = Array.from(clrs);
toggleItems = Array.from(toggleItems);

clrs.forEach((clr) => {
  clr.addEventListener("click", () => {
    toggleItems.forEach((temp) => {
      temp.classList.remove("active");
    });
    ctx.strokeStyle = clr.dataset.clr;
    mode = "pen";
    clr.classList.add("active");
  });
});

let fillBgBtn = document.getElementById("fillBg");
fillBgBtn.addEventListener("mousedown", function (e) {
  if (fillBg) {
    fillBg = false;
    document.getElementById("canvas").style.backgroundColor = "";
    fillBgBtn.classList.remove("active");
  } else {
    document.getElementById("canvas").style.backgroundColor = "#ffffffd9";
    fillBg = true;
    fillBgBtn.classList.add("active");
  }
});

let eraseBtn = document.querySelector("#eraser");
eraseBtn.addEventListener("click", () => {
  mode = "erase";
});

let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  clearBtn.classList.remove("active");
  mode = "pen";
});

window.addEventListener("mousedown", (e) => (draw = true));
window.addEventListener("mouseup", (e) => (draw = false));
window.addEventListener("touchstart", (e) => (draw = true));
window.addEventListener("touchend", (e) => {
  prevX = null;
  prevY = null;
  draw = false;
});

window.addEventListener("touchmove", function (e) {
  ctx.beginPath();
  if (mode == "pen") {
    if (prevX == null || prevY == null || !draw) {
      prevX = e.touches[0].clientX;
      prevY = e.touches[0].clientY;
      return;
    }
    ctx.globalCompositeOperation = "source-over";
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(e.touches[0].clientX, e.touches[0].clientY);
    ctx.stroke();
  } else if (mode == "erase") {
    if (prevX == null || prevY == null || !draw) {
      prevX = e.touches[0].clientX;
      prevY = e.touches[0].clientY;
      return;
    }
    ctx.globalCompositeOperation = "destination-out";
    ctx.arc(prevX, prevY, 15, 0, Math.PI * 2, false);
    ctx.fill();
  }
  prevX = e.touches[0].clientX;
  prevY = e.touches[0].clientY;
});

window.addEventListener("mousemove", function (e) {
  ctx.beginPath();
  if (mode == "pen") {
    if (prevX == null || prevY == null || !draw) {
      prevX = e.clientX;
      prevY = e.clientY;
      return;
    }
    ctx.globalCompositeOperation = "source-over";
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  } else if (mode == "erase") {
    if (prevX == null || prevY == null || !draw) {
      prevX = e.clientX;
      prevY = e.clientY;
      return;
    }
    ctx.globalCompositeOperation = "destination-out";
    ctx.arc(prevX, prevY, 15, 0, Math.PI * 2, false);
    ctx.fill();
  }
  prevX = e.clientX;
  prevY = e.clientY;
});
