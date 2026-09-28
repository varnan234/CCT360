// get the elements I need
let progress = document.getElementById("progress");
let logo = document.getElementById("logo");
let heroText = document.getElementById("hero-text");
let hiddenItems = document.querySelectorAll(".hidden");
let stickySection = document.getElementById("sticky-section");
let number = document.getElementById("number");
let barFill = document.getElementById("bar-fill");
let caption = document.getElementById("caption");
let topButton = document.getElementById("top-button");

window.addEventListener("scroll", function () {
  let scrollY = window.scrollY;

  // 1. progress bar
  let pageHeight = document.body.scrollHeight - window.innerHeight;
  progress.style.width = (scrollY / pageHeight) * 100 + "%";

  // 2. parallax - logo moves slower than the text, and both fade out
  logo.style.transform = "translateY(" + scrollY * 0.6 + "px)";
  heroText.style.transform = "translateY(" + scrollY * 0.3 + "px)";
  logo.style.opacity = 1 - scrollY / 500;
  heroText.style.opacity = 1 - scrollY / 400;

  // 3. show items when they come on screen
  for (let i = 0; i < hiddenItems.length; i++) {
    let top = hiddenItems[i].getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      hiddenItems[i].classList.add("show");
    }
  }

  // 4. sticky section - how far through it am I? (0 to 1)
  let box = stickySection.getBoundingClientRect();
  let amount = -box.top / (box.height - window.innerHeight);
  if (amount < 0) amount = 0;
  if (amount > 1) amount = 1;

  // the number counts up to 3.18, then jumps to 3.27 after the "84"
  let cgpa = amount * 3.18 / 0.3;
  if (cgpa > 3.18) cgpa = 3.18;
  if (amount > 0.4) cgpa = 3.27;

  number.textContent = cgpa.toFixed(2);
  barFill.style.width = (cgpa / 4) * 100 + "%";

  // change the text depending on progress
  if (amount < 0.4) {
    caption.textContent = "Say I get an 84 on the midterm.";
    barFill.style.backgroundColor = "#F0F0F8";
  } else if (amount < 0.7) {
    caption.textContent = "My course grade goes up to 81 and my CGPA goes to 3.27.";
  } else {
    caption.textContent = "My target is still possible, and now I actually know it.";
    barFill.style.backgroundColor = "#818CF8";
  }
});

// back to top button
topButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
