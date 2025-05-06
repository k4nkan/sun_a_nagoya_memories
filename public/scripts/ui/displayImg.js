import { getImages } from "../data/imgData.js";

export function displayImages() {
  const container = document.getElementById("image-container");
  container.innerHTML = "";

  const images = getImages();

  const layouts = [
    { top: 10, left: 10 },
    { top: 20, left: 20 },
    { top: 30, left: 30 },
    { top: 40, left: 40 },
    { top: 50, left: 50 },
    { top: 60, left: 60 },
  ];

  images.forEach((img, index) => {
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

    const pos = layouts[index % layouts.length];
    frame.style.top = `${pos.top}%`;
    frame.style.left = `${pos.left}%`;

    imgContainer.appendChild(imgElem);
    frame.appendChild(imgContainer);
    container.appendChild(frame);
  });
}
