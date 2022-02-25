"use strict";

import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./plugins/jquery.jdSlider-latest.js";
// Polifilling
import "core-js/stable";
// Polifilling async functions
import "regenerator-runtime";

window.$ = require("jquery");

// Bootstrap Brand Slider
$(".brand-slider").jdSlider({
  wrap: ".slide-inner",
  speed: 1750,
  slideShow: 3,
  slideToScroll: 3,
  isLoop: true,
  responsive: [
    {
      viewSize: 320,
      settings: {
        slideShow: 1,
        slideToScroll: 1,
      },
    },
  ],
});

// Navbar Toggle
// $(window).on("scroll", function () {
//   $("#navbar-container").toggleClass("scrolled", $(this).scrollTop() > 450);
// });

// Navbar Sticky
const nav = document.querySelector("#navbar-container");
const headingPrimary = document.querySelector(".heading-primary");
const headingPrimaryHeight = headingPrimary.getBoundingClientRect().height;

const stickyNav = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
};

const headingObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headingPrimaryHeight}px`,
});

headingObserver.observe(headingPrimary);

// Reveal Sections
// const allSections = $(".section");
const allSections = document.querySelectorAll(".section");

const revealSection = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Lazy Loading Images

// const imgTargets = document.querySelectorAll("img[data-src]");
// console.log(imgTargets);

// const loadImg = function (entries, observer) {
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.isIntersecting) return;

//   // Replace src with data-src
//   entry.target.src = entry.target.dataset.src;

//   entry.target.classList.remove("lazy-img");
//   entry.target.addEventListener("load", function () {});

//   observer.unobserve(entry.target);
// };

// const imgObserver = new IntersectionObserver(loadImg, {
//   root: null,
//   threshold: 0,
//   // rootMargin: "200px",
// });

// imgTargets.forEach((img) => imgObserver.observe(img));
