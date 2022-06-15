export const tabs = () => {
  if (document.querySelector(".tabs")) {
    const tabs = document.querySelector(".tabs");
    const tabsBtns = tabs.querySelectorAll(".tabs-nav__btn");
    const tabsContent = tabs.querySelectorAll(".tabs__content");
    const tabsParent = tabs.querySelectorAll(".tabs-nav");

    function hideTabContent() {
      tabsContent.forEach((item) => {
        item.classList.add("tabs__content--hide");
        item.classList.remove("tabs__content--show");
      });

      tabsBtns.forEach((item) => {
        item.classList.remove("tabs-nav__btn--active");
      });
    }

    function showTabContent(i = 0) {
      tabsContent[i].classList.add("tabs__content--show", "fade");
      tabsContent[i].classList.remove("tabs__content--hide");
      tabsBtns[i].classList.add("tabs-nav__btn--active");
    }

    hideTabContent();
    showTabContent();

    tabsParent.forEach((item) => {
      item.addEventListener("click", (event) => {
        const target = event.target;

        if (target && target.classList.contains("tabs-nav__btn")) {
          tabsBtns.forEach((item, i) => {
            if (target == item) {
              hideTabContent();
              showTabContent(i);
            }
          });
        }
      });
    });
  }
};
