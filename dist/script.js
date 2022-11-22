//<!-- Initialize Swiper Slider -->
var swiper = new Swiper(".slider", {
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//<!-- Initialize Swiper -->
var swiperCarousel = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 40,
  grabCursor: true,
  loop: true,
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
