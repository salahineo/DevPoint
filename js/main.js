$(function () {
  "use strict";
  // Calculate Slider Height
  var windowHeight = $(window).height(),
    upperNavHeight = $(".upperNav").innerHeight(),
    mainNavHeight = $(".navbar").innerHeight();
  $(".carousel").height(windowHeight - (upperNavHeight + mainNavHeight));
});
