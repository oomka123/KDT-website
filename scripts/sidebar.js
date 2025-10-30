// const toggleBtn = document.getElementById("sidebar-toggle");
// const sidebar = document.querySelector(".sidebar");
// toggleBtn.addEventListener("click", () => {
//   sidebar.classList.toggle("d-none");
// });
const toggleBtn = document.getElementById("sidebar-toggle");
const sidebar = document.querySelector(".sidebar-overlay");
const closeBtn = document.querySelector(".sidebar-close");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
});
