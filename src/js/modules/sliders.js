import Swiper, { Navigation, Autoplay, Thumbs, Pagination } from "swiper";
const bodyStyles = window.getComputedStyle(document.body);
const fooBar = parseInt(bodyStyles.getPropertyValue('--grid-gap'));


const mainHeroSliderSpeed = 1500;

const fooBarSlider = parseInt(bodyStyles.getPropertyValue('--main-hero-slider-speed'));

document.body.style.setProperty('--main-hero-slider-speed', mainHeroSliderSpeed + 'ms');

export const mainHeroSwiper = (className) => {
  const mainHeroSlider = new Swiper(className, {
    slidesPerView: 1,
    allowTouchMove: false,
    loop: true,
    fadeEffect: {
      crossFade: true,
    },
    effect: "fade",
    navigation: {
      nextEl: '.main-hero__slider-nav--btn-next',
      prevEl: '.main-hero__slider-nav--btn-prev',
    },
    pagination: {
      el: '.main-hero__pagination',
      type: 'bullets',
      clickable: true,
    },
    speed: mainHeroSliderSpeed,
    autoplay: {
      delay: 3000,
    },
    modules: [Navigation, Pagination, Autoplay],
    on: {
      init: function() {
        const paginationBullets = document.querySelectorAll('.main-hero__pagination .swiper-pagination-bullet');

        paginationBullets.forEach((el) => {
          el.innerHTML = `<span class="main-hero__bar"></span>`
        });
      }
    }
  });
};

export const portfolioSwiper = (className) => {
  const portfolioSlider = new Swiper(className, {
    slidesPerView: 3,
    spaceBetween: fooBar,
    loop: false,
    navigation: {
      nextEl: '.portfolio__slider-nav--btn-next',
      prevEl: '.portfolio__slider-nav--btn-prev',
    },
    modules: [Navigation],
    breakpoints: {
      320: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        allowTouchMove: false,
      },
    }
  });
};

export const testimonialsSwiper = (className) => {
  const testimonialsSwiper = new Swiper(className, {
    slidesPerView: 1,
    spaceBetween: fooBar,
    allowTouchMove: false,
    loop: false,
    fadeEffect: {
      crossFade: true,
    },
    effect: "fade",
    navigation: {
      nextEl: '.testimonials__slider-nav--btn-next',
      prevEl: '.testimonials__slider-nav--btn-prev',
    },
    modules: [Navigation],
    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      1200: {
        allowTouchMove: false,
      },
    }
  });
};

export const relatedProjectsSwiper = (className) => {
  const relatedProjectsSwiper = new Swiper(className, {
    slidesPerView: 3,
    spaceBetween: fooBar,
    loop: false,
    allowTouchMove: false,
    fadeEffect: {
      crossFade: true,
    },
    effect: "fade",
    navigation: {
      nextEl: '.related-projects__slider-nav--btn-next',
      prevEl: '.related-projects__slider-nav--btn-prev',
    },
    modules: [Navigation],
    breakpoints: {
      320: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
        allowTouchMove: false,
      },
    }
  });
};

export const workSwiper = () => {
  const workSwiperThumbs = new Swiper(".work-slider-thumbs", {
    spaceBetween: 20,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 10,
      },
    }
  });
  const workSwiper = new Swiper(".work-slider", {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".work-slider__slider-nav--btn-next",
      prevEl: ".work-slider__slider-nav--btn-prev",
    },
    thumbs: {
      swiper: workSwiperThumbs,
    },
    autoplay: {
      delay: 3000,
    },
    modules: [Thumbs, Navigation, Autoplay],
  });
};

export const historySwiper = () => {
  const historySwiper = new Swiper('.history-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    allowTouchMove: false,
    navigation: {
      nextEl: ".history-slider-nav--btn-next",
      prevEl: ".history-slider-nav--btn-prev",
    },
    modules: [Navigation],
  });

  historySwiper.on('slideChange', function() {

    historyNavBtns.forEach(btn => {
      btn.classList.remove('history-nav__btn--active');
    });

    document.querySelector(`.history-nav__btn[data-index="${historySwiper.realIndex}"]`).classList.add('history-nav__btn--active');
  });
  
  const historyNavBtns = document.querySelectorAll('.history-nav__btn');

  historyNavBtns.forEach((btn, index) => {

    btn.setAttribute('data-index', index);

    btn.addEventListener('click', (evt) => {
      const index = evt.currentTarget.dataset.index;

      historyNavBtns.forEach(btn => {
        btn.classList.remove('history-nav__btn--active');
      });

      evt.currentTarget.classList.add('history-nav__btn--active');

      historySwiper.slideTo(index);
    })
  });

};
