$(document).ready(function () {
  const images = $(".lazy-img");

  // Creating IntersectionObserver
  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const $img = $(entry.target);
          $img.attr("src", $img.data("src"));
          $img.addClass("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // Enabling the monitoring of all images
  images.each(function () {
    observer.observe(this);
  });
});
