import { fetchImgData } from "./api/fetchImgData.js";
import { displayImages } from "./ui/displayImg.js";
import loading from "./ui/loading.js";

// 現在選択されている日付の取得
function getSelectDay() {
  const selectElem = document.getElementById("day-selector");
  return selectElem?.value || "day1";
}

// 画像の表示
async function updateImages() {
  const day = getSelectDay();
  loading.showLoading();
  try {
    await fetchImgData(day);
    displayImages(day);
  } catch (err) {
    console.error("表示エラー", err);
  } finally {
    loading.hideLoading();
  }
}

document.addEventListener("DOMContentLoaded", updateImages);

document
  .getElementById("day-selector")
  ?.addEventListener("change", updateImages);
