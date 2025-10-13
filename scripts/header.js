document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const burger = document.getElementById("burger");
  const fullscreenMenu = document.getElementById("fullscreenMenu");

  // Обработчик скролла для изменения фона хедера
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("header--scrolled");
    } else {
      header.classList.remove("header--scrolled");
    }
  });

  // Обработчик клика по бургер-меню
  burger.addEventListener("click", function () {
    burger.classList.toggle("header__burger--active");
    fullscreenMenu.classList.toggle("header__fullscreen-menu--active");

    // Блокировка скролла при открытом меню
    document.body.style.overflow = fullscreenMenu.classList.contains(
      "header__fullscreen-menu--active"
    )
      ? "hidden"
      : "";
  });

  // Закрытие меню при клике на ссылку
  const menuLinks = document.querySelectorAll(".header__fullscreen-link");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      burger.classList.remove("header__burger--active");
      fullscreenMenu.classList.remove("header__fullscreen-menu--active");
      document.body.style.overflow = "";
    });
  });

  // Закрытие меню при изменении размера окна (если перешли на десктоп)
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      burger.classList.remove("header__burger--active");
      fullscreenMenu.classList.remove("header__fullscreen-menu--active");
      document.body.style.overflow = "";
    }
  });
});
