document.addEventListener("DOMContentLoaded", function () {
  const instructionsSwiper = new Swiper(".instructions-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".instructions-swiper .instructions-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".instructions-swiper .custom-next",
      prevEl: ".instructions-swiper .custom-prev",
    },
    breakpoints: {
      // Мобильные (1 слайд)
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      // Планшеты (2 слайда)
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // Десктопы (3 слайда)
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});