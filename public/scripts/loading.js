window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  if (loading) {
    loading.style.opacity = "0";
    loading.style.pointerEvents = "none";
    setTimeout(() => {
      loading.style.display = "none";
    }, 300);
  }
});
