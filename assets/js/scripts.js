// Burger Menu Open //
document.addEventListener("DOMContentLoaded", function () {
  // Выбираем бургер-кнопку и навигацию
  const burgerButton = document.getElementById("burgerButton");
  const navigation = document.querySelector(".navigation");
  const links = document.querySelectorAll(".navigation__link");
  const body = document.querySelector("body");

  // Если бургер-кнопка существует, добавляем обработчик события
  if (burgerButton) {
    burgerButton.addEventListener("click", function (e) {
      e.stopPropagation(); // Остановка всплытия события
      burgerButton.classList.toggle("burger--active"); // Переключаем класс активности бургер-кнопки
      navigation.classList.toggle("navigation--active"); // Переключаем класс активности навигации
      body.classList.toggle("lock"); // Блокируем прокрутку страницы
    });

    // Добавляем обработчики событий для ссылок навигации
    links.forEach((link) => {
      link.addEventListener("click", function () {
        burgerButton.classList.remove("burger--active");
        navigation.classList.remove("navigation--active");
        body.classList.remove("lock");
      });
    });
  }
});
//

// Fixed header
$(document).ready(function () {
  var header = $(".header"),
    main = $(".main"),
    headerH = header.innerHeight(),
    scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= headerH) {
      header.addClass("fixed");
      main.css("padding-top", headerH); // Добавляем верхний отступ
    } else {
      header.removeClass("fixed");
      main.css("padding-top", 0); // Убираем верхний отступ
    }
  }

  // Плавная прокрутка с учетом высоты заголовка
  $('a[href*="#"]').on("click", function (event) {
    event.preventDefault();

    var targetId = $(this).attr("href").split("#")[1],
      targetOffset = $("#" + targetId).offset().top - headerH;

    $("html, body").animate(
      {
        scrollTop: targetOffset,
      },
      300
    );
  });
});
// Fixed header end

//swiper
let swiper;

swiper = new Swiper("#current", {
  observer: true,
  observeParents: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Настройки для различных размеров экранов
  breakpoints: {
    // Когда ширина экрана >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // Когда ширина экрана >= 640px
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

swiper = new Swiper("#prior", {
  observer: true,
  observeParents: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Настройки для различных размеров экранов
  breakpoints: {
    // Когда ширина экрана >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // Когда ширина экрана >= 480px
    561: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // Когда ширина экрана >= 640px
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

swiper = new Swiper("#strategic", {
  observer: true,
  observeParents: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Настройки для различных размеров экранов
  breakpoints: {
    // Когда ширина экрана >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // Когда ширина экрана >= 480px
    561: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // Когда ширина экрана >= 640px
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
// swiper
