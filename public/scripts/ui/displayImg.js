import { getImages } from "../data/imgData.js";

export function displayImages() {
  const container = document.getElementById("image-container");
  container.innerHTML = "";

  const images = getImages();
  images.forEach((img) => {
    const imgElem = document.createElement("img");
    imgElem.src = img["image-url"];
    imgElem.alt = `Photo ${img.id}`;
    imgElem.className = "photo";
    container.appendChild(imgElem);
  });
}
