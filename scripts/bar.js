$(window).on("scroll", function() {
  let scrollTop = $(window).scrollTop();
  let docHeight = $(document).height() - $(window).height();
  let scrollPercent = Math.round((scrollTop / docHeight) * 100);

  $("#scroll-progress").css("height", scrollPercent + "%");
});