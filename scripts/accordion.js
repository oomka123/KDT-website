document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      this.classList.toggle("active");
      content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
    });
  });
});