


const reviewsSwiper = new Swiper(".reviews-swiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  loop: true,
  slidesPerGroup: 3,

  pagination: {
    el: ".reviews-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".reviews-button-next",
    prevEl: ".reviews-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1, 
    },
    576: {
      slidesPerView: 1,
      slidesPerGroup: 1, 
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1, 
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 1, 
    },
      1200: {
      slidesPerView: 3,
      slidesPerGroup: 3, 
      loopedSlides: 6,   
    },
  },
});

 


const designsSwiper = new Swiper(".designs-swiper", {
  spaceBetween: 40,
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: ".designs-swiper-pagination",
    clickable: true,
  },

});


const examplesSwiper = new Swiper(".examples-swiper", {
  spaceBetween: 40,
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: ".examples-swiper-pagination",
    clickable: true,
  },

});





