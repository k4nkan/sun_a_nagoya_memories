const token = localStorage.getItem("token");
const day = "day2";

async function getImgData() {
  if (!token) {
    alert("認証失敗");
    return;
  }
  try {
    //const response = await fetch(`http://localhost:3000/api?day=${day}`, {
    const response = await fetch(
      `https://nagoya-sun-a-memories-production.up.railway.app/api?day=${day}`,
      {
        method: "GET", // GETメソッドを指定
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log("ok:", data);
    } else {
      console.log("error:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("error during fetch:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  getImgData();
});
