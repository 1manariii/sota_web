document.addEventListener("DOMContentLoaded", function () {
  const categorySwiper = new Swiper(".category-swiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    speed: 600,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 40,
      modifier: 1.2,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".category-swiper .custom-next",
      prevEl: ".category-swiper .custom-prev",
    },
    pagination: {
      el: ".category-swiper .category-pagination",
      clickable: true,
    },
  });
});