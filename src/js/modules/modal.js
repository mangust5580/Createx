export const modal = () => {
  const modal = document.querySelectorAll(".modal");
  const modalTrigger = document.querySelectorAll("[data-modal-trigger]");
  const modalCloseBtn = document.querySelectorAll("[data-modal-close]");

  function openModal(evt) {
    let path = evt.currentTarget.getAttribute("data-modal-path");
    document.querySelector(`[data-modal="${path}"]`).classList.add("modal--show");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
  }

  function closeModal() {
    modal.forEach((el) => {
      el.classList.remove("modal--show");
    });
    document.body.style.overflow = "visible";
  }

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  modalCloseBtn.forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });

  modal.forEach((el, i) => {
    el.addEventListener("click", (evt) => {
      if (evt.target == modal[i]) {
        closeModal();
      }
    });
  });

  window.addEventListener("keydown", (evt) => {
    modal.forEach((el) => {
      el.classList.contains("modal--show");
    })

    if (evt.code === "Escape" && modal) {
      closeModal();
    }
  });
};
