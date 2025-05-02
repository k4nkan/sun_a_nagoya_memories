import { fetchImgData } from "./api/fetchImgData.js";
import { displayImages } from "./ui/displayImg.js";
import loading from "./ui/loading.js";

document.addEventListener("DOMContentLoaded", async () => {
  loading.showLoading();
  await fetchImgData();
  displayImages();
  loading.hideLoading();
});
