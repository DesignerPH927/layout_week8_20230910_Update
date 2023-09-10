import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // autoplay: true,
  slidesPerView: 3,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  spaceBetween: 24,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      slidesPerGroup: 2,
    },
    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },    
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    376: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    330: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
  },  
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});