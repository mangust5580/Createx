export const accordion = () => {
  const details = document.querySelectorAll("details");

  function toggleOpenOneOnly() {
    if (this.open) {
      details.forEach((el) => {
        if (el != this && el.open) el.open = !open;
      });
    }
  }

  details.forEach((el) => {
    el.addEventListener("toggle", toggleOpenOneOnly);
  });
};
