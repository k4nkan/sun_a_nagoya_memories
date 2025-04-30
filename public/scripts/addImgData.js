import loading from "./loading.js";

const fileInput = document.getElementById("fileInput");
const customButton = document.getElementById("customFileButton");

// aタグの動作を防ぎ、inputタグにおけるclickを代わりに実行
customButton.addEventListener("click", function (e) {
  e.preventDefault();
  fileInput.click();
});

fileInput.addEventListener("change", async function () {
  loading.showLoading();

  if (fileInput.files && fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const day = "day1";

    const formData = new FormData();
    formData.append("file", file);
    formData.append("day", day);

    try {
      const response = await fetch(
        "https://nagoya-sun-a-memories-production.up.railway.app/api",
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
      } else {
        console.error("upload failed:", response.statusText);
      }
    } catch (err) {
      console.error("Error upload:", err);
    } finally {
      loading.hideLoading();
    }
  }
});
