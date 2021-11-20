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
$(window).on("scroll", function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 450);
});
