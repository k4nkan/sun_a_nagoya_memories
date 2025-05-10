import loading from "../ui/loading.js";
import { fetchImgData } from "./fetchImgData.js";
import { displayImages } from "../ui/displayImg.js";

const fileInput = document.getElementById("fileInput");
const customButton = document.getElementById("customFileButton");
const token = localStorage.getItem("token");

// aタグの動作を防ぎ、inputタグにおけるclickを代わりに実行
customButton.addEventListener("click", function (e) {
  e.preventDefault();
  fileInput.click();
});

// 現在選択されている日付を取得
function getSelectDay() {
  const selectElem = document.querySelector("select");
  return selectElem?.value || "day1";
}

fileInput.addEventListener("change", async function () {
  loading.showLoading();

  if (fileInput.files && fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const day = getSelectDay();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("day", day);

    try {
      const response = await fetch(
        // テスト環境におけるURL
        `http://localhost:3000/api`,
        // 本番環境におけるURL
        //"https://nagoya-sun-a-memories-production.up.railway.app/api",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      if (response.ok) {
        const result = await response.json();
        console.log("upload ok:", result);
        await fetchImgData();
        displayImages();

        // 画像が表示されるまで待つ
        await new Promise((resolve) => {
          requestAnimationFrame(() => {
            requestAnimationFrame(resolve);
          });
        });

        // loading の終了
        loading.hideLoading();
      } else {
        console.error("upload failed:", response.statusText);
        loading.hideLoading();
      }
    } catch (err) {
      console.error("Error upload:", err);
      loading.hideLoading();
    } finally {
      loading.hideLoading();
    }
  } else {
    loading.hideLoading();
  }
});
