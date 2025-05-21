import { setImages } from "../data/imgData.js";
import { API_BASE_URL } from "../data/urlData.js";
import { displayError } from "../utils/error.js";

const token = localStorage.getItem("token");

export async function fetchImgData(day) {
  if (!token) {
    console.log("error : 認証失敗");
    return;
  }
  try {
    const res = await fetch(`${API_BASE_URL}/api/data?day=${day}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const data = await res.json();
      console.log("ok:", data);
      setImages(data);
    } else {
      const errData = await res.json();
      displayError(errData, false);
    }
  } catch (err) {
    console.error("Server Error :", err);
    alert("サーバーとの通信に失敗しました");
  }
}
