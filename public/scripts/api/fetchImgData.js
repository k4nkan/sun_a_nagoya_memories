import { setImages } from "../data/imgData.js";
import { API_BASE_URL } from "../data/urlData.js";

const token = localStorage.getItem("token");

export async function fetchImgData(day) {
  if (!token) {
    console.log("error : 認証失敗");
    return;
  }
  try {
    const response = await fetch(`${API_BASE_URL}/api/data?day=${day}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log("ok:", data);
      setImages(data);
    } else {
      console.log("error:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("error during fetch:", error);
  }
}
