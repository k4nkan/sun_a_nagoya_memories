const fileInput = document.getElementById("fileInput");
const fileLabel = document.querySelector(".custom-file-label");

fileInput.addEventListener("change", function () {
  if (fileInput.files.length > 0) {
    const fileName = fileInput.files[0].name;
    fileLabel.textContent = fileName;
  } else {
    fileLabel.textContent = "Add Photo";
  }
});
