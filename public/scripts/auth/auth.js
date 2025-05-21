import loading from "../ui/loading.js";
import { API_BASE_URL } from "../data/urlData.js";
import { displayError } from "../utils/error.js";

export async function login(password) {
  const authImg = document.getElementById("auth-img");

  try {
    // ローディングの表示
    loading.showLoading();

    const res = await fetch(`${API_BASE_URL}/api/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("token", data.token);
      // 認証成功時に画像切り替え
      if (authImg) {
        authImg.src = "img/unlock.webp";
        authImg.classList.add("unlocked");
      }
      // 切り替えアニメーション終了後に画面遷移
      authImg.addEventListener(
        "transitionend",
        () => {
          setTimeout(() => {
            window.location.href = "/home.html";
          }, 500);
        },
        { once: true }
      );
    } else {
      const errData = await res.json();
      displayError(errData, false);

      // クラスの管理と失敗時用のアニメーション
      if (authImg) {
        authImg.classList.remove("unlocked");
        authImg.classList.add("shake");
      }
      authImg.addEventListener(
        "animationend",
        () => {
          authImg.classList.remove("shake");
        },
        { once: true }
      );
    }
  } catch (err) {
    console.error("Server Error :", err);
    alert("サーバーとの通信に失敗しました");
  } finally {
    loading.hideLoading();
  }
}

export function checkAuth() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/index.html";
  }
}

// textareaの入力監視
const passwordInput = document.getElementById("passwordInput");
if (passwordInput) {
  passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const password = e.target.value.trim();
      if (password) login(password);
    }
  });
}
