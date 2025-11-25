document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(
    ".fade-left, .fade-right, .fade-top, .fade-bottom"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  animatedItems.forEach((item) => observer.observe(item));
});

const items = document.querySelectorAll(".examples-items");
const slides = document.querySelectorAll(".examples-swiper-slide");

const headers = document.querySelectorAll(".examples-header p[data-id]");
const moreBtn = document.querySelector(".more-btn");
let currentId = 1;

function showItems(id) {
  items.forEach((block) => {
    block.classList.toggle("active", block.dataset.id == id);
  });

  headers.forEach((header) => {
    header.classList.toggle("active", header.dataset.id == id);
  });
}

function showSlides(id) {
  slides.forEach((slide) => {
    slide.classList.toggle("active", slide.dataset.id == id);
  });
}

showItems(currentId);
showSlides(currentId);

moreBtn.addEventListener("click", () => {
  const total = items.length;

  currentId++;

  if (currentId > total) {
    currentId = 1;
  }

  showItems(currentId);
  showSlides(currentId);

});



function perfectLoop(trackSelector, speed, reverse = false) {
  const track = document.querySelector(trackSelector);
  track.innerHTML += track.innerHTML;

  let width = 0;

  function calcWidth() {
    width = Array.from(track.children).reduce(
      (acc, el) => acc + el.getBoundingClientRect().width,
      0
    );

    half = width / 2;
  }

  calcWidth();
  window.addEventListener("resize", calcWidth);

  let x = reverse ? -half : 0;

  function animate() {
    x += reverse ? speed : -speed;

    if (!reverse) {
      if (x <= -half) x += half;
    } else {
      if (x >= 0) x -= half;
    }

    track.style.transform = `translate3d(${x}px,0,0)`;
    requestAnimationFrame(animate);
  }

  animate();
}

perfectLoop(".hero-carousel-track:first-child", 0.5, false);
perfectLoop(".hero-carousel-track:last-child", 0.5, true);





const textarea = document.querySelector('.textarea-wrapper textarea');
const decor = document.querySelector('.textarea-wrapper .textarea-decor');

textarea.addEventListener('focus', () => {
  textarea.placeholder = "";   
  decor.style.opacity = "0";   
});

textarea.addEventListener('blur', () => {
  if (textarea.value.trim() === "") {
    textarea.placeholder = "Основные принципы ландшафтного дизайна";
    decor.style.opacity = "1";
  }
});