const openButton = document.getElementById("openForm");
const closeButton = document.getElementById("closeForm");
const formContainer = document.querySelector(".upload-form-container");

function closeForm() {
  formContainer.style.display = "none";
}

function openForm() {
  formContainer.style.display = "flex";
}

openButton?.addEventListener("click", (e) => {
  e.preventDefault();
  openForm();
});

closeButton?.addEventListener("click", (e) => {
  e.preventDefault();
  closeForm();
});
