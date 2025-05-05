document.querySelector(".day").addEventListener("wheel", (e) => {
  e.preventDefault();
  e.currentTarget.scrollLeft += e.deltaY;
});
