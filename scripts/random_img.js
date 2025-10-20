const images = [
  "./images/about_us_img.jpg",
  "./images/background.jpg",
  "./images/baursak.png",
  "./images/besh.jpg",
  "./images/kumuz.jpg",
  "./images/kuurdak.jpg",
  "./images/our_img_1.jpg",
  "./images/our_img_2.jpg",
  "./images/qurt.png",
  "./images/shelpek.webp",
  "./images/qurtAlt.png",
];

let index = 0;
const imgElement = document.getElementById("foodImage");

function changeImage() {
  imgElement.style.opacity = 0;
  setTimeout(() => {
    imgElement.src = images[index];
    imgElement.style.opacity = 1;
  }, 500);
}

setInterval(() => {
  index++;
  if (index >= images.length) {
    index = 0;
  }

  let i = 0;
  while (i < 1) {
    changeImage();
    i++;
  }
}, 3000);
