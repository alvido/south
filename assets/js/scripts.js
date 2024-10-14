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

document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header"),
    main = document.querySelector(".main"),
    headerH = header.offsetHeight,
    scrollOffset = window.pageYOffset;

  checkScroll(scrollOffset);

  window.addEventListener("scroll", function () {
    scrollOffset = window.pageYOffset;
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= headerH) {
      header.classList.add("fixed");
      main.style.paddingTop = headerH + "px"; // Добавляем верхний отступ
    } else {
      header.classList.remove("fixed");
      main.style.paddingTop = 0; // Убираем верхний отступ
    }
  }

  // Плавная прокрутка с учетом высоты заголовка
  document.querySelectorAll('a[href*="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      var targetId = this.getAttribute("href").split("#")[1],
        targetElement = document.getElementById(targetId);

      if (targetElement) {
        var targetOffset = targetElement.offsetTop - headerH;

        window.scrollTo({
          top: targetOffset,
          behavior: "smooth",
        });
      }
    });
  });
});
// Fixed header end

//
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".about__banner-item");

  items.forEach((item) => {
    if (item) {
      item.addEventListener("click", function (e) {
        e.stopPropagation();

        // Проверяем, имеет ли текущий элемент класс 'show'
        const isShowing = item.classList.contains("show");

        // Удаляем класс 'show' у всех элементов
        items.forEach((el) => {
          el.classList.remove("show");
        });

        // Если у текущего элемента не было класса 'show', добавляем его
        if (!isShowing) {
          item.classList.add("show");
        }
      });
    }
  });
});

//

//swiper
document.addEventListener("DOMContentLoaded", function () {
  // Получаем все элементы с классом swiper.partnership-slider
  const partnership_sliders = document.querySelectorAll(".swiper.partnership-slider");

  // Инициализируем Swiper для каждого элемента
  partnership_sliders.forEach((slider) => {
    if (slider) {
      new Swiper(slider, {
        observer: true,
        observeParents: true,
        loop: true,
        autoHeight: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: slider.querySelector(".swiper-pagination"), // Привязываем пагинацию к текущему слайдеру
          clickable: true,
        },
        navigation: {
          nextEl: slider.querySelector(".swiper-button-next"), // Привязываем кнопки навигации к текущему слайдеру
          prevEl: slider.querySelector(".swiper-button-prev"),
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },
      });
    }
  });


  // Получаем все элементы с классом swiper.partnership-slider
  const swipers = document.querySelectorAll(".swiper.double-swiper");

  // Инициализируем Swiper для каждого элемента
  swipers.forEach((swiper) => {
    if (swiper) {
      new Swiper(swiper, {
        observer: true,
        observeParents: true,
        loop: true,
        autoHeight: true,
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
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          561: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        },
      });
    }
  });
});
// swiper
