import { fetchImgData } from "./api/fetchImgData.js";
import { displayImages } from "./ui/displayImg.js";
import loading from "./ui/loading.js";

const day = "day1";

document.addEventListener("DOMContentLoaded", async () => {
  loading.showLoading();
  try {
    await fetchImgData();
    displayImages(day);
  } catch (err) {
    console.error("表示エラー:", err);
  } finally {
    loading.hideLoading();
  }
});
