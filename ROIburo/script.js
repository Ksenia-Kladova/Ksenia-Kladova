//кнопки 'копировать'
const buttons = document.querySelectorAll('[data-btn]');
const text = document.querySelectorAll('[data-target]');

buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    const btnValue = e.currentTarget.dataset.btn;
    console.log(btnValue);

    const textTarget = document.querySelector(`[data-target="${btnValue}"]`)
    console.dir(textTarget)
    navigator.clipboard.writeText(textTarget.textContent)
  })
})

//инициализация карты
ymaps.ready(init);
function init() {
  const myMap = new ymaps.Map("map", {
    center: [55.755864, 37.617698],
    zoom: 8,
    type: 'yandex#map',
    controls: [],
  });

  const coordsMark1 = [55.755864, 37.617698];

  myPlacemark1 = new ymaps.Placemark(coordsMark1, {
    hintContent: ' ',
    balloonContent: ' '
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'images/marker.svg',
    iconImageSize: [56, 64],
    iconImageOffset: [-25, -85]
  });

  myMap.geoObjects.add(myPlacemark1);

  //смещение центра карты
  const windowInnerWidth = window.innerWidth;

  if (windowInnerWidth < 1600) {
    myMap.setCenter([55.76, 36.3]);
  }

}

//слайдер в секции контакты
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  slidesPerView: 3,
  spaceBetween: 40,
  breakpoints: {
    375: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 1.25,
      spaceBetween: 40,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 24
    },

    1600: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});

//слайдер в секции наша команда
const swiper2 = new Swiper('.employees__swiper', {
  // grid: {
  //   rows: 2,
  // },
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.employees__swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  slidesPerView: 4,
  spaceBetween: 40,


  breakpoints: {
    375: {
      slidesPerView: 1,
    },

    767: {
      slidesPerView: 2,
      spaceBetween: 24,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 24
    },

    1600: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});

