import loading from "../ui/loading.js";
import { fetchImgData } from "../api/fetchImgData.js";
import { displayImg } from "../ui/displayImg.js";
import { API_BASE_URL } from "../data/urlData.js";

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
    const response = await fetch(`${API_BASE_URL}/api/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

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
      fileInput.value = null;
      commentInput.value = "";

      closeButton.click();
    } else {
      const errorData = await response.json();
      console.error("upload failed:", errorData.error);
      alert(`アップロード失敗: ${errorData.error}`);
    }
  } catch (err) {
    console.error("Error upload:", err);
    alert("アップロードエラー");
  } finally {
    loading.hideLoading();
  }
});
