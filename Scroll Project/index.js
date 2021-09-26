const home = document.querySelector(".homeBtn");
const exploreBtn = document.querySelectorAll(".exploreBtn");
const explore = document.getElementById("explore");
const about = document.querySelector(".aboutBtn");
const tours = document.querySelector(".toursBtn");
const up = document.querySelector(".upArrow");

exploreBtn.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    const hash = event.target.getAttribute("href");
    const scrollTarget = document.querySelector(hash);
    const headerHeight = 90;
    window.scrollTo(0, scrollTarget.offsetTop - headerHeight);
  });
});

about.addEventListener("click", function (event) {
  event.preventDefault();
  const hash = event.target.getAttribute("href");
  const scrollTarget = document.querySelector(hash);
  const headerHeight = 90;
  window.scrollTo(0, scrollTarget.offsetTop - headerHeight);
});

tours.addEventListener("click", function (event) {
  event.preventDefault();
  const hash = event.target.getAttribute("href");
  const scrollTarget = document.querySelector(hash);
  const headerHeight = 90;
  window.scrollTo(0, scrollTarget.offsetTop - headerHeight);
});

up.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
