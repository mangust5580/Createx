export const dropdown = () => {
  const dropdownBlock = document.querySelectorAll(".dropdown-block");

  dropdownBlock.forEach((dropdownWrapper) => {
    const dropdownBtn = dropdownWrapper.querySelector(".dropdown-block__dropdown");
    const dropdownList = dropdownWrapper.querySelector(".dropdown-block__list");
    const dropdownItem = dropdownList.querySelectorAll(".dropdown-block__item");
    const dropdownInput = dropdownWrapper.querySelector(".dropdown-block__input-select");

    dropdownBtn.addEventListener("click", (evt) => {
      dropdownList.classList.toggle("dropdown-block__list--show");
      evt.target.classList.add("dropdown-block__dropdown--active");
    });

    dropdownItem.forEach((item) => {
      item.addEventListener("click", (evt) => {
        evt.stopPropagation();
        dropdownBtn.innerText = evt.target.innerText;
        dropdownBtn.focus();
        dropdownInput.value = evt.target.dataset.dropdownValue;
        dropdownList.classList.remove("dropdown-block__list--show");
      });
    });

    document.addEventListener("click", (evt) => {
      if (evt.target !== dropdownBtn) {
        dropdownList.classList.remove("dropdown-block__list--show");
        dropdownBtn.classList.remove("dropdown-block__dropdown--active");
      }
    });

    document.addEventListener("keydown", (evt) => {
      if (evt.code === "Escape" || evt.code === "Tab") {
        dropdownList.classList.remove("dropdown-block__list--show");
      }
    });
  });
};
