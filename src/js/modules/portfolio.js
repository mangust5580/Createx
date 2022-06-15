export const portfolio = () => {
  const portfolio = document.querySelector(".portfolio");
  const portfolioSlider = document.querySelector(".portfolio--slider");

  if (portfolio && !portfolioSlider) {
    const tabsBtn = document.querySelectorAll(".tabs-nav__btn");
    const tabsParent = document.querySelector(".tabs-nav");
    const portfolioList = document.querySelectorAll(".portfolio-list");
    const loadMore = document.querySelector(".load-more");
    const maxItems = 9;

    function isLoadMoreNeeded(i = 0) {
      const tabsContentItem = portfolioList[i].querySelectorAll(
        ".portfolio-list__item"
      );

      if (tabsContentItem.length <= maxItems) {
        loadMore.style.display = "none";
      } else {
        loadMore.style.display = "inline-flex";

        const arr = Array.from(tabsContentItem);
        const hiddenItems = arr.slice(maxItems, tabsContentItem.length);

        hiddenItems.forEach((item) => {
          item.classList.remove("portfolio-list__item--visible");
        });
      }
    }

    isLoadMoreNeeded();

    tabsParent.addEventListener("click", (event) => {
      const target = event.target;

      if (target && target.classList.contains("tabs-nav__btn")) {
        tabsBtn.forEach((item, i) => {
          if (target == item) {
            isLoadMoreNeeded(i);
          }
        });
      }
    });

    loadMore.addEventListener("click", () => {
      const tabsContentItem = document.querySelectorAll(
        ".portfolio-list__item"
      );

      tabsContentItem.forEach((item) => {
        item.classList.add("portfolio-list__item--visible");
      });

      loadMore.style.display = "none";
    });
  }
};
