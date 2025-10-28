// Find all images with the data-src attribute
const $imgTargets = $("img[data-src]");

// Callback function for IntersectionObserver
const loadImg = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const $img = $(entry.target);

    // Replace src with data-src
    $img.attr("src", $img.data("src"));

    // When the image has loaded, remove "lazy-img" class
    $img.on("load", function () {
      $img.removeClass("lazy-img");
    });

    // Stop observing this element
    observer.unobserve(entry.target);
  });
};

// Create the observer
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

// Observe each image
$imgTargets.each(function () {
  imgObserver.observe(this);
});
