window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  let docHeight = document.documentElement.scrollHeight - window.innerHeight;
  let scrollPercent = Math.round((scrollTop / docHeight) * 100);

  const progress = document.getElementById("scroll-progress");
  if (progress) progress.style.width = scrollPercent + "%";
});
