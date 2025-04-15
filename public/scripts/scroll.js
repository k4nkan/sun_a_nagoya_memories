const container = document.querySelector(".main-container");

container.addEventListener(
  "wheel",
  (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
  },
  { passive: false }
);
