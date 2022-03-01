const next = document.querySelectorAll(".next");
const prev = document.querySelectorAll(".prev");
const slides = document.querySelectorAll(".slide");

console.log(prev);

let index = 0;

display(index);
function display(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "flex";
}

function nextSlide() {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  display(index);
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  display(index);
}

next.forEach((n) => {
  n.addEventListener("click", nextSlide);
});

prev.forEach((p) => {
  p.addEventListener("click", prevSlide);
});
