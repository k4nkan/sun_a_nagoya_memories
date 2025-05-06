import { getImages } from "../data/imgData.js";

export function displayImages() {
  const container = document.getElementById("image-container");
  container.innerHTML = "";

  const images = getImages();

  const layouts = [
    { top: 50, left: 50, z: 10, transform: "rotate(0deg)" },
    { top: 35, left: 35, z: 9, transform: "rotate(-6deg)" },
    { top: 35, left: 65, z: 8, transform: "rotate(4deg)" },
    { top: 65, left: 35, z: 7, transform: "rotate(5deg)" },
    { top: 65, left: 65, z: 6, transform: "rotate(-5deg)" },
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
    frame.style.zIndex = `${pos.z}`;
    frame.style.transform = `translate(-50%,-50%) ${pos.transform}`;

    imgContainer.appendChild(imgElem);
    frame.appendChild(imgContainer);
    container.appendChild(frame);
  });
}
