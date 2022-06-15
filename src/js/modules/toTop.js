import SmoothScroll from 'smooth-scroll';

export const toTop = (y = 0) => {
  const scroll = new SmoothScroll('.to-top');
  const toTop = document.querySelector('.to-top');
  let heroHeight = document.querySelector('[data-hero]').offsetHeight;

  const isVisibleToTop = (y = 0) => {
    if (y > heroHeight) {
      toTop.classList.add('to-top--active');
    } else {
      toTop.classList.remove('to-top--active');
    }
  }

  isVisibleToTop(window.scrollY);

  window.addEventListener('scroll', () => {
    let y = window.scrollY;

    isVisibleToTop(y);
  });
};