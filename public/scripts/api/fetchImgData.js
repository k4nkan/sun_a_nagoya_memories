import { setImages } from "../data/imgData.js";

const token = localStorage.getItem("token");

export async function fetchImgData(day) {
  if (!token) {
    console.log("error : 認証失敗");
    return;
  }
  try {
    const response = await fetch(
      // テスト環境におけるURL
      `http://localhost:3000/api?day=${day}`,
      // 本番環境におけるURL
      // `https://nagoya-sun-a-memories-production.up.railway.app/api?day=${day}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
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
