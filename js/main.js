$(function () {
  "use strict";
  // Calculate Slider Height
  var windowHeight = $(window).height(),
    upperNavHeight = $(".upperNav").innerHeight(),
    mainNavHeight = $(".navbar").innerHeight();
  $(".carousel").height(windowHeight - (upperNavHeight + mainNavHeight));

  // New date Object
  let currentDate = new Date();
  // Get Copyright Year Span
  document.getElementById("footer-copyright-year").innerHTML = String(currentDate.getFullYear());
});
