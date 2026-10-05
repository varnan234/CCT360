// get the elements from the page
let slider = document.getElementById("slider");
let grade = document.getElementById("grade");
let cgpa = document.getElementById("cgpa");
let barFill = document.getElementById("bar-fill");
let message = document.getElementById("message");
let themeButton = document.getElementById("theme-button");
let width = document.getElementById("width");
let screenType = document.getElementById("screen-type");
let clock = document.getElementById("clock");


// 1. MOUSE - move the slider to change the CGPA
// same example as part 1: CGPA was 3.18, and 84 on the midterm makes it 3.27

slider.addEventListener("input", function () {
  let value = slider.value;
  grade.textContent = value;

  // UofT grade scale
  let points = 0;
  if (value >= 85) {
    points = 4.0;
  } else if (value >= 80) {
    points = 3.7;
  } else if (value >= 77) {
    points = 3.3;
  } else if (value >= 73) {
    points = 3.0;
  } else if (value >= 70) {
    points = 2.7;
  } else if (value >= 67) {
    points = 2.3;
  } else if (value >= 63) {
    points = 2.0;
  } else if (value >= 60) {
    points = 1.7;
  } else if (value >= 57) {
    points = 1.3;
  } else if (value >= 53) {
    points = 1.0;
  } else if (value >= 50) {
    points = 0.7;
  }

  // 2.5 credits done at 3.18, plus this 0.5 credit course
  let newCgpa = (3.18 * 2.5 + points * 0.5) / 3;
  cgpa.textContent = newCgpa.toFixed(2);

  // bar fills out of 4.0
  barFill.style.width = (newCgpa / 4) * 100 + "%";

  // message changes if the CGPA goes up or down
  if (newCgpa > 3.18) {
    message.textContent = "Your CGPA goes up!";
    barFill.style.backgroundColor = "#818CF8";
  } else {
    message.textContent = "Your CGPA goes down.";
    barFill.style.backgroundColor = "#F87171";
  }
});


// 2. KEYBOARD - press T (or click the button) to change the theme

function changeTheme() {
  document.body.classList.toggle("light");
}

themeButton.addEventListener("click", changeTheme);

document.addEventListener("keydown", function (event) {
  if (event.key === "t" || event.key === "T") {
    changeTheme();
  }
});


// 3. WINDOW - show the window width when it gets resized

function showWidth() {
  width.textContent = window.innerWidth;

  if (window.innerWidth < 600) {
    screenType.textContent = "Looks like a phone.";
  } else {
    screenType.textContent = "Looks like a laptop.";
  }
}

window.addEventListener("resize", showWidth);
showWidth();


// 4. TIME - clock at the top that updates every second

function showTime() {
  let now = new Date();
  clock.textContent = now.toLocaleTimeString();
}

setInterval(showTime, 1000);
showTime();
