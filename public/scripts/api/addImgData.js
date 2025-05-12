import loading from "../ui/loading.js";
import { fetchImgData } from "../api/fetchImgData.js";
import { displayImg } from "../ui/displayImg.js";

// フォーム内の情報
const fileInput = document.getElementById("fileInput");
const commentInput = document.getElementById("photo-comment");
const daySelect = document.getElementById("day-selector-in-form");

// フォーム内のボタン
const submitButton = document.getElementById("submitForm");
const closeButton = document.getElementById("closeForm");

const token = localStorage.getItem("token");

submitButton.addEventListener("click", async function (e) {
  e.preventDefault();

  // ファイルがアップロードされていない場合
  if (!fileInput.files || fileInput.files.length === 0) {
    alert("ファイルを選択してください");
    return;
  }

  const file = fileInput.files[0];
  const day = daySelect?.value || "day1";
  const comment = commentInput?.value || "";

  // body に情報を添付
  const formData = new FormData();
  formData.append("file", file);
  formData.append("day", day);
  formData.append("message", comment);

  loading.showLoading();

  try {
    const response = await fetch(
      // テスト環境URL
      "http://localhost:3000/api",
      // 本番環境URL
      // "https://nagoya-sun-a-memories-production.up.railway.app/api",
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

      await fetchImgData(day);
      displayImg(day);

      await new Promise((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(resolve);
        });
      });

      // フォームのリセット
      fileInput.value = "";
      commentInput.value = "";

      closeButton.click();
    } else {
      console.error("upload failed:", response.statusText);
      alert("アップロード失敗");
    }
  } catch (err) {
    console.error("Error upload:", err);
    alert("アップロードエラー");
  } finally {
    loading.hideLoading();
  }
});
