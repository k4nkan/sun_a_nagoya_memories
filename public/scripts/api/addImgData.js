import loading from "../ui/loading.js";
import { fetchImgData } from "../api/fetchImgData.js";
import { displayImg } from "../ui/displayImg.js";
import { API_BASE_URL } from "../data/urlData.js";
import { displayError } from "../utils/error.js";

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
    const res = await fetch(`${API_BASE_URL}/api/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (res.ok) {
      const result = await res.json();
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
      const errData = await res.json();
      displayError(errData, false);
    }
  } catch (err) {
    console.error("Server Error :", err);
    alert("サーバーとの通信に失敗しました");
  } finally {
    loading.hideLoading();
  }
});
