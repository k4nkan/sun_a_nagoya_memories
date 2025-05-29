import { getImages } from "../data/imgData.js";
import { getLayouts } from "../data/layoutData.js";
import { attachClickAndDrag } from "./clickImg.js";

export function displayImg(day) {
  const container = document.getElementById("image-container");
  container.innerHTML = "";

  // 画像の取得
  const images = getImages();
  const imageLength = images.length;

  // 画像が一枚もない時の処理
  if (!Array.isArray(images) || imageLength === 0) {
    console.log("no image");
    return;
  }

  // レイアウトの取得
  const layouts = getLayouts(day, imageLength);

  images.forEach((img, index) => {
    // class が photo の imgタグを作成
    const imgElem = document.createElement("img");
    imgElem.src = img["image-url"];
    imgElem.alt = `Photo ${img.id}`;
    imgElem.className = "photo";

    // class が messge の pタグを作成
    const messageElem = document.createElement("p");
    messageElem.textContent = img["photo-message"];
    messageElem.className = "message";

    // class が img-container の divタグを作成
    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";

    // class が frame の divタグを作成
    const frame = document.createElement("div");
    frame.className = "frame";

    // 場所の決定
    const pos = layouts[index % layouts.length];
    frame.style.top = `calc(50% + ${pos.top}px)`;
    frame.style.left = `calc(50% + ${pos.left}px)`;
    frame.style.zIndex = `${pos.z}`;
    frame.style.transform = `translate(-50%,-50%) ${pos.transform}`;

    imgContainer.appendChild(imgElem);
    frame.appendChild(imgContainer);
    frame.appendChild(messageElem);
    container.appendChild(frame);

    attachClickAndDrag(frame);
  });
}
