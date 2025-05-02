import { getImages } from "../data/imgData.js";

export function displayImages() {
  const container = document.getElementById("image-container");
  container.innerHTML = "";

  const images = getImages();
  images.forEach((img) => {
    // class が photo の imgタグを作成
    const imgElem = document.createElement("img");
    imgElem.src = img["image-url"];
    imgElem.alt = `Photo ${img.id}`;
    imgElem.className = "photo";

    // class が img-container の divタグを作成
    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";

    // class が frame の divタグを作成
    const frame = document.createElement("div");
    frame.className = "frame";

    imgContainer.appendChild(imgElem);
    frame.appendChild(imgContainer);
    container.appendChild(frame);
  });
}
