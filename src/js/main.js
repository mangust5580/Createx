import {
  portfolioSwiper,
  testimonialsSwiper,
  relatedProjectsSwiper,
  workSwiper,
  historySwiper,
  mainHeroSwiper,
} from "./modules/sliders.js";
import { progress } from "./modules/progress.js";
import { accordion } from "./modules/accordion.js";
import { portfolio } from "./modules/portfolio.js";
import { tabs } from "./modules/tabs.js";
import { video } from "./modules/video.js";
// import { toTop } from "./modules/toTop.js";
import { dropdown } from "./modules/dropdown.js";
import { modal } from "./modules/modal.js";
import { nav } from "./modules/nav.js";

window.addEventListener("DOMContentLoaded", () => {
  // toTop();
  nav();
  mainHeroSwiper(".main-hero__slider");
  portfolioSwiper(".portfolio__slider");
  testimonialsSwiper(".testimonials__slider");
  relatedProjectsSwiper(".related-projects__slider");
  workSwiper();
  historySwiper();
  video();
  progress();
  accordion();
  portfolio();
  tabs();
  dropdown();
  modal();
});
