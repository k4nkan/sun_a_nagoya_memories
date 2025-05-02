import { fetchImgData } from "./api/fetchImgData.js";
import { displayImages } from "./ui/displayImg.js";

document.addEventListener("DOMContentLoaded", async () => {
  await fetchImgData();
  displayImages();
});
